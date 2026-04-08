import { Link } from "react-router-dom";
import KeyIcon from "./KeyIcon";

const SiteNav = () => {
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
          <KeyIcon size={36} color="#b5621e" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic", fontSize: "15px", color: "#b5621e" }}>Keys by</span>
            <span style={{ fontFamily: "'Lora', Georgia, serif", fontWeight: 700, fontSize: "17px", color: "#1a3a5c", letterSpacing: "-0.3px" }}>Shalanda</span>
            <span style={{ fontFamily: "'Fira Mono', monospace", fontSize: "6.5px", color: "#8898aa", letterSpacing: "1.6px", textTransform: "uppercase" }}>Structured Mortgage Strategy</span>
          </div>
        </Link>

        {/* Nav Links */}
        <ul style={{ display: "flex", gap: "4px", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { to: "/buy", label: "Buy a Home" },
            { to: "/refinance", label: "Refinance" },
            { to: "/loan-programs", label: "Programs" },
            { to: "/calculators", label: "Calculators" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link to={to} style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#4a5568",
                padding: "6px 12px",
                borderRadius: "6px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "#f2efe9"; (e.target as HTMLElement).style.color = "#1c2630"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#4a5568"; }}
              >{label}</Link>
            </li>
          ))}
        </ul>

        {/* Phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="tel:+12549359331" style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontWeight: 700, fontSize: "16px", color: "#b5621e",
            textDecoration: "none", whiteSpace: "nowrap"
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.19a16 16 0 006.9 6.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (254) 935-9331
          </a>
          <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" style={{
            background: "#b5621e", color: "#fff",
            fontFamily: "'Outfit', sans-serif", fontSize: "13.5px", fontWeight: 600,
            padding: "10px 20px", borderRadius: "6px",
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "background 0.2s"
          }}>Apply Now</a>
        </div>

      </div>
    </nav>
  );
};

export default SiteNav;
