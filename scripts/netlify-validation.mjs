import { probe, previewValidationEnabled } from '../server/conversion-probe.mjs';

// This branch's approved preview only. No credentials are copied out of Netlify.
if (previewValidationEnabled(process.env)) {
  try {
    const report = await probe(process.env);
    console.info(JSON.stringify({ component: 'conversion_validation', ...report }));
    if (report.http_status < 200 || report.http_status >= 300) process.exitCode = 1;
  } catch {
    console.error('{"component":"conversion_validation","outcome":"failed"}');
    process.exitCode = 1;
  }
}
