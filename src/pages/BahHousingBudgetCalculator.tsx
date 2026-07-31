import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import BahHousingBudgetCalc from "@/components/calculators/BahHousingBudgetCalc";

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
    q: "Is BAH supposed to cover my entire mortgage payment?",
    a: "BAH is designed to offset most typical local housing costs, including rent and average utilities. It is based on standardized rental profiles and is not a promise that it will cover every homeowner expense or the particular home you choose.",
  },
  {
    q: "Why should I enter the BAH from my LES?",
    a: "The amount on your LES reflects what you currently receive. Published tables can change annually, and temporary adjustments may apply in some military housing areas.",
  },
  {
    q: "Why are utilities and maintenance separate from the mortgage payment?",
    a: "Principal, interest, taxes, insurance, HOA dues, and required flood insurance form the estimated mortgage-related payment. Utilities and maintenance are broader household costs, so the calculator shows both totals instead of disguising them as one payment.",
  },
  {
    q: "Does this calculator show how much home I qualify to buy?",
    a: "No. BAH is only one part of a mortgage file. Qualification also depends on base pay and other income, debts, credit, residual income, assets, occupancy, entitlement, property details, and lender requirements.",
  },
  {
    q: "Can a lender count BAH as income?",
    a: "BAH can generally be considered as verified, stable nontaxable income when it is expected to continue. The exact treatment and any permitted gross-up depend on the complete loan file and lender guidelines.",
  },
];

const LINKS = [
  { title: "Texas Mortgage Payment Calculator", desc: "Build a detailed Texas property scenario with taxes, insurance, HOA dues, and loan-program costs.", to: "/calculators/texas-mortgage-payment" },
  { title: "VA Funding Fee Calculator", desc: "Estimate the separate VA funding fee and whether it will be financed or paid at closing.", to: "/calculators/va-funding-fee" },
  { title: "VA Entitlement Calculator", desc: "Estimate remaining VA guaranty and whether an entitlement-based down payment may apply.", to: "/calculators/va-entitlement" },
  { title: "Texas VA Loan Guide", desc: "Review Texas VA eligibility, occupancy, property taxes, and the homebuying process.", to: "/va-loan-texas" },
];

export default function BahHousingBudgetCalculatorPage() {
  return (
    <>
      <SEO
        title="Texas BAH Housing Budget Calculator | Military Homebuyers"
        description="Compare your actual monthly BAH with an estimated Texas mortgage payment, utilities, maintenance, HOA dues, and other homeowner costs."
        canonical="/calculators/bah-housing-budget"
      />

      <section style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>Texas Military Homebuyer Tool</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 820 }}>
            Texas BAH Housing Budget Calculator
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: 780, margin: 0 }}>
            See how the BAH shown on your LES compares with an estimated mortgage payment and the broader monthly cost of owning a Texas home.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif", color: navy }}>
          <BahHousingBudgetCalc />
        </div>
      </section>

      <section style={{ backgroundColor: white, ...sectionPad }}>
        <div style={container}>
          <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: copper, fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 }}>
            FAQ · BAH and Homeownership
          </p>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 30, color: textPrimary, lineHeight: 1.25, marginBottom: 32 }}>
            What Your BAH Comparison Can and Cannot Tell You
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
            Continue Your Texas Military Homebuying Research
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
