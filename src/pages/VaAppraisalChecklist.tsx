import React, { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import { Home, Zap, Droplet, Wind, ShieldCheck, Sofa, ChevronDown, AlertTriangle, Printer, type LucideIcon } from "lucide-react";

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const WHITE = "#ffffff";
const AMBER_BG = "#fef3c7";
const AMBER_TEXT = "#92400e";
const heading = "'Lora', serif";
const body = "'Outfit', sans-serif";
const calendly = "https://calendly.com/shalanda-securechoicelending/30min";

type Item = { id: string; label: string; flag?: string };
type Category = { id: string; title: string; Icon: LucideIcon; items: Item[] };

const CATEGORIES: Category[] = [
  {
    id: "roof",
    title: "Roof & Structure",
    Icon: Home,
    items: [
      { id: "r1", label: "Roof has at least 2 years of remaining life", flag: "Common VA call-out — missing/curled shingles often flagged." },
      { id: "r2", label: "No active leaks, sagging, or water staining" },
      { id: "r3", label: "Foundation is free of major cracks or shifting" },
      { id: "r4", label: "Soffits, fascia, and eaves are intact" },
      { id: "r5", label: "Exterior siding has no exposed wood or rot", flag: "VA frequently calls out chipped/peeling paint on pre-1978 homes (lead paint)." },
    ],
  },
  {
    id: "electrical",
    title: "Electrical",
    Icon: Zap,
    items: [
      { id: "e1", label: "Electrical panel is functional and properly labeled" },
      { id: "e2", label: "No exposed or frayed wiring", flag: "Knob-and-tube or aluminum wiring is a common deal-breaker." },
      { id: "e3", label: "All outlets and switches operate normally" },
      { id: "e4", label: "GFCI outlets present in kitchen, baths, garage, and exterior" },
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing & Water",
    Icon: Droplet,
    items: [
      { id: "p1", label: "All faucets, toilets, and drains operate without leaks" },
      { id: "p2", label: "Water heater is functional and properly strapped (where required)" },
      { id: "p3", label: "Adequate water pressure at all fixtures" },
      { id: "p4", label: "Property has continuous, safe water supply", flag: "Wells require water quality testing — a common VA condition." },
      { id: "p5", label: "Sewer or septic system is operational" },
    ],
  },
  {
    id: "hvac",
    title: "Heating & Cooling",
    Icon: Wind,
    items: [
      { id: "h1", label: "Permanent heat source in every living area", flag: "Space heaters do NOT satisfy VA heat requirements." },
      { id: "h2", label: "Heating system reaches at least 50°F in all rooms" },
      { id: "h3", label: "AC system functional (required in most Texas markets)" },
      { id: "h4", label: "No visible rust, leaks, or carbon-monoxide hazards" },
    ],
  },
  {
    id: "safety",
    title: "Safety & Access",
    Icon: ShieldCheck,
    items: [
      { id: "s1", label: "Safe, all-weather access road to the property" },
      { id: "s2", label: "Handrails present on stairs with 3+ steps", flag: "Missing handrails are one of the most common VA repair items." },
      { id: "s3", label: "Smoke detectors installed in required locations" },
      { id: "s4", label: "No wood-destroying insect (termite) damage", flag: "Termite inspection (Form NPMA-33) required in most Texas counties." },
      { id: "s5", label: "Property free of environmental hazards" },
    ],
  },
  {
    id: "interior",
    title: "Interior & Living Conditions",
    Icon: Sofa,
    items: [
      { id: "i1", label: "Floors, walls, and ceilings are structurally sound" },
      { id: "i2", label: "Windows and doors operate properly" },
      { id: "i3", label: "Kitchen has working stove/oven and basic appliances" },
      { id: "i4", label: "At least one functional bathroom with tub or shower" },
      { id: "i5", label: "No broken windows or missing screens", flag: "Broken glass is a common appraiser call-out." },
    ],
  },
];

const TOTAL = CATEGORIES.reduce((s, c) => s + c.items.length, 0);

const GRAY = "#9ca3af";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  fontFamily: "'Outfit', sans-serif",
  fontSize: 14,
  color: "#1a3a5c",
  background: "#fff",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: body,
  fontSize: 12,
  fontWeight: 600,
  color: NAVY,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: 6,
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const PRINT_CSS = `
@media print {
  @page { margin: 1in; size: letter portrait; }
  body * { visibility: hidden !important; }
  #va-print-report, #va-print-report * { visibility: visible !important; }
  #va-print-report {
    position: absolute !important;
    left: 0; top: 0;
    width: 100% !important;
    background: #ffffff !important;
    color: #1a3a5c !important;
    display: block !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .no-print { display: none !important; }
}
@media screen {
  #va-print-report { display: none !important; }
}
`;

export default function VaAppraisalChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(CATEGORIES.map((c) => [c.id, true]))
  );

  const checkedCount = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const pct = Math.round((checkedCount / TOTAL) * 100);

  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");

  const formValid =
    buyerName.trim().length > 0 &&
    agentName.trim().length > 0 &&
    isEmail(buyerEmail) &&
    isEmail(agentEmail);

  const canPrint = formValid && checkedCount > 0;

  const handlePrint = () => {
    if (!canPrint) return;
    window.print();
  };

  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));
  const toggleCat = (id: string) => setOpen((p) => ({ ...p, [id]: !p[id] }));

  const allItems = CATEGORIES.flatMap((c) => c.items);
  const confirmedItems = allItems.filter((i) => checked[i.id]);
  const pendingItems = allItems.filter((i) => !checked[i.id]);
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <SEO
        title="VA Appraisal Checklist — MPR Guide for Texas Veterans | Keys by Shalanda"
        description="The complete VA Minimum Property Requirements checklist for Texas. Built for veterans and agents — share it before the inspection to know exactly what the VA appraiser will flag."
        canonical="/va-appraisal-checklist"
      />

      <style media="print">{PRINT_CSS}</style>

      {/* Hero */}
      <section className="no-print" style={{ background: NAVY, padding: "80px 24px", fontFamily: body }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: heading,
              color: IVORY,
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            VA Appraisal Checklist
          </h1>
          <p
            style={{
              color: COPPER,
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              marginTop: 18,
              marginBottom: 20,
            }}
          >
            Know What the Appraiser Is Looking For Before Closing Day
          </p>
          <p style={{ color: IVORY, opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
            VA appraisers check Minimum Property Requirements on every home. Use this list alongside your inspection report so nothing catches you off guard.
          </p>
        </div>
      </section>

      {/* Intro — How to use */}
      <section className="no-print" style={{ background: WHITE, padding: "64px 24px", fontFamily: body }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: heading, color: NAVY, fontSize: "1.85rem", fontWeight: 700, lineHeight: 1.25, marginTop: 0, marginBottom: 16 }}>
            How Veterans and Agents Use This Checklist
          </h2>
          <p style={{ color: "#3d4f63", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>
            This checklist is built around the VA's Minimum Property Requirements — the standards every home must meet before a VA loan can close. It is designed to be shared: send it to your agent before you make an offer, walk through it during your inspection period, and use it as a reference when requesting seller repairs. Agents who receive it know exactly what the VA appraiser will flag — which means repair requests land with documentation behind them, not just buyer preferences.
          </p>

          <h3 style={{ fontFamily: heading, color: NAVY, fontSize: "1.4rem", fontWeight: 700, lineHeight: 1.3, marginTop: 36, marginBottom: 12 }}>
            After Your Inspection
          </h3>
          <p style={{ color: "#3d4f63", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>
            Once you have your inspection report, match each flagged item to the checklist. Any item that appears on both your inspection report and this checklist is a VA requirement — not a negotiating point. Sellers and their agents understand the distinction. Present it that way.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="no-print" style={{ background: IVORY, padding: "64px 24px", fontFamily: body }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {/* Report Details Card */}
          <div
            style={{
              background: IVORY,
              border: `1px solid ${NAVY}`,
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 24,
            }}
          >
            <div style={{ ...labelStyle, fontSize: 13, marginBottom: 14 }}>
              Report Details — required to generate PDF
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 14,
              }}
            >
              <div>
                <label style={labelStyle}>Buyer Name</label>
                <input type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} style={inputStyle} placeholder="Your full name" />
              </div>
              <div>
                <label style={labelStyle}>Buyer Email</label>
                <input type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} style={inputStyle} placeholder="your@email.com" />
              </div>
              <div>
                <label style={labelStyle}>Agent Name</label>
                <input type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} style={inputStyle} placeholder="Agent's full name" />
              </div>
              <div>
                <label style={labelStyle}>Agent Email</label>
                <input type="email" value={agentEmail} onChange={(e) => setAgentEmail(e.target.value)} style={inputStyle} placeholder="agent@email.com" />
              </div>
            </div>
          </div>

          {/* Progress */}
          <div
            style={{
              background: WHITE,
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 28,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              position: "sticky",
              top: 16,
              zIndex: 5,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, color: NAVY, fontWeight: 600 }}>
              <span>Your progress</span>
              <span>
                {checkedCount} / {TOTAL} reviewed ({pct}%)
              </span>
            </div>
            <div style={{ height: 10, background: "#e5e7eb", borderRadius: 999, overflow: "hidden" }}>
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: COPPER,
                  transition: "width 250ms ease",
                }}
              />
            </div>
          </div>

          {CATEGORIES.map(({ id, title, Icon, items }) => {
            const isOpen = open[id];
            const catChecked = items.filter((i) => checked[i.id]).length;
            return (
              <div
                key={id}
                style={{
                  background: WHITE,
                  borderRadius: 12,
                  marginBottom: 16,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleCat(id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      background: `${COPPER}15`,
                      color: COPPER,
                      borderRadius: 10,
                      width: 44,
                      height: 44,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={COPPER} />
                  </span>
                  <span style={{ flex: 1 }}>
                    <span
                      style={{
                        display: "block",
                        fontFamily: heading,
                        fontSize: "1.25rem",
                        color: NAVY,
                        fontWeight: 700,
                      }}
                    >
                      {title}
                    </span>
                    <span style={{ fontSize: 13, color: "#64748b" }}>
                      {catChecked} of {items.length} reviewed
                    </span>
                  </span>
                  <ChevronDown
                    size={22}
                    color={NAVY}
                    style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 200ms" }}
                  />
                </button>

                {isOpen && (
                  <div style={{ padding: "0 24px 20px 24px" }}>
                    {items.map((it) => (
                      <label
                        key={it.id}
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "flex-start",
                          padding: "12px 0",
                          borderTop: "1px solid #f1f5f9",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={!!checked[it.id]}
                          onChange={() => toggle(it.id)}
                          style={{ marginTop: 4, width: 18, height: 18, accentColor: COPPER, flexShrink: 0 }}
                        />
                        <span style={{ flex: 1 }}>
                          <span
                            style={{
                              color: NAVY,
                              fontSize: "1rem",
                              textDecoration: checked[it.id] ? "line-through" : "none",
                              opacity: checked[it.id] ? 0.6 : 1,
                            }}
                          >
                            {it.label}
                          </span>
                          {it.flag && (
                            <span
                              style={{
                                marginTop: 8,
                                background: AMBER_BG,
                                color: AMBER_TEXT,
                                borderRadius: 6,
                                padding: "8px 10px",
                                fontSize: 13,
                                display: "flex",
                                gap: 8,
                                alignItems: "flex-start",
                              }}
                            >
                              <AlertTriangle size={16} />
                              <span>{it.flag}</span>
                            </span>
                          )}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
            <button
              onClick={handlePrint}
              disabled={!canPrint}
              title={!formValid ? "Fill in all four report detail fields" : checkedCount === 0 ? "Check at least one item" : ""}
              style={{
                background: canPrint ? COPPER : GRAY,
                color: WHITE,
                border: "none",
                padding: "14px 28px",
                borderRadius: 8,
                fontFamily: body,
                fontWeight: 600,
                fontSize: "1rem",
                cursor: canPrint ? "pointer" : "not-allowed",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                maxWidth: 360,
                justifyContent: "center",
              }}
            >
              <Printer size={18} />
              Save Report as PDF
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="no-print" style={{ background: COPPER, padding: "64px 24px", fontFamily: body, textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: heading,
              color: WHITE,
              fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
              fontWeight: 700,
              margin: 0,
              marginBottom: 24,
            }}
          >
            Questions About What the Appraiser Found?
          </h2>
          <a
            href={calendly}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: NAVY,
              color: IVORY,
              padding: "16px 36px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: "1.05rem",
              textDecoration: "none",
            }}
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      {/* Print-only report (hidden on screen) */}
      <div id="va-print-report" aria-hidden="true">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `2px solid ${NAVY}`, paddingBottom: 8 }}>
          <div style={{ fontFamily: heading, color: NAVY, fontSize: 20, fontWeight: 700 }}>Keys by Shalanda</div>
          <div style={{ fontFamily: body, color: NAVY, fontSize: 12 }}>{today}</div>
        </div>

        <h1 style={{ fontFamily: heading, color: NAVY, fontSize: 24, fontWeight: 700, margin: "20px 0 8px" }}>
          VA APPRAISAL CHECKLIST REPORT
        </h1>
        <div style={{ fontFamily: body, color: NAVY, fontSize: 14, marginBottom: 24 }}>
          Buyer: {buyerName} | Agent: {agentName} ({agentEmail})
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            marginBottom: 32,
          }}
        >
          <div>
            <h2 style={{ fontFamily: heading, color: NAVY, fontSize: 16, fontWeight: 700, margin: "0 0 10px", borderBottom: `1px solid ${NAVY}`, paddingBottom: 4 }}>
              Items Confirmed ✓
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: body, fontSize: 12, color: NAVY }}>
              {confirmedItems.length === 0 ? (
                <li style={{ padding: "4px 0", opacity: 0.7 }}>None confirmed.</li>
              ) : (
                confirmedItems.map((i) => (
                  <li key={i.id} style={{ padding: "4px 0" }}>
                    ✓ {i.label}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: heading, color: COPPER, fontSize: 16, fontWeight: 700, margin: "0 0 10px", borderBottom: `1px solid ${COPPER}`, paddingBottom: 4 }}>
              Items Requiring Seller Attention
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: body, fontSize: 12, color: COPPER }}>
              {pendingItems.length === 0 ? (
                <li style={{ padding: "4px 0", opacity: 0.7 }}>None — all items confirmed.</li>
              ) : (
                pendingItems.map((i) => (
                  <li key={i.id} style={{ padding: "4px 0" }}>
                    ⚠ {i.label}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${NAVY}`, paddingTop: 12, fontFamily: body, fontSize: 10, color: NAVY, lineHeight: 1.5 }}>
          Generated by Keys by Shalanda — shalandasmith.com | Shalanda Smith NMLS #554554 | Secure Choice Lending NMLS #1689518 | This report is based on buyer's visual review and does not constitute a professional inspection or appraisal.
        </div>
      </div>
    </>
  );
}
