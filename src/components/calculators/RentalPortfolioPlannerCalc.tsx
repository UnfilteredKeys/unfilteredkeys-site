import { useId, useMemo, useState } from "react";

const navy = "#1a3a5c";
const copper = "#b5621e";
const green = "#26734d";
const red = "#a33a32";
const muted = "#526171";
const white = "#ffffff";

type Property = {
  id: number;
  name: string;
  status: "existing" | "future";
  purchaseIn: number;
  value: number;
  balance: number;
  downPct: number;
  rate: number;
  term: number;
  currentPI: number;
  rent: number;
  taxes: number;
  insurance: number;
  hoa: number;
  utilities: number;
  vacancyPct: number;
  maintenancePct: number;
  capexPct: number;
  managementPct: number;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);

function payment(principal: number, annualRate: number, years: number) {
  if (principal <= 0 || years <= 0) return 0;
  const r = annualRate / 1200;
  const n = years * 12;
  if (!r) return principal / n;
  return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function balanceAfter(principal: number, annualRate: number, years: number, months: number) {
  if (principal <= 0) return 0;
  const n = years * 12;
  const m = Math.min(Math.max(months, 0), n);
  const r = annualRate / 1200;
  if (!r) return Math.max(0, principal * (1 - m / n));
  const p = payment(principal, annualRate, years);
  return Math.max(0, principal * Math.pow(1 + r, m) - p * (Math.pow(1 + r, m) - 1) / r);
}

const starter: Property[] = [
  {
    id: 1, name: "Current rental", status: "existing", purchaseIn: 0,
    value: 275000, balance: 205000, downPct: 0, rate: 5.75, term: 27, currentPI: 1260,
    rent: 2100, taxes: 430, insurance: 175, hoa: 0, utilities: 0,
    vacancyPct: 5, maintenancePct: 5, capexPct: 5, managementPct: 8,
  },
  {
    id: 2, name: "Future rental", status: "future", purchaseIn: 3,
    value: 325000, balance: 0, downPct: 20, rate: 7, term: 30, currentPI: 0,
    rent: 2500, taxes: 540, insurance: 210, hoa: 0, utilities: 0,
    vacancyPct: 5, maintenancePct: 5, capexPct: 5, managementPct: 8,
  },
];

const inputStyle = {
  width: "100%", border: "1px solid rgba(26,58,92,.2)", borderRadius: 6,
  padding: "10px 11px", fontFamily: "'Outfit', sans-serif", fontSize: 14,
  color: navy, backgroundColor: white, boxSizing: "border-box" as const,
};

function Field({ label, value, onChange, min = 0, step = 1, help }: {
  label: string; value: number; onChange: (value: number) => void; min?: number; step?: number; help?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} style={{ display: "block", fontSize: 12, fontWeight: 700, color: navy, marginBottom: 5 }}>{label}</label>
      <input id={id} type="number" value={value} min={min} step={step} onChange={(e) => onChange(Number(e.target.value) || 0)} style={inputStyle} />
      {help && <div style={{ fontSize: 11, color: muted, marginTop: 4, lineHeight: 1.35 }}>{help}</div>}
    </div>
  );
}

export default function RentalPortfolioPlannerCalc() {
  const [currentAge, setCurrentAge] = useState(40);
  const [retirementAge, setRetirementAge] = useState(60);
  const [rentGrowth, setRentGrowth] = useState(3);
  const [expenseGrowth, setExpenseGrowth] = useState(2.5);
  const [goal, setGoal] = useState(5000);
  const [properties, setProperties] = useState<Property[]>(starter);
  const [nextId, setNextId] = useState(3);

  const years = Math.max(1, retirementAge - currentAge);
  const update = (id: number, patch: Partial<Property>) =>
    setProperties((items) => items.map((item) => item.id === id ? { ...item, ...patch } : item));

  const rows = useMemo(() => properties.map((p) => {
    const activeYears = Math.max(0, years - (p.status === "future" ? p.purchaseIn : 0));
    const includedAtRetirement = p.status === "existing" || p.purchaseIn < years;
    const loan = p.status === "future" ? p.value * (1 - p.downPct / 100) : p.balance;
    const pi = p.status === "future" ? payment(loan, p.rate, p.term) : p.currentPI;
    const fixed = p.taxes + p.insurance + p.hoa + p.utilities;
    const variable = p.rent * (p.vacancyPct + p.maintenancePct + p.capexPct + p.managementPct) / 100;
    const operating = fixed + variable;
    const cashFlow = p.rent - operating - pi;
    const futureRent = p.rent * Math.pow(1 + rentGrowth / 100, activeYears);
    const futureFixed = fixed * Math.pow(1 + expenseGrowth / 100, activeYears);
    const futureVariable = futureRent * (p.vacancyPct + p.maintenancePct + p.capexPct + p.managementPct) / 100;
    const futureCashFlow = includedAtRetirement ? futureRent - futureFixed - futureVariable - pi : 0;
    const futureDebt = includedAtRetirement ? balanceAfter(loan, p.rate, p.term, activeYears * 12) : 0;
    const acquisitionCash = p.status === "future" && includedAtRetirement ? p.value * p.downPct / 100 : 0;
    return { p, activeYears, includedAtRetirement, loan, pi, operating, cashFlow, futureRent, futureCashFlow, futureDebt, acquisitionCash };
  }), [properties, years, rentGrowth, expenseGrowth]);

  const totalFutureCash = rows.reduce((sum, row) => sum + row.futureCashFlow, 0);
  const totalAcquisitionCash = rows.reduce((sum, row) => sum + row.acquisitionCash, 0);
  const scenarios = [
    { label: "Conservative", rate: 2 },
    { label: "Moderate", rate: 4 },
    { label: "Optimistic", rate: 6 },
  ].map((scenario) => ({
    ...scenario,
    value: rows.reduce((sum, row) => sum + (row.includedAtRetirement ? row.p.value * Math.pow(1 + scenario.rate / 100, row.activeYears) : 0), 0),
    debt: rows.reduce((sum, row) => sum + row.futureDebt, 0),
  }));

  const addProperty = () => {
    if (properties.length >= 10) return;
    setProperties((items) => [...items, { ...starter[1], id: nextId, name: `Future rental ${nextId}`, purchaseIn: 5 }]);
    setNextId((id) => id + 1);
  };

  return (
    <div style={{ backgroundColor: white, borderRadius: 10, boxShadow: "0 8px 28px rgba(26,58,92,.09)", overflow: "hidden" }}>
      <div style={{ padding: "28px 30px", backgroundColor: navy, color: white }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 25, margin: "0 0 8px" }}>Rental Portfolio Planner</h2>
        <p style={{ margin: 0, color: "rgba(255,255,255,.75)", lineHeight: 1.55 }}>Model purchase timing, operating costs, debt service, equity, and estimated pre-tax cash flow.</p>
      </div>
      <div style={{ padding: 30 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
          <Field label="Current age" value={currentAge} onChange={setCurrentAge} min={18} />
          <Field label="Retirement age" value={retirementAge} onChange={setRetirementAge} min={currentAge + 1} />
          <Field label="Annual rent growth %" value={rentGrowth} onChange={setRentGrowth} step={0.5} />
          <Field label="Annual fixed-expense growth %" value={expenseGrowth} onChange={setExpenseGrowth} step={0.5} />
          <Field label="Monthly cash-flow goal" value={goal} onChange={setGoal} step={100} />
        </div>

        <div style={{ margin: "30px 0 14px", fontFamily: "'Lora', serif", color: navy, fontWeight: 700, fontSize: 20 }}>Properties</div>
        {properties.map((p, index) => {
          const row = rows[index];
          return (
            <div key={p.id} style={{ backgroundColor: "#f5f7f9", borderRadius: 8, padding: 20, marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", marginBottom: 15 }}>
                <input aria-label={`Property ${index + 1} name`} value={p.name} onChange={(e) => update(p.id, { name: e.target.value })} style={{ ...inputStyle, maxWidth: 330, fontWeight: 700 }} />
                <button type="button" onClick={() => setProperties((items) => items.filter((item) => item.id !== p.id))} style={{ border: 0, background: "transparent", color: red, fontWeight: 700, cursor: "pointer" }}>Remove</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(145px,1fr))", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: navy, marginBottom: 5 }}>Property status</label>
                  <select value={p.status} onChange={(e) => update(p.id, { status: e.target.value as Property["status"] })} style={inputStyle}>
                    <option value="existing">Owned now</option>
                    <option value="future">Future purchase</option>
                  </select>
                </div>
                {p.status === "future" && <Field label="Purchase in year" value={p.purchaseIn} onChange={(v) => update(p.id, { purchaseIn: v })} min={0} help="0 means this year." />}
                <Field label={p.status === "existing" ? "Current value" : "Purchase price"} value={p.value} onChange={(v) => update(p.id, { value: v })} step={5000} />
                {p.status === "existing"
                  ? <Field label="Current loan balance" value={p.balance} onChange={(v) => update(p.id, { balance: v })} step={1000} />
                  : <Field label="Down payment %" value={p.downPct} onChange={(v) => update(p.id, { downPct: v })} step={1} />}
                <Field label="Interest rate %" value={p.rate} onChange={(v) => update(p.id, { rate: v })} step={0.125} />
                <Field label={p.status === "existing" ? "Remaining loan term (years)" : "Loan term (years)"} value={p.term} onChange={(v) => update(p.id, { term: v })} />
                {p.status === "existing" && <Field label="Actual monthly P&I" value={p.currentPI} onChange={(v) => update(p.id, { currentPI: v })} step={25} />}
                <Field label="Monthly gross rent" value={p.rent} onChange={(v) => update(p.id, { rent: v })} step={50} />
                <Field label="Monthly property taxes" value={p.taxes} onChange={(v) => update(p.id, { taxes: v })} step={10} />
                <Field label="Monthly insurance" value={p.insurance} onChange={(v) => update(p.id, { insurance: v })} step={10} />
                <Field label="Monthly HOA" value={p.hoa} onChange={(v) => update(p.id, { hoa: v })} step={10} />
                <Field label="Owner-paid utilities" value={p.utilities} onChange={(v) => update(p.id, { utilities: v })} step={10} />
                <Field label="Vacancy %" value={p.vacancyPct} onChange={(v) => update(p.id, { vacancyPct: v })} step={0.5} />
                <Field label="Maintenance %" value={p.maintenancePct} onChange={(v) => update(p.id, { maintenancePct: v })} step={0.5} />
                <Field label="Capital reserves %" value={p.capexPct} onChange={(v) => update(p.id, { capexPct: v })} step={0.5} />
                <Field label="Management %" value={p.managementPct} onChange={(v) => update(p.id, { managementPct: v })} step={0.5} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 10, marginTop: 16 }}>
                {[
                  ["Gross rent", fmt(p.rent)],
                  ["Operating expenses", fmt(row.operating)],
                  ["Debt service", fmt(row.pi)],
                  ["Estimated cash flow", `${row.cashFlow >= 0 ? "+" : ""}${fmt(row.cashFlow)}`],
                ].map(([label, value]) => <div key={label} style={{ background: white, padding: 12, borderRadius: 6 }}><div style={{ fontSize: 10, color: muted, textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</div><div style={{ color: label === "Estimated cash flow" ? (row.cashFlow >= 0 ? green : red) : navy, fontWeight: 700, marginTop: 3 }}>{value}/mo</div></div>)}
              </div>
            </div>
          );
        })}
        {properties.length < 10 && <button type="button" onClick={addProperty} style={{ border: `1.5px dashed ${copper}`, color: copper, background: "transparent", borderRadius: 6, padding: "11px 18px", fontWeight: 700, cursor: "pointer" }}>+ Add Property</button>}

        <div style={{ margin: "34px 0 14px", fontFamily: "'Lora', serif", color: navy, fontWeight: 700, fontSize: 20 }}>Projected at Age {retirementAge}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12, marginBottom: 18 }}>
          <div style={{ padding: 18, borderRadius: 8, background: "#f5efe5" }}><div style={{ fontSize: 11, color: muted, textTransform: "uppercase" }}>Estimated pre-tax cash flow</div><div style={{ fontFamily: "'Lora',serif", color: totalFutureCash >= 0 ? green : red, fontSize: 25, fontWeight: 700 }}>{fmt(totalFutureCash)}/mo</div></div>
          <div style={{ padding: 18, borderRadius: 8, background: "#f5efe5" }}><div style={{ fontSize: 11, color: muted, textTransform: "uppercase" }}>Goal progress</div><div style={{ fontFamily: "'Lora',serif", color: navy, fontSize: 25, fontWeight: 700 }}>{goal > 0 ? Math.round(totalFutureCash / goal * 100) : 0}%</div></div>
          <div style={{ padding: 18, borderRadius: 8, background: "#f5efe5" }}><div style={{ fontSize: 11, color: muted, textTransform: "uppercase" }}>Future down payments</div><div style={{ fontFamily: "'Lora',serif", color: navy, fontSize: 25, fontWeight: 700 }}>{fmt(totalAcquisitionCash)}</div><div style={{ fontSize: 11, color: muted }}>Excludes closing costs and reserves</div></div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 540 }}>
            <thead><tr>{["Appreciation scenario", "Projected value", "Projected debt", "Projected equity"].map((h) => <th key={h} style={{ textAlign: "left", padding: 11, borderBottom: `2px solid ${navy}`, color: navy, fontSize: 12 }}>{h}</th>)}</tr></thead>
            <tbody>{scenarios.map((s) => <tr key={s.label}><td style={{ padding: 11, borderBottom: "1px solid #e3e7eb", fontWeight: 700 }}>{s.label} ({s.rate}%)</td><td style={{ padding: 11, borderBottom: "1px solid #e3e7eb" }}>{fmt(s.value)}</td><td style={{ padding: 11, borderBottom: "1px solid #e3e7eb" }}>{fmt(s.debt)}</td><td style={{ padding: 11, borderBottom: "1px solid #e3e7eb", color: green, fontWeight: 700 }}>{fmt(s.value - s.debt)}</td></tr>)}</tbody>
          </table>
        </div>
        <p style={{ color: muted, fontSize: 12, lineHeight: 1.55, margin: "20px 0 0" }}>
          Educational projection only. Results are pre-tax and do not include income taxes, depreciation recapture, transaction costs, closing costs, financing changes, major uninsured losses, or every ownership expense. Appreciation, rent growth, expenses, occupancy, and financing are assumptions, not guarantees.
        </p>
      </div>
    </div>
  );
}
