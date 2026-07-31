import { useState } from "react";

const navy = "#1a3a5c";
const copper = "#b5621e";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.62)";

const styles = {
  card: { backgroundColor: white, borderRadius: 12, boxShadow: "0 2px 16px rgba(26,58,92,0.08)", overflow: "hidden" } as React.CSSProperties,
  header: { backgroundColor: navy, padding: "24px 32px" } as React.CSSProperties,
  title: { fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700, color: white, margin: 0 } as React.CSSProperties,
  sub: { fontSize: 13, color: "rgba(255,255,255,0.68)", margin: "5px 0 0", lineHeight: 1.5 } as React.CSSProperties,
  body: { padding: 32 } as React.CSSProperties,
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 } as React.CSSProperties,
  label: { display: "block", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: muted, marginBottom: 6 } as React.CSSProperties,
  input: { width: "100%", padding: "10px 14px", border: "1.5px solid rgba(26,58,92,0.18)", borderRadius: 6, fontSize: 15, fontFamily: "'Outfit', sans-serif", color: navy, backgroundColor: "#fafafa", boxSizing: "border-box" } as React.CSSProperties,
  result: { backgroundColor: "#f0f4f8", borderRadius: 8, padding: "16px 18px" } as React.CSSProperties,
};

type Transaction = "purchase" | "irrrl" | "nonVaRefi";
type UseType = "first" | "subsequent";
type Exemption = "exempt" | "notExempt" | "unsure";
type FeeTreatment = "finance" | "closing" | "other";

const currency = (value: number) => Math.max(0, value || 0).toLocaleString("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 0,
});

export default function VaFundingFeeCalc() {
  const [transaction, setTransaction] = useState<Transaction>("purchase");
  const [purchasePrice, setPurchasePrice] = useState("350000");
  const [downPayment, setDownPayment] = useState("0");
  const [baseRefiLoan, setBaseRefiLoan] = useState("350000");
  const [useType, setUseType] = useState<UseType>("first");
  const [exemption, setExemption] = useState<Exemption>("notExempt");
  const [feeTreatment, setFeeTreatment] = useState<FeeTreatment>("finance");

  const price = Math.max(parseFloat(purchasePrice) || 0, 0);
  const down = Math.min(Math.max(parseFloat(downPayment) || 0, 0), price);
  const downPct = price > 0 ? (down / price) * 100 : 0;
  const baseLoan = transaction === "purchase"
    ? Math.max(price - down, 0)
    : Math.max(parseFloat(baseRefiLoan) || 0, 0);

  let feeRate = 0;
  if (exemption !== "exempt") {
    if (transaction === "irrrl") feeRate = 0.5;
    else if (transaction === "nonVaRefi") feeRate = useType === "first" ? 2.15 : 3.3;
    else feeRate = downPct >= 10 ? 1.25 : downPct >= 5 ? 1.5 : useType === "first" ? 2.15 : 3.3;
  }

  const fee = baseLoan * feeRate / 100;
  const financedFee = feeTreatment === "finance" ? fee : 0;
  const feeDueFromBorrower = feeTreatment === "closing" ? fee : 0;
  const totalFinanced = baseLoan + financedFee;
  const statusText = exemption === "exempt"
    ? "Estimated exempt"
    : exemption === "unsure"
      ? "Estimate assumes the fee applies"
      : "Fee applies";

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>VA Funding Fee Calculator</h2>
        <p style={styles.sub}>Estimate the one-time VA fee for a purchase, IRRRL, or refinance from a non-VA loan into VA.</p>
      </div>
      <div style={styles.body}>
        <div style={{ padding: "15px 18px", backgroundColor: "#f7efe7", borderLeft: `4px solid ${copper}`, borderRadius: 8, color: navy, fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
          This Texas calculator does not cover Texas 50(a)(6) home-equity loans. A refinance from conventional, FHA, or USDA into VA uses VA's cash-out funding-fee category, even when the borrower receives no cash.
        </div>

        <div style={styles.grid}>
          <div>
            <label style={styles.label}>Transaction</label>
            <select style={styles.input} value={transaction} onChange={e => setTransaction(e.target.value as Transaction)}>
              <option value="purchase">Purchase a home</option>
              <option value="irrrl">Refinance an existing VA loan with an IRRRL</option>
              <option value="nonVaRefi">Refinance a non-VA loan into a VA loan</option>
            </select>
          </div>

          {transaction === "purchase" ? (
            <>
              <div>
                <label style={styles.label}>Purchase Price</label>
                <input style={styles.input} type="number" min="0" step="1000" value={purchasePrice} onChange={e => setPurchasePrice(e.target.value)} />
              </div>
              <div>
                <label style={styles.label}>Down Payment ($)</label>
                <input style={styles.input} type="number" min="0" step="1000" value={downPayment} onChange={e => setDownPayment(e.target.value)} />
                <div style={{ fontSize: 11, color: muted, marginTop: 5 }}>{downPct.toFixed(2)}% of purchase price</div>
              </div>
            </>
          ) : (
            <div>
              <label style={styles.label}>{transaction === "irrrl" ? "New Base Loan Before Funding Fee" : "New VA Base Loan Before Funding Fee"}</label>
              <input style={styles.input} type="number" min="0" step="1000" value={baseRefiLoan} onChange={e => setBaseRefiLoan(e.target.value)} />
            </div>
          )}

          {transaction !== "irrrl" && (
            <div>
              <label style={styles.label}>VA Loan Use</label>
              <select style={styles.input} value={useType} onChange={e => setUseType(e.target.value as UseType)}>
                <option value="first">First use</option>
                <option value="subsequent">Subsequent use</option>
              </select>
            </div>
          )}

          <div>
            <label style={styles.label}>Funding-Fee Status</label>
            <select style={styles.input} value={exemption} onChange={e => setExemption(e.target.value as Exemption)}>
              <option value="notExempt">Not exempt</option>
              <option value="exempt">Exempt</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>

          <div>
            <label style={styles.label}>How Will the Fee Be Handled?</label>
            <select style={styles.input} value={feeTreatment} onChange={e => setFeeTreatment(e.target.value as FeeTreatment)}>
              <option value="finance">Finance it into the loan</option>
              <option value="closing">Pay it at closing</option>
              <option value="other">Paid by another permitted party</option>
            </select>
          </div>
        </div>

        {exemption === "unsure" && (
          <div style={{ marginTop: 18, padding: "12px 16px", backgroundColor: "#fff8e6", borderRadius: 7, color: "#6f5100", fontSize: 13, lineHeight: 1.55 }}>
            This estimate assumes the funding fee applies. Exemption status must be confirmed through the Certificate of Eligibility and final loan file.
          </div>
        )}

        <hr style={{ border: 0, borderTop: "1px solid rgba(26,58,92,0.12)", margin: "28px 0" }} />

        <div style={{ ...styles.grid, marginBottom: 20 }}>
          <div style={styles.result}><div style={styles.label}>Base Loan Amount</div><strong style={{ color: navy, fontSize: 21 }}>{currency(baseLoan)}</strong></div>
          <div style={styles.result}><div style={styles.label}>Funding Fee Rate</div><strong style={{ color: navy, fontSize: 21 }}>{exemption === "exempt" ? "Exempt" : `${feeRate.toFixed(2)}%`}</strong></div>
          <div style={styles.result}><div style={styles.label}>Funding Fee</div><strong style={{ color: navy, fontSize: 21 }}>{currency(fee)}</strong></div>
          <div style={{ ...styles.result, backgroundColor: navy }}><div style={{ ...styles.label, color: "rgba(255,255,255,0.62)" }}>Total Financed Loan</div><strong style={{ color: copper, fontSize: 21 }}>{currency(totalFinanced)}</strong></div>
        </div>

        <div style={{ fontSize: 14, lineHeight: 1.7, color: navy, backgroundColor: "#f8fafc", padding: "16px 18px", borderRadius: 8 }}>
          <strong>{statusText}.</strong><br />
          Fee treatment: {feeTreatment === "finance" ? "Financed into the loan" : feeTreatment === "closing" ? `${currency(feeDueFromBorrower)} estimated due from the borrower at closing` : "Shown as paid by another permitted party, subject to program and contribution limits"}.
        </div>

        <div style={{ marginTop: 20, fontSize: 12, lineHeight: 1.65, color: muted, padding: "15px 17px", backgroundColor: "#f0f4f8", borderLeft: `3px solid ${copper}`, borderRadius: 6 }}>
          Educational estimate only. The fee is based on the base loan amount before the funding fee. Exemption status, transaction classification, allowable payment source, and final fee must be confirmed on the COE and loan file. A borrower whose disability compensation is awarded retroactively may be eligible to request a funding-fee refund. This calculator does not estimate eligibility, approval, closing costs, cash to close, or payment. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518
        </div>
      </div>
    </div>
  );
}
