import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import RentalPortfolioPlannerCalc from "@/components/calculators/RentalPortfolioPlannerCalc";

const navy = "#1a3a5c";
const copper = "#b5621e";
const white = "#ffffff";
const ivory = "#faf8f4";
const container = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" } as const;

const FAQS = [
  ["What does estimated cash flow include?", "The planner subtracts property taxes, insurance, HOA dues, owner-paid utilities, vacancy, maintenance, capital reserves, management, and debt service from gross rent. It is a pre-tax planning estimate, not an accounting statement."],
  ["Why does each future property need a purchase year?", "A property bought five years from now should not receive five years of appreciation, rent growth, or mortgage paydown before it is owned. Purchase timing keeps the projection from overstating results."],
  ["Why show three appreciation scenarios?", "No one knows future appreciation. Conservative, moderate, and optimistic views show how heavily the projected equity depends on that assumption."],
  ["Does future cash needed include everything required to close?", "No. The displayed amount includes planned down payments only. Closing costs, prepaid items, repairs, lender-required reserves, and post-closing liquidity should be planned separately."],
  ["Is this a promise that my retirement strategy is on track?", "No. It is an educational model based on the assumptions entered. Financing, taxes, property performance, market conditions, and personal plans can change."],
];

export default function RentalPortfolioPlannerPage() {
  return (
    <>
      <SEO title="Rental Portfolio Planner | Texas Real Estate Investors" description="Model rental purchase timing, operating expenses, debt service, projected equity, cash needed, and estimated pre-tax cash flow for a real estate portfolio." canonical="/calculators/rental-portfolio-planner" />
      <section style={{ backgroundColor: "#1a2535", padding: "72px 0 58px" }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper }}>Texas Investor Planning Tool</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 44, color: white, lineHeight: 1.12, margin: "0 0 20px", maxWidth: 820 }}>Rental Portfolio Planner</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.78)", lineHeight: 1.65, maxWidth: 780, margin: 0 }}>Build a property-by-property projection using realistic acquisition timing, operating expenses, financing, and multiple appreciation scenarios.</p>
        </div>
      </section>
      <section style={{ backgroundColor: ivory, padding: "72px 0" }}><div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}><RentalPortfolioPlannerCalc /></div></section>
      <section style={{ backgroundColor: white, padding: "72px 0" }}>
        <div style={container}>
          <p style={{ fontFamily: "'Fira Mono',monospace", color: copper, fontSize: 11, textTransform: "uppercase", letterSpacing: ".12em" }}>FAQ · Portfolio Planning</p>
          <h2 style={{ fontFamily: "'Lora',serif", color: navy, fontSize: 31, marginBottom: 28 }}>What This Projection Can and Cannot Tell You</h2>
          <div style={{ display: "grid", gap: 12, maxWidth: 900 }}>{FAQS.map(([q, a]) => <details key={q} style={{ border: "1px solid rgba(26,58,92,.12)", borderRadius: 8, padding: "18px 22px", background: "#fbfaf7" }}><summary style={{ cursor: "pointer", color: navy, fontFamily: "'Lora',serif", fontWeight: 700 }}>{q}</summary><p style={{ color: "#4a5568", lineHeight: 1.65, margin: "12px 0 0" }}>{a}</p></details>)}</div>
          <div style={{ marginTop: 38, display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link to="/investors" style={{ color: white, background: navy, padding: "12px 20px", borderRadius: 6, textDecoration: "none", fontWeight: 700 }}>Explore Investor Loan Options</Link>
            <Link to="/calculators/texas-mortgage-payment" style={{ color: navy, border: `1px solid ${navy}`, padding: "12px 20px", borderRadius: 6, textDecoration: "none", fontWeight: 700 }}>Texas Payment Calculator</Link>
          </div>
        </div>
      </section>
    </>
  );
}
