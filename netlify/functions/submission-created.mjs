import { settings, conversion, rpc, drain } from '../../server/conversions.mjs';

// Reserved Netlify platform event; do not expose through a redirect or call from the browser.
export async function handler(request) {
  try {
    const config = settings();
    if (config.mode === 'off') return { statusCode: 204 };
    const { payload } = JSON.parse(request.body);
    const event = conversion(payload, config.env);
    if (!event) return { statusCode: 204 };
    await rpc(config, 'enqueue_mortgage_conversion', { p_mode: config.mode, p_event: event });
    // Queue is already durable if delivery/acknowledgement fails.
    await drain(config);
    return { statusCode: 204 };
  } catch {
    // Never log request bodies, provider bodies, exception messages, URLs or credentials.
    console.error('{"component":"mortgage_conversion","outcome":"enqueue_failed"}');
    throw new Error('conversion_enqueue_failed');
  }
}
