import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';
import { runDatabaseCall } from './conversion-store.mjs';
import { drain } from './conversions.mjs';

test('PostgreSQL migration, duplicate enqueue, lease recovery, namespace isolation and retry acknowledgement', async () => {
  const db = new PGlite();
  try {
    await db.exec(await readFile(new URL('../netlify/database/migrations/202610210001_mortgage_conversions.sql', import.meta.url), 'utf8'));
    await db.exec(await readFile(new URL('../netlify/database/migrations/202610220001_attribution_retention.sql', import.meta.url), 'utf8'));
    const client = { connect: async () => {}, end: async () => {}, query: (...args) => db.query(...args) };
    const call = (operation, body) => runDatabaseCall(client, operation, body);
    const event = { id: 'synthetic', type: 'lead_created', timestamp_ms: Date.now(), source_url: 'https://shalandasmith.com/mortgage-review', action_source: 'web', data: { type: 'customer_action' }, oppref: 'synthetic-click', user: { obref: 'synthetic-browser' } };
    for (let i = 0; i < 2; i++) await call('enqueue_mortgage_conversion', { p_mode: 'validate', p_event: event });
    assert.equal((await db.query('select * from mortgage_conversion_outbox')).rows.length, 1);
    const lease = '00000000-0000-4000-8000-000000000001';
    assert.equal((await call('claim_mortgage_conversion', { p_mode: 'live', p_lease: lease })).length, 0);
    assert.equal((await call('claim_mortgage_conversion', { p_mode: 'validate', p_lease: lease })).length, 1);
    assert.equal((await call('claim_mortgage_conversion', { p_mode: 'validate', p_lease: lease })).length, 0);
    // Simulate a crashed worker whose lease has expired.
    await db.exec("update mortgage_conversion_outbox set due_at=now()-interval '1 minute'");
    const config = { mode: 'validate', env: { OPENAI_CONVERSIONS_API_KEY: 'synthetic-key' } };
    const storage = (_config, operation, body) => call(operation, body);
    await drain(config, async () => new Response(null, { status: 503 }), storage);
    let row = (await db.query('select * from mortgage_conversion_outbox')).rows[0];
    assert.equal(row.status, 'retry');
    assert.deepEqual(row.event, event);
    // An old worker must not overwrite the recovered lease/result.
    await call('settle_mortgage_conversion', { p_mode: 'validate', p_id: event.id, p_lease: lease, p_status: 'sent', p_delay: 0 });
    assert.equal((await db.query('select status from mortgage_conversion_outbox')).rows[0].status, 'retry');
    await db.exec("update mortgage_conversion_outbox set due_at=now()-interval '1 minute'");
    let sends = 0;
    await drain(config, async (_url, options) => {
      sends++;
      assert.deepEqual(JSON.parse(options.body), { validate_only: true, events: [event] });
      return Response.json({ accepted_events: 1 });
    }, storage);
    await drain(config, async () => { sends++; throw new Error('should not send again'); }, storage);
    assert.equal(sends, 1);
    row = (await db.query('select * from mortgage_conversion_outbox')).rows[0];
    assert.equal(row.status, 'sent');
    assert.equal(row.attempts, 3);
    assert.equal(row.event.id, event.id);
    assert.equal(row.event.oppref, undefined);
    assert.equal(row.event.user, undefined);
  } finally {
    await db.close();
  }
});

test('storage failures expose no credentials or form content', async () => {
  const client = { connect: async () => { throw new Error('postgres://secret@host/private'); }, end: async () => {} };
  await assert.rejects(runDatabaseCall(client, 'claim_mortgage_conversion', {}), { message: 'storage_failure' });
});
