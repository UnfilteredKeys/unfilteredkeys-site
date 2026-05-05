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

const cards = [
  { label: "Student Loans", body: "Most physician loan programs exclude student loan debt from DTI entirely or use your IBR payment — not the 1% of balance standard. On a $300K+ student loan balance, that difference alone moves many TMC physicians from denied to approved." },
  { label: "Start Date Flexibility", body: "Attending physicians can close up to 90 days before their start date with an executed offer letter. No paycheck required to qualify." },
  { label: "No PMI", body: "Zero — even at 0% down. On a $650K Houston home, conventional PMI runs $300–$500/month. Physician loans eliminate that cost entirely." },
  { label: "Down Payment Options", body: "0% down up to $1M, 5% down up to $1.5M, 10% down up to $2M — depending on lender and your profile. We shop 50+ lenders to find the best fit." },
  { label: "Flood Zone Awareness", body: "Many TMC-adjacent Houston neighborhoods require flood insurance that adds $150–$400/month to your payment. We build flood zone status into your budget from the first call — not as a surprise at closing." },
];

const stats = [
  { stat: "$550K–$850K", note: "median prices in physician-appropriate Houston neighborhoods" },
  { stat: "Texas Medical Center", note: "largest medical complex in the world with 60+ institutions" },
  { stat: "0% Texas State Income Tax", note: "maximizes attending take-home vs. CA, NY, or IL" },
];

const scenarios = [
  "MD Anderson or Houston Methodist attending finishing fellowship at TMC, $300K in student loans, offer letter in hand, needs to close before start date",
  "Baylor College of Medicine or UTHealth resident buying during training with future attending income used to qualify",
  "Memorial Hermann or HCA Houston physician relocating from out of state, unfamiliar with Texas flood zone considerations",
  "Private practice physician in West University or Sugar Land, self-employed 2+ years, needs physician loan with bank statement or full-doc option",
];

export default function PhysicianLoanHoustonTx() {
  return (
    <>
      <SEO {...seoMeta.physicianLoanHoustonTx} />
      <div style={{ ...bodyFont, color: NAVY }}>
        {/* Hero */}
        <section style={{ background: NAVY, color: WHITE, padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ ...headingFont, fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.15, marginBottom: 20 }}>
              Physician Loans in Houston, TX
            </h1>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6, opacity: 0.92, marginBottom: 36, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              Built for doctors, residents, and fellows at the Texas Medical Center — the largest medical complex in the world — and across the greater Houston metro.
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
              Conventional loan underwriting was designed for W-2 employees with 5+ years of work history and minimal debt. That profile fits almost no physician at the point of buying their first home. You finished residency with $200K–$400K in student loans, you started an attending position recently, and you have limited savings — not the 20% down a conventional loan wants to see. Physician loans underwrite differently — future income accepted via offer letter, student loans excluded or IBR payment used, and no PMI even at 0–5% down.
            </p>
          </div>
        </section>

        {/* What Houston Physicians Need to Know */}
        <section style={{ background: WHITE, padding: "72px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 36, color: NAVY, textAlign: "center" }}>
              What Houston Physicians Actually Need to Know
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

        {/* Why Houston */}
        <section style={{ background: IVORY, padding: "72px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 36, color: NAVY, textAlign: "center" }}>Why Houston Specifically</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 32 }}>
              {stats.map((s) => (
                <div key={s.stat} style={{ background: NAVY, color: WHITE, padding: 28, borderRadius: 6, textAlign: "center" }}>
                  <div style={{ ...headingFont, fontSize: "1.4rem", color: COPPER, marginBottom: 10 }}>{s.stat}</div>
                  <div style={{ fontSize: "0.95rem", lineHeight: 1.5, opacity: 0.92 }}>{s.note}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 880, margin: "0 auto" }}>
              Physician-appropriate Houston neighborhoods include West University Place, Bellaire, Tanglewood, River Oaks, The Heights, Sugar Land, and Katy. Flood zone status varies significantly by street — we verify before you make an offer.
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

        {/* Copper CTA Band */}
        <section style={{ background: COPPER, color: WHITE, padding: "64px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ ...headingFont, fontSize: "2rem", marginBottom: 14 }}>Ready to run your numbers?</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.6, marginBottom: 30, opacity: 0.95 }}>
              We'll cover student loan treatment, down payment options, flood zone awareness, and max purchase price — in one 15-minute call.
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
