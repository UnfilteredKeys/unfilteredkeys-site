import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

type Expense = { id: number; label: string; amount: string };

const navy = "#1a3a5c";
const hero = "#1a2535";
const copper = "#b5621e";
const ivory = "#faf8f4";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.58)";
const green = "#2d6b4f";

const money = (value: number) =>
  (Number.isFinite(value) ? Math.max(value, 0) : 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const percent = (value: number) =>
  (Number.isFinite(value) ? Math.max(value, 0) : 0).toFixed(1) + "%";

const field: React.CSSProperties = {
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

const label: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  color: muted,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
};

function NumberField({
  title,
  value,
  onChange,
  help,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  help?: string;
}) {
  return (
    <div>
      <label style={label}>{title}</label>
      <input
        style={field}
        type="number"
        min="0"
        step="50"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {help && <div style={{ marginTop: 5, color: muted, fontSize: 11, lineHeight: 1.45 }}>{help}</div>}
    </div>
  );
}

function BudgetPlanningCalculator() {
  const [takeHome, setTakeHome] = useState("6500");
  const [grossIncome, setGrossIncome] = useState("8500");
  const [livingExpenses, setLivingExpenses] = useState("2200");
  const [monthlySavings, setMonthlySavings] = useState("650");
  const [personalCushion, setPersonalCushion] = useState("500");
  const [targetDti, setTargetDti] = useState("36");
  const [debts, setDebts] = useState<Expense[]>([
    { id: 1, label: "Car payment", amount: "450" },
    { id: 2, label: "Student loans", amount: "200" },
    { id: 3, label: "Credit card minimums", amount: "75" },
  ]);

  const values = useMemo(() => {
    const net = Math.max(Number(takeHome) || 0, 0);
    const gross = Math.max(Number(grossIncome) || 0, 0);
    const living = Math.max(Number(livingExpenses) || 0, 0);
    const savings = Math.max(Number(monthlySavings) || 0, 0);
    const cushion = Math.max(Number(personalCushion) || 0, 0);
    const debt = debts.reduce((total, item) => total + Math.max(Number(item.amount) || 0, 0), 0);
    const benchmark = Math.min(Math.max(Number(targetDti) || 0, 0), 60);
    const lifestylePayment = Math.max(net - living - savings - cushion - debt, 0);
    const dtiPayment = gross > 0 ? Math.max(gross * (benchmark / 100) - debt, 0) : 0;
    const planningPayment = gross > 0 ? Math.min(lifestylePayment, dtiPayment) : lifestylePayment;
    const remainingAfterHousing = Math.max(net - living - savings - debt - planningPayment, 0);
    const debtOnlyDti = gross > 0 ? (debt / gross) * 100 : 0;
    const totalDti = gross > 0 ? ((debt + planningPayment) / gross) * 100 : 0;
    return { net, gross, living, savings, cushion, debt, benchmark, lifestylePayment, dtiPayment, planningPayment, remainingAfterHousing, debtOnlyDti, totalDti };
  }, [takeHome, grossIncome, livingExpenses, monthlySavings, personalCushion, targetDti, debts]);

  const updateDebt = (id: number, key: "label" | "amount", value: string) =>
    setDebts((current) => current.map((item) => (item.id === id ? { ...item, [key]: value } : item)));

  const addDebt = () =>
    setDebts((current) => [...current, { id: Date.now(), label: "", amount: "" }]);

  return (
    <div style={{ background: white, borderRadius: 14, boxShadow: "0 3px 24px rgba(26,58,92,0.09)", overflow: "hidden" }}>
      <div style={{ background: navy, padding: "26px 30px" }}>
        <h2 style={{ margin: 0, color: white, fontFamily: "'Lora', serif", fontSize: 23 }}>Homebuying Budget Planner</h2>
        <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>
          Find a housing payment that works with your life before testing home prices.
        </p>
      </div>

      <div style={{ padding: 30 }}>
        <div style={{ padding: "16px 18px", marginBottom: 28, borderLeft: "4px solid " + copper, borderRadius: 8, background: "#f7efe7", color: navy, fontSize: 14, lineHeight: 1.65 }}>
          This planner does not calculate mortgage approval. It compares your real monthly budget with a DTI benchmark you choose. Credit, assets, loan type, property costs, and underwriting findings still matter.
        </div>

        <h3 style={{ fontFamily: "'Lora', serif", color: navy, fontSize: 17, borderBottom: "2px solid " + copper, paddingBottom: 8 }}>01 · Income</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18, marginBottom: 30 }}>
          <NumberField title="Monthly take-home income" value={takeHome} onChange={setTakeHome} help="What actually reaches your household after taxes and payroll deductions." />
          <NumberField title="Gross monthly income" value={grossIncome} onChange={setGrossIncome} help="Before taxes. Used only for the DTI planning reference." />
        </div>

        <h3 style={{ fontFamily: "'Lora', serif", color: navy, fontSize: 17, borderBottom: "2px solid " + copper, paddingBottom: 8 }}>02 · Recurring debts</h3>
        <p style={{ color: muted, fontSize: 13, lineHeight: 1.55 }}>
          Include payments that normally appear in mortgage DTI, such as auto loans, student loans, personal loans, support obligations, and credit card minimums. Do not include rent here.
        </p>
        {debts.map((item) => (
          <div key={item.id} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 140px 34px", gap: 10, marginBottom: 10, alignItems: "center" }}>
            <input style={field} value={item.label} placeholder="Debt type" onChange={(event) => updateDebt(item.id, "label", event.target.value)} />
            <input style={field} type="number" min="0" value={item.amount} placeholder="Monthly" onChange={(event) => updateDebt(item.id, "amount", event.target.value)} />
            <button type="button" aria-label="Remove debt" onClick={() => setDebts((current) => current.filter((row) => row.id !== item.id))} style={{ border: 0, background: "transparent", color: muted, fontSize: 22, cursor: "pointer" }}>×</button>
          </div>
        ))}
        <button type="button" onClick={addDebt} style={{ width: "100%", border: "1px dashed rgba(26,58,92,0.3)", borderRadius: 8, padding: 9, background: "transparent", color: navy, cursor: "pointer", marginBottom: 30 }}>+ Add another debt</button>

        <h3 style={{ fontFamily: "'Lora', serif", color: navy, fontSize: 17, borderBottom: "2px solid " + copper, paddingBottom: 8 }}>03 · Protect the rest of your life</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18, marginBottom: 30 }}>
          <NumberField title="Essential non-housing spending" value={livingExpenses} onChange={setLivingExpenses} help="Food, transportation, utilities, insurance, childcare, medical costs, and other essentials." />
          <NumberField title="Monthly savings goal" value={monthlySavings} onChange={setMonthlySavings} help="Emergency fund, retirement, travel, maintenance reserves, or other priorities." />
          <NumberField title="Personal monthly cushion" value={personalCushion} onChange={setPersonalCushion} help="Money you do not want committed before the month begins." />
          <div>
            <label style={label}>DTI planning benchmark</label>
            <select style={field} value={targetDti} onChange={(event) => setTargetDti(event.target.value)}>
              <option value="30">30% · Conservative reference</option>
              <option value="36">36% · Moderate reference</option>
              <option value="40">40% · Higher reference</option>
              <option value="43">43% · Upper planning reference</option>
            </select>
            <div style={{ marginTop: 5, color: muted, fontSize: 11, lineHeight: 1.45 }}>A reference point, not a program limit or approval threshold.</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14, marginBottom: 18 }}>
          <div style={{ padding: 20, borderRadius: 10, background: "#edf4ef", borderLeft: "4px solid " + green }}>
            <div style={{ color: green, fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>Lifestyle budget allows</div>
            <div style={{ marginTop: 8, color: navy, fontFamily: "'Lora', serif", fontSize: 27, fontWeight: 700 }}>{money(values.lifestylePayment)}/mo</div>
          </div>
          <div style={{ padding: 20, borderRadius: 10, background: "#f0f4f8", borderLeft: "4px solid " + copper }}>
            <div style={{ color: copper, fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>{percent(values.benchmark)} DTI reference allows</div>
            <div style={{ marginTop: 8, color: navy, fontFamily: "'Lora', serif", fontSize: 27, fontWeight: 700 }}>{money(values.dtiPayment)}/mo</div>
          </div>
        </div>

        <div style={{ padding: 24, borderRadius: 11, background: navy, color: white, marginBottom: 18 }}>
          <div style={{ color: copper, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Planning housing-payment target</div>
          <div style={{ margin: "8px 0", fontFamily: "'Lora', serif", fontSize: 34, fontWeight: 700 }}>{money(values.planningPayment)}/month</div>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.72)", fontSize: 13, lineHeight: 1.6 }}>
            This uses the lower of your lifestyle budget and DTI reference. It should include principal, interest, property taxes, homeowners insurance, flood insurance, HOA dues, and mortgage insurance when applicable.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 12, marginBottom: 24 }}>
          {[
            ["Recurring debts", money(values.debt)],
            ["Debt-only DTI", percent(values.debtOnlyDti)],
            ["DTI at target payment", percent(values.totalDti)],
            ["Cushion after target", money(values.remainingAfterHousing)],
          ].map(([name, value]) => (
            <div key={name} style={{ padding: 15, borderRadius: 8, background: ivory }}>
              <div style={{ color: muted, fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{name}</div>
              <div style={{ marginTop: 5, color: navy, fontWeight: 700 }}>{value}</div>
            </div>
          ))}
        </div>

        {values.lifestylePayment < values.dtiPayment ? (
          <div style={{ padding: "14px 16px", borderRadius: 8, background: "#f7efe7", color: navy, fontSize: 13, lineHeight: 1.6 }}>
            Your personal budget is the tighter limit. A lender calculation could support a larger payment, but that would compete with the spending, savings, and cushion you chose.
          </div>
        ) : (
          <div style={{ padding: "14px 16px", borderRadius: 8, background: "#edf4ef", color: navy, fontSize: 13, lineHeight: 1.6 }}>
            Your selected DTI reference is the tighter limit. Your monthly-life budget has more room, but a full mortgage review is needed before treating that extra room as buying power.
          </div>
        )}

        <div style={{ marginTop: 22, padding: 16, borderRadius: 8, background: "#f0f4f8", borderLeft: "3px solid " + copper, color: muted, fontSize: 11, lineHeight: 1.65 }}>
          Educational planning estimate only. This tool does not determine pre-qualification, pre-approval, loan eligibility, or a maximum purchase price. Income treatment and debt calculations vary by loan program and borrower circumstances. Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518.
        </div>
      </div>
    </div>
  );
}

export default function HomebuyingBudgetCalculatorPage() {
  return (
    <>
      <SEO
        title="Homebuying Budget Calculator | Texas | Keys by Shalanda"
        description="Build a realistic monthly housing-payment target using take-home income, recurring debts, essential spending, savings goals, and a personal cushion."
        canonical="/calculators/homebuying-budget"
      />
      <section style={{ background: hero, padding: "72px 0 56px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", border: "1px solid " + copper, borderRadius: 999, padding: "6px 16px", color: copper, fontSize: 12, fontFamily: "'Fira Mono', monospace", marginBottom: 28 }}>Texas Homebuyer Tool</div>
          <h1 style={{ margin: "0 0 18px", maxWidth: 780, color: white, fontFamily: "'Lora', serif", fontSize: 42, lineHeight: 1.15 }}>Plan the payment before you shop for the house.</h1>
          <p style={{ margin: 0, maxWidth: 760, color: "rgba(255,255,255,0.78)", fontSize: 17, lineHeight: 1.65 }}>A lender may calculate what fits the guidelines. This planner helps you decide what fits your actual life.</p>
        </div>
      </section>
      <section style={{ background: ivory, padding: "72px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", fontFamily: "'Outfit', sans-serif" }}>
          <BudgetPlanningCalculator />
        </div>
      </section>
      <section style={{ padding: "56px 0", background: white }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{ margin: "0 0 10px", color: navy, fontFamily: "'Lora', serif", fontSize: 22 }}>Ready to test home prices against that payment?</p>
          <Link to="/calculators/texas-mortgage-payment" style={{ color: copper, fontWeight: 700, textDecoration: "none" }}>Use the Texas Mortgage Payment Calculator →</Link>
          <div style={{ marginTop: 18 }}><Link to="/calculators" style={{ color: muted, textDecoration: "none", fontSize: 14 }}>Browse all mortgage calculators</Link></div>
        </div>
      </section>
    </>
  );
}
