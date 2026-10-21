import { randomUUID } from 'node:crypto';
import { endpoint } from './conversions.mjs';

export function previewValidationEnabled(env) {
  return env.CONTEXT === 'deploy-preview' && env.HEAD === 'openai-conversions-validation';
}

export async function probe(env, fetcher = fetch) {
  if (!env.OPENAI_CONVERSIONS_API_KEY) throw new Error('validation_key_missing');
  const response = await fetcher(endpoint, {
    method: 'POST', signal: AbortSignal.timeout(10000),
    headers: { Authorization: 'Bearer ' + env.OPENAI_CONVERSIONS_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ validate_only: true, events: [{
      id: 'validation_' + randomUUID(), type: 'lead_created', timestamp_ms: Date.now(),
      source_url: 'https://shalandasmith.com/mortgage-review', action_source: 'web', data: { type: 'customer_action' },
    }] }),
  });
  // Neither provider body values nor the key can enter logs.
  const text = await response.text();
  let parsed;
  try { parsed = JSON.parse(text); } catch { /* classify only */ }
  return { validate_only: true, http_status: response.status,
    response_format: parsed ? 'json' : text ? 'text' : 'empty',
    response_keys: parsed && typeof parsed === 'object' ? Object.keys(parsed).filter(k => /^[a-z_]{1,40}$/i.test(k)) : [],
  };
}
