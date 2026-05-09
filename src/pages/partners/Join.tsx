import { useState, type FormEvent } from "react";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

/* Tokens */
const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const HERO = "#1a2535";
const WHITE = "#ffffff";
const ERROR = "#c0392b";
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

const errorTextStyle: React.CSSProperties = {
  color: ERROR,
  fontSize: "0.8rem",
  marginTop: 4,
  fontFamily: body,
};

const SPECIALTIES = [
  "VA Buyers",
  "First-Time Buyers",
  "Relocation",
  "Investors",
  "Luxury",
  "New Construction",
];

const LANGUAGES = ["English", "Spanish", "Other"];

const MLS_ASSOCIATIONS: { name: string; counties: string }[] = [
  { name: "Central Texas MLS", counties: "Bell, Coryell, Lampasas, Milam, Falls — Killeen, Temple, Harker Heights, Copperas Cove, Waco corridor" },
  { name: "Austin Board of Realtors (ABoR)", counties: "Travis, Williamson, Hays, Bastrop, Caldwell — Austin, Round Rock, Georgetown, Cedar Park, San Marcos, Kyle" },
  { name: "San Antonio Board of Realtors (SABOR)", counties: "Bexar, Comal, Guadalupe, Medina, Atascosa — San Antonio, New Braunfels, Seguin" },
  { name: "Houston Association of Realtors (HAR)", counties: "Harris, Fort Bend, Montgomery, Brazoria, Galveston" },
  { name: "MetroTex Association of Realtors", counties: "Dallas, Tarrant, Collin, Denton — DFW metro" },
  { name: "El Paso Association of Realtors", counties: "El Paso County" },
  { name: "Corpus Christi Association of Realtors", counties: "Nueces, San Patricio counties" },
  { name: "Wichita Falls Association of Realtors", counties: "Wichita County" },
];

const BUILDER_TYPES = ["Production Builder", "Semi-Custom Builder", "Custom Builder"];
const PRICE_RANGES = ["$150K–$250K", "$250K–$400K", "$400K–$600K", "$600K+"];

type Errors = Record<string, string>;
const submittedEmails = new Set<string>();

function fieldStyle(hasError: boolean): React.CSSProperties {
  return hasError
    ? { ...inputBase, border: `2px solid ${ERROR}` }
    : inputBase;
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label}</label>
      {children}
      {error && <div style={errorTextStyle}>{error}</div>}
    </div>
  );
}

export default function PartnerJoinPage() {
  const meta = seoMeta.partnersJoin;
  const [submitted, setSubmitted] = useState(false);
  const [partnerType, setPartnerType] = useState<"" | "agent" | "builder">("");
  const [otherLang, setOtherLang] = useState(false);
  const [hasBuilderRel, setHasBuilderRel] = useState<"Yes" | "No">("No");
  const [hasPreferredLender, setHasPreferredLender] = useState<"Yes" | "No">("No");
  const [considerNewLender, setConsiderNewLender] = useState<"" | "Yes" | "No">("");
  const [futureConsideration, setFutureConsideration] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [hoverSubmit, setHoverSubmit] = useState(false);

  const focusCopper = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (errors[e.currentTarget.name]) return;
    e.currentTarget.style.borderColor = COPPER;
    e.currentTarget.style.boxShadow = `0 0 0 2px ${COPPER}33`;
  };
  const blurCopper = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (errors[e.currentTarget.name]) return;
    e.currentTarget.style.borderColor = BORDER;
    e.currentTarget.style.boxShadow = "none";
  };

  const validate = (form: HTMLFormElement): Errors => {
    const e: Errors = {};
    if (!partnerType) {
      e._partnerType = "Please select your role.";
      return e;
    }
    const data = new FormData(form);
    const get = (n: string) => ((data.get(n) as string) || "").trim();

    const required = (name: string, label: string) => {
      if (!get(name)) e[name] = `${label} is required.`;
    };

    required("firstName", "First name");
    required("lastName", "Last name");

    const phone = get("phone").replace(/\D/g, "");
    if (!phone) e.phone = "Phone is required.";
    else if (phone.length !== 10) e.phone = "Phone must be 10 digits.";

    const email = get("email");
    if (!email) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    else if (submittedEmails.has(email.toLowerCase()))
      e.email = "This email has already been submitted.";

    const website = get("website");
    if (website && !/^(https?:\/\/)?(www\.)?[^\s.]+\.(com|org|net|io|co|gov|edu|biz|us)([\/?#].*)?$/i.test(website))
      e.website = "Please enter a valid website like shalandasmith.com";

    const mls = data.getAll("mlsAssociations");
    if (mls.length === 0) e.mlsAssociations = "Please select at least one MLS association.";

    if (partnerType === "agent") {
      required("brokerage", "Brokerage");
    } else {
      required("companyName", "Company name");
      if (!get("builderType")) e.builderType = "Select a builder type.";
      required("communities", "Active communities");
      if (!get("priceRange")) e.priceRange = "Select a price range.";
    }
    return e;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstKey = Object.keys(errs)[0];
      requestAnimationFrame(() => {
        const lookup = firstKey === "_partnerType" ? "partnerType" : firstKey;
        const el =
          form.querySelector<HTMLElement>(`[name="${lookup}"]`) ||
          form.querySelector<HTMLElement>(`[data-field="${firstKey}"]`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      return;
    }

    const ptInput = form.querySelector<HTMLInputElement>('input[name="partnerType"]');
    if (ptInput) ptInput.value = partnerType;

    const isFutureConsideration =
      partnerType === "builder" &&
      hasPreferredLender === "Yes" &&
      considerNewLender === "No";

    const psInput = form.querySelector<HTMLInputElement>('input[name="partnerStatus"]');
    if (psInput) psInput.value = isFutureConsideration ? "future-consideration" : "active";

    // Normalize website to include protocol
    const websiteInput = form.querySelector<HTMLInputElement>('input[name="website"]');
    if (websiteInput && websiteInput.value.trim() && !/^https?:\/\//i.test(websiteInput.value.trim())) {
      websiteInput.value = "https://" + websiteInput.value.trim();
    }

    const formData = new FormData(form);
    const email = ((formData.get("email") as string) || "").trim().toLowerCase();
    submittedEmails.add(email);

    try {
      await fetch("/", { method: "POST", body: formData });
    } catch {
      /* no-op — Netlify intercepts on production */
    }
    setFutureConsideration(isFutureConsideration);
    setSubmitted(true);
  };

  const renderRoleCard = (value: "agent" | "builder", label: string) => {
    const active = partnerType === value;
    return (
      <button
        type="button"
        onClick={() => {
          setPartnerType(value);
          setErrors((p) => {
            const n = { ...p };
            delete n._partnerType;
            return n;
          });
        }}
        style={{
          flex: 1,
          minWidth: 220,
          border: active ? `2px solid ${COPPER}` : `2px solid ${BORDER}`,
          background: active ? "#fdf6f0" : WHITE,
          color: NAVY,
          borderRadius: 8,
          padding: 16,
          textAlign: "center",
          cursor: "pointer",
          fontFamily: body,
          fontWeight: 600,
          fontSize: "1rem",
          transition: "all 0.15s ease",
        }}
      >
        {label}
      </button>
    );
  };

  const checkboxRow = (
    name: string,
    options: string[],
    onChange?: (val: string, checked: boolean) => void,
  ) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px" }}>
      {options.map((s) => (
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
            name={name}
            value={s}
            style={{ accentColor: COPPER }}
            onChange={(e) => onChange?.(s, e.currentTarget.checked)}
          />
          {s}
        </label>
      ))}
    </div>
  );

  const radioRow = (name: string, options: string[], hasError?: boolean) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px" }}>
      {options.map((s) => (
        <label
          key={s}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: NAVY,
            fontSize: "0.95rem",
            cursor: "pointer",
            ...(hasError ? { color: ERROR } : {}),
          }}
        >
          <input
            type="radio"
            name={name}
            value={s}
            style={{ accentColor: COPPER }}
          />
          {s}
        </label>
      ))}
    </div>
  );

  const mlsField = (
    <div style={fieldWrap}>
      <label style={labelStyle}>MLS Associations</label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: errors.mlsAssociations ? 10 : 0,
          border: errors.mlsAssociations ? `2px solid ${ERROR}` : "none",
          borderRadius: 6,
        }}
      >
        {MLS_ASSOCIATIONS.map((m) => (
          <label
            key={m.name}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              color: NAVY,
              cursor: "pointer",
              lineHeight: 1.35,
            }}
          >
            <input
              type="checkbox"
              name="mlsAssociations"
              value={m.name}
              style={{ accentColor: COPPER, marginTop: 3, flexShrink: 0 }}
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{m.name}</div>
              <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>{m.counties}</div>
            </div>
          </label>
        ))}
      </div>
      <div
        style={{
          color: NAVY,
          fontStyle: "italic",
          fontSize: "0.85rem",
          marginTop: 6,
        }}
      >
        Select all MLS associations you are an active member of.
      </div>
      {errors.mlsAssociations && <div style={errorTextStyle}>{errors.mlsAssociations}</div>}
    </div>
  );

  const headshotField = (label: string) => (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label}</label>
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <span>Upload</span>
        <input type="file" name="headshot" accept="image/*" style={{ display: "none" }} />
      </label>
    </div>
  );

  const contactBlock = (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="First Name" error={errors.firstName}>
          <input style={fieldStyle(!!errors.firstName)} name="firstName" onFocus={focusCopper} onBlur={blurCopper} />
        </Field>
        <Field label="Last Name" error={errors.lastName}>
          <input style={fieldStyle(!!errors.lastName)} name="lastName" onFocus={focusCopper} onBlur={blurCopper} />
        </Field>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Phone" error={errors.phone}>
          <input style={fieldStyle(!!errors.phone)} name="phone" type="tel" onFocus={focusCopper} onBlur={blurCopper} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input style={fieldStyle(!!errors.email)} name="email" type="email" onFocus={focusCopper} onBlur={blurCopper} />
        </Field>
      </div>
      <Field label="Website" error={errors.website}>
        <input style={fieldStyle(!!errors.website)} name="website" placeholder="https://" onFocus={focusCopper} onBlur={blurCopper} />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Instagram"><input style={inputBase} name="instagram" placeholder="@handle" onFocus={focusCopper} onBlur={blurCopper} /></Field>
        <Field label="Facebook"><input style={inputBase} name="facebook" placeholder="Profile URL" onFocus={focusCopper} onBlur={blurCopper} /></Field>
      </div>
      <Field label="LinkedIn"><input style={inputBase} name="linkedin" placeholder="Profile URL" onFocus={focusCopper} onBlur={blurCopper} /></Field>
    </>
  );

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
          <h1 style={{ fontFamily: heading, color: WHITE, fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
            Get Your Own Co-Branded Home Buying Page
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(1rem, 1.5vw, 1.15rem)", lineHeight: 1.6, marginTop: 20 }}>
            Partner with Keys by Shalanda and give every buyer you work with a personalized mortgage resource — branded with both our names.
          </p>
        </div>
      </section>

      {/* Section 2 — Benefits */}
      <section style={{ ...sectionPad, background: IVORY }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {[
            { t: "Your Name on the Page", b: "Every buyer you refer lands on a page that features you and your brokerage alongside Keys by Shalanda." },
            { t: "A Link You Can Share Anywhere", b: "Text it, email it, post it. One link does the work — buyers get educated and connected before the first showing." },
            { t: "VA Loan Expertise Behind You", b: "We close VA loans in 21 days. Your buyers get answers fast and you get a lender who won't fumble the file." },
          ].map((c) => (
            <div key={c.t} style={{ background: WHITE, color: NAVY, borderTop: `3px solid ${COPPER}`, padding: 28, borderRadius: 4, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontFamily: heading, fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, color: NAVY }}>{c.t}</h3>
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
            <div style={{ color: NAVY, background: IVORY, border: `1.5px solid ${COPPER}`, borderRadius: 8, padding: 28, textAlign: "center", fontSize: "1.05rem", lineHeight: 1.6 }}>
              {futureConsideration
                ? "Thank you for your interest in partnering with Keys by Shalanda. At this time we are building our network with builders who are open to outside lender relationships. We appreciate you reaching out and may reconnect as our program grows."
                : "Thanks! We'll have your page ready within 48 hours. Watch for an email from shalanda@securechoicelending.com."}
            </div>
          ) : (
            <form
              name="partner-intake"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="form-name" value="partner-intake" />
              <input type="hidden" name="partnerType" />
              <input type="hidden" name="partnerStatus" />
              <p style={{ display: "none" }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              {/* Role toggle */}
              <div style={fieldWrap}>
                <label style={labelStyle}>I am a...</label>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {renderRoleCard("agent", "Realtor / Real Estate Agent")}
                  {renderRoleCard("builder", "Builder / Builder Representative")}
                </div>
                {errors._partnerType && <div style={errorTextStyle}>{errors._partnerType}</div>}
              </div>

              {partnerType === "agent" && (
                <>
                  {contactBlock /* note: order — putting brokerage/license before contact in spec */}
                  <Field label="Brokerage Name" error={errors.brokerage}>
                    <input style={fieldStyle(!!errors.brokerage)} name="brokerage" onFocus={focusCopper} onBlur={blurCopper} />
                  </Field>
                  <Field label="License Number">
                    <input style={inputBase} name="licenseNumber" placeholder="Optional" onFocus={focusCopper} onBlur={blurCopper} />
                  </Field>

                  {mlsField}

                  <div style={fieldWrap}>
                    <label style={labelStyle}>Buyer Specialties</label>
                    {checkboxRow("specialties", SPECIALTIES)}
                  </div>

                  <div style={fieldWrap}>
                    <label style={labelStyle}>Languages Spoken</label>
                    {checkboxRow("languages", LANGUAGES, (val, checked) => {
                      if (val === "Other") setOtherLang(checked);
                    })}
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
                    <label style={labelStyle}>Do you represent any builders?</label>
                    <div style={{ display: "flex", gap: 18 }}>
                      {(["Yes", "No"] as const).map((opt) => (
                        <label key={opt} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: NAVY, cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="builderRelationship"
                            value={opt}
                            checked={hasBuilderRel === opt}
                            onChange={() => setHasBuilderRel(opt)}
                            style={{ accentColor: COPPER }}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                    {hasBuilderRel === "Yes" && (
                      <input
                        style={{ ...inputBase, marginTop: 10 }}
                        name="builderNames"
                        placeholder="e.g. Flintrock Builders, Stylecraft"
                        onFocus={focusCopper}
                        onBlur={blurCopper}
                      />
                    )}
                  </div>

                  {headshotField("Headshot Photo")}

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
                </>
              )}

              {partnerType === "builder" && (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="First Name" error={errors.firstName}>
                      <input style={fieldStyle(!!errors.firstName)} name="firstName" onFocus={focusCopper} onBlur={blurCopper} />
                    </Field>
                    <Field label="Last Name" error={errors.lastName}>
                      <input style={fieldStyle(!!errors.lastName)} name="lastName" onFocus={focusCopper} onBlur={blurCopper} />
                    </Field>
                  </div>

                  <Field label="Company Name" error={errors.companyName}>
                    <input style={fieldStyle(!!errors.companyName)} name="companyName" onFocus={focusCopper} onBlur={blurCopper} />
                  </Field>

                  <Field label="Builder Type" error={errors.builderType}>
                    {radioRow("builderType", BUILDER_TYPES, !!errors.builderType)}
                  </Field>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="Phone" error={errors.phone}>
                      <input style={fieldStyle(!!errors.phone)} name="phone" type="tel" onFocus={focusCopper} onBlur={blurCopper} />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <input style={fieldStyle(!!errors.email)} name="email" type="email" onFocus={focusCopper} onBlur={blurCopper} />
                    </Field>
                  </div>

                  <Field label="Website" error={errors.website}>
                    <input style={fieldStyle(!!errors.website)} name="website" placeholder="https://" onFocus={focusCopper} onBlur={blurCopper} />
                  </Field>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="Instagram"><input style={inputBase} name="instagram" placeholder="@handle" onFocus={focusCopper} onBlur={blurCopper} /></Field>
                    <Field label="Facebook"><input style={inputBase} name="facebook" placeholder="Profile URL" onFocus={focusCopper} onBlur={blurCopper} /></Field>
                  </div>
                  <Field label="LinkedIn"><input style={inputBase} name="linkedin" placeholder="Profile URL" onFocus={focusCopper} onBlur={blurCopper} /></Field>

                  <Field label="Active Communities or Projects" error={errors.communities}>
                    <textarea
                      style={{ ...fieldStyle(!!errors.communities), resize: "vertical", fontFamily: body }}
                      name="communities"
                      rows={3}
                      placeholder="List your current communities, subdivisions, or active projects"
                      onFocus={focusCopper}
                      onBlur={blurCopper}
                    />
                  </Field>

                  <Field label="Typical Price Range" error={errors.priceRange}>
                    {radioRow("priceRange", PRICE_RANGES, !!errors.priceRange)}
                  </Field>

                  {mlsField}

                  <div style={fieldWrap}>
                    <label style={labelStyle}>Do you currently have a preferred lender relationship?</label>
                    <div style={{ display: "flex", gap: 18 }}>
                      {(["Yes", "No"] as const).map((opt) => (
                        <label key={opt} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: NAVY, cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="preferredLender"
                            value={opt}
                            checked={hasPreferredLender === opt}
                            onChange={() => setHasPreferredLender(opt)}
                            style={{ accentColor: COPPER }}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                    {hasPreferredLender === "Yes" && (
                      <input
                        style={{ ...inputBase, marginTop: 10 }}
                        name="preferredLenderName"
                        placeholder="Lender name"
                        onFocus={focusCopper}
                        onBlur={blurCopper}
                      />
                    )}
                  </div>

                  <div style={fieldWrap}>
                    <label style={labelStyle}>Would you consider a new lender relationship?</label>
                    <div style={{ display: "flex", gap: 18 }}>
                      {(["Yes", "No"] as const).map((opt) => (
                        <label key={opt} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: NAVY, cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="considerNewLender"
                            value={opt}
                            checked={considerNewLender === opt}
                            onChange={() => setConsiderNewLender(opt)}
                            style={{ accentColor: COPPER }}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                    <textarea
                      style={{ ...inputBase, resize: "vertical", fontFamily: body, marginTop: 10 }}
                      name="lenderSwitch"
                      rows={3}
                      placeholder="Optional — what would make you consider switching?"
                      onFocus={focusCopper}
                      onBlur={blurCopper}
                    />
                  </div>

                  {headshotField("Headshot or Company Logo")}

                  <Field label="Tell us about your company and the buyers you build for">
                    <textarea
                      style={{ ...inputBase, resize: "vertical", fontFamily: body }}
                      name="bio"
                      rows={4}
                      placeholder="Optional"
                      onFocus={focusCopper}
                      onBlur={blurCopper}
                    />
                  </Field>
                </>
              )}

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
        <h2 style={{ fontFamily: heading, color: WHITE, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: 32 }}>
          Questions?
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 48, color: WHITE }}>
          <div>
            <div style={{ ...eyebrow, color: COPPER, marginBottom: 8 }}>Email</div>
            <a href="mailto:shalanda@securechoicelending.com" style={{ color: WHITE, fontSize: "1.05rem", textDecoration: "none" }}>
              shalanda@securechoicelending.com
            </a>
          </div>
          <div>
            <div style={{ ...eyebrow, color: COPPER, marginBottom: 8 }}>Call or Text</div>
            <a href="tel:2549359331" style={{ color: WHITE, fontSize: "1.05rem", textDecoration: "none" }}>
              254-935-9331
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 — Compliance */}
      <section style={{ background: IVORY, padding: "32px 20px", textAlign: "center", color: NAVY, fontSize: "0.8rem", lineHeight: 1.6 }}>
        Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518 ·
        Equal Housing Opportunity · Licensed in Texas · This page is for
        educational purposes and does not constitute a loan commitment or rate
        guarantee.
      </section>
    </div>
  );
}
