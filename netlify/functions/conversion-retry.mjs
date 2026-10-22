import { settings, drain } from '../../server/conversions.mjs';

export default async function (_request, context) {
  try {
    const config = settings(process.env, context);
    if (config.mode !== 'off') await drain(config);
    return new Response(null, { status: 204 });
  } catch {
    console.error('{"component":"mortgage_conversion","outcome":"worker_failed"}');
    throw new Error('conversion_worker_failed');
  }
}
export const config = { schedule: '0 * * * *' };
