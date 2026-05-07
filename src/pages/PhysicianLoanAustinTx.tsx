import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const WHITE = "#ffffff";

const CALENDLY = "https://calendly.com/shalanda-securechoicelending/30min";
const APPLY = "https://scl.my1003app.com/554554/register";

const headingFont = { fontFamily: "'Lora', serif" };
const bodyFont = { fontFamily: "'Outfit', sans-serif" };

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
  background: COPPER,
  color: WHITE,
  padding: "14px 28px",
  borderRadius: 4,
  fontWeight: 600,
  textDecoration: "none",
  ...bodyFont,
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: WHITE,
  padding: "14px 28px",
  borderRadius: 4,
  fontWeight: 600,
  textDecoration: "none",
  border: `2px solid ${WHITE}`,
  ...bodyFont,
};

const secondaryBtnDark: React.CSSProperties = {
  ...secondaryBtn,
  color: NAVY,
  border: `2px solid ${NAVY}`,
};

const cards = [
  { label: "Student Loans", body: "Most physician loan programs exclude student loan debt from DTI entirely or use your IBR payment — not the standard 1% of balance calculation. On a $300K student loan balance, that difference alone can move you from denied to approved." },
  { label: "Start Date Flexibility", body: "Attending physicians can close up to 90 days before their start date with an executed offer letter. You don't need a single paycheck to qualify." },
  { label: "No PMI", body: "Zero — even at 0% down. On a $700K Austin home, conventional PMI would run $300–$500/month. That's $3,600–$6,000/year eliminated." },
  { label: "Down Payment Options", body: "0% down up to $1M, 5% down up to $1.5M, 10% down up to $2M — depending on the lender and your profile. We shop 50+ lenders to match your exact file." },
  { label: "Who Qualifies", body: "MD, DO, DDS, DMD, DVM, PharmD — and in many programs: residents, fellows, NPs, PAs, and CRNAs. Eligible designations vary by lender; ask us to match your credentials." },
];

const stats = [
  { stat: "$550K–$750K", note: "Austin median home prices in physician-appropriate neighborhoods" },
  { stat: "0% State Income Tax", note: "increases your Texas take-home vs. CA or NY" },
  { stat: "$400–$600/mo", note: "saved by eliminating PMI on a $700K home at 0% down" },
];

const scenarios = [
  "UT Dell Medical / St. David's / Ascension Seton attending just finished residency, starting in 60 days, $280K in student loans",
  "Texas Oncology or Austin Regional Clinic physician relocating from out of state, needs to close before start date",
  "Resident at UT Austin / Dell Seton buying during fellowship — future attending income used to qualify",
  "Private practice physician 2+ years in, self-employed income documentation needed",
];

export default function PhysicianLoanAustinTx() {
  return (
    <>
      <SEO {...seoMeta.physicianLoanAustinTx} />
      <div style={{ ...bodyFont, color: NAVY }}>
        {/* Hero */}
        <section style={{ background: NAVY, color: WHITE, padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ ...headingFont, fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.15, marginBottom: 20 }}>
              Physician Loans in Austin, TX
            </h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6, opacity: 0.92, marginBottom: 36, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              Built for doctors, residents, and high-income professionals buying in Travis County and the Austin metro — without the conventional loan penalties that punish your student debt.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={primaryBtn}>Book a Strategy Call →</a>
              <a href={APPLY} target="_blank" rel="noopener noreferrer" style={secondaryBtn}>Start My Application</a>
            </div>
          </div>
        </section>

        {/* Why Physician Loans Exist */}
        <section style={{ background: IVORY, padding: "72px 24px" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 24, color: NAVY }}>Why Physician Loans Exist</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Conventional loan underwriting was designed for W-2 employees with 5+ years of work history and minimal debt. That profile fits almost no physician at the point of buying their first home. You finished residency with $200K–$400K in student loans, you started an attending position 3 months ago, and you have $40K saved — not the 20% down a conventional loan wants to see. Physician loans are portfolio products designed by lenders who understand your income trajectory. They underwrite differently — future income accepted via offer letter, student loans excluded or IBR payment used, and no PMI even at 0–5% down.
            </p>
          </div>
        </section>

        {/* What Austin Physicians Need to Know */}
        <section style={{ background: WHITE, padding: "72px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 36, color: NAVY, textAlign: "center" }}>
              What Austin Physicians Actually Need to Know
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {cards.map((c) => (
                <div key={c.label} style={{ background: IVORY, padding: 24, borderRadius: 6, borderTop: `4px solid ${COPPER}` }}>
                  <div style={{ color: COPPER, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.85rem", marginBottom: 10 }}>
                    {c.label}
                  </div>
                  <p style={{ fontSize: "0.98rem", lineHeight: 1.6, color: NAVY }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Austin */}
        <section style={{ background: IVORY, padding: "72px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 36, color: NAVY, textAlign: "center" }}>Why Austin Specifically</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 32 }}>
              {stats.map((s) => (
                <div key={s.stat} style={{ background: NAVY, color: WHITE, padding: 28, borderRadius: 6, textAlign: "center" }}>
                  <div style={{ ...headingFont, fontSize: "1.6rem", color: COPPER, marginBottom: 10 }}>{s.stat}</div>
                  <div style={{ fontSize: "0.95rem", lineHeight: 1.5, opacity: 0.92 }}>{s.note}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 880, margin: "0 auto" }}>
              Physician-appropriate Austin neighborhoods include South Lamar, Tarrytown, Rollingwood, West Lake Hills, Circle C, and Mueller. At these price points, the no-PMI benefit alone saves $400–$600/month compared to a conventional loan at 5% down.
            </p>
          </div>
        </section>

        {/* Common Scenarios */}
        <section style={{ background: WHITE, padding: "72px 24px" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 28, color: NAVY }}>Common Scenarios We See</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {scenarios.map((s, i) => (
                <li key={i} style={{ padding: "16px 0", borderBottom: i < scenarios.length - 1 ? `1px solid ${IVORY}` : "none", fontSize: "1.02rem", lineHeight: 1.6, display: "flex", gap: 14 }}>
                  <span style={{ color: COPPER, fontWeight: 700 }}>→</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* By Hospital System and Neighborhood */}
        <section style={{ background: IVORY, padding: "72px 24px" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, color: NAVY, fontSize: "clamp(1.75rem, 3vw, 2rem)", marginBottom: 16 }}>
              Austin Physician Loan — By Hospital System and Neighborhood
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: NAVY, opacity: 0.8, marginBottom: 40 }}>
              Where you're employed and where you're buying both affect how your loan is structured. Here's how Austin breaks down.
            </p>

            <div style={{ borderLeft: `3px solid ${COPPER}`, paddingLeft: 20, marginBottom: 32 }}>
              <div style={{ color: COPPER, textTransform: "uppercase", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: 8 }}>
                Dell Medical School · UT Dell Seton
              </div>
              <p style={{ color: NAVY, fontSize: "1rem", lineHeight: 1.7 }}>
                Residents and fellows at Dell Med are buying in Mueller, East Austin, and Hyde Park — $500K–$700K range. Most qualify with a signed residency contract, student debt excluded from DTI, and 0% down up to $1M. Physician loans in Austin at this stage don't require a single paycheck.
              </p>
            </div>

            <div style={{ borderLeft: `3px solid ${COPPER}`, paddingLeft: 20, marginBottom: 32 }}>
              <div style={{ color: COPPER, textTransform: "uppercase", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: 8 }}>
                St. David's HealthCare · Ascension Seton
              </div>
              <p style={{ color: NAVY, fontSize: "1rem", lineHeight: 1.7 }}>
                Attending physicians joining St. David's or Seton networks are shopping Tarrytown, Rollingwood, West Lake Hills, and Circle C — $700K–$1.1M. At these price points, PMI elimination is worth $400–$600/month. A physician mortgage in Austin at $900K closes with 0–5% down and no PMI.
              </p>
            </div>

            <div style={{ borderLeft: `3px solid ${COPPER}`, paddingLeft: 20, marginBottom: 32 }}>
              <div style={{ color: COPPER, textTransform: "uppercase", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: 8 }}>
                Austin Regional Clinic · Texas Oncology · Private Practice
              </div>
              <p style={{ color: NAVY, fontSize: "1rem", lineHeight: 1.7 }}>
                Physicians in private practice or multi-specialty groups often have self-employment income or partnership distributions. These files need a lender who understands non-W-2 physician income — not just the standard doctor loan pitch.
              </p>
            </div>

            <div style={{ borderLeft: `3px solid ${COPPER}`, paddingLeft: 20, marginBottom: 32 }}>
              <div style={{ color: COPPER, textTransform: "uppercase", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: 8 }}>
                Relocating from Out of State
              </div>
              <p style={{ color: NAVY, fontSize: "1rem", lineHeight: 1.7 }}>
                Austin is a frequent relocation destination for physicians leaving California, New York, and Illinois. No state income tax means your take-home pay is materially higher in Texas — and that changes how much home you can comfortably carry. We build the real Texas payment with property taxes at 1.8–2.2% in Travis County from day one.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: COPPER, color: WHITE, padding: "64px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 14 }}>Ready to run your numbers?</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.6, marginBottom: 30, opacity: 0.95 }}>
              We'll cover student loan treatment, down payment options, and max purchase price — in one 15-minute call.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ ...primaryBtn, background: NAVY }}>Book a Strategy Call →</a>
              <a href={APPLY} target="_blank" rel="noopener noreferrer" style={secondaryBtn}>Start My Application</a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ background: IVORY, padding: "40px 24px" }}>
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: NAVY, opacity: 0.8 }}>
              This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval. Rates, terms, and program availability subject to change without notice. Not all programs available in all areas. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Equal Housing Lender · shalandasmith.com · 254.935.9331.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
