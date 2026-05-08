import { useState, type FormEvent } from "react";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

/* Tokens */
const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const HERO = "#1a2535";
const WHITE = "#ffffff";
const heading = "'Lora', serif";
const body = "'Outfit', sans-serif";
const COPPER_DARK = "#9a5319";
const BORDER = "#d4cfc8";

const sectionPad: React.CSSProperties = {
  padding: "clamp(56px, 8vw, 96px) clamp(20px, 5vw, 48px)",
};

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: COPPER,
  fontFamily: "'Fira Mono', monospace",
  fontWeight: 600,
  marginBottom: 12,
};

const h2Style: React.CSSProperties = {
  fontFamily: heading,
  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
  color: NAVY,
  fontWeight: 700,
  lineHeight: 1.25,
  marginBottom: 16,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: NAVY,
  fontWeight: 600,
  fontSize: "0.9rem",
  marginBottom: 6,
  fontFamily: body,
};

const inputBase: React.CSSProperties = {
  border: `1.5px solid ${BORDER}`,
  borderRadius: 6,
  padding: "10px 14px",
  fontSize: "1rem",
  width: "100%",
  fontFamily: body,
  color: NAVY,
  background: WHITE,
  outline: "none",
  boxSizing: "border-box",
};

const fieldWrap: React.CSSProperties = { marginBottom: 18 };

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

const SPECIALTIES = [
  "VA Buyers",
  "First-Time Buyers",
  "Relocation",
  "Investors",
  "Luxury",
  "New Construction",
];

const LANGUAGES = ["English", "Spanish", "Other"];

export default function PartnerJoinPage() {
  const meta = seoMeta.partnersJoin;
  const [submitted, setSubmitted] = useState(false);
  const [otherLang, setOtherLang] = useState(false);
  const [hoverSubmit, setHoverSubmit] = useState(false);

  const focusCopper = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = COPPER;
    e.currentTarget.style.boxShadow = `0 0 0 2px ${COPPER}33`;
  };
  const blurCopper = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = BORDER;
    e.currentTarget.style.boxShadow = "none";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });
    } catch {
      /* no-op — Netlify intercepts on production */
    }
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: body, background: WHITE, color: NAVY }}>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        noindex={meta.noindex}
      />

      {/* Section 1 — Hero */}
      <section style={{ ...sectionPad, background: HERO, textAlign: "center" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 16 }}>For Real Estate Agents</div>
          <h1
            style={{
              fontFamily: heading,
              color: WHITE,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Get Your Own Co-Branded Home Buying Page
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              lineHeight: 1.6,
              marginTop: 20,
            }}
          >
            Partner with Keys by Shalanda and give every buyer you work with a
            personalized mortgage resource — branded with both our names.
          </p>
        </div>
      </section>

      {/* Section 2 — Benefits */}
      <section style={{ ...sectionPad, background: IVORY }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              t: "Your Name on the Page",
              b: "Every buyer you refer lands on a page that features you and your brokerage alongside Keys by Shalanda.",
            },
            {
              t: "A Link You Can Share Anywhere",
              b: "Text it, email it, post it. One link does the work — buyers get educated and connected before the first showing.",
            },
            {
              t: "VA Loan Expertise Behind You",
              b: "We close VA loans in 21 days. Your buyers get answers fast and you get a lender who won't fumble the file.",
            },
          ].map((c) => (
            <div
              key={c.t}
              style={{
                background: WHITE,
                color: NAVY,
                borderTop: `3px solid ${COPPER}`,
                padding: 28,
                borderRadius: 4,
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: heading,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: 12,
                  color: NAVY,
                }}
              >
                {c.t}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: NAVY }}>{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Form */}
      <section style={{ ...sectionPad, background: WHITE }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={eyebrow}>Partner Application</div>
            <h2 style={h2Style}>Tell us about yourself.</h2>
            <p style={{ color: NAVY, fontSize: "1rem", lineHeight: 1.6 }}>
              Fill out the form below and we'll build your page within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                color: NAVY,
                background: IVORY,
                border: `1.5px solid ${COPPER}`,
                borderRadius: 8,
                padding: 28,
                textAlign: "center",
                fontSize: "1.05rem",
                lineHeight: 1.6,
              }}
            >
              Thanks! We'll have your page ready within 48 hours. Watch for an
              email from shalanda@securechoicelending.com.
            </div>
          ) : (
            <form
              name="partner-intake"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="partner-intake" />
              <p style={{ display: "none" }}>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <Field label="First Name">
                  <input
                    style={inputBase}
                    name="firstName"
                    required
                    onFocus={focusCopper}
                    onBlur={blurCopper}
                  />
                </Field>
                <Field label="Last Name">
                  <input
                    style={inputBase}
                    name="lastName"
                    required
                    onFocus={focusCopper}
                    onBlur={blurCopper}
                  />
                </Field>
              </div>

              <Field label="Brokerage Name">
                <input
                  style={inputBase}
                  name="brokerage"
                  required
                  onFocus={focusCopper}
                  onBlur={blurCopper}
                />
              </Field>

              <Field label="License Number">
                <input
                  style={inputBase}
                  name="licenseNumber"
                  placeholder="Optional"
                  onFocus={focusCopper}
                  onBlur={blurCopper}
                />
              </Field>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <Field label="Phone">
                  <input
                    style={inputBase}
                    name="phone"
                    type="tel"
                    required
                    onFocus={focusCopper}
                    onBlur={blurCopper}
                  />
                </Field>
                <Field label="Email">
                  <input
                    style={inputBase}
                    name="email"
                    type="email"
                    required
                    onFocus={focusCopper}
                    onBlur={blurCopper}
                  />
                </Field>
              </div>

              <Field label="Website">
                <input
                  style={inputBase}
                  name="website"
                  placeholder="https://"
                  onFocus={focusCopper}
                  onBlur={blurCopper}
                />
              </Field>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <Field label="Instagram">
                  <input
                    style={inputBase}
                    name="instagram"
                    placeholder="@handle"
                    onFocus={focusCopper}
                    onBlur={blurCopper}
                  />
                </Field>
                <Field label="Facebook">
                  <input
                    style={inputBase}
                    name="facebook"
                    placeholder="Profile URL"
                    onFocus={focusCopper}
                    onBlur={blurCopper}
                  />
                </Field>
              </div>

              <Field label="LinkedIn">
                <input
                  style={inputBase}
                  name="linkedin"
                  placeholder="Profile URL"
                  onFocus={focusCopper}
                  onBlur={blurCopper}
                />
              </Field>

              <Field label="Primary Cities Served">
                <input
                  style={inputBase}
                  name="cities"
                  placeholder="e.g. Killeen, Temple, Copperas Cove"
                  required
                  onFocus={focusCopper}
                  onBlur={blurCopper}
                />
              </Field>

              <div style={fieldWrap}>
                <label style={labelStyle}>Buyer Specialties</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px" }}>
                  {SPECIALTIES.map((s) => (
                    <label
                      key={s}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        color: NAVY,
                        fontSize: "0.95rem",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="specialties"
                        value={s}
                        style={{ accentColor: COPPER }}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <div style={fieldWrap}>
                <label style={labelStyle}>Languages Spoken</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px" }}>
                  {LANGUAGES.map((s) => (
                    <label
                      key={s}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        color: NAVY,
                        fontSize: "0.95rem",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="languages"
                        value={s}
                        style={{ accentColor: COPPER }}
                        onChange={(e) => {
                          if (s === "Other") setOtherLang(e.currentTarget.checked);
                        }}
                      />
                      {s}
                    </label>
                  ))}
                </div>
                {otherLang && (
                  <input
                    style={{ ...inputBase, marginTop: 10 }}
                    name="languagesOther"
                    placeholder="Please specify"
                    onFocus={focusCopper}
                    onBlur={blurCopper}
                  />
                )}
              </div>

              <div style={fieldWrap}>
                <label style={labelStyle}>Headshot Photo</label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    border: `2px dashed ${COPPER}`,
                    borderRadius: 6,
                    padding: "18px 14px",
                    color: COPPER,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    background: IVORY,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <span>Upload Headshot</span>
                  <input
                    type="file"
                    name="headshot"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </label>
              </div>

              <Field label="Anything else you want buyers to know about working with you?">
                <textarea
                  style={{ ...inputBase, resize: "vertical", fontFamily: body }}
                  name="bio"
                  rows={4}
                  placeholder="Optional — this may appear on your partner page."
                  onFocus={focusCopper}
                  onBlur={blurCopper}
                />
              </Field>

              <button
                type="submit"
                onMouseEnter={() => setHoverSubmit(true)}
                onMouseLeave={() => setHoverSubmit(false)}
                style={{
                  width: "100%",
                  background: hoverSubmit ? COPPER_DARK : COPPER,
                  color: WHITE,
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: 14,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: body,
                  marginTop: 8,
                  transition: "background 0.15s ease",
                }}
              >
                Submit My Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Section 4 — Questions */}
      <section style={{ ...sectionPad, background: HERO, textAlign: "center" }}>
        <h2
          style={{
            fontFamily: heading,
            color: WHITE,
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          Questions?
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 48,
            color: WHITE,
          }}
        >
          <div>
            <div style={{ ...eyebrow, color: COPPER, marginBottom: 8 }}>Email</div>
            <a
              href="mailto:shalanda@securechoicelending.com"
              style={{ color: WHITE, fontSize: "1.05rem", textDecoration: "none" }}
            >
              shalanda@securechoicelending.com
            </a>
          </div>
          <div>
            <div style={{ ...eyebrow, color: COPPER, marginBottom: 8 }}>Call or Text</div>
            <a
              href="tel:2549359331"
              style={{ color: WHITE, fontSize: "1.05rem", textDecoration: "none" }}
            >
              254-935-9331
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 — Compliance */}
      <section
        style={{
          background: IVORY,
          padding: "32px 20px",
          textAlign: "center",
          color: NAVY,
          fontSize: "0.8rem",
          lineHeight: 1.6,
        }}
      >
        Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518 ·
        Equal Housing Opportunity · Licensed in Texas · This page is for
        educational purposes and does not constitute a loan commitment or rate
        guarantee.
      </section>
    </div>
  );
}
