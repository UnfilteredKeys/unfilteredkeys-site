// Read matching references only at submission and only after measurement consent.
// No SDK, new cookies, persistent identifier storage, or browser conversion events.
export function measurementOptOut(navigatorValue: { globalPrivacyControl?: boolean; doNotTrack?: string | null }) {
  return navigatorValue.globalPrivacyControl === true || navigatorValue.doNotTrack === "1";
}

const reference = (value: unknown) => typeof value === "string" && value.length <= 2048
  && /^[A-Za-z0-9._~+\/=\-]+$/.test(value) ? value : undefined;

export function submissionAttribution(consent: boolean, optedOut: boolean,
  readUrl: () => string, readCookies: () => string): Record<string, string> {
  if (!consent || optedOut) return {};
  const result: Record<string, string> = {};
  try {
    const value = reference(new URL(readUrl()).searchParams.get("oppref"));
    if (value) result.openaiOppref = value;
  } catch { /* Optional matching must never block a form submission. */ }
  try {
    const cookie = readCookies().split(";").map(part => part.trim())
      .find(part => part.startsWith("__obref="));
    const value = reference(cookie?.slice("__obref=".length));
    if (value) result.openaiObref = value;
  } catch { /* Cookies may be blocked; the lead still submits. */ }
  return result;
}
