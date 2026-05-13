import SEO from "@/components/SEO";

/* Tokens */
const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const WHITE = "#ffffff";
const heading = "'Lora', serif";
const body = "'Outfit', sans-serif";

const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply = "https://scl.my1003app.com/554554/register";
const headshotUrl = "https://d33wubrfki0l68.cloudfront.net/eed949c9-c648-4a2f-9895-0bdac08467e3/15980.jpg";

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: COPPER,
  fontFamily: "'Fira Mono', monospace",
  fontWeight: 600,
  marginBottom: 12,
};

const h2: React.CSSProperties = {
  fontFamily: heading,
  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
  color: NAVY,
  fontWeight: 700,
  lineHeight: 1.25,
  marginBottom: 32,
};

export default function MakitaWingard() {
  const specialties = ["VA Buyers", "First-Time Buyers", "Relocation", "Luxury", "New Construction"];

  return (
    <div style={{ fontFamily: body, color: NAVY }}>
      <SEO
        title="Makita Wingard Keller Williams Realty Central Texas"
        description="Work with Makita Wingard and get connected to VA loan expert Shalanda Smith. Serving Fort Hood, Killeen, and Greater Austin with VA, relocation, and first-time buyer expertise."
        canonical="/partners/makita-wingard"
        noindex
      />

      {/* Hero */}
      <section style={{ background: NAVY, padding: "96px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              width: 144,
              height: 144,
              borderRadius: "50%",
              border: `3px solid ${COPPER}`,
              margin: "0 auto 24px",
              overflow: "hidden",
              background: "#e6e2db",
            }}
          >
            <img
              src={headshotUrl}
              alt="Makita Wingard"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h1
            style={{
              fontFamily: heading,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: IVORY,
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            Makita Wingard
          </h1>
          <div
            style={{
              fontSize: 15,
              color: COPPER,
              fontWeight: 600,
              letterSpacing: "0.5px",
              marginBottom: 6,
            }}
          >
            Real Estate Agent
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(250,248,244,0.75)",
              fontWeight: 500,
            }}
          >
            Keller Williams Realty
          </div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ background: IVORY, padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
              lineHeight: 1.75,
              color: NAVY,
            }}
          >
            I'm a full-time Central Texas REALTOR® specializing in VA buyers, military relocation, new construction, and first-time homebuyers throughout the Fort Hood and Greater Austin areas. As a military spouse, I understand the importance of communication, flexibility, and making the process as smooth and stress-free as possible. I'm passionate about educating and guiding my clients every step of the way while providing strong advocacy, attention to detail, and a personalized experience from pre-approval to closing.
          </p>
        </div>
      </section>

      {/* Specialties */}
      <section style={{ background: IVORY, padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 16 }}>Specialties</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {specialties.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 12.5,
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: `1.5px solid ${COPPER}`,
                  color: COPPER,
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                  background: "transparent",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ background: WHITE, padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 16 }}>Contact</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
              fontSize: 14.5,
              lineHeight: 1.7,
              color: NAVY,
            }}
          >
            <div>
              <div style={{ fontFamily: "'Fira Mono', monospace", fontSize: 11, color: "#4a5568", letterSpacing: "0.5px", marginBottom: 4 }}>
                PHONE
              </div>
              <a href="tel:7694286601" style={{ color: NAVY, textDecoration: "none", fontWeight: 500 }}>
                (769) 428-6601
              </a>
            </div>
            <div>
              <div style={{ fontFamily: "'Fira Mono', monospace", fontSize: 11, color: "#4a5568", letterSpacing: "0.5px", marginBottom: 4 }}>
                EMAIL
              </div>
              <a href="mailto:makitatherealtor@gmail.com" style={{ color: NAVY, textDecoration: "none", fontWeight: 500, wordBreak: "break-all" }}>
                makitatherealtor@gmail.com
              </a>
            </div>
            <div>
              <div style={{ fontFamily: "'Fira Mono', monospace", fontSize: 11, color: "#4a5568", letterSpacing: "0.5px", marginBottom: 4 }}>
                INSTAGRAM
              </div>
              <a
                href="https://instagram.com/makitatherealtor"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: COPPER, textDecoration: "none", fontWeight: 600 }}
              >
                @makitatherealtor
              </a>
            </div>
            <div>
              <div style={{ fontFamily: "'Fira Mono', monospace", fontSize: 11, color: "#4a5568", letterSpacing: "0.5px", marginBottom: 4 }}>
                FACEBOOK
              </div>
              <a
                href="https://facebook.com/makitatherealtor"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: COPPER, textDecoration: "none", fontWeight: 600 }}
              >
                @makitatherealtor
              </a>
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              paddingTop: 20,
              borderTop: "1px solid #ece8e1",
              fontSize: 13,
              color: "#4a5568",
              lineHeight: 1.6,
            }}
          >
            <span style={{ fontWeight: 600, color: NAVY }}>MLS Associations:</span> Central Texas MLS · Austin Board of Realtors (ABoR)
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: COPPER, padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: heading,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: WHITE,
              fontWeight: 700,
              marginBottom: 16,
              lineHeight: 1.25,
            }}
          >
            Working with Makita? Let's Get You Prepped.
          </h2>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={apply}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: WHITE,
                color: NAVY,
                padding: "14px 28px",
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              Start Your Application
            </a>
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: WHITE,
                padding: "14px 28px",
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: 15,
                border: `2px solid ${WHITE}`,
              }}
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Compliance footer */}
      <section style={{ background: IVORY, padding: "32px 24px" }}>
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            color: NAVY,
            fontSize: "0.8rem",
            textAlign: "center",
            lineHeight: 1.7,
          }}
        >
          Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518 · Equal Housing Opportunity · Licensed in Texas · This page is for educational purposes and does not constitute a loan commitment or rate guarantee.
        </div>
      </section>
    </div>
  );
}
