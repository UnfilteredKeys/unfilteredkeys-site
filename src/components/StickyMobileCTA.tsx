import { Phone, ClipboardList, Calendar } from "lucide-react";

const STYLE_ID = "sticky-mobile-cta-style";
const css = `
.sticky-mobile-cta { display: none; }
@media (max-width: 767px) {
  .sticky-mobile-cta { display: flex; }
  .sticky-mobile-cta-spacer { display: block; }
}
.sticky-mobile-cta-spacer { display: none; }
.sticky-mobile-cta a:active { border-bottom: 2px solid #b5621e; }
`;

if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const tag = document.createElement("style");
  tag.id = STYLE_ID;
  tag.innerHTML = css;
  document.head.appendChild(tag);
}

const btnStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  gap: "3px",
  background: "transparent",
  border: "none",
  borderBottom: "2px solid transparent",
  color: "#ffffff",
  fontFamily: "Outfit, system-ui, sans-serif",
  fontSize: "13px",
  fontWeight: 600,
  textDecoration: "none",
};

const StickyMobileCTA = () => (
  <>
    <div className="sticky-mobile-cta-spacer" style={{ height: "56px" }} aria-hidden="true" />
    <nav
      className="sticky-mobile-cta"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "56px",
        background: "#1a3a5c",
        borderTop: "1px solid rgba(181,98,30,0.3)",
        zIndex: 9999,
      }}
      aria-label="Quick contact"
    >
      <a href="tel:+12549359331" style={btnStyle}>
        <Phone size={20} color="#b5621e" />
        <span>Call</span>
      </a>
      <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" style={btnStyle}>
        <ClipboardList size={20} color="#b5621e" />
        <span>Apply</span>
      </a>
      <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" style={btnStyle}>
        <Calendar size={20} color="#b5621e" />
        <span>Schedule</span>
      </a>
    </nav>
  </>
);

export default StickyMobileCTA;
