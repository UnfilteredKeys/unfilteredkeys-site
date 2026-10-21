import test from 'node:test';
import assert from 'node:assert/strict';
import { settings, conversion, deliver, endpoint } from './conversions.mjs';
const env = { MORTGAGE_REVIEW_FORM_ID: 'form1', CONVERSIONS_ID_SECRET: 'test-secret' };
const now = Date.now();
const payload = { form_id: 'form1', id: 'submission1', created_at: new Date(now).toISOString(), data: { measurementConsent: 'yes', email: 'private@example.com', notes: 'private finances' } };
test('disabled by default and live requires explicit approval', () => {
  assert.equal(settings({}).mode, 'off');
  assert.throws(() => settings({ OPENAI_CONVERSIONS_MODE: 'live' }));
});
test('validation uses Netlify credentials without any Supabase configuration', () => {
  const configured = { OPENAI_CONVERSIONS_MODE: 'validate', OPENAI_CONVERSIONS_API_KEY: 'synthetic', CONVERSIONS_ID_SECRET: 'x'.repeat(32), NETLIFY_DB_URL: 'postgresql://test:test@localhost:5432/test', MORTGAGE_REVIEW_FORM_ID: 'form1' };
  assert.equal(settings(configured).mode, 'validate');
  assert.throws(() => settings({ ...configured, NETLIFY_DB_URL: 'https://example.com' }));
  assert.throws(() => settings({ ...configured, OPENAI_CONVERSIONS_MODE: 'live', OPENAI_CONVERSIONS_LIVE_APPROVED: 'true' }));
});
test('off mode returns before opening database or parsing submissions', async () => {
  const previous = process.env.OPENAI_CONVERSIONS_MODE;
  process.env.OPENAI_CONVERSIONS_MODE = 'off';
  try {
    const { handler } = await import('../netlify/functions/submission-created.mjs');
    const { default: worker } = await import('../netlify/functions/conversion-retry.mjs');
    assert.equal((await handler({ body: 'invalid json' })).statusCode, 204);
    assert.equal((await worker()).status, 204);
  } finally {
    if (previous === undefined) delete process.env.OPENAI_CONVERSIONS_MODE;
    else process.env.OPENAI_CONVERSIONS_MODE = previous;
  }
});
test('only matching verified form and separate measurement choice are eligible', () => {
  assert.equal(conversion({ ...payload, form_id: 'other' }, env), null);
  assert.equal(conversion({ ...payload, data: { marketingConsent: 'yes' } }, env), null);
});
test('stable ID, original time, different submissions differ, no PII', () => {
  const event = conversion(payload, env, now);
  assert.deepEqual(event, conversion(payload, env, now + 10000));
  assert.equal(event.timestamp_ms, now);
  assert.notEqual(event.id, conversion({ ...payload, id: 'submission2' }, env, now).id);
  assert.deepEqual(Object.keys(event).sort(), ['action_source','data','id','source_url','timestamp_ms','type']);
  assert.ok(!JSON.stringify(event).includes('private'));
  assert.throws(() => conversion({ ...payload, created_at: 'invalid' }, env));
});
test('validation and live send exact allowlisted body with server bearer', async () => {
  for (const mode of ['validate','live']) {
    const event = conversion(payload, env, now);
    const result = await deliver({ mode, env: { OPENAI_CONVERSIONS_API_KEY: 'test' } }, event, async (url, options) => {
      assert.equal(url, endpoint);
      assert.equal(options.headers.Authorization, 'Bearer test');
      assert.deepEqual(JSON.parse(options.body), { validate_only: mode === 'validate', events: [event] });
      return new Response(null, { status: 200 });
    });
    assert.equal(result.outcome, 'sent');
  }
});
test('transient errors retry, permanent errors stop, Retry-After respected', async () => {
  const config = { mode: 'validate', env: {} }, event = conversion(payload, env, now);
  for (const status of [408,429,500,503]) {
    const result = await deliver(config, event, async () => new Response(null, { status, headers: { 'Retry-After': '600' } }));
    assert.deepEqual(result, { outcome: 'retry', delay: 600 });
  }
  for (const status of [400,401,403]) assert.equal((await deliver(config, event, async () => new Response(null, { status }))).outcome, 'rejected');
  assert.equal((await deliver(config, event, async () => { throw new Error('private'); })).outcome, 'retry');
  assert.equal((await deliver(config, { ...event, timestamp_ms: now - 7 * 86400000 }, undefined, now)).outcome, 'expired');
});
