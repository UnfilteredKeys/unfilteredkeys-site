import { useMemo, useState } from "react";

const navy = "#1a3a5c";
const copper = "#b5621e";
const white = "#ffffff";
const muted = "#5f6b78";
const green = "#2f6b35";
const red = "#9a3d32";
const border = "rgba(26,58,92,0.14)";

const money = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

const field = {
  width: "100%",
  border: `1px solid ${border}`,
  borderRadius: 7,
  padding: "12px 13px",
  fontFamily: "'Outfit', sans-serif",
  fontSize: 15,
  color: navy,
  backgroundColor: white,
} as const;

const label = {
  display: "block",
  marginBottom: 7,
  fontSize: 12,
  fontWeight: 700,
  color: navy,
  letterSpacing: "0.03em",
} as const;

function monthlyPrincipalAndInterest(principal: number, annualRate: number, years: number) {
  if (principal <= 0) return 0;
  const payments = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / payments;
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
}

export default function BahHousingBudgetCalc() {
  const [bah, setBah] = useState(2000);
  const [comfortPct, setComfortPct] = useState(90);
  const [loanAmount, setLoanAmount] = useState(275000);
  const [rate, setRate] = useState(6.25);
  const [term, setTerm] = useState(30);
  const [annualTaxes, setAnnualTaxes] = useState(5500);
  const [annualInsurance, setAnnualInsurance] = useState(2400);
  const [monthlyHoa, setMonthlyHoa] = useState(0);
  const [annualFlood, setAnnualFlood] = useState(0);
  const [monthlyUtilities, setMonthlyUtilities] = useState(250);
  const [monthlyMaintenance, setMonthlyMaintenance] = useState(150);

  const results = useMemo(() => {
    const pi = monthlyPrincipalAndInterest(loanAmount, rate, term);
    const taxes = annualTaxes / 12;
    const insurance = annualInsurance / 12;
    const flood = annualFlood / 12;
    const mortgagePayment = pi + taxes + insurance + monthlyHoa + flood;
    const completeHousing = mortgagePayment + monthlyUtilities + monthlyMaintenance;
    const selectedBahBudget = bah * (comfortPct / 100);
    return {
      pi,
      taxes,
      insurance,
      flood,
      mortgagePayment,
      completeHousing,
      selectedBahBudget,
      fullBahDifference: bah - completeHousing,
      comfortDifference: selectedBahBudget - completeHousing,
    };
  }, [bah, comfortPct, loanAmount, rate, term, annualTaxes, annualInsurance, monthlyHoa, annualFlood, monthlyUtilities, monthlyMaintenance]);

  const numberInput = (id: string, text: string, value: number, setter: (value: number) => void, step = 50) => (
    <div>
      <label htmlFor={id} style={label}>{text}</label>
      <input
        id={id}
        type="number"
        min="0"
        step={step}
        value={value}
        onChange={(event) => setter(Math.max(0, Number(event.target.value) || 0))}
        style={field}
      />
    </div>
  );

  const differenceCard = (title: string, difference: number) => {
    const covered = difference >= 0;
    return (
      <div style={{ borderRadius: 8, padding: "18px 20px", backgroundColor: covered ? "#eef7ec" : "#fff1ee", borderLeft: `4px solid ${covered ? green : red}` }}>
        <div style={{ fontSize: 12, color: muted, marginBottom: 5 }}>{title}</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 24, fontWeight: 700, color: covered ? green : red }}>
          {money(Math.abs(difference))}/mo {covered ? "remaining" : "above budget"}
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: white, borderRadius: 12, boxShadow: "0 10px 32px rgba(26,58,92,0.09)", overflow: "hidden" }}>
      <div style={{ backgroundColor: navy, padding: "25px 28px" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 25, color: white, margin: "0 0 8px" }}>Texas Military Housing Budget Calculator</h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
          Compare the BAH shown on your LES with an estimated mortgage payment and broader monthly housing costs.
        </p>
      </div>

      <div style={{ padding: 28 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
          {numberInput("monthly-bah", "Actual monthly BAH from your LES ($)", bah, setBah)}
          <div>
            <label htmlFor="bah-comfort" style={label}>Percentage of BAH you want to budget</label>
            <select id="bah-comfort" value={comfortPct} onChange={(event) => setComfortPct(Number(event.target.value))} style={field}>
              <option value={80}>80% of BAH</option>
              <option value={85}>85% of BAH</option>
              <option value={90}>90% of BAH</option>
              <option value={95}>95% of BAH</option>
              <option value={100}>100% of BAH</option>
            </select>
          </div>
        </div>

        <div style={{ margin: "18px 0 28px", padding: "15px 18px", borderRadius: 8, backgroundColor: "#f6f3ed", fontSize: 13, color: muted, lineHeight: 1.65 }}>
          Need your current rate? Use the official <a href="https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/BAH-Rate-Lookup/" target="_blank" rel="noopener noreferrer" style={{ color: navy, fontWeight: 700 }}>DoD BAH Rate Lookup</a>. Your LES is the best source for the amount you currently receive.
        </div>

        <h3 style={{ fontFamily: "'Lora', serif", color: navy, fontSize: 19, margin: "0 0 16px" }}>Estimated mortgage payment</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18 }}>
          {numberInput("loan-amount", "Estimated loan amount ($)", loanAmount, setLoanAmount, 1000)}
          {numberInput("interest-rate", "Interest rate (%)", rate, setRate, 0.125)}
          <div>
            <label htmlFor="loan-term" style={label}>Loan term</label>
            <select id="loan-term" value={term} onChange={(event) => setTerm(Number(event.target.value))} style={field}>
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
            </select>
          </div>
          {numberInput("annual-taxes", "Annual property taxes ($)", annualTaxes, setAnnualTaxes)}
          {numberInput("annual-insurance", "Annual homeowners insurance ($)", annualInsurance, setAnnualInsurance)}
          {numberInput("monthly-hoa", "Monthly HOA dues ($)", monthlyHoa, setMonthlyHoa)}
          {numberInput("annual-flood", "Annual flood insurance ($)", annualFlood, setAnnualFlood)}
        </div>

        <h3 style={{ fontFamily: "'Lora', serif", color: navy, fontSize: 19, margin: "30px 0 16px" }}>Broader housing costs</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
          {numberInput("monthly-utilities", "Estimated monthly utilities ($)", monthlyUtilities, setMonthlyUtilities)}
          {numberInput("monthly-maintenance", "Optional maintenance allowance ($)", monthlyMaintenance, setMonthlyMaintenance)}
        </div>

        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {[
            ["Principal & interest", results.pi],
            ["Property taxes", results.taxes],
            ["Homeowners insurance", results.insurance],
            ["HOA dues", monthlyHoa],
            ["Flood insurance", results.flood],
          ].map(([name, value]) => (
            <div key={String(name)} style={{ border: `1px solid ${border}`, borderRadius: 8, padding: "14px 16px" }}>
              <div style={{ color: muted, fontSize: 11, marginBottom: 5 }}>{name}</div>
              <div style={{ color: navy, fontWeight: 700 }}>{money(Number(value))}/mo</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 }}>
          <div style={{ backgroundColor: "#f5f7f9", borderRadius: 8, padding: "18px 20px" }}>
            <div style={{ fontSize: 12, color: muted, marginBottom: 5 }}>Estimated mortgage payment</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700, color: navy }}>{money(results.mortgagePayment)}/mo</div>
          </div>
          <div style={{ backgroundColor: navy, borderRadius: 8, padding: "18px 20px" }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 5 }}>Broader estimated housing cost</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 26, fontWeight: 700, color: white }}>{money(results.completeHousing)}/mo</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
          {differenceCard(`Compared with full BAH of ${money(bah)}`, results.fullBahDifference)}
          {differenceCard(`Compared with your ${comfortPct}% BAH budget of ${money(results.selectedBahBudget)}`, results.comfortDifference)}
        </div>

        <div style={{ marginTop: 24, padding: "17px 19px", borderRadius: 8, borderLeft: `4px solid ${copper}`, backgroundColor: "#fbf7f1", color: "#3d4f63", fontSize: 13, lineHeight: 1.7 }}>
          BAH is designed to offset most typical local housing costs, including rent and average utilities. It is not guaranteed to cover a homeowner's complete monthly expense. HOA dues, maintenance, flood insurance, and the home you choose can create a gap even when the mortgage payment appears to fit within BAH.
        </div>

        <div style={{ marginTop: 20, color: muted, fontSize: 12, lineHeight: 1.65 }}>
          This calculator is an educational housing-budget estimate. It is not a mortgage application, prequalification, credit decision, loan approval, or rate quote. It does not evaluate income, debts, credit, residual income, assets, occupancy, entitlement, or lender requirements. Enter a financed VA funding fee in the estimated loan amount when applicable. Verify taxes, insurance, HOA dues, flood requirements, utilities, and your current BAH before making a housing decision.
          <br /><br />
          Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed by the Texas Department of Savings and Mortgage Lending
        </div>
      </div>
    </div>
  );
}
