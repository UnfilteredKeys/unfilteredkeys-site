import { useState } from "react";
import { Link } from "react-router-dom";
import KeyIcon from "./KeyIcon";

type NavChild = { to: string; label: string };
type NavItem = { label: string; to?: string; children?: NavChild[] };

const NAV: NavItem[] = [
  {
    label: "Veterans",
    children: [
      { to: "/va-loan-texas", label: "VA Loan Overview" },
      { to: "/killeen-va-loan", label: "Killeen and Fort Hood" },
      { to: "/pcs-to-portfolio", label: "PCS to Portfolio" },
      { to: "/calculators", label: "BAH and Buying Power" },
    ],
  },
  {
    label: "Buy a Home",
    children: [
      { to: "/first-time-buyers", label: "First-Time Buyers" },
      { to: "/fha-loan-texas", label: "FHA Loans" },
      { to: "/conventional-loan-texas", label: "Conventional Loans" },
      { to: "/down-payment-assistance-texas", label: "Down Payment Assistance" },
      { to: "/construction-renovation-loans-texas", label: "New Construction" },
    ],
  },
  {
    label: "Investors",
    children: [
      { to: "/investors", label: "DSCR Loans" },
      { to: "/investors", label: "Bank Statement Loans" },
      { to: "/investors", label: "Build a Rental Portfolio" },
      { to: "/pcs-to-portfolio", label: "PCS to Portfolio" },
    ],
  },
  {
    label: "Programs",
    children: [
      { to: "/loan-programs", label: "All Programs" },
      { to: "/physician-loan-texas", label: "Physician Loans" },
      { to: "/construction-renovation-loans-texas", label: "Construction and Renovation" },
    ],
  },
  {
    label: "Calculators",
    children: [
      { to: "/calculators?tab=texas-payment", label: "Texas Payment Calculator" },
      { to: "/calculators?tab=va-loan", label: "VA Loan Calculator" },
      { to: "/calculators?tab=fha-vs-conventional", label: "FHA vs. Conventional" },
      { to: "/calculators?tab=budget-affordability", label: "Budget and Affordability" },
      { to: "/calculators?tab=bah-buying-power", label: "BAH and Buying Power" },
    ],
  },
  {
    label: "Resources",
    children: [
      { to: "/guide", label: "Consumer Guide" },
      { to: "/playbook", label: "90-Day Playbook" },
    ],
  },
  {
    label: "Cities",
    children: [
      { to: "/dallas-tx-mortgage", label: "Dallas–Fort Worth" },
      { to: "/georgetown-tx-mortgage", label: "Georgetown" },
      { to: "/houston-tx-mortgage", label: "Houston" },
      { to: "/killeen-va-loan", label: "Killeen and Fort Hood" },
      { to: "/round-rock-tx-mortgage", label: "Round Rock" },
      { to: "/san-antonio-tx-mortgage", label: "San Antonio" },
      { to: "/temple-tx-mortgage", label: "Temple and Bell County" },
    ],
  },
  { label: "About", to: "/about" },
];

const NAVY = "#1a3a5c";
const COPPER = "#b5621e";

const SiteNav = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "#ffffff",
      borderBottom: "1px solid #ddd8cf",
      boxShadow: "0 1px 4px rgba(28,38,48,0.09)"
    }}>
      <div style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        gap: "16px"
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <KeyIcon size={36} color={COPPER} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic", fontSize: "15px", color: COPPER }}>Keys by</span>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 700, fontSize: "17px", color: NAVY, letterSpacing: "-0.3px" }}>Shalanda</span>
            <span style={{ fontFamily: "'Fira Mono', monospace", fontSize: "6.5px", color: "#8898aa", letterSpacing: "1.6px", textTransform: "uppercase" }}>Structured Mortgage Strategy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="site-nav-desktop" style={{ display: "flex", gap: "4px", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV.map((item, idx) => {
            const isOpen = openIdx === idx;
            const hasChildren = !!item.children?.length;
            const triggerStyle: React.CSSProperties = {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: isOpen ? "#1c2630" : "#4a5568",
              background: isOpen ? "#f2efe9" : "transparent",
              padding: "6px 12px",
              borderRadius: "6px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              display: "inline-block",
              cursor: "pointer",
              border: "none",
            };
            return (
              <li
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => hasChildren && setOpenIdx(idx)}
                onMouseLeave={() => hasChildren && setOpenIdx(null)}
              >
                {item.to ? (
                  <Link to={item.to} style={triggerStyle}>{item.label}</Link>
                ) : (
                  <span style={triggerStyle}>{item.label}</span>
                )}

                {hasChildren && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: 0,
                      minWidth: "240px",
                      background: "#ffffff",
                      borderTop: `2px solid ${COPPER}`,
                      borderRadius: "6px",
                      boxShadow: "0 12px 28px rgba(28,38,48,0.18)",
                      padding: "8px",
                      zIndex: 200,
                      opacity: isOpen ? 1 : 0,
                      visibility: isOpen ? "visible" : "hidden",
                      transform: isOpen ? "translateY(0)" : "translateY(-4px)",
                      transition: "opacity 0.18s ease, transform 0.18s ease, visibility 0.18s",
                      pointerEvents: isOpen ? "auto" : "none",
                    }}
                  >
                    {/* Hover bridge */}
                    <div style={{ position: "absolute", top: "-10px", left: 0, right: 0, height: "10px" }} />
                    {item.children!.map((child) => (
                      <Link
                        key={child.to + child.label}
                        to={child.to}
                        style={{
                          display: "block",
                          padding: "10px 14px",
                          color: NAVY,
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                          textDecoration: "none",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = COPPER;
                          (e.currentTarget as HTMLElement).style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = NAVY;
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Phone + CTA */}
        <div className="site-nav-cta" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:+12549359331" style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontWeight: 700, fontSize: "16px", color: COPPER,
            textDecoration: "none", whiteSpace: "nowrap"
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.19a16 16 0 006.9 6.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (254) 935-9331
          </a>
          <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" style={{
            background: COPPER, color: "#fff",
            fontFamily: "'Outfit', sans-serif", fontSize: "13.5px", fontWeight: 600,
            padding: "10px 20px", borderRadius: "6px",
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "background 0.2s"
          }}>Apply Now</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="site-nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: NAVY,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="site-nav-mobile" style={{
          background: "#ffffff",
          borderTop: "1px solid #ddd8cf",
          padding: "12px 20px 20px",
          maxHeight: "calc(100vh - 64px)",
          overflowY: "auto",
        }}>
          {NAV.map((item) => (
            <div key={item.label} style={{ marginBottom: "14px" }}>
              <div style={{
                fontFamily: "'Fira Mono', monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                color: COPPER,
                padding: "6px 0",
              }}>
                {item.label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", paddingLeft: "12px" }}>
                {(item.children ?? (item.to ? [{ to: item.to, label: item.label }] : [])).map((child) => (
                  <Link
                    key={child.to + child.label}
                    to={child.to}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "10px 8px",
                      color: NAVY,
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderBottom: "1px solid #f2efe9",
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .site-nav-desktop { display: none !important; }
          .site-nav-cta { display: none !important; }
          .site-nav-hamburger { display: inline-flex !important; }
        }
        @media (min-width: 901px) {
          .site-nav-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default SiteNav;
