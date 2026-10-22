import test from 'node:test';
import assert from 'node:assert/strict';
import { settings, conversion, deliver, endpoint } from './conversions.mjs';
const env = { MORTGAGE_REVIEW_FORM_ID: 'form1', CONVERSIONS_ID_SECRET: 'test-secret' };
const now = Date.now();
const payload = { form_id: 'form1', id: 'submission1', created_at: new Date(now).toISOString(), data: { sourceUrl: 'https://shalandasmith.com/mortgage-review', measurementConsent: 'yes', email: 'private@example.com', notes: 'private finances' } };
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
    const { default: handler } = await import('../netlify/functions/submission-created.mjs');
    const { default: worker } = await import('../netlify/functions/conversion-retry.mjs');
    assert.equal((await handler(new Request('https://example.test', { method: 'POST', body: 'invalid json' }))).status, 204);
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
      return Response.json({ accepted_events: 1 });
    });
    assert.equal(result.outcome, 'sent');
  }
});
test('transient errors retry, permanent errors stop, Retry-After respected', async () => {
  const config = { mode: 'validate', env: {} }, event = conversion(payload, env, now);
  for (const status of [408,429,500,503]) {
    const result = await deliver(config, event, async () => new Response(null, { status, headers: { 'Retry-After': '600' } }));
    assert.deepEqual(result, { outcome: 'retry', delay: 600, http_status: status });
  }
  for (const status of [400,401,403]) assert.equal((await deliver(config, event, async () => new Response(null, { status }))).outcome, 'rejected');
  assert.equal((await deliver(config, event, async () => { throw new Error('private'); })).outcome, 'retry');
  assert.equal((await deliver(config, { ...event, timestamp_ms: now - 7 * 86400000 }, undefined, now)).outcome, 'expired');
});

test('source is the actual allowlisted page; missing, foreign, test and bot submissions are excluded', () => {
  const withData = data => ({ ...payload, data: { ...payload.data, ...data } });
  for (const sourceUrl of [undefined, 'https://evil.test/mortgage-review', 'https://shalandasmith.com/other', 'https://user:secret@shalandasmith.com/mortgage-review']) {
    assert.equal(conversion(withData({ sourceUrl }), env, now), null);
  }
  assert.equal(conversion(withData({ testSubmission: 'yes' }), env, now), null);
  assert.equal(conversion(withData({ 'bot-field': 'spam' }), env, now), null);
  assert.equal(conversion(withData({ sourceUrl: payload.data.sourceUrl + '?email=private#private' }), env, now).source_url, payload.data.sourceUrl);
  const preview = { ...env, CONTEXT: 'deploy-preview', SITE_NAME: 'example' };
  const previewPayload = withData({ sourceUrl: 'https://deploy-preview-23--example.netlify.app/mortgage-review' });
  assert.equal(conversion(previewPayload, preview, now).source_url, previewPayload.data.sourceUrl);
  assert.equal(conversion(previewPayload, { ...preview, OPENAI_CONVERSIONS_MODE: 'live' }, now), null);
  assert.equal(conversion(previewPayload, { ...preview, SITE_NAME: 'other' }, now), null);
});

test('live configuration cannot run outside production even with approval flags', () => {
  const configured = { OPENAI_CONVERSIONS_MODE: 'live', OPENAI_CONVERSIONS_API_KEY: 'synthetic', CONVERSIONS_ID_SECRET: 'x'.repeat(32), NETLIFY_DB_URL: 'postgresql://test:test@localhost:5432/test', MORTGAGE_REVIEW_FORM_ID: 'form1', OPENAI_CONVERSIONS_LIVE_APPROVED: 'true', OPENAI_CONVERSIONS_PROVIDER_VERIFIED: 'true' };
  assert.throws(() => settings({ ...configured, CONTEXT: 'deploy-preview' }), /live_requires_production/);
  assert.equal(settings({ ...configured, CONTEXT: 'production' }).mode, 'live');
  assert.equal(settings(configured, { deploy: { context: 'production' } }).mode, 'live');
  assert.throws(() => settings({ ...configured, CONTEXT: 'production' }, { deploy: { context: 'deploy-preview' } }), /live_requires_production/);
});

test('provider error diagnostics retain status and exclude response body and secrets', async () => {
  const { drain } = await import('./conversions.mjs');
  const logs = [], original = console.info;
  console.info = value => logs.push(value);
  try {
    await drain({ mode: 'validate', env: { OPENAI_CONVERSIONS_API_KEY: 'secret-key' } }, async () => new Response('private-provider-body', { status: 401 }), async (_config, operation) => operation === 'claim_mortgage_conversion' ? [{ event: conversion(payload, env, now), attempts: 1 }] : []);
    assert.equal(JSON.parse(logs[0]).http_status, 401);
    assert.equal(JSON.parse(logs[0]).outcome, 'rejected');
    assert.ok(!logs.join('').includes('private'));
    assert.ok(!logs.join('').includes('secret-key'));
  } finally { console.info = original; }
});

test('HTTP success without acknowledgement of exactly one event is not marked sent', async () => {
  const config = { mode: 'validate', env: {} }, event = conversion(payload, env, now);
  for (const acknowledgement of [{ accepted_events: 0 }, {}, { accepted_events: 2 }, { accepted_events: '1' }]) {
    const result = await deliver(config, event, async () => Response.json(acknowledgement));
    assert.equal(result.outcome, 'unverified');
  }
  assert.equal((await deliver(config, event, async () => new Response('invalid json'))).outcome, 'unverified');
});
