import test from 'node:test';
import assert from 'node:assert/strict';
import { probe, previewValidationEnabled } from './conversion-probe.mjs';

test('hosted probe always validates synthetic data and redacts provider values', async () => {
  const report = await probe({ OPENAI_CONVERSIONS_API_KEY: 'synthetic-key' }, async (_url, options) => {
    const body = JSON.parse(options.body);
    assert.equal(body.validate_only, true);
    assert.equal(body.events.length, 1);
    assert.match(body.events[0].id, /^validation_/);
    assert.deepEqual(body.events[0].data, { type: 'customer_action' });
    assert.equal(options.headers.Authorization, 'Bearer synthetic-key');
    return new Response(JSON.stringify({ detail: 'private server echo', accepted: 1 }), { status: 200 });
  });
  assert.deepEqual(report, { validate_only: true, http_status: 200, response_format: 'json', response_keys: ['detail','accepted'] });
  assert.ok(!JSON.stringify(report).includes('private'));
});

test('probe runs only on the approved preview branch', () => {
  assert.equal(previewValidationEnabled({ CONTEXT: 'deploy-preview', HEAD: 'openai-conversions-validation' }), true);
  assert.equal(previewValidationEnabled({ CONTEXT: 'production', HEAD: 'openai-conversions-validation' }), false);
  assert.equal(previewValidationEnabled({ CONTEXT: 'deploy-preview', HEAD: 'other' }), false);
  assert.equal(previewValidationEnabled({}), false);
});
