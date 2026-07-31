import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const navy = "#1a3a5c";
const hero = "#1a2535";
const copper = "#b5621e";
const ivory = "#faf8f4";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.62)";
const green = "#2d6b4f";

const money = (value: number, decimals = 0) =>
  (Number.isFinite(value) ? Math.max(value, 0) : 0).toLocaleString("en-US", {
    style: "currency", currency: "USD", minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  });

const monthlyPayment = (principal: number, annualRate: number, years: number) => {
  if (principal <= 0 || years <= 0) return 0;
  const months = years * 12;
  const rate = Math.max(annualRate, 0) / 100 / 12;
  if (rate === 0) return principal / months;
  return principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
};

const field: CSSProperties = {
  width: "100%", boxSizing: "border-box", border: "1px solid rgba(26,58,92,0.2)",
  borderRadius: 8, padding: "11px 13px", color: navy, background: white,
  fontFamily: "'Outfit', sans-serif", fontSize: 15,
};

const label: CSSProperties = {
  display: "block", marginBottom: 6, color: muted, fontSize: 11, fontWeight: 700,
  letterSpacing: "0.07em", textTransform: "uppercase",
};

function Input({ title, value, onChange, step = "0.05", help }: {
  title: string; value: string; onChange: (value: string) => void; step?: string; help?: string;
}) {
  return <div>
    <label style={label}>{title}</label>
    <input style={field} type="number" min="0" step={step} value={value} onChange={(e) => onChange(e.target.value)} />
    {help && <div style={{ color: muted, fontSize: 11, lineHeight: 1.45, marginTop: 5 }}>{help}</div>}
  </div>;
}

function Metric({ title, value, strong = false }: { title: string; value: string; strong?: boolean }) {
  return <div style={{ display: "flex", justifyContent: "space-between", gap: 14, padding: "10px 0", borderBottom: "1px solid rgba(26,58,92,0.1)" }}>
    <span style={{ color: muted, fontSize: 12 }}>{title}</span>
    <span style={{ color: navy, fontSize: strong ? 17 : 14, fontWeight: strong ? 800 : 650, textAlign: "right" }}>{value}</span>
  </div>;
}

const structures = {
  "1-0": [1],
  "2-1": [2, 1],
  "3-2-1": [3, 2, 1],
} as const;

function TemporaryBuydownComparison() {
  const [loan, setLoan] = useState("400000");
  const [term, setTerm] = useState("30");
  const [noteRate, setNoteRate] = useState("6.50");
  const [credit, setCredit] = useState("15000");
  const [otherHousing, setOtherHousing] = useState("850");
  const [structure, setStructure] = useState<keyof typeof structures>("2-1");
  const [permanentRate, setPermanentRate] = useState("6.00");
  const [permanentCost, setPermanentCost] = useState("8000");
  const [closingCosts, setClosingCosts] = useState("12000");
  const [years, setYears] = useState("5");

  const values = useMemo(() => {
    const principal = Math.max(Number(loan) || 0, 0);
    const loanYears = Math.max(Number(term) || 30, 1);
    const fullRate = Math.max(Number(noteRate) || 0, 0);
    const availableCredit = Math.max(Number(credit) || 0, 0);
    const sharedHousing = Math.max(Number(otherHousing) || 0, 0);
    const monthsCompared = Math.min(Math.max(Number(years) || 5, 1) * 12, loanYears * 12);
    const fullPI = monthlyPayment(principal, fullRate, loanYears);
    const steps = structures[structure].map((reduction, index) => {
      const rate = Math.max(fullRate - reduction, 0);
      const pi = monthlyPayment(principal, rate, loanYears);
      const monthlyRelief = Math.max(fullPI - pi, 0);
      return { year: index + 1, rate, pi, housing: pi + sharedHousing, monthlyRelief, subsidy: monthlyRelief * 12 };
    });
    const tempSubsidy = steps.reduce((sum, step) => sum + step.subsidy, 0);
    const tempReliefWithinPeriod = steps
      .slice(0, Math.min(steps.length, Math.ceil(monthsCompared / 12)))
      .reduce((sum, step, index) => sum + step.monthlyRelief * Math.min(12, Math.max(monthsCompared - index * 12, 0)), 0);

    const permRate = Math.max(Number(permanentRate) || 0, 0);
    const permPI = monthlyPayment(principal, permRate, loanYears);
    const permMonthlyRelief = Math.max(fullPI - permPI, 0);
    const quotedPermanentCost = Math.max(Number(permanentCost) || 0, 0);
    const permReliefWithinPeriod = permMonthlyRelief * monthsCompared;
    const permBreakEven = permMonthlyRelief > 0 ? quotedPermanentCost / permMonthlyRelief : null;

    const estimatedClosingCosts = Math.max(Number(closingCosts) || 0, 0);
    const closingCreditUsed = Math.min(availableCredit, estimatedClosingCosts);

    return {
      availableCredit, sharedHousing, monthsCompared, fullPI, fullHousing: fullPI + sharedHousing,
      steps, tempSubsidy, tempReliefWithinPeriod, tempBalance: availableCredit - tempSubsidy,
      permPI, permHousing: permPI + sharedHousing, permMonthlyRelief, quotedPermanentCost,
      permReliefWithinPeriod, permBreakEven, permBalance: availableCredit - quotedPermanentCost,
      estimatedClosingCosts, closingCreditUsed, closingBalance: availableCredit - closingCreditUsed,
      closingCostsRemaining: Math.max(estimatedClosingCosts - closingCreditUsed, 0),
    };
  }, [loan, term, noteRate, credit, otherHousing, structure, permanentRate, permanentCost, closingCosts, years]);

  const balanceText = (balance: number) => balance >= 0 ? money(balance) + " remaining" : money(Math.abs(balance)) + " shortage";

  return <div style={{ background: white, borderRadius: 14, boxShadow: "0 3px 24px rgba(26,58,92,0.09)", overflow: "hidden" }}>
    <div style={{ background: navy, padding: "26px 30px" }}>
      <h2 style={{ margin: 0, color: white, fontFamily: "'Lora', serif", fontSize: 23 }}>Seller Credit Comparison</h2>
      <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>Test three uses of the same available credit.</p>
    </div>
    <div style={{ padding: 30 }}>
      <div style={{ padding: "16px 18px", marginBottom: 28, borderLeft: "4px solid " + copper, borderRadius: 8, background: "#f7efe7", color: navy, fontSize: 14, lineHeight: 1.65 }}>
        Use actual lender quotes for the permanent rate and its cost. A temporary buydown changes the payment schedule, not the note rate. Taxes, insurance, HOA dues, and mortgage insurance do not decrease.
      </div>

      <h3 style={{ fontFamily: "'Lora', serif", color: navy, fontSize: 17, borderBottom: "2px solid " + copper, paddingBottom: 8 }}>01 · Shared scenario</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18, marginBottom: 30 }}>
        <Input title="Loan amount" value={loan} onChange={setLoan} step="5000" />
        <div><label style={label}>Loan term</label><select style={field} value={term} onChange={(e) => setTerm(e.target.value)}><option value="30">30 years</option><option value="20">20 years</option><option value="15">15 years</option></select></div>
        <Input title="Full note rate (%)" value={noteRate} onChange={setNoteRate} />
        <Input title="Available seller or builder credit" value={credit} onChange={setCredit} step="500" />
        <Input title="Other monthly housing costs" value={otherHousing} onChange={setOtherHousing} step="25" help="Taxes, homeowners and flood insurance, HOA, and mortgage insurance." />
        <div><label style={label}>Comparison period</label><select style={field} value={years} onChange={(e) => setYears(e.target.value)}><option value="1">1 year</option><option value="3">3 years</option><option value="5">5 years</option><option value="7">7 years</option><option value="10">10 years</option></select></div>
      </div>

      <div style={{ padding: 18, borderRadius: 10, background: navy, color: white, marginBottom: 26 }}>
        <div style={{ color: copper, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>Full payment used for planning</div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: 28, fontWeight: 800, marginTop: 5 }}>{money(values.fullHousing, 2)} / month</div>
        <div style={{ color: "rgba(255,255,255,0.68)", fontSize: 12, marginTop: 5 }}>{money(values.fullPI, 2)} principal and interest plus {money(values.sharedHousing, 2)} other housing costs.</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))", gap: 18 }}>
        <section style={{ padding: 20, borderRadius: 10, background: "#f7efe7", borderTop: "4px solid " + copper }}>
          <h3 style={{ margin: "0 0 16px", color: navy, fontFamily: "'Lora', serif", fontSize: 18 }}>Temporary buydown</h3>
          <div style={{ marginBottom: 14 }}><label style={label}>Structure</label><select style={field} value={structure} onChange={(e) => setStructure(e.target.value as keyof typeof structures)}><option value="1-0">1-0 buydown</option><option value="2-1">2-1 buydown</option><option value="3-2-1">3-2-1 buydown</option></select></div>
          {values.steps.map((step) => <Metric key={step.year} title={"Year " + step.year + " payment at " + step.rate.toFixed(2) + "%"} value={money(step.housing, 2)} />)}
          <Metric title="Permanent payment after buydown" value={money(values.fullHousing, 2)} strong />
          <Metric title="Subsidy required" value={money(values.tempSubsidy)} />
          <Metric title="Credit position" value={balanceText(values.tempBalance)} />
          <Metric title={"Payment relief in " + years + " years"} value={money(values.tempReliefWithinPeriod)} />
        </section>

        <section style={{ padding: 20, borderRadius: 10, background: "#f0f4f8", borderTop: "4px solid " + navy }}>
          <h3 style={{ margin: "0 0 16px", color: navy, fontFamily: "'Lora', serif", fontSize: 18 }}>Permanent rate reduction</h3>
          <div style={{ display: "grid", gap: 14, marginBottom: 10 }}>
            <Input title="Quoted permanent rate (%)" value={permanentRate} onChange={setPermanentRate} />
            <Input title="Quoted cost for that rate" value={permanentCost} onChange={setPermanentCost} step="500" />
          </div>
          <Metric title="Monthly housing payment" value={money(values.permHousing, 2)} strong />
          <Metric title="Monthly payment reduction" value={money(values.permMonthlyRelief, 2)} />
          <Metric title="Credit position" value={balanceText(values.permBalance)} />
          <Metric title={"Payment reduction in " + years + " years"} value={money(values.permReliefWithinPeriod)} />
          <Metric title="Simple cost recovery" value={values.permBreakEven === null ? "No payment reduction" : values.permBreakEven.toFixed(1) + " months"} />
        </section>

        <section style={{ padding: 20, borderRadius: 10, background: "#edf4ef", borderTop: "4px solid " + green }}>
          <h3 style={{ margin: "0 0 16px", color: navy, fontFamily: "'Lora', serif", fontSize: 18 }}>Closing-cost credit</h3>
          <div style={{ marginBottom: 12 }}><Input title="Estimated eligible closing costs" value={closingCosts} onChange={setClosingCosts} step="500" /></div>
          <Metric title="Monthly housing payment" value={money(values.fullHousing, 2)} strong />
          <Metric title="Credit applied to closing costs" value={money(values.closingCreditUsed)} />
          <Metric title="Estimated cash preserved" value={money(values.closingCreditUsed)} />
          <Metric title="Closing costs left to cover" value={money(values.closingCostsRemaining)} />
          <Metric title="Unused credit" value={money(Math.max(values.closingBalance, 0))} />
        </section>
      </div>

      <div style={{ marginTop: 24, padding: 20, borderRadius: 10, background: navy, color: white }}>
        <div style={{ color: copper, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>How to read this comparison</div>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.65 }}>
          Temporary relief may help early cash flow. A permanent reduction may benefit a borrower who keeps the loan long enough. A closing-cost credit may preserve the most cash at closing. The best use depends on the actual quotes, eligible costs, expected time in the loan, and program limits.
        </p>
      </div>

      <div style={{ marginTop: 18, padding: 16, borderRadius: 8, background: "#f0f4f8", borderLeft: "3px solid " + copper, color: muted, fontSize: 11, lineHeight: 1.65 }}>
        Educational estimate only. This is not a Loan Estimate, approval, or recommendation. Temporary buydown funds are deposited into a subsidy account and are not free savings. Qualification generally uses the full note-rate payment. Seller, builder, and lender credits, temporary buydowns, discount points, and eligible closing costs are subject to loan-program, interested-party contribution, underwriting, and transaction limits. Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518.
      </div>
    </div>
  </div>;
}

export default function TemporaryBuydownCalculatorPage() {
  return <>
    <SEO title="Temporary Buydown vs. Permanent Rate Calculator | Texas | Keys by Shalanda" description="Compare a temporary buydown, permanent rate reduction, and closing-cost credit using the same available seller or builder credit." canonical="/calculators/temporary-buydown" />
    <section style={{ background: hero, padding: "72px 0 56px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "inline-flex", border: "1px solid " + copper, borderRadius: 999, padding: "6px 16px", color: copper, fontSize: 12, fontFamily: "'Fira Mono', monospace", marginBottom: 28 }}>Texas Homebuyer Tool</div>
        <h1 style={{ margin: "0 0 18px", maxWidth: 850, color: white, fontFamily: "'Lora', serif", fontSize: 42, lineHeight: 1.15 }}>Compare the real value of a seller or builder credit.</h1>
        <p style={{ margin: 0, maxWidth: 800, color: "rgba(255,255,255,0.78)", fontSize: 17, lineHeight: 1.65 }}>Put the same available credit toward a temporary buydown, a quoted permanent rate reduction, or eligible closing costs and see what each choice actually changes.</p>
      </div>
    </section>
    <section style={{ background: ivory, padding: "72px 0" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif" }}><TemporaryBuydownComparison /></div>
    </section>
    <section style={{ padding: "56px 0", background: white }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <p style={{ margin: "0 0 10px", color: navy, fontFamily: "'Lora', serif", fontSize: 22 }}>Need the complete payment first?</p>
        <Link to="/calculators/texas-mortgage-payment" style={{ color: copper, fontWeight: 700, textDecoration: "none" }}>Use the Texas Mortgage Payment Calculator →</Link>
        <div style={{ marginTop: 18 }}><Link to="/calculators" style={{ color: muted, textDecoration: "none", fontSize: 14 }}>Browse all mortgage calculators</Link></div>
      </div>
    </section>
  </>;
}
