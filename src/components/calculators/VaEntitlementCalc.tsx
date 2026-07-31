import { useMemo, useState } from "react";

const TEXAS_2026_LIMIT = 832750;
const TEXAS_2026_MAX_GUARANTY = TEXAS_2026_LIMIT * 0.25;

const navy = "#1a3a5c";
const copper = "#b5621e";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.62)";
const green = "#2d6f4e";

const fmt = (value: number) =>
  Math.max(0, Number.isFinite(value) ? value : 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "1.5px solid rgba(26,58,92,0.18)",
  borderRadius: 7,
  fontSize: 15,
  fontFamily: "'Outfit', sans-serif",
  color: navy,
  backgroundColor: "#fff",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: muted,
  marginBottom: 7,
};

function Result({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        padding: "17px 18px",
        borderRadius: 8,
        backgroundColor: highlight ? navy : "#eef3f7",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: highlight ? "rgba(255,255,255,0.64)" : muted,
          marginBottom: 7,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Lora', serif",
          fontSize: 23,
          fontWeight: 700,
          color: highlight ? copper : navy,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default function VaEntitlementCalc() {
  const [status, setStatus] = useState<"full" | "partial">("partial");
  const [entitlementCharged, setEntitlementCharged] = useState("55000");
  const [purchasePrice, setPurchasePrice] = useState("400000");
  const [proposedDown, setProposedDown] = useState("0");

  const values = useMemo(() => {
    const price = Math.max(parseFloat(purchasePrice) || 0, 0);
    const charged = Math.max(parseFloat(entitlementCharged) || 0, 0);
    const down = Math.min(Math.max(parseFloat(proposedDown) || 0, 0), price);
    const baseLoan = Math.max(price - down, 0);

    if (status === "full") {
      return {
        price,
        charged: 0,
        down,
        baseLoan,
        remaining: TEXAS_2026_MAX_GUARANTY,
        zeroDownCapacity: null as number | null,
        minimumDown: 0,
        additionalDown: 0,
        guarantyForScenario: baseLoan * 0.25,
        result: "full" as const,
      };
    }

    const remaining = Math.max(TEXAS_2026_MAX_GUARANTY - charged, 0);
    const zeroDownCapacity = remaining * 4;
    const minimumDown = Math.max(price * 0.25 - remaining, 0);
    const additionalDown = Math.max(minimumDown - down, 0);
    const guarantyNeededAfterDown = Math.max(price * 0.25 - down, 0);
    const guarantyForScenario = Math.min(remaining, guarantyNeededAfterDown);
    const result =
      remaining <= 0
        ? ("none" as const)
        : additionalDown > 0
          ? ("short" as const)
          : ("sufficient" as const);

    return {
      price,
      charged,
      down,
      baseLoan,
      remaining,
      zeroDownCapacity,
      minimumDown,
      additionalDown,
      guarantyForScenario,
      result,
    };
  }, [status, entitlementCharged, purchasePrice, proposedDown]);

  const callout =
    values.result === "full"
      ? {
          title: "Full entitlement shown",
          body: "No entitlement-based down payment is indicated. VA does not impose a county loan limit when full entitlement is available, but lender approval, appraisal, income, credit, occupancy, and residual-income requirements still apply.",
          color: green,
          bg: "#edf7f1",
        }
      : values.result === "none"
        ? {
            title: "No remaining entitlement shown",
            body: "The COE figures entered leave no remaining entitlement for this calculation. Review whether restoration or a qualified substitution is available before relying on VA financing for another purchase.",
            color: "#8b1a1a",
            bg: "#f8eded",
          }
        : values.result === "short"
          ? {
              title: "Additional down payment may be needed",
              body: `Based on the COE charge and proposed down payment entered, the estimated additional down payment is ${fmt(values.additionalDown)}. Final guaranty and down-payment requirements must be confirmed from the COE, contract price, appraisal, and lender review.`,
              color: copper,
              bg: "#fdf4e8",
            }
          : {
              title: "Remaining entitlement appears sufficient",
              body: "The proposed down payment plus the estimated remaining VA guaranty appears to meet the 25% coverage calculation. This is not a loan approval or a guarantee that zero additional down payment will be accepted.",
              color: green,
              bg: "#edf7f1",
            };

  return (
    <div
      style={{
        backgroundColor: white,
        borderRadius: 12,
        boxShadow: "0 2px 18px rgba(26,58,92,0.09)",
        overflow: "hidden",
      }}
    >
      <div style={{ backgroundColor: navy, padding: "25px 30px" }}>
        <h2
          style={{
            margin: 0,
            color: white,
            fontFamily: "'Lora', serif",
            fontSize: 23,
          }}
        >
          VA Entitlement Calculator
        </h2>
        <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>
          Estimate remaining entitlement and any entitlement-based down payment for a Texas purchase
        </p>
      </div>

      <div style={{ padding: 30 }}>
        <div
          style={{
            padding: "16px 18px",
            borderLeft: `4px solid ${copper}`,
            borderRadius: 7,
            backgroundColor: "#f7efe7",
            color: navy,
            fontSize: 14,
            lineHeight: 1.65,
            marginBottom: 24,
          }}
        >
          Use the entitlement status and total entitlement charged shown on the current Certificate of Eligibility. If more than one prior VA loan appears, enter the total entitlement charged.
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>Entitlement status on your COE</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
            <button
              type="button"
              aria-pressed={status === "full"}
              onClick={() => setStatus("full")}
              style={{
                padding: "13px 15px",
                borderRadius: 7,
                border: `1.5px solid ${status === "full" ? copper : "rgba(26,58,92,0.18)"}`,
                backgroundColor: status === "full" ? "#f7efe7" : white,
                color: navy,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Full entitlement
            </button>
            <button
              type="button"
              aria-pressed={status === "partial"}
              onClick={() => setStatus("partial")}
              style={{
                padding: "13px 15px",
                borderRadius: 7,
                border: `1.5px solid ${status === "partial" ? copper : "rgba(26,58,92,0.18)"}`,
                backgroundColor: status === "partial" ? "#f7efe7" : white,
                color: navy,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Entitlement already charged
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 20,
            marginBottom: 24,
          }}
        >
          {status === "partial" && (
            <div>
              <label htmlFor="entitlement-charged" style={labelStyle}>Total entitlement charged on COE</label>
              <input
                id="entitlement-charged"
                style={inputStyle}
                type="number"
                min="0"
                step="1000"
                value={entitlementCharged}
                onChange={(event) => setEntitlementCharged(event.target.value)}
              />
              <div style={{ color: muted, fontSize: 11, lineHeight: 1.45, marginTop: 5 }}>
                This amount does not decrease as the mortgage balance is paid down. Entitlement becomes available again only after an eligible restoration or qualified substitution is approved by VA.
              </div>
            </div>
          )}
          <div>
            <label htmlFor="entitlement-purchase-price" style={labelStyle}>Purchase price</label>
            <input
              id="entitlement-purchase-price"
              style={inputStyle}
              type="number"
              min="0"
              step="1000"
              value={purchasePrice}
              onChange={(event) => setPurchasePrice(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="entitlement-proposed-down" style={labelStyle}>Proposed down payment</label>
            <input
              id="entitlement-proposed-down"
              style={inputStyle}
              type="number"
              min="0"
              step="1000"
              value={proposedDown}
              onChange={(event) => setProposedDown(event.target.value)}
            />
          </div>
          <div>
            <label style={labelStyle}>2026 Texas county loan limit</label>
            <div style={{ ...inputStyle, backgroundColor: "#eef3f7", fontWeight: 700 }}>
              {fmt(TEXAS_2026_LIMIT)}
            </div>
            <div style={{ color: muted, fontSize: 11, lineHeight: 1.45, marginTop: 5 }}>
              Fixed for this Texas-only calculator. It is used for partial entitlement, not as a loan cap for a veteran with full entitlement.
            </div>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid rgba(26,58,92,0.11)", margin: "28px 0" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: 14,
          }}
        >
          <Result label="Estimated Base Loan" value={fmt(values.baseLoan)} />
          {status === "partial" && <Result label="Entitlement Charged" value={fmt(values.charged)} />}
          {status === "partial" && <Result label="Remaining Entitlement" value={fmt(values.remaining)} />}
          <Result label="Estimated VA Guaranty" value={fmt(values.guarantyForScenario)} />
          {status === "partial" && (
            <Result
              label="Estimated Zero-Down Capacity"
              value={fmt(values.zeroDownCapacity || 0)}
            />
          )}
          <Result label="Minimum Estimated Down Payment" value={fmt(values.minimumDown)} />
          <Result label="Additional Down Payment Needed" value={fmt(values.additionalDown)} highlight />
        </div>

        <div
          style={{
            marginTop: 22,
            padding: "17px 20px",
            borderRadius: 8,
            borderLeft: `4px solid ${callout.color}`,
            backgroundColor: callout.bg,
            color: "#243342",
            lineHeight: 1.6,
            fontSize: 14,
          }}
        >
          <strong style={{ display: "block", color: callout.color, marginBottom: 5 }}>{callout.title}</strong>
          {callout.body}
        </div>

        <div
          style={{
            marginTop: 16,
            padding: "17px 20px",
            borderRadius: 8,
            backgroundColor: navy,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.6,
            fontSize: 13,
          }}
        >
          <strong style={{ display: "block", color: copper, marginBottom: 5 }}>Keeping a current VA-financed home?</strong>
          A PCS move may allow you to retain and rent the current property while using remaining entitlement for another primary residence. The full loan file still must support both properties and the new occupancy.
        </div>

        <div
          style={{
            marginTop: 18,
            padding: 16,
            borderRadius: 7,
            backgroundColor: "#eef3f7",
            borderLeft: `3px solid ${copper}`,
            color: muted,
            lineHeight: 1.6,
            fontSize: 11,
          }}
        >
          Educational estimate only. VA entitlement, guaranty, restoration, loan eligibility, reasonable value, and final down-payment requirements are determined from the Certificate of Eligibility, VA rules, appraisal, and lender review. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Secure Choice Lending · NMLS #1689518.
        </div>

        <a
          href="https://calendly.com/shalanda-securechoicelending/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "14px 27px",
            borderRadius: 7,
            backgroundColor: copper,
            color: white,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Review Your COE and Entitlement
        </a>
      </div>
    </div>
  );
}
