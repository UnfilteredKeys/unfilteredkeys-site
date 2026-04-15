import { useState, useEffect } from "react";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";

function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString();
}

function fmtK(n: number): string {
  const abs = Math.abs(Math.round(n / 1000));
  return (n < 0 ? "-$" : "$") + abs + "k";
}

interface YearProjection {
  year: number;
  equity: number;
  cumCF: number;
}

function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 1,
  min = 0,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
  min?: number;
  hint?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, color: "#5a6a7a", fontFamily: "inherit" }}>
        {label}
      </label>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {prefix && (
          <span
            style={{
              position: "absolute",
              left: 10,
              fontSize: 14,
              color: "#8898aa",
              pointerEvents: "none",
            }}
          >
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          style={{
            width: "100%",
            height: 38,
            padding: prefix ? "0 10px 0 22px" : suffix ? "0 28px 0 10px" : "0 10px",
            border: "1px solid #dce3ea",
            borderRadius: 8,
            fontSize: 14,
            background: "#fff",
            color: "#1c2630",
            fontFamily: "inherit",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = NAVY)}
          onBlur={(e) => (e.target.style.borderColor = "#dce3ea")}
        />
        {suffix && (
          <span
            style={{
              position: "absolute",
              right: 10,
              fontSize: 13,
              color: "#8898aa",
              pointerEvents: "none",
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      {hint && (
        <span style={{ fontSize: 11, color: "#8898aa", lineHeight: 1.4 }}>{hint}</span>
      )}
    </div>
  );
}

function MetricCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div
      style={{
        background: "#f7f9fb",
        borderRadius: 8,
        padding: "14px 16px",
        border: "1px solid #e8edf2",
      }}
    >
      <div style={{ fontSize: 12, color: "#7a8fa0", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 500, color: color || "#1c2630", fontFamily: "inherit" }}>
        {value}
      </div>
    </div>
  );
}

export default function RentalROICalculator() {
  const [homeVal, setHomeVal] = useState(320000);
  const [loanBal, setLoanBal] = useState(240000);
  const [pi, setPi] = useState(1450);
  const [escrow, setEscrow] = useState(450);
  const [rent, setRent] = useState(2100);
  const [mgmt, setMgmt] = useState(10);
  const [vacancy, setVacancy] = useState(8);
  const [appRate, setAppRate] = useState(3);
  const [yearsToRetirement, setYearsToRetirement] = useState(15);

  const [res, setRes] = useState({
    monthlyCF: 0,
    annualCF: 0,
    breakEven: 0,
    equity: 0,
    cashOnCash: null as number | null,
    mgmtAmt: 0,
    vacAmt: 0,
    displayYears: [] as YearProjection[],
    retEquity: 0,
    retCumCF: 0,
  });

  useEffect(() => {
    const totalPITI = pi + escrow;
    const mgmtAmt = rent * (mgmt / 100);
    const vacAmt = rent * (vacancy / 100);
    const monthlyCF = rent - totalPITI - mgmtAmt - vacAmt;
    const annualCF = monthlyCF * 12;
    const equity = homeVal - loanBal;
    const cashOnCash = equity > 0 ? (annualCF / equity) * 100 : null;
    const breakEven = totalPITI + mgmtAmt + vacAmt;

    const approxPrincipalPerYear = pi * 0.3 * 12;
    const years = Math.max(1, Math.min(yearsToRetirement, 40));
    let runVal = homeVal;
    let runBal = loanBal;
    const all: YearProjection[] = [];

    for (let y = 1; y <= years; y++) {
      runVal = runVal * (1 + appRate / 100);
      runBal = Math.max(0, runBal - approxPrincipalPerYear);
      all.push({ year: y, equity: runVal - runBal, cumCF: annualCF * y });
    }

    // Show every 5-year milestone + retirement year (deduplicated)
    const milestones = new Set<number>();
    [5, 10, 15, 20, 25, 30].forEach((y) => { if (y <= years) milestones.add(y); });
    milestones.add(years);
    const displayYears = [...milestones].sort((a, b) => a - b).map((y) => all[y - 1]);

    const last = all[all.length - 1] ?? { equity: 0, cumCF: 0 };

    setRes({
      monthlyCF,
      annualCF,
      breakEven,
      equity,
      cashOnCash,
      mgmtAmt,
      vacAmt,
      displayYears,
      retEquity: last.equity,
      retCumCF: last.cumCF,
    });
  }, [homeVal, loanBal, pi, escrow, rent, mgmt, vacancy, appRate, yearsToRetirement]);

  const cfPositive = res.monthlyCF >= 0;

  return (
    <section
      style={{
        background: "#fff",
        border: "1px solid #dce3ea",
        borderRadius: 16,
        padding: "2rem",
        maxWidth: 780,
        margin: "2.5rem auto",
        fontFamily: "'Outfit', 'Inter', sans-serif",
      }}
    >
      {/* Badge + header */}
      <div style={{ marginBottom: "1.75rem" }}>
        <div
          style={{
            display: "inline-block",
            background: "#fdf3e8",
            color: COPPER,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: 6,
            marginBottom: 10,
          }}
        >
          PCS Wealth Builder
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 500, color: NAVY, marginBottom: 6, lineHeight: 1.3 }}>
          Does the math work on keeping your home?
        </h3>
        <p style={{ fontSize: 14, color: "#5a6a7a", lineHeight: 1.6, margin: 0 }}>
          Enter your numbers. See your monthly cash flow, equity position, and projected portfolio
          value at retirement — before you decide whether to sell or hold.
        </p>
      </div>

      {/* Section label: home */}
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8898aa", marginBottom: "0.85rem" }}>
        Your current home
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))", gap: 12, marginBottom: "1.5rem" }}>
        <NumberInput label="Current home value" value={homeVal} onChange={setHomeVal} prefix="$" step={5000} />
        <NumberInput label="Remaining loan balance" value={loanBal} onChange={setLoanBal} prefix="$" step={5000} />
        <NumberInput label="Monthly P&I payment" value={pi} onChange={setPi} prefix="$" />
        <NumberInput label="Monthly taxes + insurance" value={escrow} onChange={setEscrow} prefix="$" />
      </div>

      {/* Section label: rental + strategy */}
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8898aa", marginBottom: "0.85rem" }}>
        Rental assumptions &amp; retirement timeline
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))", gap: 12, marginBottom: "1.75rem" }}>
        <NumberInput label="Expected monthly rent" value={rent} onChange={setRent} prefix="$" />
        <NumberInput label="Property management fee" value={mgmt} onChange={setMgmt} suffix="%" step={1} />
        <NumberInput label="Vacancy / maintenance reserve" value={vacancy} onChange={setVacancy} suffix="%" step={1} />
        <NumberInput label="Annual appreciation" value={appRate} onChange={setAppRate} suffix="%" step={0.5} />
        <NumberInput
          label="Years to retirement"
          value={yearsToRetirement}
          onChange={setYearsToRetirement}
          suffix="yrs"
          step={1}
          min={1}
          hint="Projects equity + cash flow to your retirement date"
        />
      </div>

      {/* Metric cards — today */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: "1.5rem" }}>
        <MetricCard label="Monthly cash flow" value={fmt(res.monthlyCF) + "/mo"} color={cfPositive ? "#1a7a3a" : "#c0392b"} />
        <MetricCard label="Break-even rent" value={fmt(res.breakEven) + "/mo"} color={NAVY} />
        <MetricCard label="Current equity" value={fmt(res.equity)} color={NAVY} />
        {res.cashOnCash !== null && (
          <MetricCard label="Cash-on-cash ROI" value={res.cashOnCash.toFixed(1) + "%"} color={cfPositive ? "#1a7a3a" : "#c0392b"} />
        )}
      </div>

      {/* Breakdown */}
      <div style={{ background: "#f7f9fb", borderRadius: 10, padding: "1rem 1.25rem", marginBottom: "1.5rem", border: "1px solid #e8edf2" }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#8898aa", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
          Monthly breakdown
        </div>
        {[
          { label: "Gross rent", val: fmt(rent), sign: "" },
          { label: "P&I payment", val: fmt(pi), sign: "−" },
          { label: "Taxes + insurance", val: fmt(escrow), sign: "−" },
          { label: `Property management (${mgmt}%)`, val: fmt(res.mgmtAmt), sign: "−" },
          { label: `Vacancy / maintenance (${vacancy}%)`, val: fmt(res.vacAmt), sign: "−" },
        ].map((row) => (
          <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "4px 0", color: "#5a6a7a" }}>
            <span>{row.label}</span>
            <span style={{ fontWeight: 500, color: "#1c2630" }}>{row.sign}{row.val}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 500, padding: "10px 0 0", marginTop: 6, borderTop: "1px solid #dce3ea", color: cfPositive ? "#1a7a3a" : "#c0392b" }}>
          <span style={{ color: "#1c2630" }}>Net monthly cash flow</span>
          <span>{fmt(res.monthlyCF)}/mo</span>
        </div>
        {!cfPositive && (
          <p style={{ fontSize: 12, color: "#c0392b", marginTop: 8, lineHeight: 1.5 }}>
            At this rent, expenses exceed income by {fmt(Math.abs(res.monthlyCF))}/mo. Consider whether rent can be raised — or treat this as a break-even hold for appreciation.
          </p>
        )}
      </div>

      {/* Retirement summary — navy band */}
      <div
        style={{
          background: NAVY,
          borderRadius: 12,
          padding: "1.25rem 1.5rem",
          marginBottom: "1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 16,
        }}
      >
        <div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Equity at retirement
          </div>
          <div style={{ fontSize: 24, fontWeight: 500, color: "#fff" }}>{fmtK(res.retEquity)}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>in {yearsToRetirement} years</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Cumulative cash flow
          </div>
          <div style={{ fontSize: 24, fontWeight: 500, color: cfPositive ? "#6ecbbf" : "#f09595" }}>{fmtK(res.retCumCF)}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Total portfolio value
          </div>
          <div style={{ fontSize: 24, fontWeight: 500, color: "#e8b47d" }}>{fmtK(res.retEquity + res.retCumCF)}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Cash flow at retirement
          </div>
          <div style={{ fontSize: 24, fontWeight: 500, color: cfPositive ? "#6ecbbf" : "#f09595" }}>{fmt(res.monthlyCF)}/mo</div>
        </div>
      </div>

      {/* Milestone strip */}
      {res.displayYears.length > 0 && (
        <>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "#8898aa", marginBottom: "0.85rem" }}>
            Equity growth milestones
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(res.displayYears.length, 6)}, 1fr)`,
              gap: 8,
              marginBottom: "1.75rem",
            }}
          >
            {res.displayYears.map((p) => {
              const isRetirement = p.year === yearsToRetirement;
              return (
                <div
                  key={p.year}
                  style={{
                    background: isRetirement ? "#fdf3e8" : "#f7f9fb",
                    border: `1px solid ${isRetirement ? COPPER : "#e8edf2"}`,
                    borderRadius: 8,
                    padding: "10px 8px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 11, color: isRetirement ? COPPER : "#8898aa", marginBottom: 4, fontWeight: isRetirement ? 600 : 400 }}>
                    {isRetirement ? `Yr ${p.year} 🎖️` : `Year ${p.year}`}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: NAVY }}>{fmtK(p.equity)}</div>
                  <div style={{ fontSize: 11, color: "#8898aa", marginTop: 2 }}>+{fmtK(p.cumCF)} CF</div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* CTA */}
      <div
        style={{
          background: NAVY,
          borderRadius: 12,
          padding: "1.25rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <p style={{ fontSize: 15, fontWeight: 500, color: "#fff", marginBottom: 4 }}>
            Want to map out your full PCS strategy?
          </p>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
            Shalanda runs the real numbers — which homes to keep, when to use VA entitlement again, and how to structure your portfolio.
          </span>
        </div>
        <a
          href="https://calendly.com/shalanda-securechoicelending/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: COPPER,
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "11px 22px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "none",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          Schedule a call →
        </a>
      </div>

      <p style={{ fontSize: 11, color: "#9aaab8", marginTop: "1rem", lineHeight: 1.6 }}>
        Educational planning tool only — not a loan commitment or financial advice. Does not include rental income taxes, HOA fees, or capital expenditure reserves. Principal paydown uses a simplified average. Consult a CPA for tax guidance. Shalanda Smith · NMLS #554554 · Powered by Secure Choice Lending · NMLS #1689518
      </p>
    </section>
  );
}
