import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { VALoanCalc } from "./calculators";

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
  { q: "Why is a VA loan payment lower than a conventional loan at the same price?", a: "Two reasons: zero down payment means you're financing the full purchase price but avoiding PMI, which on a conventional loan runs $100–$200/month. VA loans also typically carry competitive interest rates. The result is often a lower monthly payment than a conventional loan with 10% down." },
  { q: "Does this calculator include the VA funding fee?", a: "Yes. The VA funding fee is factored into the total loan amount when rolled in, which is the most common approach. If you have a disability rating that waives the fee, you can toggle that option and the calculator removes it from your payment." },
  { q: "What property tax rate does this calculator use for Texas?", a: "The calculator uses Bell County's rate of 1.93% as the default for Fort Hood and Killeen buyers. You can adjust it for other Texas counties — Travis County (Austin) runs approximately 1.81%, Harris County (Houston) approximately 2.13%. Texas property taxes are among the highest in the nation and make a significant difference in your actual payment." },
  { q: "How accurate is the payment estimate?", a: "The estimate is accurate for principal, interest, property taxes, and homeowners insurance at standard Texas rates. Your actual payment will vary based on final interest rate at lock, exact property tax assessment, HOA fees if applicable, and whether your disability rating waives the funding fee. We run your exact scenario at no cost before you make an offer." },
  { q: "Can I use this calculator to compare VA vs conventional?", a: "For a direct VA vs conventional comparison including PMI, use the FHA vs Conventional calculator on the main calculators page. That tool shows the true cost difference across loan types side by side." },
];

const LINKS = [
  { title: "VA Loan Texas — Full Guide", desc: "Everything Texas veterans need to know about VA loan eligibility, entitlement, and the buying process.", to: "/va-loan-texas", label: "Read the Full Guide →" },
  { title: "Killeen & Fort Hood VA Loans", desc: "Local guidance for Fort Hood buyers — neighborhoods, BAH, builders, and PCS strategy.", to: "/killeen-va-loan", label: "Explore Killeen →" },
  { title: "VA Funding Fee Calculator", desc: "See your exact VA funding fee, whether to roll it in, and whether your disability rating waives it.", to: "/va-funding-fee-calculator", label: "Calculate the Fee →" },
  { title: "All Mortgage Calculators", desc: "Texas payment, VA, BAH, entitlement, buydown, and more — built for real Texas scenarios.", to: "/calculators", label: "See All Calculators →" },
];

export default function VaLoanCalculatorTexasPage() {
  return (
    <>
      <SEO
        title="VA Loan Calculator Texas | Payment Estimator with Taxes & Funding Fee | Keys by Shalanda"
        description="Calculate your real VA loan payment in Texas — includes funding fee, property taxes by county, and no PMI. Built for Fort Hood, Killeen, Austin, and all Texas veterans."
        canonical="/va-loan-calculator-texas"
      />

      {/* HERO */}
      <section style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>VA Loan Tools</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 760 }}>
            VA Loan Calculator — Texas
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: 720, margin: 0 }}>
            Generic mortgage calculators leave out VA funding fees, Texas property taxes, and the fact that VA loans have no PMI ever. This one includes all of it — so your estimated payment is actually accurate for Texas.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif", color: navy }}>
          <VALoanCalc />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={tag()}>FAQ · VA Loan Calculator</p>
          <h2 style={{ ...h2Style(), marginBottom: 32 }}>Common Questions About VA Loan Payments in Texas</h2>
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
