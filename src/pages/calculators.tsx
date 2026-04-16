import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";
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

function fmtDec(n: number): string {
  const safe = isFinite(n) && !isNaN(n) ? n : 0;
  return safe.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function fmt(n: number): string {
  const safe = isFinite(n) && !isNaN(n) ? n : 0;
  return Math.round(safe).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function pct(n: number): string {
  const safe = isFinite(n) && !isNaN(n) ? n : 0;
  return safe.toFixed(1) + "%";
}

// ── STYLES ────────────────────────────────────────────────────────────────────

const navy = "#1a3a5c";
const copper = "#b5621e";
const bg = "#f7f5f2";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.55)";
const green = "#2d7a2d";
const greenBg = "#e8f2e8";
const red = "#8b1a1a";
const redBg = "#f5e8e8";
const yellow = "#7a6000";
const yellowBg = "#f5f0e0";

const S = {
  page: { backgroundColor: bg, minHeight: "100vh", fontFamily: "'Outfit', sans-serif", color: navy } as React.CSSProperties,
  hero: { backgroundColor: navy, padding: "64px 24px 48px", textAlign: "center" as const },
  eyebrow: { fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: copper, marginBottom: "16px", fontWeight: 500 },
  heroH1: { fontFamily: "'Lora', serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, color: white, lineHeight: 1.15, marginBottom: "16px" },
  heroSub: { fontSize: "16px", color: "rgba(255,255,255,0.7)", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.6 },
  tabBar: { display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" as const },
  tabBtn: (active: boolean): React.CSSProperties => ({
    padding: "10px 22px", borderRadius: "6px",
    border: active ? "none" : "1px solid rgba(255,255,255,0.25)",
    backgroundColor: active ? copper : "transparent",
    color: active ? white : "rgba(255,255,255,0.75)",
    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "14px",
    cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.01em",
  }),
  body: { maxWidth: "900px", margin: "0 auto", padding: "48px 24px 80px" },
  card: { backgroundColor: white, borderRadius: "12px", boxShadow: "0 2px 16px rgba(26,58,92,0.08)", overflow: "hidden" as const },
  cardHeader: { backgroundColor: navy, padding: "24px 32px" },
  cardTitle: { fontFamily: "'Lora', serif", fontSize: "20px", fontWeight: 700, color: white, margin: 0 },
  cardSub: { fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "4px" },
  cardBody: { padding: "32px" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "24px" } as React.CSSProperties,
  label: { display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: muted, marginBottom: "6px" },
  input: { width: "100%", padding: "10px 14px", border: "1.5px solid rgba(26,58,92,0.18)", borderRadius: "6px", fontSize: "15px", fontFamily: "'Outfit', sans-serif", color: navy, backgroundColor: "#fafafa", boxSizing: "border-box" as const, outline: "none" },
  select: { width: "100%", padding: "10px 14px", border: "1.5px solid rgba(26,58,92,0.18)", borderRadius: "6px", fontSize: "15px", fontFamily: "'Outfit', sans-serif", color: navy, backgroundColor: "#fafafa", boxSizing: "border-box" as const },
  divider: { border: "none", borderTop: "1px solid rgba(26,58,92,0.1)", margin: "28px 0" },
  resultsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "20px" } as React.CSSProperties,
  resultBox: (highlight?: boolean): React.CSSProperties => ({ backgroundColor: highlight ? navy : "#f0f4f8", borderRadius: "8px", padding: "16px 20px", textAlign: "center" as const }),
  resultLabel: (highlight?: boolean): React.CSSProperties => ({ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: highlight ? "rgba(255,255,255,0.6)" : muted, marginBottom: "6px" }),
  resultValue: (highlight?: boolean): React.CSSProperties => ({ fontFamily: "'Lora', serif", fontSize: "22px", fontWeight: 700, color: highlight ? copper : navy }),
  disclaimer: { fontSize: "11px", color: muted, lineHeight: 1.6, marginTop: "20px", padding: "16px", backgroundColor: "#f0f4f8", borderRadius: "6px", borderLeft: `3px solid ${copper}` },
  cta: { display: "inline-block", marginTop: "20px", backgroundColor: copper, color: white, padding: "14px 28px", borderRadius: "6px", fontWeight: 700, fontSize: "14px", textDecoration: "none", letterSpacing: "0.02em" },
  toggle: (active: boolean): React.CSSProperties => ({ display: "inline-flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "14px", color: navy, fontWeight: active ? 600 : 400, userSelect: "none" as const }),
  toggleBox: (active: boolean): React.CSSProperties => ({ width: "40px", height: "22px", borderRadius: "11px", backgroundColor: active ? copper : "rgba(26,58,92,0.2)", position: "relative" as const, transition: "background-color 0.2s", flexShrink: 0 }),
  toggleKnob: (active: boolean): React.CSSProperties => ({ position: "absolute" as const, top: "3px", left: active ? "21px" : "3px", width: "16px", height: "16px", borderRadius: "50%", backgroundColor: white, transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }),
  compareCol: { flex: 1, backgroundColor: "#f0f4f8", borderRadius: "10px", padding: "20px" } as React.CSSProperties,
  compareColHighlight: { flex: 1, backgroundColor: navy, borderRadius: "10px", padding: "20px" } as React.CSSProperties,
};

function Toggle({ active, onToggle, label }: { active: boolean; onToggle: () => void; label: string }) {
  return (
    <div style={S.toggle(active)} onClick={onToggle}>
      <div style={S.toggleBox(active)}><div style={S.toggleKnob(active)} /></div>
      {label}
    </div>
  );
}

function ResultBox({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={S.resultBox(highlight)}>
      <div style={S.resultLabel(highlight)}>{label}</div>
      <div style={S.resultValue(highlight)}>{value}</div>
    </div>
  );
}

// ── DTI GAUGE ─────────────────────────────────────────────────────────────────

function DTIGauge({ dti }: { dti: number }) {
  const clamped = Math.min(dti, 60);
  const barWidth = (clamped / 60) * 100;
  const color = dti <= 36 ? green : dti <= 43 ? copper : red;
  const label = dti <= 36 ? "Strong — Most lenders prefer this range" : dti <= 43 ? "Acceptable — VA and FHA allow up to 50–55%" : dti <= 50 ? "High — VA/FHA may still approve; conventional unlikely" : "Very High — Debt reduction needed before applying";

  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: muted }}>Debt-to-Income Ratio</span>
        <span style={{ fontFamily: "'Lora', serif", fontSize: "28px", fontWeight: 700, color }}>{pct(dti)}</span>
      </div>
      <div style={{ height: "10px", backgroundColor: "#e0e8f0", borderRadius: "5px", overflow: "hidden" as const }}>
        <div style={{ height: "100%", width: `${barWidth}%`, backgroundColor: color, borderRadius: "5px", transition: "width 0.4s ease" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: muted, marginTop: "4px" }}>
        <span>0%</span><span style={{ color: green }}>36%</span><span style={{ color: copper }}>43%</span><span style={{ color: red }}>50%+</span><span>60%</span>
      </div>
      <div style={{ marginTop: "10px", padding: "10px 14px", backgroundColor: dti <= 36 ? greenBg : dti <= 43 ? yellowBg : redBg, borderRadius: "6px", fontSize: "13px", color: dti <= 36 ? green : dti <= 43 ? yellow : red, fontWeight: 500 }}>
        {label}
      </div>
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
  let monthlyMI = 0, miLabel = "";
  if (loanType === "fha") { monthlyMI = (loanAmt * 0.0055) / 12; miLabel = "MIP"; }
  else if (loanType === "conventional" && ltv > 0.8) {
    const pmiRate = ltv > 0.95 ? 0.012 : ltv > 0.9 ? 0.009 : ltv > 0.85 ? 0.007 : 0.005;
    monthlyMI = (loanAmt * pmiRate) / 12; miLabel = "PMI";
  } else if (loanType === "usda") { monthlyMI = (loanAmt * 0.0035) / 12; miLabel = "Guarantee Fee"; }
  const total = pi + monthlyTax + monthlyIns + monthlyMI;

  return (
    <div style={S.card}>
      <div style={S.cardHeader}>
        <h2 style={S.cardTitle}>Texas Payment Calculator</h2>
        <p style={S.cardSub}>Includes property taxes by county — the number most calculators leave out</p>
      </div>
      <div style={S.cardBody}>
        <div style={S.grid2}>
          <div><label style={S.label}>Home Price</label><input style={S.input} type="number" value={price} onChange={e => setPrice(e.target.value)} min="50000" step="5000" /></div>
          <div><label style={S.label}>Down Payment (%)</label><input style={S.input} type="number" value={downPct} onChange={e => setDownPct(e.target.value)} min="0" max="100" step="0.5" /></div>
          <div><label style={S.label}>Interest Rate (%)</label><input style={S.input} type="number" value={rate} onChange={e => setRate(e.target.value)} min="1" max="15" step="0.05" /></div>
          <div><label style={S.label}>Loan Term</label><select style={S.select} value={term} onChange={e => setTerm(e.target.value)}><option value="30">30-Year Fixed</option><option value="15">15-Year Fixed</option><option value="20">20-Year Fixed</option></select></div>
          <div><label style={S.label}>Loan Type</label><select style={S.select} value={loanType} onChange={e => setLoanType(e.target.value)}><option value="conventional">Conventional</option><option value="fha">FHA</option><option value="va">VA</option><option value="usda">USDA</option></select></div>
          <div><label style={S.label}>Texas County</label><select style={S.select} value={countyIdx} onChange={e => setCountyIdx(parseInt(e.target.value))}>{TX_COUNTIES.map((c, i) => (<option key={i} value={i}>{c.label} ({(c.rate * 100).toFixed(2)}%)</option>))}</select></div>
          <div><label style={S.label}>Annual Insurance ($)</label><input style={S.input} type="number" value={insurance} onChange={e => setInsurance(e.target.value)} min="500" step="100" /></div>
          <div style={{ display: "flex", flexDirection: "column" as const, justifyContent: "flex-end" }}><div style={{ fontSize: "13px", color: muted, lineHeight: 1.5 }}>Down payment: {fmt(downAmt)}<br />Loan amount: {fmt(loanAmt)}<br />Tax rate: {(county.rate * 100).toFixed(2)}%/yr</div></div>
        </div>
        <hr style={S.divider} />
        <div style={S.resultsGrid}>
          <ResultBox label="Principal & Interest" value={fmtDec(pi)} />
          <ResultBox label="Property Tax / Mo" value={fmtDec(monthlyTax)} />
          <ResultBox label="Insurance / Mo" value={fmtDec(monthlyIns)} />
          {monthlyMI > 0 && <ResultBox label={miLabel + " / Mo"} value={fmtDec(monthlyMI)} />}
          <ResultBox label="Total Monthly Payment" value={fmtDec(total)} highlight />
        </div>
        {loanType === "fha" && <div style={{ fontSize: "13px", color: copper, marginBottom: "12px", fontWeight: 500 }}>⚠ FHA MIP stays for the life of the loan if you put less than 10% down.</div>}
        {loanType === "va" && <div style={{ fontSize: "13px", color: copper, marginBottom: "12px", fontWeight: 500 }}>✓ VA loans have no monthly PMI — ever. The funding fee (1.25–3.3%) can be rolled into the loan.</div>}
        <div style={S.disclaimer}>Estimates are for educational purposes only and do not constitute a loan commitment or rate guarantee. Property tax rates are approximate. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518</div>
        <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.cta}>Get Your Real Numbers →</a>
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
  if (!disabled) { ffPct = useType === "first" ? (dp >= 10 ? 1.25 : dp >= 5 ? 1.5 : 2.15) : (dp >= 10 ? 1.25 : dp >= 5 ? 1.5 : 3.3); }
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
      <div style={S.cardHeader}><h2 style={S.cardTitle}>VA Loan Calculator</h2><p style={S.cardSub}>Includes funding fee, no PMI — and side-by-side vs. conventional</p></div>
      <div style={S.cardBody}>
        <div style={S.grid2}>
          <div><label style={S.label}>Home Price</label><input style={S.input} type="number" value={price} onChange={e => setPrice(e.target.value)} min="50000" step="5000" /></div>
          <div><label style={S.label}>Down Payment (%)</label><input style={S.input} type="number" value={downPct} onChange={e => setDownPct(e.target.value)} min="0" max="100" step="0.5" /></div>
          <div><label style={S.label}>VA Interest Rate (%)</label><input style={S.input} type="number" value={rate} onChange={e => setRate(e.target.value)} min="1" max="15" step="0.05" /></div>
          <div><label style={S.label}>Loan Term</label><select style={S.select} value={term} onChange={e => setTerm(e.target.value)}><option value="30">30-Year Fixed</option><option value="15">15-Year Fixed</option></select></div>
          <div><label style={S.label}>VA Loan Use</label><select style={S.select} value={useType} onChange={e => setUseType(e.target.value)}><option value="first">First Use</option><option value="subsequent">Subsequent Use</option></select></div>
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "2px" }}><Toggle active={disabled} onToggle={() => setDisabled(!disabled)} label={disabled ? "VA Disability — Fee Waived ✓" : "VA Disability? (waives fee)"} /></div>
        </div>
        <hr style={S.divider} />
        <div style={S.resultsGrid}>
          <ResultBox label="Base Loan Amount" value={fmt(baseLoan)} />
          <ResultBox label={disabled ? "Funding Fee (Waived)" : `Funding Fee (${ffPct}%)`} value={disabled ? "$0" : fmt(fundingFee)} />
          <ResultBox label="Financed Loan Total" value={fmt(totalLoan)} />
          <ResultBox label="Monthly PMI" value="$0 — Never" />
          <ResultBox label="Monthly P&I" value={fmtDec(vaPI)} highlight />
        </div>
        <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "16px" }}>VA vs. Conventional — Side by Side</div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
          <div style={S.compareColHighlight}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: copper, fontWeight: 700, marginBottom: "12px" }}>VA Loan ★</div>
            {[["Down Payment", fmt(downAmt)], ["Monthly PMI", "$0 — Ever"], ["Monthly P&I", fmtDec(vaPI)]].map(([l, v]) => (<div key={l} style={{ marginBottom: "12px" }}><div style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", marginBottom: "2px" }}>{l}</div><div style={{ color: l === "Monthly P&I" ? copper : white, fontFamily: l === "Monthly P&I" ? "'Lora', serif" : "inherit", fontWeight: 700, fontSize: l === "Monthly P&I" ? "22px" : "16px" }}>{v}</div></div>))}
          </div>
          <div style={S.compareCol}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: muted, fontWeight: 700, marginBottom: "12px" }}>Conventional</div>
            <div style={{ marginBottom: "12px" }}><div style={{ color: muted, fontSize: "13px", marginBottom: "2px" }}>Down Payment</div><div style={{ fontWeight: 700, fontSize: "16px", color: navy }}>{fmt(downAmt)}</div></div>
            <div style={{ marginBottom: "12px" }}><div style={{ color: muted, fontSize: "13px", marginBottom: "2px" }}>Monthly PMI</div><div style={{ fontWeight: 700, fontSize: "16px", color: navy }}>{convPMI > 0 ? fmtDec(convPMI) : "$0 (20%+ down)"}</div></div>
            <div><div style={{ color: muted, fontSize: "13px", marginBottom: "2px" }}>Monthly P&I + PMI</div><div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "22px", color: navy }}>{fmtDec(convTotal)}</div></div>
          </div>
        </div>
        {vaSavingsPerMonth > 0 && <div style={{ marginTop: "16px", padding: "14px 20px", backgroundColor: greenBg, borderRadius: "8px", borderLeft: `3px solid ${green}` }}><span style={{ fontWeight: 700, color: green }}>VA saves you {fmtDec(vaSavingsPerMonth)}/month</span><span style={{ color: green, fontSize: "14px" }}> — that's {fmt(vaSavings5yr)} over 5 years.</span></div>}
        <div style={{ marginBottom: "8px" }}><label style={{ ...S.label, marginTop: "20px" }}>Conventional Rate for Comparison (%)</label><input style={{ ...S.input, maxWidth: "160px" }} type="number" value={convRate} onChange={e => setConvRate(e.target.value)} min="1" max="15" step="0.05" /></div>
        <div style={S.disclaimer}>VA loan estimates include the VA funding fee financed into the loan. Funding fee percentages per VA guidelines as of 2024. A service-connected disability rating may waive the funding fee — verify with your lender. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518</div>
        <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.cta}>Check Your VA Eligibility →</a>
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
  const fhaUpfront = loanAmt * 0.0175;
  const fhaTotalLoan = loanAmt + fhaUpfront;
  const fhaPI = monthlyPI(fhaTotalLoan, parseFloat(fhaRate) || 0, years);
  const fhaMIP = (fhaTotalLoan * 0.0055) / 12;
  const fhaTotal = fhaPI + fhaMIP;
  const fhaMIPForLife = dp < 10;
  const score = parseInt(creditScore);
  const ltv = loanAmt / homePrice;
  let convPMIRate = 0;
  if (ltv > 0.8) { convPMIRate = score >= 760 ? 0.0032 : score >= 740 ? 0.0038 : score >= 720 ? 0.0048 : score >= 700 ? 0.0062 : score >= 680 ? 0.0080 : 0.0110; }
  const convPI = monthlyPI(loanAmt, parseFloat(convRate) || 0, years);
  const convPMI = (loanAmt * convPMIRate) / 12;
  const convTotal = convPI + convPMI;
  const r = parseFloat(convRate) / 100 / 12;
  const pmiDropMonth = convPMIRate > 0 && r > 0 ? Math.ceil(Math.log(0.8 * homePrice / loanAmt) / Math.log(1 + r) * -1 + years * 12) : 0;
  const fha5yr = fhaTotal * 60 + downAmt + fhaUpfront;
  const conv5yr = convTotal * 60 + downAmt;
  const winner = fha5yr < conv5yr ? "fha" : "conv";

  const colStyle = (w: "fha" | "conv"): React.CSSProperties => ({
    flex: 1, minWidth: "220px", backgroundColor: winner === w ? greenBg : "#f0f4f8",
    borderRadius: "10px", padding: "20px", borderLeft: winner === w ? `3px solid ${green}` : "none",
  });

  return (
    <div style={S.card}>
      <div style={S.cardHeader}><h2 style={S.cardTitle}>FHA vs. Conventional Comparison</h2><p style={S.cardSub}>See the real 5-year cost difference — including MIP permanence vs. PMI removability</p></div>
      <div style={S.cardBody}>
        <div style={S.grid2}>
          <div><label style={S.label}>Home Price</label><input style={S.input} type="number" value={price} onChange={e => setPrice(e.target.value)} min="50000" step="5000" /></div>
          <div><label style={S.label}>Down Payment (%)</label><input style={S.input} type="number" value={downPct} onChange={e => setDownPct(e.target.value)} min="3" max="25" step="0.5" /></div>
          <div><label style={S.label}>FHA Rate (%)</label><input style={S.input} type="number" value={fhaRate} onChange={e => setFhaRate(e.target.value)} min="1" max="15" step="0.05" /></div>
          <div><label style={S.label}>Conventional Rate (%)</label><input style={S.input} type="number" value={convRate} onChange={e => setConvRate(e.target.value)} min="1" max="15" step="0.05" /></div>
          <div><label style={S.label}>Credit Score (for PMI)</label><select style={S.select} value={creditScore} onChange={e => setCreditScore(e.target.value)}><option value="760">760+</option><option value="740">740–759</option><option value="720">720–739</option><option value="700">700–719</option><option value="680">680–699</option><option value="660">Below 680</option></select></div>
          <div><label style={S.label}>Loan Term</label><select style={S.select} value={term} onChange={e => setTerm(e.target.value)}><option value="30">30-Year Fixed</option><option value="15">15-Year Fixed</option></select></div>
        </div>
        <hr style={S.divider} />
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const, marginBottom: "24px" }}>
          <div style={colStyle("fha")}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: winner === "fha" ? green : muted, fontWeight: 700, marginBottom: "12px" }}>FHA Loan {winner === "fha" ? "★ Lower 5-yr Cost" : ""}</div>
            {[["Down Payment", fmt(downAmt)], ["Upfront MIP (1.75%)", fmt(fhaUpfront) + " (financed)"], ["Monthly P&I", fmtDec(fhaPI)], ["Monthly MIP", fmtDec(fhaMIP)], ["Total Monthly", fmtDec(fhaTotal)], ["MIP Duration", fhaMIPForLife ? "Life of loan ⚠" : "Removed at 11 yrs"], ["5-Year Total", fmt(fha5yr)]].map(([l, v]) => (<div key={l} style={{ marginBottom: "10px" }}><div style={{ fontSize: "12px", color: muted }}>{l}</div><div style={{ fontWeight: 700, fontSize: "15px", color: l === "MIP Duration" && fhaMIPForLife ? red : navy }}>{v}</div></div>))}
          </div>
          <div style={colStyle("conv")}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: winner === "conv" ? green : muted, fontWeight: 700, marginBottom: "12px" }}>Conventional {winner === "conv" ? "★ Lower 5-yr Cost" : ""}</div>
            {[["Down Payment", fmt(downAmt)], ["Upfront Cost", "$0"], ["Monthly P&I", fmtDec(convPI)], ["Monthly PMI", convPMI > 0 ? fmtDec(convPMI) : "$0 (20%+ down)"], ["Total Monthly", fmtDec(convTotal)], ["PMI Duration", convPMI > 0 ? `Removed ~${Math.max(0, Math.round(pmiDropMonth / 12))} yrs (80% LTV)` : "No PMI"], ["5-Year Total", fmt(conv5yr)]].map(([l, v]) => (<div key={l} style={{ marginBottom: "10px" }}><div style={{ fontSize: "12px", color: muted }}>{l}</div><div style={{ fontWeight: 700, fontSize: "15px", color: navy }}>{v}</div></div>))}
          </div>
        </div>
        <div style={{ padding: "16px 20px", backgroundColor: navy, borderRadius: "8px", marginBottom: "8px" }}>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginBottom: "4px" }}>Key insight</div>
          <div style={{ color: white, fontSize: "14px", lineHeight: 1.6 }}>{fhaMIPForLife ? `With less than 10% down, FHA MIP never goes away. That's ${fmtDec(fhaMIP)}/month for the life of the loan. If your credit supports conventional, PMI drops at 80% LTV — making it cheaper long-term in most cases.` : `With 10%+ down, FHA MIP drops off at year 11. Conventional PMI removes at ~80% LTV. The right choice depends on your rate spread and how long you plan to stay.`}</div>
        </div>
        <div style={S.disclaimer}>Results are estimates for educational purposes only. PMI rates vary by lender, credit, and LTV. FHA MIP rates reflect current HUD guidelines. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518</div>
        <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.cta}>Run My Actual Scenario →</a>
      </div>
    </div>
  );
}

// ── CALCULATOR 4: BUDGET & DTI ────────────────────────────────────────────────

interface DebtRow { id: number; label: string; amount: string; }

function BudgetCalc() {
  const [grossMonthly, setGrossMonthly] = useState("7500");
  const [debts, setDebts] = useState<DebtRow[]>([
    { id: 1, label: "Car Payment", amount: "450" },
    { id: 2, label: "Student Loans", amount: "200" },
    { id: 3, label: "Credit Cards (min)", amount: "75" },
  ]);
  const [rate, setRate] = useState("6.75");
  const [term, setTerm] = useState("30");
  const [downPct, setDownPct] = useState("10");
  const [countyIdx, setCountyIdx] = useState(0);
  const [insurance, setInsurance] = useState("1800");
  const [loanType, setLoanType] = useState("conventional");
  const [showSummary, setShowSummary] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(10);

  const addDebt = () => { setDebts(d => [...d, { id: nextId.current++, label: "", amount: "" }]); };
  const removeDebt = (id: number) => setDebts(d => d.filter(r => r.id !== id));
  const updateDebt = (id: number, field: "label" | "amount", val: string) =>
    setDebts(d => d.map(r => r.id === id ? { ...r, [field]: val } : r));

  const gross = parseFloat(grossMonthly) || 0;
  const totalExistingDebt = debts.reduce((s, r) => s + (parseFloat(r.amount) || 0), 0);
  const maxBackEnd = gross * 0.43;
  const maxFrontEnd = gross * 0.28;
  const maxHousingByBackEnd = Math.max(0, maxBackEnd - totalExistingDebt);
  const maxHousing = Math.min(maxHousingByBackEnd, maxFrontEnd);
  const comfortBackEnd = gross * 0.36;
  const comfortHousing = Math.max(0, Math.min(comfortBackEnd - totalExistingDebt, gross * 0.25));

  const county = TX_COUNTIES[countyIdx];
  const annualRate = parseFloat(rate) || 0;
  const years = parseInt(term);
  const dp = parseFloat(downPct) || 0;
  const monthlyIns = (parseFloat(insurance) || 0) / 12;

  function maxPriceFromPayment(targetPayment: number): number {
    let price = targetPayment * 150;
    for (let i = 0; i < 50; i++) {
      const down = price * (dp / 100);
      const loan = price - down;
      const pi = monthlyPI(loan, annualRate, years);
      const tax = (price * county.rate) / 12;
      let mi = 0;
      if (loanType === "fha") mi = (loan * 0.0055) / 12;
      else if (loanType === "conventional" && loan / price > 0.8) mi = (loan * 0.006) / 12;
      else if (loanType === "usda") mi = (loan * 0.0035) / 12;
      const total = pi + tax + monthlyIns + mi;
      const err = total - targetPayment;
      if (Math.abs(err) < 1) break;
      price -= err * 120;
    }
    return Math.max(0, price);
  }

  const maxPrice = maxPriceFromPayment(maxHousing);
  const comfortPrice = maxPriceFromPayment(comfortHousing);
  const maxDown = maxPrice * (dp / 100);
  const comfortDown = comfortPrice * (dp / 100);
  const comfortDTI = gross > 0 ? ((comfortHousing + totalExistingDebt) / gross) * 100 : 0;
  const maxDTI = gross > 0 ? ((maxHousing + totalExistingDebt) / gross) * 100 : 0;
  const currentDebtDTI = gross > 0 ? (totalExistingDebt / gross) * 100 : 0;

  const handleShowSummary = () => {
    setShowSummary(true);
    setTimeout(() => summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  return (
    <div style={S.card}>
      <div style={S.cardHeader}>
        <h2 style={S.cardTitle}>Budget & Affordability Calculator</h2>
        <p style={S.cardSub}>DTI-based — shows what you can afford without overextending</p>
      </div>
      <div style={S.cardBody}>
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "16px", paddingBottom: "8px", borderBottom: `2px solid ${copper}` }}>
            01 — Your Income
          </div>
          <div style={{ maxWidth: "320px" }}>
            <label style={S.label}>Gross Monthly Income (before taxes)</label>
            <input style={S.input} type="number" value={grossMonthly} onChange={e => setGrossMonthly(e.target.value)} min="1000" step="100" />
            <div style={{ fontSize: "12px", color: muted, marginTop: "6px" }}>Annual: {fmt((parseFloat(grossMonthly) || 0) * 12)}</div>
          </div>
        </div>

        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "16px", paddingBottom: "8px", borderBottom: `2px solid ${copper}` }}>
            02 — Monthly Debt Payments
          </div>
          <div style={{ fontSize: "13px", color: muted, marginBottom: "14px" }}>Include minimum payments only — car, student loans, credit cards, personal loans. Do not include rent or utilities.</div>
          {debts.map(row => (
            <div key={row.id} style={{ display: "flex", gap: "12px", marginBottom: "10px", alignItems: "center" }}>
              <input style={{ ...S.input, flex: 2 }} type="text" placeholder="Debt type (e.g. Car Payment)" value={row.label} onChange={e => updateDebt(row.id, "label", e.target.value)} />
              <input style={{ ...S.input, flex: 1, maxWidth: "140px" }} type="number" placeholder="$/mo" value={row.amount} onChange={e => updateDebt(row.id, "amount", e.target.value)} min="0" />
              <button onClick={() => removeDebt(row.id)} style={{ background: "none", border: "none", color: muted, cursor: "pointer", fontSize: "18px", lineHeight: 1, padding: "0 4px" }} title="Remove">×</button>
            </div>
          ))}
          <button onClick={addDebt} style={{ marginTop: "4px", background: "none", border: `1px dashed rgba(26,58,92,0.3)`, borderRadius: "6px", padding: "8px 16px", color: navy, fontSize: "13px", cursor: "pointer", width: "100%" }}>
            + Add another debt
          </button>
          <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
            <span style={{ color: muted }}>Total existing monthly debt</span>
            <span style={{ fontWeight: 700, color: navy }}>{fmtDec(totalExistingDebt)}</span>
          </div>
          {gross > 0 && <div style={{ marginTop: "4px", display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
            <span style={{ color: muted }}>Debt-only DTI (before housing)</span>
            <span style={{ fontWeight: 600, color: currentDebtDTI > 25 ? red : green }}>{pct(currentDebtDTI)}</span>
          </div>}
        </div>

        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "16px", paddingBottom: "8px", borderBottom: `2px solid ${copper}` }}>
            03 — Loan Assumptions
          </div>
          <div style={S.grid2}>
            <div><label style={S.label}>Interest Rate (%)</label><input style={S.input} type="number" value={rate} onChange={e => setRate(e.target.value)} min="1" max="15" step="0.05" /></div>
            <div><label style={S.label}>Loan Term</label><select style={S.select} value={term} onChange={e => setTerm(e.target.value)}><option value="30">30-Year Fixed</option><option value="15">15-Year Fixed</option></select></div>
            <div><label style={S.label}>Down Payment (%)</label><input style={S.input} type="number" value={downPct} onChange={e => setDownPct(e.target.value)} min="0" max="30" step="0.5" /></div>
            <div><label style={S.label}>Loan Type</label><select style={S.select} value={loanType} onChange={e => setLoanType(e.target.value)}><option value="conventional">Conventional</option><option value="fha">FHA</option><option value="va">VA (0% down)</option><option value="usda">USDA (0% down)</option></select></div>
            <div><label style={S.label}>Texas County</label><select style={S.select} value={countyIdx} onChange={e => setCountyIdx(parseInt(e.target.value))}>{TX_COUNTIES.map((c, i) => (<option key={i} value={i}>{c.label}</option>))}</select></div>
            <div><label style={S.label}>Annual Insurance ($)</label><input style={S.input} type="number" value={insurance} onChange={e => setInsurance(e.target.value)} min="500" step="100" /></div>
          </div>
        </div>

        <hr style={S.divider} />

        {gross > 0 && <DTIGauge dti={comfortDTI} />}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          <div style={{ backgroundColor: greenBg, borderRadius: "10px", padding: "20px", borderLeft: `3px solid ${green}` }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: green, fontWeight: 700, marginBottom: "12px" }}>Comfortable Range (36% DTI)</div>
            <div style={{ marginBottom: "8px" }}><div style={{ fontSize: "12px", color: muted }}>Max Home Price</div><div style={{ fontFamily: "'Lora', serif", fontSize: "24px", fontWeight: 700, color: navy }}>{fmt(comfortPrice)}</div></div>
            <div style={{ marginBottom: "8px" }}><div style={{ fontSize: "12px", color: muted }}>Max Housing Payment</div><div style={{ fontWeight: 700, color: navy }}>{fmtDec(comfortHousing)}/mo</div></div>
            <div><div style={{ fontSize: "12px", color: muted }}>Down Payment Needed</div><div style={{ fontWeight: 700, color: navy }}>{fmt(comfortDown)}</div></div>
          </div>
          <div style={{ backgroundColor: "#f0f4f8", borderRadius: "10px", padding: "20px", borderLeft: `3px solid ${copper}` }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: copper, fontWeight: 700, marginBottom: "12px" }}>Max Approved (43% DTI)</div>
            <div style={{ marginBottom: "8px" }}><div style={{ fontSize: "12px", color: muted }}>Max Home Price</div><div style={{ fontFamily: "'Lora', serif", fontSize: "24px", fontWeight: 700, color: navy }}>{fmt(maxPrice)}</div></div>
            <div style={{ marginBottom: "8px" }}><div style={{ fontSize: "12px", color: muted }}>Max Housing Payment</div><div style={{ fontWeight: 700, color: navy }}>{fmtDec(maxHousing)}/mo</div></div>
            <div><div style={{ fontSize: "12px", color: muted }}>Down Payment Needed</div><div style={{ fontWeight: 700, color: navy }}>{fmt(maxDown)}</div></div>
          </div>
        </div>

        <div style={{ padding: "14px 18px", backgroundColor: navy, borderRadius: "8px", marginBottom: "20px", fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
          <strong style={{ color: white }}>Comfortable vs. Max:</strong> The "comfortable" range keeps your total DTI at 36% — what most conventional lenders prefer. The "max approved" figure reflects 43% back-end DTI, which VA and FHA will often approve but leaves less monthly cushion.
        </div>

        <button
          onClick={handleShowSummary}
          style={{ width: "100%", padding: "14px", backgroundColor: copper, color: white, border: "none", borderRadius: "8px", fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "15px", cursor: "pointer", marginBottom: "8px" }}
        >
          Show My Full Summary →
        </button>

        {showSummary && (
          <div ref={summaryRef} style={{ marginTop: "32px", backgroundColor: "#f7f5f2", borderRadius: "12px", border: `2px solid rgba(26,58,92,0.12)`, overflow: "hidden" as const }}>
            <div style={{ backgroundColor: navy, padding: "20px 28px" }}>
              <div style={{ fontFamily: "'Lora', serif", fontSize: "18px", fontWeight: 700, color: white }}>Your Mortgage Budget Summary</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>Based on your inputs — save a screenshot or book a call to make it official</div>
            </div>
            <div style={{ padding: "28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "24px" }}>
                {[
                  ["Gross Monthly Income", fmtDec(gross)],
                  ["Monthly Debt Payments", fmtDec(totalExistingDebt)],
                  ["Debt-Only DTI", pct(currentDebtDTI)],
                  ["Comfortable Home Price", fmt(comfortPrice)],
                  ["Max Approved Price", fmt(maxPrice)],
                  ["Down Payment (Comfortable)", fmt(comfortDown)],
                  ["Max Monthly Housing (Comfortable)", fmtDec(comfortHousing)],
                  ["Total DTI at Comfortable Range", pct(comfortDTI)],
                  ["Total DTI at Max", pct(maxDTI)],
                  ["County", TX_COUNTIES[countyIdx].label.split("(")[0].trim()],
                  ["Rate Assumption", rate + "%"],
                  ["Loan Type", loanType.toUpperCase()],
                ].map(([l, v]) => (
                  <div key={l} style={{ backgroundColor: white, borderRadius: "8px", padding: "14px 16px" }}>
                    <div style={{ fontSize: "11px", color: muted, marginBottom: "4px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>{l}</div>
                    <div style={{ fontWeight: 700, fontSize: "15px", color: navy }}>{v}</div>
                  </div>
                ))}
              </div>
              {debts.filter(d => d.amount).length > 0 && (
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: muted, marginBottom: "10px" }}>Debts Included</div>
                  {debts.filter(d => d.amount).map(d => (
                    <div key={d.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(26,58,92,0.08)", fontSize: "14px" }}>
                      <span style={{ color: navy }}>{d.label || "Debt"}</span>
                      <span style={{ fontWeight: 600 }}>{fmtDec(parseFloat(d.amount) || 0)}/mo</span>
                    </div>
                  ))}
                </div>
              )}
              <div style={S.disclaimer}>
                This summary is for educational purposes only. Actual approval amounts depend on credit score, employment history, assets, and lender-specific guidelines. DTI thresholds vary by loan type — VA and FHA may allow higher DTI. This does not constitute a loan commitment or rate guarantee. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518
              </div>
              <div style={{ marginTop: "24px", textAlign: "center" as const, padding: "24px", backgroundColor: navy, borderRadius: "10px" }}>
                <div style={{ fontFamily: "'Lora', serif", fontSize: "18px", color: white, marginBottom: "8px" }}>
                  Numbers make sense? <em style={{ color: copper }}>Let's make them real.</em>
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginBottom: "20px" }}>
                  A 30-minute strategy call turns this estimate into an actual pre-approval — with your real credit file, income structure, and the right loan product for your situation.
                </div>
                <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", backgroundColor: copper, color: white, padding: "14px 32px", borderRadius: "6px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                  Book a Strategy Call →
                </a>
                <div style={{ marginTop: "12px", fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
                  30 minutes · No obligation · shalandasmith.com
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── BAH DATA ──────────────────────────────────────────────────────────────────

const BAH_DATA: Record<string, Record<string, { w: number; wo: number }>> = {
  "Fort Hood (Killeen / Bell County)": {
    "E1–E4": { w: 1662, wo: 1374 }, "E5": { w: 1695, wo: 1530 }, "E6": { w: 1920, wo: 1626 },
    "E7": { w: 2070, wo: 1668 }, "E8": { w: 2238, wo: 1746 }, "E9": { w: 2409, wo: 1806 },
    "W1": { w: 1938, wo: 1665 }, "W2": { w: 2139, wo: 1743 }, "W3": { w: 2346, wo: 1812 },
    "W4": { w: 2433, wo: 1950 }, "W5": { w: 2544, wo: 2109 },
    "O1E": { w: 2100, wo: 1692 }, "O2E": { w: 2313, wo: 1788 }, "O3E": { w: 2451, wo: 1908 },
    "O1": { w: 1731, wo: 1623 }, "O2": { w: 1917, wo: 1689 }, "O3": { w: 2340, wo: 1833 },
    "O4": { w: 2577, wo: 2076 }, "O5": { w: 2748, wo: 2169 }, "O6": { w: 2769, wo: 2325 },
  },
  "Fort Bliss (El Paso)": {
    "E1–E4": { w: 1665, wo: 1302 }, "E5": { w: 1809, wo: 1437 }, "E6": { w: 2148, wo: 1611 },
    "E7": { w: 2172, wo: 1668 }, "E8": { w: 2187, wo: 1881 }, "E9": { w: 2241, wo: 1977 },
    "W1": { w: 2169, wo: 1626 }, "W2": { w: 2178, wo: 1878 }, "W3": { w: 2205, wo: 1992 },
    "W4": { w: 2256, wo: 2148 }, "W5": { w: 2334, wo: 2169 },
    "O1E": { w: 2175, wo: 1806 }, "O2E": { w: 2196, wo: 1956 }, "O3E": { w: 2268, wo: 2142 },
    "O1": { w: 1857, wo: 1518 }, "O2": { w: 2145, wo: 1764 }, "O3": { w: 2202, wo: 2022 },
    "O4": { w: 2352, wo: 2157 }, "O5": { w: 2466, wo: 2172 }, "O6": { w: 2484, wo: 2178 },
  },
  "Fort Sam Houston (San Antonio / JBSA)": {
    "E1–E4": { w: 1728, wo: 1359 }, "E5": { w: 1869, wo: 1500 }, "E6": { w: 2094, wo: 1596 },
    "E7": { w: 2112, wo: 1731 }, "E8": { w: 2121, wo: 1920 }, "E9": { w: 2157, wo: 1977 },
    "W1": { w: 2109, wo: 1692 }, "W2": { w: 2118, wo: 1917 }, "W3": { w: 2130, wo: 1986 },
    "W4": { w: 2178, wo: 2085 }, "W5": { w: 2280, wo: 2097 },
    "O1E": { w: 2115, wo: 1866 }, "O2E": { w: 2124, wo: 1965 }, "O3E": { w: 2196, wo: 2082 },
    "O1": { w: 1905, wo: 1584 }, "O2": { w: 2091, wo: 1827 }, "O3": { w: 2127, wo: 2007 },
    "O4": { w: 2307, wo: 2088 }, "O5": { w: 2457, wo: 2100 }, "O6": { w: 2475, wo: 2103 },
  },
};

const BAH_RANKS = [
  "E1–E4", "E5", "E6", "E7", "E8", "E9",
  "W1", "W2", "W3", "W4", "W5",
  "O1E", "O2E", "O3E",
  "O1", "O2", "O3", "O4", "O5", "O6",
];

const BAH_INSTALLATIONS = Object.keys(BAH_DATA);

const BAH_COUNTY_RATES: Record<string, number> = {
  "Fort Hood (Killeen / Bell County)": 0.0193,
  "Fort Bliss (El Paso)": 0.0198,
  "Fort Sam Houston (San Antonio / JBSA)": 0.0200,
};

const BAH_MEDIAN_RENTS: Record<string, number> = {
  "Fort Hood (Killeen / Bell County)": 1350,
  "Fort Bliss (El Paso)": 1250,
  "Fort Sam Houston (San Antonio / JBSA)": 1550,
};

function BAHCalc() {
  const [installation, setInstallation] = useState(BAH_INSTALLATIONS[0]);
  const [rank, setRank] = useState("E5");
  const [hasDeps, setHasDeps] = useState(true);
  const [rate, setRate] = useState("5.92");
  const [insurance, setInsurance] = useState("1800");

  const rankData = BAH_DATA[installation]?.[rank] ?? { w: 0, wo: 0 };
  const bah = hasDeps ? rankData.w : rankData.wo;
  const countyTaxRate = BAH_COUNTY_RATES[installation] ?? 0.019;
  const annualRate = parseFloat(rate) || 0;
  const monthlyIns = (parseFloat(insurance) || 0) / 12;

  function maxPriceFromBAH(targetPayment: number): number {
    let price = targetPayment * 200;
    for (let i = 0; i < 60; i++) {
      const pi = monthlyPI(price, annualRate, 30);
      const tax = (price * countyTaxRate) / 12;
      const total = pi + tax + monthlyIns;
      const err = total - targetPayment;
      if (Math.abs(err) < 1) break;
      price -= err * 130;
    }
    return Math.max(0, price);
  }

  const maxPrice = maxPriceFromBAH(bah);
  const pi = monthlyPI(maxPrice, annualRate, 30);
  const monthlyTax = (maxPrice * countyTaxRate) / 12;
  const totalPayment = pi + monthlyTax + monthlyIns;
  const surplus = bah - totalPayment;
  const medianRent = BAH_MEDIAN_RENTS[installation] ?? 1400;
  const rentSurplus = bah - medianRent;

  return (
    <div style={S.card}>
      <div style={S.cardHeader}>
        <h2 style={S.cardTitle}>BAH & Buying Power Calculator</h2>
        <p style={S.cardSub}>2026 verified rates · Fort Hood, Fort Bliss, Fort Sam Houston · VA loan 0% down</p>
      </div>
      <div style={S.cardBody}>
        <div style={S.grid2}>
          <div>
            <label style={S.label}>Installation</label>
            <select style={S.select} value={installation} onChange={e => setInstallation(e.target.value)}>
              {BAH_INSTALLATIONS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label style={S.label}>Pay Grade / Rank</label>
            <select style={S.select} value={rank} onChange={e => setRank(e.target.value)}>
              {BAH_RANKS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label style={S.label}>Dependency Status</label>
            <select style={S.select} value={hasDeps ? "yes" : "no"} onChange={e => setHasDeps(e.target.value === "yes")}>
              <option value="yes">With Dependents</option>
              <option value="no">Without Dependents</option>
            </select>
          </div>
          <div>
            <label style={S.label}>VA Loan Rate (%)</label>
            <input style={S.input} type="number" value={rate} onChange={e => setRate(e.target.value)} min="1" max="15" step="0.05" />
          </div>
          <div>
            <label style={S.label}>Annual Insurance ($)</label>
            <input style={S.input} type="number" value={insurance} onChange={e => setInsurance(e.target.value)} min="500" step="100" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, justifyContent: "flex-end" }}>
            <div style={{ fontSize: "13px", color: muted, lineHeight: 1.6 }}>
              County tax rate: {(countyTaxRate * 100).toFixed(2)}%/yr<br />
              Loan type: VA (0% down, no PMI)<br />
              Term: 30-year fixed
            </div>
          </div>
        </div>

        <hr style={S.divider} />

        {/* BAH result row */}
        <div style={{ backgroundColor: copper, borderRadius: "10px", padding: "20px 24px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "16px" }}>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>
              2026 BAH — {rank} · {installation.split("(")[0].trim()} · {hasDeps ? "With Dependents" : "Without Dependents"}
            </div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: "32px", fontWeight: 700, color: white }}>{fmt(bah)}<span style={{ fontSize: "16px", fontWeight: 400, marginLeft: "4px" }}>/mo</span></div>
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
            Tax-free · Paid monthly with LES<br />
            Grossed up by most VA lenders for DTI
          </div>
        </div>

        {/* Buying power breakdown */}
        <div style={S.resultsGrid}>
          <ResultBox label="Est. Home Price (VA 0% Down)" value={fmt(maxPrice)} />
          <ResultBox label="Monthly P&I" value={fmtDec(pi)} />
          <ResultBox label="Property Tax / Mo" value={fmtDec(monthlyTax)} />
          <ResultBox label="Insurance / Mo" value={fmtDec(monthlyIns)} />
          <ResultBox label="Total PITI / Mo" value={fmtDec(totalPayment)} highlight />
        </div>

        {/* Surplus / shortfall */}
        {surplus >= 0 ? (
          <div style={{ backgroundColor: greenBg, borderRadius: "8px", padding: "16px 20px", borderLeft: `3px solid ${green}`, marginBottom: "20px" }}>
            <div style={{ fontWeight: 700, color: green, marginBottom: "4px" }}>
              BAH covers PITI — with {fmt(surplus)}/mo remaining
            </div>
            <div style={{ fontSize: "13px", color: "#1a5c1a", lineHeight: 1.6 }}>
              At this rank and installation, your BAH is enough to fully cover a VA loan payment — including Texas property taxes and insurance. Any surplus stays in your pocket.
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: redBg, borderRadius: "8px", padding: "16px 20px", borderLeft: `3px solid ${red}`, marginBottom: "20px" }}>
            <div style={{ fontWeight: 700, color: red, marginBottom: "4px" }}>
              BAH is {fmt(Math.abs(surplus))}/mo short of full PITI coverage
            </div>
            <div style={{ fontSize: "13px", color: "#6b1a1a", lineHeight: 1.6 }}>
              Your BAH doesn't fully cover PITI at this price point — but other income sources (base pay, special pay) count toward qualification.
            </div>
          </div>
        )}

        {/* Buy vs Rent */}
        <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "16px" }}>Buy vs. Rent With Your BAH</div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const, marginBottom: "24px" }}>
          <div style={S.compareColHighlight}>
            <div style={{ fontSize: "11px", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: copper, fontWeight: 700, marginBottom: "12px" }}>Buy with VA Loan ★</div>
            {[["Monthly Payment", fmtDec(totalPayment)], ["Down Payment", "$0"], ["Monthly PMI", "$0 — Ever"], ["Building Equity", "From day one"], ["BAH Covers It", surplus >= 0 ? "✓ Yes" : "Partially"]].map(([l, v]) => (
              <div key={l} style={{ marginBottom: "10px" }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>{l}</div>
                <div style={{ fontWeight: 600, color: white, fontSize: "14px" }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={S.compareCol}>
            <div style={{ fontSize: "11px", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: muted, fontWeight: 700, marginBottom: "12px" }}>Rent Off-Post</div>
            {[["Est. Median Rent", fmt(medianRent) + "/mo"], ["Deposit", "Typically 1–2 months"], ["Monthly PMI", "N/A"], ["Building Equity", "None"], ["BAH Surplus", rentSurplus >= 0 ? fmt(rentSurplus) + "/mo" : "(" + fmt(Math.abs(rentSurplus)) + ") short"]].map(([l, v]) => (
              <div key={l} style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "12px", color: muted }}>{l}</div>
                <div style={{ fontWeight: 600, color: navy, fontSize: "14px" }}>{v}</div>
              </div>
            ))}
            <div style={{ fontSize: "11px", color: muted, marginTop: "8px" }}>Median rent estimates are approximate and vary by bedroom count and neighborhood.</div>
          </div>
        </div>

        {/* Key insight */}
        <div style={{ backgroundColor: navy, borderRadius: "8px", padding: "18px 20px", marginBottom: "20px" }}>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "6px" }}>The VA loan advantage for PCS buyers</div>
          <div style={{ fontSize: "14px", color: white, lineHeight: 1.7 }}>
            BAH is tax-free, which means most VA lenders can "gross it up" — treating it as if it were a higher pre-tax amount for qualification purposes. Combined with 0% down and no PMI, your BAH often goes further toward a mortgage payment than toward rent.
          </div>
        </div>

        <div style={S.disclaimer}>
          BAH rates shown are 2026 DoD published rates, effective January 1, 2026. Rates are updated annually — verify current rates at <strong>militarypay.defense.gov</strong>. Home price estimates assume a 30-year VA loan with 0% down, no PMI, and the county property tax rate shown. This calculator is for educational purposes only and does not constitute a loan commitment or rate guarantee.<br /><br />
          Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Licensed by the Texas Department of Savings and Mortgage Lending
        </div>
        <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={S.cta}>See My Full VA Buying Power →</a>
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

type TabId = "texas" | "va" | "compare" | "budget" | "bah";

export default function Calculators() {
    const [tab, setTab] = useState<TabId>("texas");
  const tabs: { id: TabId; label: string }[] = [
    { id: "texas", label: "Texas Payment" },
    { id: "va", label: "VA Loan" },
    { id: "compare", label: "FHA vs. Conventional" },
    { id: "budget", label: "Budget & Affordability" },
    { id: "bah", label: "BAH & Buying Power" },
  ];

  return (
    <>
    <SEO {...seoMeta.calculators} />
    <Helmet>
      <title>Mortgage Calculators | Keys by Shalanda</title>
      <meta name="description" content="Free mortgage calculators for Texas homebuyers. Estimate your payment, affordability, and loan options. NMLS #554554." />
      <link rel="canonical" href="https://shalandasmith.com/calculators" />
    </Helmet>
    <div style={S.page}>
      <div style={S.hero}>
        <p style={S.eyebrow}>Mortgage Calculators · Texas · Keys by Shalanda</p>
        <h1 style={S.heroH1}>Real numbers. <em style={{ color: copper }}>Not estimates built for someone else's state.</em></h1>
        <p style={S.heroSub}>These calculators include Texas property taxes, VA funding fees, MIP permanence, and DTI — everything generic calculators leave out.</p>
        <div style={S.tabBar}>
          {tabs.map(t => (
            <button key={t.id} style={S.tabBtn(tab === t.id)} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>
      </div>
      <div style={S.body}>
        {tab === "texas" && <TexasPaymentCalc />}
        {tab === "va" && <VALoanCalc />}
        {tab === "compare" && <FHAvsConvCalc />}
        {tab === "budget" && <BudgetCalc />}
        {tab === "bah" && <BAHCalc />}
        <div style={{ textAlign: "center" as const, marginTop: "48px" }}>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "20px", color: navy, marginBottom: "8px" }}>Numbers look right? <em>Let's make them official.</em></p>
          <p style={{ color: muted, fontSize: "14px", marginBottom: "20px" }}>A 30-minute strategy call turns estimates into a real pre-approval.</p>
          <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer"
            style={{ ...S.cta, fontSize: "16px", padding: "16px 36px" }}>Book a Strategy Call →</a>
        </div>
      </div>
    </div>
      </>
  );
}
