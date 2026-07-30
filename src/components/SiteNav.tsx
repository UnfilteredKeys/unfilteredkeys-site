import { useState } from "react";
import { Link } from "react-router-dom";
import KeyIcon from "./KeyIcon";

type NavChild = { to: string; label: string };
type NavItem = { label: string; to?: string; children?: NavChild[] };

const NAV: NavItem[] = [
  {
    label: "VA Loans",
    children: [
      { to: "/va-loan-texas", label: "VA Loan Overview" },
      { to: "/killeen-va-loan", label: "Killeen and Fort Cavazos" },
      { to: "/pcs-to-portfolio", label: "PCS to Portfolio" },
      { to: "/va-loan-faq-texas", label: "VA Loan FAQ" },
    ],
  },
  {
    label: "Buy a Home",
    children: [
      { to: "/first-time-buyers", label: "First-Time Buyers" },
      { to: "/conventional-loan-texas", label: "Conventional Loans" },
      { to: "/fha-loan-texas", label: "FHA Loans" },
      { to: "/physician-loan-texas", label: "Physician Loans" },
      { to: "/loan-programs", label: "Explore Loan Programs" },
      { to: "/down-payment-assistance-texas", label: "Down Payment Assistance" },
    ],
  },
  {
    label: "Specialty Loans",
    children: [
      { to: "/investors", label: "Investor and DSCR Loans" },
      { to: "/investors", label: "Self-Employed Borrowers" },
      { to: "/construction-renovation-loans-texas", label: "Construction and Renovation" },
      { to: "/refinance", label: "Refinance" },
    ],
  },
  {
    label: "Resources",
    children: [
      { to: "/calculators", label: "Mortgage Calculators" },
      { to: "/guide", label: "Consumer Guide" },
      { to: "/playbook", label: "90-Day Playbook" },
      { to: "/about", label: "About Shalanda" },
    ],
  },
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
      background: "#f7f1e9",
      borderBottom: "1px solid rgba(26,58,92,0.12)",
      boxShadow: "0 1px 3px rgba(28,38,48,0.06)"
    }}>
      <div style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "62px",
        gap: "16px"
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <KeyIcon size={40} color={COPPER} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic", fontSize: "16px", color: COPPER }}>Keys by</span>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 700, fontSize: "18px", color: NAVY, letterSpacing: "-0.3px" }}>Shalanda</span>
            <span style={{ fontFamily: "'Fira Mono', monospace", fontSize: "7px", color: "#66798b", letterSpacing: "1.35px", textTransform: "uppercase" }}>Structured Mortgage Strategy</span>
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
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    style={triggerStyle}
                  >
                    {item.label}
                  </button>
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

        {/* CTA */}
        <div className="site-nav-cta" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" style={{
            background: COPPER, color: "#fff",
            fontFamily: "'Outfit', sans-serif", fontSize: "13.5px", fontWeight: 600,
            padding: "10px 20px", borderRadius: "6px",
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "background 0.2s"
          }}>Start Here</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="site-nav-hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-menu"
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
        <div id="site-mobile-menu" className="site-nav-mobile" style={{
          background: "#f7f1e9",
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
                      borderBottom: "1px solid rgba(26,58,92,0.08)",
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
