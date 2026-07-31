import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import VaEntitlementCalc from "@/components/calculators/VaEntitlementCalc";

const hero = "#1a2535";
const navy = "#1a3a5c";
const copper = "#b5621e";
const white = "#ffffff";
const ivory = "#faf8f4";
const textPrimary = "#1c2630";
const textSecondary = "#4a5568";
const border = "rgba(26,58,92,0.1)";
const container = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" } as const;
const sectionPad = { padding: "72px 0" } as const;

const FAQS = [
  {
    q: "What is VA entitlement?",
    a: "VA entitlement is the amount VA can guaranty on an eligible veteran's loan. The COE shows whether full entitlement is available and lists entitlement already charged to prior VA loans.",
  },
  {
    q: "Does paying down my current VA loan release entitlement?",
    a: "No. The entitlement charged on the COE does not decrease as the mortgage balance is paid down. Entitlement becomes available again only after an eligible restoration or qualified substitution is approved by VA.",
  },
  {
    q: "Why does this calculator use the Texas county loan limit?",
    a: "When entitlement is already charged, the remaining guaranty calculation uses 25% of the applicable county limit minus the entitlement charged. All Texas counties use the 2026 one-unit baseline limit of $832,750.",
  },
  {
    q: "Does the county limit cap a VA loan when I have full entitlement?",
    a: "No. VA does not impose a county loan limit when full entitlement is available. The lender still determines the supported loan amount from income, credit, residual income, appraisal, occupancy, and other requirements.",
  },
  {
    q: "How can VA entitlement be restored?",
    a: "Common paths include selling the property and paying off the VA loan, paying off or refinancing the VA loan while retaining the property and requesting the available one-time restoration, or an eligible veteran substituting entitlement after a qualified assumption. VA must approve restoration or substitution.",
  },
  {
    q: "Can I keep my current VA home and buy another?",
    a: "Possibly. A veteran with sufficient remaining entitlement may be able to keep the current VA-financed property and purchase another primary residence, often after a PCS move. The full loan file and occupancy requirements still apply.",
  },
];

const LINKS = [
  { title: "VA Funding Fee Calculator", desc: "Estimate the separate one-time VA funding fee for an eligible Texas transaction.", to: "/calculators/va-funding-fee" },
  { title: "Texas Mortgage Payment Calculator", desc: "Estimate principal, interest, taxes, insurance, HOA dues, and applicable mortgage insurance.", to: "/calculators/texas-mortgage-payment" },
  { title: "Texas VA Loan Guide", desc: "Review VA eligibility, Texas property taxes, occupancy, and the homebuying process.", to: "/va-loan-texas" },
  { title: "All Mortgage Calculators", desc: "Explore the full collection of Texas mortgage planning tools.", to: "/calculators" },
];

export default function VaEntitlementCalculatorPage() {
  return (
    <>
      <SEO
        title="VA Entitlement Calculator Texas | Keys by Shalanda"
        description="Estimate remaining VA entitlement, zero-down capacity, and an entitlement-based down payment using the 2026 Texas county loan limit and your COE."
        canonical="/calculators/va-entitlement"
      />

      <section style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>Texas VA Loan Tool</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 790 }}>
            VA Entitlement Calculator for Texas Homebuyers
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: 760, margin: 0 }}>
            Use the entitlement figures from your Certificate of Eligibility to estimate remaining guaranty, zero-down capacity, and whether an entitlement-based down payment may be required for another Texas home.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif", color: navy }}>
          <VaEntitlementCalc />
        </div>
      </section>

      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: copper, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 }}>
            FAQ · VA Entitlement
          </p>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 30, color: textPrimary, lineHeight: 1.25, marginBottom: 32 }}>
            Understanding Remaining Entitlement and Restoration
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 900 }}>
            {FAQS.map((item) => (
              <details key={item.q} style={{ border: `1px solid ${border}`, borderRadius: 8, padding: "18px 22px", backgroundColor: "#fbfaf7" }}>
                <summary style={{ cursor: "pointer", fontFamily: "'Lora', serif", fontSize: 17, fontWeight: 600, color: textPrimary, listStyle: "none", display: "flex", justifyContent: "space-between", gap: 16 }}>
                  <span>{item.q}</span>
                  <span style={{ color: copper, fontFamily: "'Fira Mono', monospace", fontSize: 18 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, color: textSecondary, lineHeight: 1.65, margin: "14px 0 0" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={container}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 32, fontWeight: 700, color: navy, textAlign: "center", marginBottom: 40 }}>
            Continue Your Texas VA Loan Research
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {LINKS.map((item) => (
              <div key={item.title} style={{ backgroundColor: white, borderRadius: 8, padding: 28, borderTop: `3px solid ${copper}`, boxShadow: "0 2px 12px rgba(26,58,92,0.07)", display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: 19, color: navy, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#3d4f63", lineHeight: 1.6, margin: "0 0 18px", flexGrow: 1 }}>{item.desc}</p>
                <Link to={item.to} style={{ color: navy, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>Explore Resource →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
