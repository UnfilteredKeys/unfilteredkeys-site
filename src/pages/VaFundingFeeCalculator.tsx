import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { VAFundingFeeCalc } from "./calculators";

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
  { q: "What is the VA funding fee?", a: "The VA funding fee is a one-time fee charged at closing ranging from 1.25% to 3.3% of the loan amount. It replaces private mortgage insurance and keeps the VA loan program self-funded. It can be rolled into the loan balance so you owe nothing extra at closing." },
  { q: "Who is exempt from the VA funding fee?", a: "Veterans receiving VA disability compensation at any rating, surviving spouses of veterans who died in service or from service-connected disability, and active duty Purple Heart recipients are exempt. We verify your exemption status during the application — you do not need to chase down paperwork." },
  { q: "Can I roll the VA funding fee into my loan?", a: "Yes. The funding fee can be financed into the loan balance. On a $300,000 purchase with a 2.15% fee, that adds $6,450 to your balance — your monthly payment increases by roughly $35. We show you both options so you can decide what makes sense for your cash position." },
  { q: "Does the funding fee change if I've used my VA loan before?", a: "Yes. First use with zero down is 2.15%. Subsequent use with zero down is 3.3%. Putting 5% or more down reduces the fee regardless of use count." },
  { q: "Is the VA funding fee tax deductible?", a: "The VA funding fee may be deductible as mortgage interest points in the year of purchase. Consult a tax advisor for your specific situation — we can refer you to veteran-friendly CPAs in Central Texas." },
];

const LINKS = [
  { title: "VA Loan Texas — Full Guide", desc: "Everything Texas veterans need to know about VA loan eligibility, entitlement, and the buying process.", to: "/va-loan-texas", label: "Read the Full Guide →" },
  { title: "Killeen & Fort Hood VA Loans", desc: "Local guidance for Fort Hood buyers — neighborhoods, BAH, builders, and PCS strategy.", to: "/killeen-va-loan", label: "Explore Killeen →" },
  { title: "VA Loan FAQ — Texas", desc: "Every question Fort Hood and Texas veterans ask about entitlement, funding fees, BAH, and more.", to: "/va-loan-faq-texas", label: "Read the FAQ →" },
  { title: "All Mortgage Calculators", desc: "Texas payment, VA, BAH, entitlement, buydown, and more — built for real Texas scenarios.", to: "/calculators", label: "See All Calculators →" },
];

export default function VaFundingFeeCalculatorPage() {
  return (
    <>
      <SEO
        title="VA Funding Fee Calculator | Texas Veterans | Keys by Shalanda"
        description="Calculate your VA funding fee instantly. See if your disability rating waives it, whether to roll it in, and what it means for your payment. Fort Hood and Texas veterans."
        canonical="/va-funding-fee-calculator"
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
            The VA funding fee is a one-time cost that keeps the VA loan program running — no taxpayer money, no PMI ever. Use this calculator to see your exact fee, whether you can roll it into the loan, and whether your disability rating waives it entirely.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif", color: navy }}>
          <VAFundingFeeCalc />
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
