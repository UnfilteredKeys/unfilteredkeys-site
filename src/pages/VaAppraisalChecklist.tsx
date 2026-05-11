import React, { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import { Home, Zap, Droplet, Wind, ShieldCheck, Sofa, ChevronDown, AlertTriangle, Mail, X, CheckCircle2, type LucideIcon } from "lucide-react";

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
const SLATE = "#64748b";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #e2e8f0",
  fontFamily: "'Outfit', sans-serif",
  fontSize: 14,
  color: "#1a3a5c",
  background: "#fff",
  outline: "none",
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function VaAppraisalChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(CATEGORIES.map((c) => [c.id, true]))
  );

  const checkedCount = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const pct = Math.round((checkedCount / TOTAL) * 100);

  const [modalOpen, setModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");

  const formValid =
    buyerName.trim().length > 0 &&
    agentName.trim().length > 0 &&
    isEmail(buyerEmail) &&
    isEmail(agentEmail);

  const closeModal = () => {
    setModalOpen(false);
    setSendError("");
    if (sent) {
      setSent(false);
      setBuyerName("");
      setBuyerEmail("");
      setAgentName("");
      setAgentEmail("");
    }
  };

  const buildMessage = () => {
    const allItems = CATEGORIES.flatMap((c) => c.items);
    const uncheckedItems = allItems.filter((i) => !checked[i.id]);
    const lines =
      uncheckedItems.length === 0
        ? ["All items reviewed — no VA MPR issues flagged."]
        : uncheckedItems.map((i) => `- ${i.label}`);
    return `VA APPRAISAL CHECKLIST REPORT\n\nBuyer: ${buyerName}\nAgent: ${agentName} (${agentEmail})\n\nITEMS NOT CONFIRMED — REQUIRE SELLER VERIFICATION OR REPAIR:\n${lines.join("\n")}\n\nNote: These items were not checked off during the buyer's review. Each represents a VA Minimum Property Requirement. Seller should confirm compliance or provide repair prior to closing.\n\nGENERATED BY: Keys by Shalanda — shalandasmith.com\nShalanda Smith NMLS #554554 | Secure Choice Lending NMLS #1689518`;
  };

  const handleSend = async () => {
    if (!formValid || sending) return;
    setSending(true);
    setSendError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "fe1f0ebe-eaa6-4b88-8aaa-02cceee2562e",
          subject: `VA Inspection Report — ${buyerName}`,
          from_name: buyerName,
          email: buyerEmail,
          cc: agentEmail,
          replyto: buyerEmail,
          message: buildMessage(),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setSendError("Something went wrong. Please try again or email shalanda@securechoicelending.com directly.");
    } finally {
      setSending(false);
    }
  };

  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));
  const toggleCat = (id: string) => setOpen((p) => ({ ...p, [id]: !p[id] }));

  return (
    <>
      <SEO
        title="VA Appraisal Checklist — MPR Guide for Texas Veterans | Keys by Shalanda"
        description="The complete VA Minimum Property Requirements checklist for Texas. Built for veterans and agents — share it before the inspection to know exactly what the VA appraiser will flag."
        canonical="/va-appraisal-checklist"
      />

      {/* Hero */}
      <section style={{ background: NAVY, padding: "80px 24px", fontFamily: body }}>
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
      <section style={{ background: WHITE, padding: "64px 24px", fontFamily: body }}>
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
      <section style={{ background: IVORY, padding: "64px 24px", fontFamily: body }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
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
              onClick={() => setModalOpen(true)}
              disabled={checkedCount === 0}
              style={{
                background: checkedCount === 0 ? GRAY : COPPER,
                color: WHITE,
                border: "none",
                padding: "14px 28px",
                borderRadius: 8,
                fontFamily: body,
                fontWeight: 600,
                fontSize: "1rem",
                cursor: checkedCount === 0 ? "not-allowed" : "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                maxWidth: 360,
                justifyContent: "center",
              }}
            >
              <Mail size={18} />
              Email This Report
            </button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            fontFamily: body,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: WHITE,
              borderRadius: 12,
              padding: "32px 28px",
              maxWidth: 560,
              width: "100%",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: NAVY,
                padding: 4,
              }}
            >
              <X size={22} />
            </button>

            {sent ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <CheckCircle2 size={56} color={COPPER} style={{ margin: "0 auto" }} />
                <h3 style={{ fontFamily: heading, color: NAVY, fontSize: "1.6rem", fontWeight: 700, margin: "16px 0 8px" }}>
                  Report Sent
                </h3>
                <p style={{ color: SLATE, fontSize: 14, margin: 0 }}>
                  Check your inbox — your agent has been copied.
                </p>
                <button
                  onClick={closeModal}
                  style={{
                    marginTop: 24,
                    background: NAVY,
                    color: IVORY,
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: body,
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: heading, color: NAVY, fontSize: "1.5rem", fontWeight: 700, margin: "0 0 10px" }}>
                  Email Your VA Inspection Report
                </h3>
                <p style={{ fontFamily: body, fontSize: 14, color: SLATE, margin: "0 0 22px", lineHeight: 1.5 }}>
                  Enter your information and your agent's information. Both are required — your agent needs this to negotiate repairs on your behalf.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
                  <input
                    type="text"
                    placeholder="Agent's full name"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    placeholder="agent@email.com"
                    value={agentEmail}
                    onChange={(e) => setAgentEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <button
                  onClick={handleSend}
                  disabled={!formValid || sending}
                  style={{
                    width: "100%",
                    background: formValid ? COPPER : GRAY,
                    color: WHITE,
                    border: "none",
                    padding: "14px 20px",
                    borderRadius: 8,
                    fontFamily: body,
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: formValid && !sending ? "pointer" : "not-allowed",
                  }}
                >
                  {sending ? "Sending..." : "Send Report"}
                </button>

                {!formValid && (
                  <p style={{ fontSize: 13, color: SLATE, textAlign: "center", margin: "10px 0 0" }}>
                    All four fields required
                  </p>
                )}
                {sendError && (
                  <p style={{ fontSize: 13, color: "#dc2626", textAlign: "center", margin: "10px 0 0" }}>
                    {sendError}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
      {/* CTA */}
      <section style={{ background: COPPER, padding: "64px 24px", fontFamily: body, textAlign: "center" }}>
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
    </>
  );
}
