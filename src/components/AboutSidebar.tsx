import React from "react";

const navy = "#1a3a5c";
const copper = "#b5621e";
const bg = "#f7f5f2";
const white = "#ffffff";
const muted = "rgba(26,58,92,0.55)";

const specializations = [
  { label: "VA Loans", detail: "Active duty, veterans & surviving spouses. Fort Hood to Houston." },
  { label: "Down Payment Assistance", detail: "TSAHC, SETH, TDHCA, Chenoa — enrolled and actively originating." },
  { label: "FHA & USDA", detail: "Government loans with flexible DTI and credit guidelines." },
  { label: "Non-QM & Bank Statement", detail: "Self-employed, 1099, ITIN, and non-traditional income borrowers." },
  { label: "Physician & Professional Loans", detail: "Student debt flexibility, contract income, no PMI up to $2M." },
  { label: "Construction & Renovation", detail: "One-time close, VA renovation, FHA 203(k) — build or improve." },
  { label: "DSCR & Investor Loans", detail: "Rental income qualifies the property — no personal income needed." },
  { label: "Jumbo Loans", detail: "Above conforming limits — competitive rates for high-value purchases." },
];

export function AboutSpecializations() {
  return (
    <div style={{ backgroundColor: white, borderRadius: "12px", padding: "28px", boxShadow: "0 2px 16px rgba(26,58,92,0.08)" }}>
      <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: copper, fontWeight: 600, marginBottom: "6px", fontFamily: "'Outfit', sans-serif" }}>
        What I Specialize In
      </div>
      <div style={{ fontFamily: "'Lora', serif", fontSize: "17px", fontWeight: 700, color: navy, marginBottom: "24px", lineHeight: 1.3 }}>
        Not a generalist.<br />A broker with specific depth.
      </div>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
        {specializations.map((s, i) => (
          <div key={s.label} style={{ display: "flex", gap: "14px", padding: "14px 0", borderBottom: i < specializations.length - 1 ? "1px solid rgba(26,58,92,0.08)" : "none", alignItems: "flex-start" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: copper, marginTop: "6px", flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", color: navy, fontFamily: "'Outfit', sans-serif", marginBottom: "2px" }}>{s.label}</div>
              <div style={{ fontSize: "12px", color: muted, lineHeight: 1.5, fontFamily: "'Outfit', sans-serif" }}>{s.detail}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "24px", padding: "14px 16px", backgroundColor: bg, borderRadius: "8px", borderLeft: `3px solid ${copper}`, fontFamily: "'Outfit', sans-serif" }}>
        <div style={{ fontSize: "12px", color: muted, lineHeight: 1.6 }}>
          Shalanda Smith · NMLS #554554<br />
          Licensed in Texas · Powered by Secure Choice Lending · NMLS #1689518<br />
          <span style={{ fontWeight: 600, color: navy }}>50+ wholesale lenders</span> shopped for every file
        </div>
      </div>
    </div>
  );
}

const milestones = [
  { era: "Bank", years: "Early Career", title: "Bank Manager", body: "Learned operations, underwriting, and the internal rules that determine who gets approved — and why. Saw first-hand how product limitations shape outcomes." },
  { era: "Builder", years: "Mid Career", title: "National Builder Lender", body: "Specialized in government loans — VA, FHA, USDA — and discovered what down payment assistance could actually do for buyers who thought homeownership was years away." },
  { era: "Retail", years: "Mid–Late Career", title: "Retail Mortgage Lender", body: "Originated at national retail lending companies — one product shelf, one set of rates, one answer per file. Learned exactly what that structure costs borrowers, and why access to more options changes everything." },
  { era: "Broker", years: "Now", title: "Mortgage Broker · Unfiltered Keys", body: "The broker model is structurally better. No single product shelf. No retail pricing. Just access to 50+ lenders and the right loan matched to the right file.", current: true },
];

export function AboutTimeline() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", marginTop: "48px" }}>
      <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: copper, fontWeight: 600, marginBottom: "20px" }}>
        Career Path
      </div>
      <div style={{ position: "relative" as const, display: "flex", flexDirection: "column" as const, gap: "0" }}>
        {milestones.map((m, i) => (
          <div key={m.era} style={{ display: "flex", gap: "20px", paddingBottom: i < milestones.length - 1 ? "32px" : "0", position: "relative" as const }}>
            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", flexShrink: 0, width: "48px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: m.current ? copper : navy, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "11px", color: white, letterSpacing: "0.04em", textAlign: "center" as const, flexShrink: 0 }}>
                {m.era}
              </div>
              {i < milestones.length - 1 && (
                <div style={{ width: "2px", flex: 1, backgroundColor: "rgba(26,58,92,0.12)", marginTop: "8px" }} />
              )}
            </div>
            <div style={{ paddingTop: "10px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: m.current ? copper : muted, fontWeight: 600, marginBottom: "4px" }}>{m.years}</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: "16px", fontWeight: 700, color: navy, marginBottom: "8px" }}>{m.title}</div>
              <div style={{ fontSize: "14px", color: muted, lineHeight: 1.65, maxWidth: "420px" }}>{m.body}</div>
              {m.current && (
                <div style={{ display: "inline-block", marginTop: "10px", backgroundColor: copper, color: white, fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", letterSpacing: "0.04em" }}>
                  Where I am now
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSidebar() {
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, gap: "40px" }}>
      <AboutSpecializations />
      <AboutTimeline />
    </div>
  );
}
