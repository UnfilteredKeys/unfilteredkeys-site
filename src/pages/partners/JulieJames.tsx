import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";
import headshot from "@/assets/headshot.png";

/* Tokens */
const NAVY = "#1a3a5c";
const COPPER = "#b5621e";
const IVORY = "#faf8f4";
const HERO = "#1a2535";
const WHITE = "#ffffff";
const heading = "'Lora', serif";
const body = "'Outfit', sans-serif";

const calendly = "https://calendly.com/shalanda-securechoicelending/30min";
const apply = "https://scl.my1003app.com/554554/register";

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

function ShalandaCard() {
  return (
    <div
      style={{
        background: WHITE,
        color: NAVY,
        borderRadius: 12,
        padding: "28px 24px",
        textAlign: "center",
        flex: "1 1 280px",
        maxWidth: 340,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          border: `3px solid ${COPPER}`,
          margin: "0 auto 16px",
          overflow: "hidden",
          background: "#e6e2db",
        }}
      >
        <img src={headshot} alt="Shalanda Smith" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ fontFamily: heading, fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Shalanda Smith</div>
      <div style={{ fontSize: 13, color: COPPER, fontWeight: 600, marginBottom: 2 }}>
        Mortgage Broker · NMLS #554554
      </div>
      <div style={{ fontSize: 13, color: "#4a5568", marginBottom: 12 }}>Keys by Shalanda</div>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <a href="tel:2549359331" style={{ color: NAVY, textDecoration: "none", display: "block" }}>
          254-935-9331
        </a>
        <a
          href="mailto:shalanda@securechoicelending.com"
          style={{ color: NAVY, textDecoration: "none", display: "block", wordBreak: "break-all" }}
        >
          shalanda@securechoicelending.com
        </a>
      </div>
    </div>
  );
}

function JulieCard() {
  const specialties = [
    "VA Buyers",
    "First-Time Buyers",
    "Relocation",
    "Investors",
    "Luxury",
    "New Construction",
  ];
  return (
    <div
      style={{
        background: WHITE,
        color: NAVY,
        borderRadius: 12,
        padding: "28px 24px",
        textAlign: "center",
        flex: "1 1 280px",
        maxWidth: 340,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          border: `3px solid ${COPPER}`,
          margin: "0 auto 16px",
          overflow: "hidden",
          background: "#e6e2db",
        }}
      >
        <img
          src="https://d33wubrfki0l68.cloudfront.net/20971dc7-3282-42fd-8844-588ee92b009b/IMG_7790.jpeg"
          alt="Julie James"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ fontFamily: heading, fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Julie James</div>
      <div style={{ fontSize: 13, color: COPPER, fontWeight: 600, marginBottom: 2 }}>
        REALTOR® · License #733161
      </div>
      <div style={{ fontSize: 13, color: "#4a5568", marginBottom: 12 }}>Esperanza Realty</div>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <a href="tel:2547028080" style={{ color: NAVY, textDecoration: "none", display: "block" }}>
          (254) 702-8080
        </a>
        <a
          href="mailto:julie.esperanzarealty@gmail.com"
          style={{ color: NAVY, textDecoration: "none", display: "block", wordBreak: "break-all" }}
        >
          julie.esperanzarealty@gmail.com
        </a>
        <a
          href="https://soldbyjuliejames.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: NAVY, textDecoration: "none", display: "block" }}
        >
          soldbyjuliejames.com
        </a>
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          marginTop: 12,
          fontSize: 12.5,
        }}
      >
        <a
          href="https://instagram.com/soldbyjuliejames"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COPPER, textDecoration: "none", fontWeight: 600 }}
        >
          @soldbyjuliejames
        </a>
        <span style={{ color: "#cbd2da" }}>·</span>
        <a
          href="https://facebook.com/soldbyjuliejames"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COPPER, textDecoration: "none", fontWeight: 600 }}
        >
          Facebook
        </a>
      </div>

      <div
        style={{
          marginTop: 16,
          paddingTop: 14,
          borderTop: "1px solid #ece8e1",
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          justifyContent: "center",
        }}
      >
        {specialties.map((s) => (
          <span
            key={s}
            style={{
              fontSize: 11,
              padding: "4px 8px",
              borderRadius: 4,
              background: IVORY,
              color: NAVY,
              fontWeight: 500,
              letterSpacing: "0.3px",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: 12,
          fontSize: 12,
          color: "#4a5568",
          fontFamily: "'Fira Mono', monospace",
          letterSpacing: "0.5px",
        }}
      >
        EN · ES
      </div>
    </div>
  );
}

export default function PartnerJulieJames() {
  return (
    <div style={{ fontFamily: body, color: NAVY }}>
      <SEO {...seoMeta.partnerJulieJames} />

      {/* Section 1: Hero */}
      <section style={{ background: HERO, padding: "96px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: heading,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: WHITE,
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Your Central Texas Home Buying Team
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 640,
              margin: "0 auto 48px",
            }}
          >
            Two specialists. One seamless experience. From offer to keys.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <JulieCard />
            <ShalandaCard />
          </div>
        </div>
      </section>

      {/* Section 2: Why Work With This Team */}
      <section style={{ background: IVORY, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={eyebrow}>Why Work With This Team</div>
          <h2 style={h2}>Two specialists working your file from day one.</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                t: "VA Loans Closed in 21 Days",
                b: "PCS timelines respected, BAH math done upfront, no surprises at closing.",
              },
              {
                t: "50+ Lender Network",
                b: "We shop your file across wholesale lenders to find the best rate and terms for your situation.",
              },
              {
                t: "One Team, One Transaction",
                b: "Your agent and your lender are already aligned before you write your first offer.",
              },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: WHITE,
                  color: NAVY,
                  padding: "28px 24px",
                  borderRadius: 10,
                  boxShadow: "0 2px 10px rgba(26,58,92,0.06)",
                }}
              >
                <div style={{ fontFamily: heading, fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{c.t}</div>
                <div style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5568" }}>{c.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How We Work */}
      <section style={{ background: WHITE, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={eyebrow}>How We Work</div>
          <h2 style={h2}>No down payment. No PMI. No guessing.</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {[
              {
                l: "No Down Payment",
                b: "VA-eligible buyers purchase with 0% down — no PMI ever. We verify entitlement on the first call.",
              },
              {
                l: "Student Debt Handled",
                b: "IBR payments used, not 1% of balance. Junior enlisted and officers with education debt qualify.",
              },
              {
                l: "Future Income Accepted",
                b: "Signed offer letter qualifies you before your first paycheck. Built for PCS moves and new assignments.",
              },
              {
                l: "Funding Fee Waiver",
                b: "100% service-connected disability = funding fee waived entirely. We check this on every VA file.",
              },
            ].map((it) => (
              <div key={it.l} style={{ borderLeft: `3px solid ${COPPER}`, paddingLeft: 16 }}>
                <div style={{ fontFamily: heading, fontSize: 17, fontWeight: 700, marginBottom: 8, color: NAVY }}>
                  {it.l}
                </div>
                <div style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5568" }}>{it.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Stats Strip */}
      <section style={{ background: HERO, padding: "56px 24px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 24,
            textAlign: "center",
            color: WHITE,
          }}
        >
          {[
            { v: "50+", l: "Lender Network" },
            { v: "21 Days", l: "Average Close" },
            { v: "5.0", l: "Google Rating" },
            { v: "All of Texas", l: "Licensed Statewide" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: heading, fontSize: 32, fontWeight: 700, marginBottom: 6 }}>{s.v}</div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: CTA */}
      <section style={{ background: COPPER, padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: heading,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: WHITE,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Ready to Talk Numbers?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16.5, lineHeight: 1.65, marginBottom: 32 }}>
            Book a free 15-minute call. We'll cover your entitlement status, BAH math, and max purchase price before
            you tour a single home.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={calendly}
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
              Book a Strategy Call
            </a>
            <a
              href={apply}
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
              Start Application
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Compliance footer */}
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
          Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518 · Equal Housing Opportunity · Licensed
          in Texas · This page is for educational purposes and does not constitute a loan commitment or rate guarantee.
        </div>
      </section>
    </div>
  );
}
