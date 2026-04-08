import headshot from "@/assets/headshot.png";

const SiteFooter = () => (
  <footer
    style={{
      background: "#1a3a5c",
      color: "rgba(250,248,244,0.65)",
      padding: "56px 0 32px",
    }}
  >
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
      {/* Top row: Logo + links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <svg
          viewBox="0 0 248 72"
          xmlns="http://www.w3.org/2000/svg"
          height={52}
          aria-label="Keys by Shalanda"
          style={{ display: "block" }}
        >
          <circle cx="18" cy="14" r="12" fill="none" stroke="#b5621e" strokeWidth="2.5" />
          <circle cx="18" cy="14" r="6" fill="none" stroke="#b5621e" strokeWidth="1.5" />
          <rect x="14.5" y="25" width="7" height="28" rx="2" fill="#b5621e" />
          <rect x="21.5" y="36" width="10" height="3.5" rx="1.5" fill="#b5621e" />
          <rect x="21.5" y="43.5" width="8" height="3.5" rx="1.5" fill="#b5621e" />
          <line x1="44" y1="6" x2="44" y2="60" stroke="rgba(250,248,244,0.15)" strokeWidth="1" />
          <text x="56" y="27" fontFamily="Lora,Georgia,serif" fontStyle="italic" fontSize="21" fill="#b5621e">
            Keys by
          </text>
          <text x="56" y="52" fontFamily="Lora,Georgia,serif" fontWeight="700" fontSize="27" fill="#faf8f4" letterSpacing="-0.3">
            Shalanda
          </text>
        </svg>
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="https://scl.my1003app.com/554554/register"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#faf8f4", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
          >
            Apply
          </a>
          <a
            href="https://calendly.com/shalanda-securechoicelending/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#faf8f4", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
          >
            Schedule a Call
          </a>
        </div>
      </div>

      {/* Middle row: Founder */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
        <img
          src={headshot}
          alt="Shalanda Smith"
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            border: "2px solid rgba(181,98,30,0.5)",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Fira Mono', 'Courier New', monospace",
            fontSize: "11px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "rgba(250,248,244,0.6)",
          }}
        >
          Founded by Shalanda Smith · NMLS# 554554
        </span>
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(181,98,30,0.3)",
          marginBottom: "32px",
        }}
        aria-hidden="true"
      />

      {/* Compliance */}
      <div
        style={{
          fontSize: "11px",
          color: "rgba(250,248,244,0.45)",
          lineHeight: "1.75",
          maxWidth: "800px",
          marginBottom: "32px",
        }}
      >
        Keys by Shalanda is the personal brand of Shalanda Smith (NMLS #554554), operating under Secure Choice
        Lending (NMLS #1689518), licensed by the Texas Department of Savings and Mortgage Lending ·
        1650 Spruce St. Ste 500, Riverside, CA 92507
        <br />
        <br />
        <a href="https://www.sml.texas.gov" target="_blank" rel="noopener noreferrer" style={{ color: "#b5621e", textDecoration: "underline" }}>
          Texas SML Website
        </a>{" "}
        ·{" "}
        <a href="http://www.nmlsconsumeraccess.org" target="_blank" rel="noopener noreferrer" style={{ color: "#b5621e", textDecoration: "underline" }}>
          NMLSConsumerAccess.org
        </a>
        <br />
        <br />
        CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A MORTGAGE BANKER OR LICENSED ORIGINATOR
        SHOULD CONTACT THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH LAMAR,
        SUITE 201, AUSTIN, TX 78705. TOLL-FREE HOTLINE: 1-877-276-5550.{" "}
        <a href="https://www.sml.texas.gov" target="_blank" rel="noopener noreferrer" style={{ color: "#b5621e", textDecoration: "underline" }}>
          WWW.SML.TEXAS.GOV
        </a>
        <br />
        <br />
        All loans subject to credit approval. Rates and terms subject to change without notice. Not
        a commitment to lend. Equal Housing Opportunity.
      </div>

      {/* Bottom row */}
      <div
        style={{
          borderTop: "1px solid rgba(250,248,244,0.08)",
          paddingTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }} aria-label="Equal Housing Lender">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={18} height={18} aria-hidden="true" fill="rgba(250,248,244,0.6)">
            <path d="M12 2L2 10h2v10h6v-6h4v6h6V10h2L12 2z" />
            <rect x="7" y="11.5" width="10" height="1.5" rx="0.75" fill="#1a3a5c" />
            <rect x="7" y="14" width="10" height="1.5" rx="0.75" fill="#1a3a5c" />
          </svg>
          <span style={{ fontSize: "11px", color: "rgba(250,248,244,0.6)" }}>Equal Housing Lender</span>
        </div>
        <div style={{ fontSize: "11px", color: "rgba(250,248,244,0.35)" }}>
          <a href="/privacy/" style={{ color: "rgba(250,248,244,0.45)", textDecoration: "underline" }}>
            Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="/terms/" style={{ color: "rgba(250,248,244,0.45)", textDecoration: "underline" }}>
            Terms of Use
          </a>{" "}
          · © 2026 Keys by Shalanda. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
