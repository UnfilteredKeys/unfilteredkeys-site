import { randomUUID } from 'node:crypto';
import { endpoint } from '../server/conversions.mjs';

// A standalone synthetic probe. Never changes tracking mode or records a real conversion.
const key = process.env.OPENAI_CONVERSIONS_API_KEY;
if (!key) throw new Error('Set OPENAI_CONVERSIONS_API_KEY in a secure server environment');
const event = {
  id: 'validation_' + randomUUID(), type: 'lead_created', timestamp_ms: Date.now(),
  source_url: 'https://shalandasmith.com/mortgage-review', action_source: 'web', data: { type: 'customer_action' },
};
const response = await fetch(endpoint, {
  method: 'POST', signal: AbortSignal.timeout(10000),
  headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
  body: JSON.stringify({ validate_only: true, events: [event] }),
});
// Raw body stays out of logs; inspect securely if provider returns an unfamiliar response.
const body = await response.text();
let parsed;
try { parsed = JSON.parse(body); } catch { /* Empty/non-JSON response needs manual review. */ }
console.info(JSON.stringify({ validate_only: true, http_status: response.status,
  response_format: parsed ? 'json' : body ? 'text' : 'empty',
  response_keys: parsed && typeof parsed === 'object' ? Object.keys(parsed).filter(k => /^[a-z_]{1,40}$/i.test(k)) : [],
}));
if (!response.ok) process.exitCode = 1;
