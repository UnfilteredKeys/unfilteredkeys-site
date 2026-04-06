import { useState, useEffect } from "react";

// ── SEO ───────────────────────────────────────────────────────────────────────

function useSEO({ title, description, canonical }: { title: string; description: string; canonical: string }) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", description);
    let c = document.querySelector('link[rel="canonical"]');
    if (!c) { c = document.createElement("link"); c.setAttribute("rel", "canonical"); document.head.appendChild(c); }
    c.setAttribute("href", canonical);
  }, []);
}

// ── TEXAS COUNTIES ────────────────────────────────────────────────────────────

const TX_COUNTIES = [
  { label: "Bell County (Killeen / Temple)", rate: 0.0193 },
  { label: "Bexar County (San Antonio)", rate: 0.0200 },
  { label: "Coryell County (Copperas Cove)", rate: 0.0162 },
  { label: "Dallas County", rate: 0.0200 },
  { label: "El Paso County", rate: 0.0198 },
  { label: "Harris County (Houston)", rate: 0.0213 },
  { label: "McLennan County (Waco)", rate: 0.0181 },
  { label: "Tarrant County (Fort Worth)", rate: 0.0210 },
  { label: "Taylor County (Abilene)", rate: 0.0172 },
  { label: "Travis County (Austin)", rate: 0.0181 },
  { label: "Williamson County (Round Rock / Georgetown)", rate: 0.0196 },
  { label: "Other Texas County (avg)", rate: 0.0190 },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

function monthlyPI(principal: number, annualRate: number, years: number): number {
  if (annualRate === 0) return principal / (years * 12);
  const r = annualRate / 100 / 12;
  const n = years * 12;
  return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function fmtDec(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ── STYLES ────────────────────────────────────────────────────────────────────

const navy = "#1a3a5c";
const copper = "#b5621e";
const bg = "#f7f5f2";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.55)";

const S = {
  page: {
    backgroundColor: bg,
    minHeight: "100vh",
    fontFamily: "'Outfit', sans-serif",
    color: navy,
  } as React.CSSProperties,
  hero: {
    backgroundColor: navy,
    padding: "64px 24px 48px",
    textAlign: "center" as const,
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: copper,
    marginBottom: "16px",
    fontWeight: 500,
  },
  heroH1: {
    fontFamily: "'Lora', serif",
    fontSize: "clamp(26px, 4vw, 42px)",
    fontWeight: 700,
    color: white,
    lineHeight: 1.15,
    marginBottom: "16px",
  },
  heroSub: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.7)",
    maxWidth: "560px",
    margin: "0 auto 32px",
    lineHeight: 1.6,
  },
  tabBar: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap" as const,
  },
  tabBtn: (active: boolean): React.CSSProperties => ({
    padding: "10px 22px",
    borderRadius: "6px",
    border: active ? "none" : "1px solid rgba(255,255,255,0.25)",
    backgroundColor: active ? copper : "transparent",
    color: active ? white : "rgba(255,255,255,0.75)",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.2s",
    letterSpacing: "0.01em",
  }),
  body: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "48px 24px 80px",
  },
  card: {
    backgroundColor: white,
    borderRadius: "12px",
    boxShadow: "0 2px 16px rgba(26,58,92,0.08)",
    overflow: "hidden" as const,
  },
  cardHeader: {
    backgroundColor: navy,
    padding: "24px 32px",
  },
  cardTitle: {
    fontFamily: "'Lora', serif",
    fontSize: "20px",
    fontWeight: 700,
    color: white,
    margin: 0,
  },
  cardSub: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.65)",
    marginTop: "4px",
  },
  cardBody: {
    padding: "32px",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "24px",
  } as React.CSSProperties,
  label: {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: muted,
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid rgba(26,58,92,0.18)",
    borderRadius: "6px",
    fontSize: "15px",
    fontFamily: "'Outfit', sans-serif",
    color: navy,
    backgroundColor: "#fafafa",
    boxSizing: "border-box" as const,
    outline: "none",
  },
  select: {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid rgba(26,58,92,0.18)",
    borderRadius: "6px",
    fontSize: "15px",
    fontFamily: "'Outfit', sans-serif",
    color: navy,
    backgroundColor: "#fafafa",
    boxSizing: "border-box" as const,
    appearance: "auto" as const,
  },
  divider: {
    border: "none",
    borderTop: "1px solid rgba(26,58,92,0.1)",
    margin: "28px 0",
  },
  resultsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
    marginBottom: "20px",
  } as React.CSSProperties,
  resultBox: (highlight?: boolean): React.CSSProperties => ({
    backgroundColor: highlight ? navy : "#f0f4f8",
    borderRadius: "8px",
    padding: "16px 20px",
    textAlign: "center" as const,
  }),
  resultLabel: (highlight?: boolean): React.CSSProperties => ({
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: highlight ? "rgba(255,255,255,0.6)" : muted,
    marginBottom: "6px",
  }),
  resultValue: (highlight?: boolean): React.CSSProperties => ({
    fontFamily: "'Lora', serif",
    fontSize: "22px",
    fontWeight: 700,
    color: highlight ? copper : navy,
  }),
  disclaimer: {
    fontSize: "11px",
    color: muted,
    lineHeight: 1.6,
    marginTop: "20px",
    padding: "16px",
    backgroundColor: "#f0f4f8",
    borderRadius: "6px",
    borderLeft: `3px solid ${copper}`,
  },
  cta: {
    display: "inline-block",
    marginTop: "20px",
    backgroundColor: copper,
    color: white,
    padding: "14px 28px",
    borderRadius: "6px",
    fontWeight: 700,
    fontSize: "14px",
    textDecoration: "none",
    letterSpacing: "0.02em",
  },
  toggle: (active: boolean): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    fontSize: "14px",
    color: navy,
    fontWeight: active ? 600 : 400,
    userSelect: "none",
  }),
  toggleBox: (active: boolean): React.CSSProperties => ({
    width: "40px",
    height: "22px",
    borderRadius: "11px",
    backgroundColor: active ? copper : "rgba(26,58,92,0.2)",
    position: "relative",
    transition: "background-color 0.2s",
    flexShrink: 0,
  }),
  toggleKnob: (active: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "3px",
    left: active ? "21px" : "3px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: white,
    transition: "left 0.2s",
    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
  }),
  compareCol: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    padding: "20px",
  } as React.CSSProperties,
  compareColHighlight: {
    flex: 1,
    backgroundColor: navy,
    borderRadius: "10px",
    padding: "20px",
  } as React.CSSProperties,
};

// ── TOGGLE COMPONENT ──────────────────────────────────────────────────────────

function Toggle({ active, onToggle, label }: { active: boolean; onToggle: () => void; label: string }) {
  return (
    <div style={S.toggle(active)} onClick={onToggle}>
      <div style={S.toggleBox(active)}>
        <div style={S.toggleKnob(active)} />
      </div>
      {label}
    </div>
  );
}

// ── RESULT BOX ────────────────────────────────────────────────────────────────

function ResultBox({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={S.resultBox(highlight)}>
      <div style={S.resultLabel(highlight)}>{label}</div>
      <div style={S.resultValue(highlight)}>{value}</div>
    </div>
  );
}

// ── CALCULATOR 1: TEXAS PAYMENT ───────────────────────────────────────────────

function TexasPaymentCalc() {
  const [price, setPrice] = useState("350000");
  const [downPct, setDownPct] = useState("10");
  const [rate, setRate] = useState("6.75");
  const [term, setTerm] = useState("30");
  const [loanType, setLoanType] = useState("conventional");
  const [countyIdx, setCountyIdx] = useState(0);
  const [insurance, setInsurance] = useState("1800");

  const homePrice = parseFloat(price) || 0;
  const dp = parseFloat(downPct) || 0;
  const downAmt = homePrice * (dp / 100);
  const loanAmt = homePrice - downAmt;
  const annualRate = parseFloat(rate) || 0;
  const years = parseInt(term);
  const county = TX_COUNTIES[countyIdx];

  const pi = monthlyPI(loanAmt, annualRate, years);
  const monthlyTax = (homePrice * county.rate) / 12;
  const monthlyIns = (parseFloat(insurance) || 0) / 12;

  const ltv = loanAmt / homePrice;
  let monthlyMI = 0;
  let miLabel = "";
  if (loanType === "fha") {
    monthlyMI = (loanAmt * 0.0055) / 12;
    miLabel = "MIP";
  } else if (loanType === "conventional" && ltv > 0.8) {
    const pmiRate = ltv > 0.95 ? 0.012 : ltv > 0.9 ? 0.009 : ltv > 0.85 ? 0.007 : 0.005;
    monthlyMI = (loanAmt * pmiRate) / 12;
    miLabel = "PMI";
  } else if (loanType === "usda") {
    monthlyMI = (loanAmt * 0.0035) / 12;
    miLabel = "Guarantee Fee";
  }

  const total = pi + monthlyTax + monthlyIns + monthlyMI;

  return (
    <div style={S.card}>
      <div style={S.cardHeader}>
        <h2 style={S.cardTitle}>Texas Payment Calculator</h2>
        <p style={S.cardSub}>Includes property taxes by county — the number most calculators leave out</p>
      </div>
      <div style={S.cardBody}>
        <div style={S.grid2}>
          <div>
            <label style={S.label}>Home Price</label>
            <input style={S.input} type="number" value={price}
              onChange={e => setPrice(e.target.value)} min="50000" step="5000" />
          </div>
          <div>
            <label style={S.label}>Down Payment (%)</label>
            <input style={S.input} type="number" value={downPct}
              onChange={e => setDownPct(e.target.value)} min="0" max="100" step="0.5" />
          </div>
          <div>
            <label style={S.label}>Interest Rate (%)</label>
            <input style={S.input} type="number" value={rate}
              onChange={e => setRate(e.target.value)} min="1" max="15" step="0.05" />
          </div>
          <div>
            <label style={S.label}>Loan Term</label>
            <select style={S.select} value={term} onChange={e => setTerm(e.target.value)}>
              <option value="30">30-Year Fixed</option>
              <option value="15">15-Year Fixed</option>
              <option value="20">20-Year Fixed</option>
            </select>
          </div>
          <div>
            <label style={S.label}>Loan Type</label>
            <select style={S.select} value={loanType} onChange={e => setLoanType(e.target.value)}>
              <option value="conventional">Conventional</option>
              <option value="fha">FHA</option>
              <option value="va">VA</option>
              <option value="usda">USDA</option>
            </select>
          </div>
          <div>
            <label style={S.label}>Texas County</label>
            <select style={S.select} value={countyIdx}
              onChange={e => setCountyIdx(parseInt(e.target.value))}>
              {TX_COUNTIES.map((c, i) => (
                <option key={i} value={i}>{c.label} ({(c.rate * 100).toFixed(2)}%)</option>
              ))}
            </select>
          </div>
          <div>
            <label style={S.label}>Annual Insurance ($)</label>
            <input style={S.input} type="number" value={insurance}
              onChange={e => setInsurance(e.target.value)} min="500" step="100" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ fontSize: "13px", color: muted, lineHeight: 1.5 }}>
              Down payment: {fmt(downAmt)}<br />
              Loan amount: {fmt(loanAmt)}<br />
              Tax rate: {(county.rate * 100).toFixed(2)}%/yr
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.resultsGrid}>
          <ResultBox label="Principal & Interest" value={fmtDec(pi)} />
          <ResultBox label={`Property Tax / Mo (${county.rate * 100 < 2 ? "↓" : "↑"})`} value={fmtDec(monthlyTax)} />
          <ResultBox label="Insurance / Mo" value={fmtDec(monthlyIns)} />
          {monthlyMI > 0 && <ResultBox label={miLabel + " / Mo"} value={fmtDec(monthlyMI)} />}
          <ResultBox label="Total Monthly Payment" value={fmtDec(total)} highlight />
        </div>

        {loanType === "fha" && (
          <div style={{ fontSize: "13px", color: copper, marginBottom: "12px", fontWeight: 500 }}>
            ⚠ FHA MIP stays for the life of the loan if you put less than 10% down. This affects long-term cost significantly.
          </div>
        )}
        {loanType === "va" && (
          <div style={{ fontSize: "13px", color: copper, marginBottom: "12px", fontWeight: 500 }}>
            ✓ VA loans have no monthly PMI — ever. The funding fee (1.25–3.3%) can be rolled into the loan.
          </div>
        )}

        <div style={S.disclaimer}>
          This calculator provides estimates for educational purposes only and does not constitute a loan commitment or rate guarantee. Actual payments will vary based on credit, lender, and final loan terms. Property tax rates are approximate and subject to change. Shalanda Smith · NMLS #554554 · Unfiltered Keys · Powered by Secure Choice Lending · NMLS #1689518
        </div>

        <a href="https://calendly.com/shalanda-securechoicelending/30min"
          target="_blank" rel="noopener noreferrer" style={S.cta}>
          Get Your Real Numbers →
        </a>
      </div>
    </div>
  );
}

// ── CALCULATOR 2: VA LOAN ─────────────────────────────────────────────────────

function VALoanCalc() {
  const [price, setPrice] = useState("350000");
  const [downPct, setDownPct] = useState("0");
  const [rate, setRate] = useState("5.92");
  const [term, setTerm] = useState("30");
  const [useType, setUseType] = useState("first");
  const [disabled, setDisabled] = useState(false);
  const [convRate, setConvRate] = useState("6.75");

  const homePrice = parseFloat(price) || 0;
  const dp = parseFloat(downPct) || 0;
  const downAmt = homePrice * (dp / 100);
  const baseLoan = homePrice - downAmt;

  let ffPct = 0;
  if (!disabled) {
    if (useType === "first") {
      ffPct = dp >= 10 ? 1.25 : dp >= 5 ? 1.5 : 2.15;
    } else {
      ffPct = dp >= 10 ? 1.25 : dp >= 5 ? 1.5 : 3.3;
    }
  }
  const fundingFee = baseLoan * (ffPct / 100);
  const totalLoan = baseLoan + fundingFee;
  const years = parseInt(term);
  const vaPI = monthlyPI(totalLoan, parseFloat(rate) || 0, years);

  const convPMIRate = dp < 5 ? 0.012 : dp < 10 ? 0.009 : dp < 20 ? 0.006 : 0;
  const convPMI = (baseLoan * convPMIRate) / 12;
  const convPI = monthlyPI(baseLoan, parseFloat(convRate) || 0, years);
  const convTotal = convPI + convPMI;
  const vaSavingsPerMonth = convTotal - vaPI;
  const vaSavings5yr = vaSavingsPerMonth * 60;

  return (
    <div style={S.card}>
      <div style={S.cardHeader}>
        <h2 style={S.cardTitle}>VA Loan Calculator</h2>
        <p style={S.cardSub}>Includes funding fee, no PMI — and side-by-side vs. conventional</p>
      </div>
      <div style={S.cardBody}>
        <div style={S.grid2}>
          <div>
            <label style={S.label}>Home Price</label>
            <input style={S.input} type="number" value={price}
              onChange={e => setPrice(e.target.value)} min="50000" step="5000" />
          </div>
          <div>
            <label style={S.label}>Down Payment (%)</label>
            <input style={S.input} type="number" value={downPct}
              onChange={e => setDownPct(e.target.value)} min="0" max="100" step="0.5" />
          </div>
          <div>
            <label style={S.label}>VA Interest Rate (%)</label>
            <input style={S.input} type="number" value={rate}
              onChange={e => setRate(e.target.value)} min="1" max="15" step="0.05" />
          </div>
          <div>
            <label style={S.label}>Loan Term</label>
            <select style={S.select} value={term} onChange={e => setTerm(e.target.value)}>
              <option value="30">30-Year Fixed</option>
              <option value="15">15-Year Fixed</option>
            </select>
          </div>
          <div>
            <label style={S.label}>VA Loan Use</label>
            <select style={S.select} value={useType} onChange={e => setUseType(e.target.value)}>
              <option value="first">First Use</option>
              <option value="subsequent">Subsequent Use</option>
            </select>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "2px" }}>
            <Toggle
              active={disabled}
              onToggle={() => setDisabled(!disabled)}
              label={disabled ? "VA Disability — Funding Fee Waived ✓" : "VA Disability Rating? (waives fee)"}
            />
          </div>
        </div>

        <hr style={S.divider} />

        <div style={S.resultsGrid}>
          <ResultBox label="Base Loan Amount" value={fmt(baseLoan)} />
          <ResultBox label={disabled ? "Funding Fee (Waived)" : `Funding Fee (${ffPct}%)`}
            value={disabled ? "$0" : fmt(fundingFee)} />
          <ResultBox label="Financed Loan Total" value={fmt(totalLoan)} />
          <ResultBox label="Monthly PMI" value="$0 — Never" />
          <ResultBox label="Monthly Payment (P&I)" value={fmtDec(vaPI)} highlight />
        </div>

        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy }}>
              VA vs. Conventional — Side by Side
            </div>
            <div>
              <label style={{ ...S.label, display: "inline", marginRight: "8px" }}>Conv. Rate (%)</label>
              <input style={{ ...S.input, width: "90px", display: "inline-block" }}
                type="number" value={convRate}
                onChange={e => setConvRate(e.target.value)} min="1" max="15" step="0.05" />
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
            <div style={S.compareColHighlight}>
              <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: copper, fontWeight: 700, marginBottom: "12px" }}>VA Loan ★</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", marginBottom: "4px" }}>Down Payment</div>
              <div style={{ color: white, fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>{fmt(downAmt)}</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", marginBottom: "4px" }}>Monthly PMI</div>
              <div style={{ color: white, fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>$0 — Ever</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", marginBottom: "4px" }}>Monthly P&I</div>
              <div style={{ color: copper, fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "22px" }}>{fmtDec(vaPI)}</div>
            </div>
            <div style={S.compareCol}>
              <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: muted, fontWeight: 700, marginBottom: "12px" }}>Conventional</div>
              <div style={{ color: muted, fontSize: "13px", marginBottom: "4px" }}>Down Payment</div>
              <div style={{ color: navy, fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>{fmt(downAmt)}</div>
              <div style={{ color: muted, fontSize: "13px", marginBottom: "4px" }}>Monthly PMI</div>
              <div style={{ color: navy, fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>{convPMI > 0 ? fmtDec(convPMI) : "$0 (20%+ down)"}</div>
              <div style={{ color: muted, fontSize: "13px", marginBottom: "4px" }}>Monthly P&I</div>
              <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "22px", color: navy }}>{fmtDec(convTotal)}</div>
            </div>
          </div>
          {vaSavingsPerMonth > 0 && (
            <div style={{ marginTop: "16px", padding: "14px 20px", backgroundColor: "#e8f0e8", borderRadius: "8px", borderLeft: "3px solid #2d7a2d" }}>
              <span style={{ fontWeight: 700, color: "#1a5c1a" }}>VA saves you {fmtDec(vaSavingsPerMonth)}/month</span>
              <span style={{ color: "#2d7a2d", fontSize: "14px" }}> — that's {fmt(vaSavings5yr)} over 5 years.</span>
            </div>
          )}
        </>

        <div style={S.disclaimer}>
          VA loan estimates include the VA funding fee financed into the loan. Rates shown are illustrative — your actual rate depends on credit score, lender, and market conditions. Funding fee percentages per VA guidelines as of 2024. A service-connected disability rating may waive the funding fee entirely — verify with your lender. Shalanda Smith · NMLS #554554 · Unfiltered Keys · Powered by Secure Choice Lending · NMLS #1689518
        </div>

        <a href="https://calendly.com/shalanda-securechoicelending/30min"
          target="_blank" rel="noopener noreferrer" style={S.cta}>
          Check Your VA Eligibility →
        </a>
      </div>
    </div>
  );
}

// ── CALCULATOR 3: FHA VS CONVENTIONAL ────────────────────────────────────────

function FHAvsConvCalc() {
  const [price, setPrice] = useState("300000");
  const [downPct, setDownPct] = useState("5");
  const [fhaRate, setFhaRate] = useState("5.91");
  const [convRate, setConvRate] = useState("6.45");
  const [term, setTerm] = useState("30");
  const [creditScore, setCreditScore] = useState("680");

  const homePrice = parseFloat(price) || 0;
  const dp = parseFloat(downPct) || 0;
  const downAmt = homePrice * (dp / 100);
  const loanAmt = homePrice - downAmt;
  const years = parseInt(term);

  // FHA
  const fhaUpfront = loanAmt * 0.0175;
  const fhaTotalLoan = loanAmt + fhaUpfront;
  const fhaPI = monthlyPI(fhaTotalLoan, parseFloat(fhaRate) || 0, years);
  const fhaMIP = (fhaTotalLoan * 0.0055) / 12;
  const fhaTotal = fhaPI + fhaMIP;
  const fhaMIPForLife = dp < 10;

  // Conventional
  const score = parseInt(creditScore);
  const ltv = loanAmt / homePrice;
  let convPMIRate = 0;
  if (ltv > 0.8) {
    if (score >= 760) convPMIRate = 0.0032;
    else if (score >= 740) convPMIRate = 0.0038;
    else if (score >= 720) convPMIRate = 0.0048;
    else if (score >= 700) convPMIRate = 0.0062;
    else if (score >= 680) convPMIRate = 0.0080;
    else convPMIRate = 0.0110;
  }
  const convPI = monthlyPI(loanAmt, parseFloat(convRate) || 0, years);
  const convPMI = (loanAmt * convPMIRate) / 12;
  const convTotal = convPI + convPMI;

  const pmiDropMonth = convPMIRate > 0 ? Math.ceil(Math.log(1 - (loanAmt * 0.2) / (convPI / (parseFloat(convRate) / 100 / 12))) / Math.log(1 + parseFloat(convRate) / 100 / 12)) : 0;

  // 5-year cost
  const fha5yr = fhaTotal * 60 + downAmt + fhaUpfront;
  const conv5yr = convTotal * 60 + downAmt;
  const winner = fha5yr < conv5yr ? "fha" : "conv";

  return (
    <div style={S.card}>
      <div style={S.cardHeader}>
        <h2 style={S.cardTitle}>FHA vs. Conventional Comparison</h2>
        <p style={S.cardSub}>See the real 5-year cost difference — including MIP permanence vs. PMI removability</p>
      </div>
      <div style={S.cardBody}>
        <div style={S.grid2}>
          <div>
            <label style={S.label}>Home Price</label>
            <input style={S.input} type="number" value={price}
              onChange={e => setPrice(e.target.value)} min="50000" step="5000" />
          </div>
          <div>
            <label style={S.label}>Down Payment (%)</label>
            <input style={S.input} type="number" value={downPct}
              onChange={e => setDownPct(e.target.value)} min="3" max="25" step="0.5" />
          </div>
          <div>
            <label style={S.label}>FHA Rate (%)</label>
            <input style={S.input} type="number" value={fhaRate}
              onChange={e => setFhaRate(e.target.value)} min="1" max="15" step="0.05" />
          </div>
          <div>
            <label style={S.label}>Conventional Rate (%)</label>
            <input style={S.input} type="number" value={convRate}
              onChange={e => setConvRate(e.target.value)} min="1" max="15" step="0.05" />
          </div>
          <div>
            <label style={S.label}>Credit Score (for PMI)</label>
            <select style={S.select} value={creditScore} onChange={e => setCreditScore(e.target.value)}>
              <option value="760">760+</option>
              <option value="740">740–759</option>
              <option value="720">720–739</option>
              <option value="700">700–719</option>
              <option value="680">680–699</option>
              <option value="660">Below 680</option>
            </select>
          </div>
          <div>
            <label style={S.label}>Loan Term</label>
            <select style={S.select} value={term} onChange={e => setTerm(e.target.value)}>
              <option value="30">30-Year Fixed</option>
              <option value="15">15-Year Fixed</option>
            </select>
          </div>
        </div>

        <hr style={S.divider} />

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const, marginBottom: "24px" }}>
          <div style={{ ...S.compareCol, flex: 1, minWidth: "220px", backgroundColor: winner === "fha" ? "#e8f2e8" : "#f0f4f8", borderLeft: winner === "fha" ? "3px solid #2d7a2d" : "none" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: winner === "fha" ? "#2d7a2d" : muted, fontWeight: 700, marginBottom: "12px" }}>
              FHA Loan {winner === "fha" ? "★ Lower 5-yr Cost" : ""}
            </div>
            {[
              ["Down Payment", fmt(downAmt)],
              ["Upfront MIP (1.75%)", fmt(fhaUpfront) + " (financed)"],
              ["Monthly P&I", fmtDec(fhaPI)],
              ["Monthly MIP (0.55%)", fmtDec(fhaMIP)],
              ["Total Monthly", fmtDec(fhaTotal)],
              ["MIP Duration", fhaMIPForLife ? "Life of loan ⚠" : "Removed at 11 yrs"],
              ["5-Year Total Out-of-Pocket", fmt(fha5yr)],
            ].map(([l, v]) => (
              <div key={l as string} style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "12px", color: muted }}>{l}</div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: navy }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ ...S.compareCol, flex: 1, minWidth: "220px", backgroundColor: winner === "conv" ? "#e8f2e8" : "#f0f4f8", borderLeft: winner === "conv" ? "3px solid #2d7a2d" : "none" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: winner === "conv" ? "#2d7a2d" : muted, fontWeight: 700, marginBottom: "12px" }}>
              Conventional {winner === "conv" ? "★ Lower 5-yr Cost" : ""}
            </div>
            {[
              ["Down Payment", fmt(downAmt)],
              ["Upfront Cost", "$0"],
              ["Monthly P&I", fmtDec(convPI)],
              ["Monthly PMI", convPMI > 0 ? fmtDec(convPMI) : "$0 (20%+ down)"],
              ["Total Monthly", fmtDec(convTotal)],
              ["PMI Duration", convPMI > 0 ? `Removed ~${Math.round(pmiDropMonth / 12)} yrs (80% LTV)` : "No PMI"],
              ["5-Year Total Out-of-Pocket", fmt(conv5yr)],
            ].map(([l, v]) => (
              <div key={l as string} style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "12px", color: muted }}>{l}</div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: navy }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "16px 20px", backgroundColor: navy, borderRadius: "8px", marginBottom: "8px" }}>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginBottom: "4px" }}>Key insight</div>
          <div style={{ color: white, fontSize: "14px", lineHeight: 1.6 }}>
            {fhaMIPForLife
              ? `With less than 10% down, FHA MIP never goes away. Over ${years} years that's ${fmt(fhaMIP * years * 12)} in mortgage insurance alone. If your credit supports it, conventional PMI removes itself at 80% LTV — making it cheaper long-term in most scenarios.`
              : `With 10%+ down, FHA MIP drops off at year 11. Compare this to conventional PMI which removes at 80% LTV (~${Math.round(pmiDropMonth / 12)} years). The right choice depends on your rate spread and how long you plan to stay.`
            }
          </div>
        </div>

        <div style={S.disclaimer}>
          Results are estimates for educational purposes only. PMI rates vary by lender, credit score, and LTV. FHA MIP rates reflect current HUD guidelines. Conventional PMI drop-off estimates assume standard amortization. This does not constitute a loan commitment or rate guarantee. Shalanda Smith · NMLS #554554 · Unfiltered Keys · Powered by Secure Choice Lending · NMLS #1689518
        </div>

        <a href="https://calendly.com/shalanda-securechoicelending/30min"
          target="_blank" rel="noopener noreferrer" style={S.cta}>
          Run My Actual Scenario →
        </a>
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function Calculators() {
  useSEO({
    title: "Texas Mortgage Calculators | Payment, VA & Loan Comparison | Unfiltered Keys",
    description: "Free Texas mortgage calculators with property taxes by county. Estimate your real monthly payment, VA loan costs, and FHA vs. Conventional comparison.",
    canonical: "https://unfilteredkeys.com/calculators",
  });

  const [tab, setTab] = useState<"texas" | "va" | "compare">("texas");

  const tabs: { id: "texas" | "va" | "compare"; label: string }[] = [
    { id: "texas", label: "Texas Payment" },
    { id: "va", label: "VA Loan" },
    { id: "compare", label: "FHA vs. Conventional" },
  ];

  return (
    <div style={S.page}>
      <div style={S.hero}>
        <p style={S.eyebrow}>Mortgage Calculators · Texas · Unfiltered Keys</p>
        <h1 style={S.heroH1}>
          Real numbers. <em style={{ color: copper }}>Not estimates built for someone else's state.</em>
        </h1>
        <p style={S.heroSub}>
          These calculators include Texas property taxes, VA funding fees, and MIP permanence — everything generic calculators leave out.
        </p>
        <div style={S.tabBar}>
          {tabs.map(t => (
            <button key={t.id} style={S.tabBtn(tab === t.id)} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={S.body}>
        {tab === "texas" && <TexasPaymentCalc />}
        {tab === "va" && <VALoanCalc />}
        {tab === "compare" && <FHAvsConvCalc />}

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "20px", color: navy, marginBottom: "8px" }}>
            Numbers look right? <em>Let's make them official.</em>
          </p>
          <p style={{ color: muted, fontSize: "14px", marginBottom: "20px" }}>
            A 30-minute strategy call turns estimates into a real pre-approval.
          </p>
          <a href="https://calendly.com/shalanda-securechoicelending/30min"
            target="_blank" rel="noopener noreferrer"
            style={{ ...S.cta, fontSize: "16px", padding: "16px 36px" }}>
            Book a Strategy Call →
          </a>
        </div>
      </div>
    </div>
  );
}
