import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { BAHCalc } from "./calculators";

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
  { q: "Does BAH count as income for a VA loan?", a: "Yes. BAH is non-taxable income and lenders can gross it up by 25% when calculating your debt-to-income ratio. This means $2,000 in BAH counts as $2,500 in qualifying income, giving you more buying power than the same amount of taxable pay." },
  { q: "What is the 2026 BAH rate for Fort Hood with dependents?", a: "BAH rates for Fort Hood vary by pay grade. E-5 with dependents receives $1,695/month. E-6 receives $2,070. O-3 receives $2,481. Rates change January 1 each year. Use this calculator to model your exact pay grade against current Killeen purchase prices." },
  { q: "Can my BAH cover a full mortgage payment in Killeen?", a: "For E-6 and above, yes. At a $225,000 VA loan, estimated PITI including Bell County property taxes runs approximately $1,843/month. E-5 has a small gap of about $148. E-6 and above are fully covered. We run your exact numbers before you shop a single home." },
  { q: "What happens to my BAH if I buy instead of living in the barracks?", a: "Once you close on a home, you receive BAH at the with-dependents rate if you have dependents, or the without-dependents rate if single. You stop receiving BAH if you move back into government quarters. BAH does not get reduced just because your mortgage payment is less than your allowance — the difference is yours to keep." },
  { q: "Does BAH affect my VA loan entitlement or eligibility?", a: "No. BAH is income used to qualify — it has no effect on your VA entitlement, COE, or eligibility. Your entitlement is based on your service record, not your pay." },
];

const LINKS = [
  { title: "Killeen & Fort Hood VA Loans", desc: "Local guidance for Fort Hood buyers — neighborhoods, BAH, builders, and PCS strategy.", to: "/killeen-va-loan", label: "Explore Killeen →" },
  { title: "VA Loan Texas — Full Guide", desc: "Everything Texas veterans need to know about VA loan eligibility, entitlement, and the buying process.", to: "/va-loan-texas", label: "Read the Full Guide →" },
  { title: "PCS to Portfolio", desc: "Turn every duty station move into a long-term wealth-building opportunity.", to: "/pcs-to-portfolio", label: "Read the Strategy →" },
  { title: "All Mortgage Calculators", desc: "Texas payment, VA, BAH, entitlement, buydown, and more — built for real Texas scenarios.", to: "/calculators", label: "See All Calculators →" },
];

export default function BahCalculatorKilleenTxPage() {
  return (
    <>
      <SEO
        title="BAH Calculator Killeen TX | Fort Hood Housing Allowance | Keys by Shalanda"
        description="See exactly what your BAH covers near Fort Hood. Calculate your buying power by pay grade with real Killeen TX property taxes and 2026 BAH rates."
        canonical="/bah-calculator-killeen-tx"
      />

      {/* HERO */}
      <section style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>Military Housing Allowance</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 760 }}>
            BAH Calculator — Killeen TX & Fort Hood
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: 720, margin: 0 }}>
            Your BAH is the single biggest factor in whether buying near Fort Hood makes financial sense. This calculator shows exactly what your allowance covers at every pay grade — and how much buying power it gives you in the Killeen corridor.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif", color: navy }}>
          <BAHCalc />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>FAQ · BAH & Buying Power</p>
          <h2 style={{ ...h2Style(), marginBottom: 32 }}>Common Questions About BAH at Fort Hood</h2>
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
