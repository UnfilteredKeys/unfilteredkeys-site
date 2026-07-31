import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import VaFundingFeeCalc from "@/components/calculators/VaFundingFeeCalc";

const hero = "#1a2535";
const navy = "#1a3a5c";
const copper = "#b5621e";
const white = "#ffffff";
const ivory = "#faf8f4";
const textPrimary = "#1c2630";
const textSecondary = "#4a5568";
const radius = 8;
const border = "rgba(26,58,92,0.1)";

const sectionPad = { padding: "72px 0" } as const;
const container = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" } as const;
const tag = (c = copper) => ({ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase" as const, color: c, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 });
const h2Style = (c = textPrimary) => ({ fontFamily: "'Lora', serif", fontSize: 30, fontWeight: 700 as const, color: c, lineHeight: 1.25, marginBottom: 12 });

const FAQS = [
  { q: "What is the VA funding fee?", a: "The VA funding fee is a one-time charge that applies to many VA loans. The percentage depends on the transaction, prior VA-loan use, down payment for a purchase, and confirmed exemption status." },
  { q: "Who may be exempt from the VA funding fee?", a: "Some veterans receiving VA compensation for a service-connected disability, certain surviving spouses, and active-duty Purple Heart recipients may be exempt. Exemption status must be confirmed on the Certificate of Eligibility and final loan file." },
  { q: "Can the VA funding fee be financed?", a: "The fee can often be financed into the loan. It may also be paid at closing or by another permitted party, subject to the transaction, program rules, and contribution limits." },
  { q: "Why is a conventional-to-VA refinance listed in the cash-out fee category?", a: "VA classifies a refinance from a non-VA loan into VA under its cash-out refinance rules, even when the borrower receives no cash. This calculator uses borrower-friendly wording while applying VA's fee category." },
  { q: "Does this calculator cover a Texas 50(a)(6) home-equity loan?", a: "No. This tool does not cover Texas 50(a)(6) home-equity loans. It covers a purchase, a VA IRRRL, and a refinance from a non-VA loan into VA." },
  { q: "Can a funding fee be refunded later?", a: "A borrower whose VA disability compensation is awarded retroactively may be eligible to request a refund. Eligibility and the effective date must be verified with VA and the loan servicer." },
];

const LINKS = [
  { title: "VA Loan Texas — Full Guide", desc: "Statewide guidance on VA eligibility, entitlement, property taxes, and the Texas homebuying process.", to: "/va-loan-texas", label: "Read the Texas Guide →" },
  { title: "VA Loan FAQ — Texas", desc: "Clear answers for Texas service members, veterans, and surviving spouses using VA loan benefits.", to: "/va-loan-faq-texas", label: "Read the FAQ →" },
  { title: "Texas Mortgage Payment Calculator", desc: "Estimate a full monthly housing payment using property-specific taxes, insurance, HOA dues, and loan details.", to: "/calculators/texas-mortgage-payment", label: "Estimate a Payment →" },
  { title: "All Mortgage Calculators", desc: "Explore VA entitlement, Texas payments, seller credits, homebuying budgets, and other planning tools.", to: "/calculators", label: "See All Calculators →" },
];

export default function VaFundingFeeCalculatorPage() {
  return (
    <>
      <SEO
        title="VA Funding Fee Calculator | Texas Veterans | Keys by Shalanda"
        description="Estimate the VA funding fee for a Texas purchase, IRRRL, or refinance from a non-VA loan into VA. Compare exempt status and fee-payment choices."
        canonical="/calculators/va-funding-fee"
      />

      {/* HERO */}
      <section style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>VA Loan Tools</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 760 }}>
            VA Funding Fee Calculator — Texas Veterans
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: 720, margin: 0 }}>
            Estimate the one-time VA funding fee for a purchase, an IRRRL, or a refinance from a non-VA loan into VA. See the base loan, fee, financed balance, and fee-payment choices without confusing a VA transaction label with a Texas home-equity loan.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif", color: navy }}>
          <VaFundingFeeCalc />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>FAQ · VA Funding Fee</p>
          <h2 style={{ ...h2Style(), marginBottom: 32 }}>Common Questions About the VA Funding Fee</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 880 }}>
            {FAQS.map((item, i) => (
              <details key={i} style={{ border: `1px solid ${border}`, borderRadius: radius, padding: "18px 22px", backgroundColor: "#fbfaf7" }}>
                <summary style={{ cursor: "pointer", fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 600, color: textPrimary, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <span>{item.q}</span>
                  <span style={{ color: copper, fontFamily: "'Fira Mono', monospace", fontSize: 18, flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, marginTop: 14, marginBottom: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={container}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: navy, textAlign: "center", marginBottom: 40 }}>Explore More VA Loan Resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {LINKS.map((c) => (
              <div key={c.title} style={{ backgroundColor: white, borderRadius: radius, padding: 28, borderTop: `3px solid ${copper}`, boxShadow: "0 2px 12px rgba(26,58,92,0.07)", display: "flex", flexDirection: "column" }}>
                <div style={{ color: copper, marginBottom: 14 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: 19, fontWeight: 700, color: navy, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#3d4f63", lineHeight: 1.6, marginBottom: 18, flexGrow: 1 }}>{c.desc}</p>
                <Link to={c.to} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: navy, textDecoration: "none" }}>{c.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
