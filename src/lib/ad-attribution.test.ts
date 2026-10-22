import { describe, it, expect } from "vitest";
import { measurementOptOut, submissionAttribution } from "./ad-attribution";

describe("consent-controlled attribution", () => {
  it("does not read the URL or cookies before consent, after withdrawal, or with an opt-out", () => {
    const deniedRead = () => { throw new Error("must not read"); };
    expect(submissionAttribution(false, false, deniedRead, deniedRead)).toEqual({});
    expect(submissionAttribution(true, true, deniedRead, deniedRead)).toEqual({});
    expect(submissionAttribution(false, true, deniedRead, deniedRead)).toEqual({});
  });
  it("passes exact decoded click reference and existing browser reference without other data", () => {
    expect(submissionAttribution(true, false,
      () => "https://shalandasmith.com/mortgage-review?oppref=click_ABC%2B123&email=private@example.com",
      () => "other=private; __obref=browser_ABC; session=private")).toEqual({
      openaiOppref: "click_ABC+123", openaiObref: "browser_ABC",
    });
  });
  it("does not fabricate identifiers when absent or use a previous submission's values", () => {
    expect(submissionAttribution(true, false, () => "https://shalandasmith.com/mortgage-review", () => "")).toEqual({});
  });
  it("rejects malformed/oversized references and cookie name lookalikes", () => {
    expect(submissionAttribution(true, false,
      () => "https://shalandasmith.com/mortgage-review?oppref=%20private%40example.com",
      () => "not__obref=private; __obref=bad value")).toEqual({});
    expect(submissionAttribution(true, false,
      () => "https://shalandasmith.com/mortgage-review?oppref=" + "a".repeat(2049), () => "")).toEqual({});
  });
  it("still submits a URL identifier if cookie access is blocked", () => {
    expect(submissionAttribution(true, false,
      () => "https://shalandasmith.com/mortgage-review?oppref=click_123",
      () => { throw new Error("blocked"); })).toEqual({ openaiOppref: "click_123" });
  });
  it("honors Global Privacy Control and Do Not Track", () => {
    expect(measurementOptOut({ globalPrivacyControl: true })).toBe(true);
    expect(measurementOptOut({ doNotTrack: "1" })).toBe(true);
    expect(measurementOptOut({ doNotTrack: "0" })).toBe(false);
  });
});
