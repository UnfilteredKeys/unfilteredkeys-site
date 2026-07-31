import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { TexasPaymentCalc } from "./calculators";

const hero = "#1a2535";
const navy = "#1a3a5c";
const copper = "#b5621e";
const ivory = "#faf8f4";
const white = "#ffffff";
const sectionPad = { padding: "72px 0" } as const;
const container = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" } as const;

export default function TexasMortgagePaymentCalculatorPage() {
  return (
    <>
      <SEO
        title="Texas Mortgage Payment Calculator | Keys by Shalanda"
        description="Estimate a complete Texas monthly housing payment with principal, interest, property taxes, homeowners insurance, flood insurance, HOA dues, and applicable mortgage insurance or agency fees."
        canonical="/calculators/texas-mortgage-payment"
      />

      <section style={{ backgroundColor: hero, ...sectionPad, paddingBottom: 56 }}>
        <div style={container}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${copper}`, borderRadius: 999, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: copper }} />
            <span style={{ fontSize: 12, fontFamily: "'Fira Mono', monospace", color: copper, letterSpacing: "0.04em" }}>Texas Homebuyer Tool</span>
          </div>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 42, fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: 20, maxWidth: 760 }}>
            Texas Mortgage Payment Calculator
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: 760, margin: 0 }}>
            Estimate the full monthly housing expense for a specific Texas property, including the costs generic principal-and-interest calculators leave out.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: ivory, ...sectionPad }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif", color: navy }}>
          <TexasPaymentCalc />
        </div>
      </section>

      <section style={{ backgroundColor: white, padding: "56px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: 22, color: navy, margin: "0 0 12px" }}>
            Looking for a different mortgage question?
          </p>
          <Link to="/calculators" style={{ color: copper, fontWeight: 600, textDecoration: "none" }}>
            Browse all mortgage calculators →
          </Link>
        </div>
      </section>
    </>
  );
}
