import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const navy = "#1a3a5c";
const hero = "#1a2535";
const copper = "#b5621e";
const ivory = "#faf8f4";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.6)";
const green = "#2d6b4f";

const money = (value: number, decimals = 0) =>
  (Number.isFinite(value) ? Math.max(value, 0) : 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

const monthlyPayment = (principal: number, annualRate: number, years: number) => {
  if (principal <= 0 || years <= 0) return 0;
  const months = years * 12;
  const rate = Math.max(annualRate, 0) / 100 / 12;
  if (rate === 0) return principal / months;
  return principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
};

const balanceAfter = (principal: number, annualRate: number, years: number, monthsPaid: number) => {
  if (principal <= 0) return 0;
  const totalMonths = years * 12;
  const elapsed = Math.min(Math.max(monthsPaid, 0), totalMonths);
  const rate = Math.max(annualRate, 0) / 100 / 12;
  if (rate === 0) return Math.max(principal * (1 - elapsed / totalMonths), 0);
  const payment = monthlyPayment(principal, annualRate, years);
  return Math.max(principal * Math.pow(1 + rate, elapsed) - payment * ((Math.pow(1 + rate, elapsed) - 1) / rate), 0);
};

const firstMonthAtBalance = (principal: number, annualRate: number, years: number, target: number) => {
  if (principal <= target) return 0;
  for (let month = 1; month <= years * 12; month += 1) {
    if (balanceAfter(principal, annualRate, years, month) <= target) return month;
  }
  return null;
};

const field: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid rgba(26,58,92,0.2)",
  borderRadius: 8,
  padding: "11px 13px",
  color: navy,
  background: white,
  fontFamily: "'Outfit', sans-serif",
  fontSize: 15,
};

const label: CSSProperties = {
  display: "block",
  marginBottom: 6,
  color: muted,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
};

function Input({
  title,
  value,
  onChange,
  step = "0.05",
  help,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  step?: string;
  help?: string;
}) {
  return (
    <div>
      <label style={label}>{title}</label>
      <input style={field} type="number" min="0" step={step} value={value} onChange={(event) => onChange(event.target.value)} />
      {help && <div style={{ color: muted, fontSize: 11, lineHeight: 1.45, marginTop: 5 }}>{help}</div>}
    </div>
  );
}

function Metric({ title, fha, conventional, emphasize = false }: { title: string; fha: string; conventional: string; emphasize?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(135px, 1.3fr) 1fr 1fr", gap: 10, alignItems: "center", padding: "13px 0", borderBottom: "1px solid rgba(26,58,92,0.1)" }}>
      <div style={{ color: muted, fontSize: 12, fontWeight: 600 }}>{title}</div>
      <div style={{ color: navy, fontWeight: emphasize ? 800 : 600, fontSize: emphasize ? 17 : 14 }}>{fha}</div>
      <div style={{ color: navy, fontWeight: emphasize ? 800 : 600, fontSize: emphasize ? 17 : 14 }}>{conventional}</div>
    </div>
  );
}

function FhaVsConventionalCalculator() {
  const [price, setPrice] = useState("350000");
  const [term, setTerm] = useState("30");
  const [yearsCompared, setYearsCompared] = useState("5");
  const [taxRate, setTaxRate] = useState("2.10");
  const [insurance, setInsurance] = useState("2100");
  const [flood, setFlood] = useState("0");
  const [hoa, setHoa] = useState("0");

  const [fhaDown, setFhaDown] = useState("3.5");
  const [fhaRate, setFhaRate] = useState("6.25");
  const [fhaMipRate, setFhaMipRate] = useState("0.55");
  const [financeUfmip, setFinanceUfmip] = useState(true);

  const [convDown, setConvDown] = useState("5");
  const [convRate, setConvRate] = useState("6.50");
  const [monthlyPmi, setMonthlyPmi] = useState("165");

  const values = useMemo(() => {
    const homePrice = Math.max(Number(price) || 0, 0);
    const loanYears = Math.max(Number(term) || 30, 1);
    const comparisonMonths = Math.min(Math.max(Number(yearsCompared) || 5, 1) * 12, loanYears * 12);
    const common = homePrice * (Math.max(Number(taxRate) || 0, 0) / 100) / 12
      + Math.max(Number(insurance) || 0, 0) / 12
      + Math.max(Number(flood) || 0, 0) / 12
      + Math.max(Number(hoa) || 0, 0);

    const fhaDownPct = Math.min(Math.max(Number(fhaDown) || 0, 0), 100);
    const fhaDownAmount = homePrice * fhaDownPct / 100;
    const fhaBase = Math.max(homePrice - fhaDownAmount, 0);
    const ufmip = fhaBase * 0.0175;
    const fhaFinanced = fhaBase + (financeUfmip ? ufmip : 0);
    const fhaAnnualRate = Math.max(Number(fhaRate) || 0, 0);
    const fhaPI = monthlyPayment(fhaFinanced, fhaAnnualRate, loanYears);
    const fhaMonthlyMip = fhaBase * (Math.max(Number(fhaMipRate) || 0, 0) / 100) / 12;
    const fhaMipMonths = fhaDownPct >= 10 ? Math.min(comparisonMonths, 132) : comparisonMonths;
    const fhaHousing = fhaPI + fhaMonthlyMip + common;
    const fhaBalance = balanceAfter(fhaFinanced, fhaAnnualRate, loanYears, comparisonMonths);
    const fhaInterest = fhaPI * comparisonMonths - (fhaFinanced - fhaBalance);
    const fhaMipPaid = fhaMonthlyMip * fhaMipMonths;
    const fhaFinancingCost = Math.max(fhaInterest, 0) + fhaMipPaid + ufmip;
    const fhaUpfrontFunds = fhaDownAmount + (financeUfmip ? 0 : ufmip);

    const convDownPct = Math.min(Math.max(Number(convDown) || 0, 0), 100);
    const convDownAmount = homePrice * convDownPct / 100;
    const convBase = Math.max(homePrice - convDownAmount, 0);
    const convAnnualRate = Math.max(Number(convRate) || 0, 0);
    const convPI = monthlyPayment(convBase, convAnnualRate, loanYears);
    const pmiQuote = Math.max(Number(monthlyPmi) || 0, 0);
    const requestMonth = firstMonthAtBalance(convBase, convAnnualRate, loanYears, homePrice * 0.8);
    const automaticMonth = firstMonthAtBalance(convBase, convAnnualRate, loanYears, homePrice * 0.78);
    const pmiEndMonth = pmiQuote > 0 ? (automaticMonth ?? loanYears * 12) : 0;
    const pmiMonthsCompared = Math.min(comparisonMonths, pmiEndMonth);
    const convHousing = convPI + pmiQuote + common;
    const convBalance = balanceAfter(convBase, convAnnualRate, loanYears, comparisonMonths);
    const convInterest = convPI * comparisonMonths - (convBase - convBalance);
    const convPmiPaid = pmiQuote * pmiMonthsCompared;
    const convFinancingCost = Math.max(convInterest, 0) + convPmiPaid;

    return {
      comparisonMonths,
      common,
      fhaDownPct,
      fhaDownAmount,
      fhaBase,
      ufmip,
      fhaFinanced,
      fhaPI,
      fhaMonthlyMip,
      fhaHousing,
      fhaBalance,
      fhaInterest,
      fhaMipPaid,
      fhaFinancingCost,
      fhaUpfrontFunds,
      convDownPct,
      convDownAmount,
      convBase,
      convPI,
      pmiQuote,
      convHousing,
      convBalance,
      convInterest,
      convPmiPaid,
      convFinancingCost,
      requestMonth,
      automaticMonth,
    };
  }, [price, term, yearsCompared, taxRate, insurance, flood, hoa, fhaDown, fhaRate, fhaMipRate, financeUfmip, convDown, convRate, monthlyPmi]);

  const monthLabel = (month: number | null) => {
    if (month === null) return "Not reached in selected term";
    if (month === 0) return "At closing";
    const years = Math.floor(month / 12);
    const months = month % 12;
    return [years ? years + " yr" : "", months ? months + " mo" : ""].filter(Boolean).join(" ");
  };

  return (
    <div style={{ background: white, borderRadius: 14, boxShadow: "0 3px 24px rgba(26,58,92,0.09)", overflow: "hidden" }}>
      <div style={{ background: navy, padding: "26px 30px" }}>
        <h2 style={{ margin: 0, color: white, fontFamily: "'Lora', serif", fontSize: 23 }}>FHA vs. Conventional Comparison</h2>
        <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>Compare two actual loan quotes without manufacturing a winner.</p>
      </div>

      <div style={{ padding: 30 }}>
        <div style={{ padding: "16px 18px", marginBottom: 28, borderLeft: "4px solid " + copper, borderRadius: 8, background: "#f7efe7", color: navy, fontSize: 14, lineHeight: 1.65 }}>
          Enter the rates, down payments, and mortgage-insurance figures from real quotes when possible. The lowest rate, payment, or upfront amount may belong to different options.
        </div>

        <h3 style={{ fontFamily: "'Lora', serif", color: navy, fontSize: 17, borderBottom: "2px solid " + copper, paddingBottom: 8 }}>01 · Property and timeline</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18, marginBottom: 30 }}>
          <Input title="Home price" value={price} onChange={setPrice} step="5000" />
          <div><label style={label}>Loan term</label><select style={field} value={term} onChange={(event) => setTerm(event.target.value)}><option value="30">30 years</option><option value="20">20 years</option><option value="15">15 years</option></select></div>
          <div><label style={label}>Comparison period</label><select style={field} value={yearsCompared} onChange={(event) => setYearsCompared(event.target.value)}><option value="1">1 year</option><option value="3">3 years</option><option value="5">5 years</option><option value="7">7 years</option><option value="10">10 years</option><option value="15">15 years</option></select></div>
          <Input title="Combined property tax rate (%)" value={taxRate} onChange={setTaxRate} step="0.01" help="Use the property's full combined rate, including any MUD." />
          <Input title="Annual homeowners insurance" value={insurance} onChange={setInsurance} step="100" />
          <Input title="Annual flood insurance" value={flood} onChange={setFlood} step="100" help="Optional. Enter 0 if not applicable." />
          <Input title="Monthly HOA dues" value={hoa} onChange={setHoa} step="25" help="Optional. Enter 0 if not applicable." />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 30 }}>
          <section style={{ padding: 22, borderRadius: 10, background: "#f7efe7", borderTop: "4px solid " + copper }}>
            <h3 style={{ margin: "0 0 18px", color: navy, fontFamily: "'Lora', serif", fontSize: 18 }}>02 · FHA quote</h3>
            <div style={{ display: "grid", gap: 16 }}>
              <Input title="FHA down payment (%)" value={fhaDown} onChange={setFhaDown} step="0.5" />
              <Input title="FHA interest rate (%)" value={fhaRate} onChange={setFhaRate} />
              <Input title="Annual FHA MIP rate (%)" value={fhaMipRate} onChange={setFhaMipRate} step="0.05" help="Default is 0.55%. Use the rate shown on the actual quote." />
              <label style={{ display: "flex", gap: 10, alignItems: "center", color: navy, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                <input type="checkbox" checked={financeUfmip} onChange={(event) => setFinanceUfmip(event.target.checked)} />
                Finance the 1.75% upfront MIP
              </label>
            </div>
          </section>

          <section style={{ padding: 22, borderRadius: 10, background: "#f0f4f8", borderTop: "4px solid " + navy }}>
            <h3 style={{ margin: "0 0 18px", color: navy, fontFamily: "'Lora', serif", fontSize: 18 }}>03 · Conventional quote</h3>
            <div style={{ display: "grid", gap: 16 }}>
              <Input title="Conventional down payment (%)" value={convDown} onChange={setConvDown} step="0.5" />
              <Input title="Conventional interest rate (%)" value={convRate} onChange={setConvRate} />
              <Input title="Monthly PMI quote" value={monthlyPmi} onChange={setMonthlyPmi} step="10" help="Enter the actual monthly PMI quote. Enter 0 when PMI does not apply." />
            </div>
          </section>
        </div>

        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <div style={{ minWidth: 560 }}>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(135px, 1.3fr) 1fr 1fr", gap: 10, padding: "12px 0", borderBottom: "2px solid " + navy }}>
              <div />
              <div style={{ color: copper, fontWeight: 800 }}>FHA</div>
              <div style={{ color: navy, fontWeight: 800 }}>Conventional</div>
            </div>
            <Metric title="Down payment" fha={money(values.fhaDownAmount)} conventional={money(values.convDownAmount)} />
            <Metric title="Base loan amount" fha={money(values.fhaBase)} conventional={money(values.convBase)} />
            <Metric title="Financed loan amount" fha={money(values.fhaFinanced)} conventional={money(values.convBase)} />
            <Metric title="Principal and interest" fha={money(values.fhaPI, 2)} conventional={money(values.convPI, 2)} />
            <Metric title="Monthly mortgage insurance" fha={money(values.fhaMonthlyMip, 2)} conventional={money(values.pmiQuote, 2)} />
            <Metric title="Total monthly housing payment" fha={money(values.fhaHousing, 2)} conventional={money(values.convHousing, 2)} emphasize />
            <Metric title="Estimated upfront funds" fha={money(values.fhaUpfrontFunds)} conventional={money(values.convDownAmount)} />
            <Metric title={"Remaining balance after " + yearsCompared + " years"} fha={money(values.fhaBalance)} conventional={money(values.convBalance)} />
            <Metric title={"Interest paid in " + yearsCompared + " years"} fha={money(values.fhaInterest)} conventional={money(values.convInterest)} />
            <Metric title={"Mortgage insurance paid in " + yearsCompared + " years"} fha={money(values.fhaMipPaid)} conventional={money(values.convPmiPaid)} />
            <Metric title={"Estimated financing cost in " + yearsCompared + " years"} fha={money(values.fhaFinancingCost)} conventional={money(values.convFinancingCost)} emphasize />
          </div>
        </div>

        <div style={{ padding: 20, borderRadius: 10, background: navy, color: white, marginBottom: 18 }}>
          <div style={{ color: copper, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>How to read the comparison</div>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.65 }}>
            Financing cost includes estimated interest, mortgage insurance, and FHA's upfront MIP. It does not count down payment as a cost because down payment becomes equity. It also does not include lender fees, points, credits, closing costs, appreciation, taxes, or the opportunity cost of cash.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14, marginBottom: 20 }}>
          <div style={{ padding: 18, borderRadius: 9, background: ivory, borderLeft: "4px solid " + copper }}>
            <div style={{ color: navy, fontWeight: 800, marginBottom: 7 }}>FHA MIP duration</div>
            <div style={{ color: muted, fontSize: 13, lineHeight: 1.55 }}>{values.fhaDownPct >= 10 ? "With at least 10% down, annual MIP is generally scheduled for 11 years." : "With less than 10% down, annual MIP generally remains for the loan term unless the loan is refinanced or paid off."}</div>
          </div>
          <div style={{ padding: 18, borderRadius: 9, background: "#edf4ef", borderLeft: "4px solid " + green }}>
            <div style={{ color: navy, fontWeight: 800, marginBottom: 7 }}>Conventional PMI milestones</div>
            <div style={{ color: muted, fontSize: 13, lineHeight: 1.55 }}>Estimated 80% balance: {monthLabel(values.requestMonth)}. Estimated 78% balance: {monthLabel(values.automaticMonth)}. These are amortization estimates using original value, not guarantees of cancellation.</div>
          </div>
        </div>

        <div style={{ padding: 16, borderRadius: 8, background: "#f0f4f8", borderLeft: "3px solid " + copper, color: muted, fontSize: 11, lineHeight: 1.65 }}>
          Educational estimate only. This is not a Loan Estimate, approval, or recommendation. Actual FHA MIP, conventional PMI, rates, fees, credits, property expenses, cancellation eligibility, and underwriting results depend on the complete transaction and current program rules. Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518.
        </div>
      </div>
    </div>
  );
}

export default function FhaVsConventionalCalculatorPage() {
  return (
    <>
      <SEO
        title="FHA vs. Conventional Loan Calculator | Texas | Keys by Shalanda"
        description="Compare actual FHA and conventional loan quotes using separate rates, down payments, mortgage insurance, monthly housing payments, remaining balances, and financing costs."
        canonical="/calculators/fha-vs-conventional"
      />
      <section style={{ background: hero, padding: "72px 0 56px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", border: "1px solid " + copper, borderRadius: 999, padding: "6px 16px", color: copper, fontSize: 12, fontFamily: "'Fira Mono', monospace", marginBottom: 28 }}>Texas Homebuyer Tool</div>
          <h1 style={{ margin: "0 0 18px", maxWidth: 800, color: white, fontFamily: "'Lora', serif", fontSize: 42, lineHeight: 1.15 }}>Compare the complete FHA and conventional loan.</h1>
          <p style={{ margin: 0, maxWidth: 780, color: "rgba(255,255,255,0.78)", fontSize: 17, lineHeight: 1.65 }}>Two loan options can trade places depending on the rate, down payment, mortgage insurance, cash available, and how long you expect to keep the financing.</p>
        </div>
      </section>
      <section style={{ background: ivory, padding: "72px 0" }}>
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif" }}>
          <FhaVsConventionalCalculator />
        </div>
      </section>
      <section style={{ padding: "56px 0", background: white }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ margin: "0 0 10px", color: navy, fontFamily: "'Lora', serif", fontSize: 22 }}>Want to test either payment in more detail?</p>
          <Link to="/calculators/texas-mortgage-payment" style={{ color: copper, fontWeight: 700, textDecoration: "none" }}>Use the Texas Mortgage Payment Calculator →</Link>
          <div style={{ marginTop: 18 }}><Link to="/calculators" style={{ color: muted, textDecoration: "none", fontSize: 14 }}>Browse all mortgage calculators</Link></div>
        </div>
      </section>
    </>
  );
}
