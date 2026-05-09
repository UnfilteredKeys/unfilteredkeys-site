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

          {/* Julie Bio */}
          <div
            style={{
              maxWidth: 720,
              margin: "40px auto 0",
              color: "rgba(255,255,255,0.85)",
              fontSize: 15.5,
              lineHeight: 1.75,
              padding: "0 8px",
            }}
          >
            Julie James is the founder of Esperanza Realty, powered by Epique Realty, and a proud veteran spouse who
            has built her business around the military community she calls home. Fluent in English and Spanish, she works
            with VA buyers, first-time buyers, investors, and luxury clients across Killeen, Harker Heights, Kempner, and
            beyond. Whether you're buying or selling, Julie brings the same dedication and local expertise to every
            transaction.
          </div>
        </div>
      </section>

      {/* Section 2: Featured Listings */}
      <section style={{ background: NAVY, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ ...eyebrow, textAlign: "center", color: COPPER }}>FEATURED LISTINGS</div>
          <h2 style={{ ...h2, textAlign: "center", color: WHITE }}>Current Listings</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                status: "Active",
                address: "1398 County Road 3152",
                city: "Kempner, TX 76539",
                price: "$400,000",
                beds: 4,
                baths: 2,
                sqft: "1,926",
                acres: "0.93 acre",
              },
              {
                status: "Active",
                address: "419 Cattail Cir",
                city: "Harker Heights, TX 76548",
                price: "$550,000",
                beds: 4,
                baths: 2,
                sqft: "2,293",
              },
              {
                status: "Active",
                address: "202 Danielle Dr",
                city: "Killeen, TX 76542",
                price: "$280,000",
                beds: 4,
                baths: 3,
                sqft: "1,970",
              },
            ].map((listing) => (
              <div
                key={listing.address}
                style={{
                  background: WHITE,
                  color: NAVY,
                  borderRadius: 10,
                  padding: "24px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 4,
                    marginBottom: 14,
                    color: listing.status === "Active" ? COPPER : "#4a5568",
                    background: listing.status === "Active" ? "rgba(181,98,30,0.10)" : "#f1f5f9",
                  }}
                >
                  {listing.status}
                </span>
                <div style={{ fontFamily: heading, fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                  {listing.address}
                </div>
                <div style={{ fontSize: 13.5, color: "#4a5568", marginBottom: 12 }}>{listing.city}</div>
                <div
                  style={{
                    fontFamily: heading,
                    fontSize: 22,
                    fontWeight: 700,
                    color: NAVY,
                    marginBottom: 10,
                  }}
                >
                  {listing.price}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0 14px",
                    fontSize: 13,
                    color: "#4a5568",
                  }}
                >
                  <span>{listing.beds} bed</span>
                  <span>{listing.baths} bath</span>
                  <span>{listing.sqft} sq ft</span>
                  {listing.acres && <span>{listing.acres}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section style={{ background: IVORY, textAlign: "center" }}>
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <div style={{ background: COPPER, overflow: "hidden", whiteSpace: "nowrap", padding: "14px 0" }}>
          <div style={{ display: "inline-flex", animation: "marqueeScroll 25s linear infinite" }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: WHITE, textTransform: "uppercase", letterSpacing: "1px", fontFamily: body, whiteSpace: "nowrap", paddingRight: 40 }}>
              ⭐ LIMITED TIME OFFER · MAY 11 – JUNE 30, 2026 · ⭐ LIMITED TIME OFFER · MAY 11 – JUNE 30, 2026 · ⭐ LIMITED TIME OFFER · MAY 11 – JUNE 30, 2026 ·&nbsp;
            </span>
            <span style={{ fontSize: 18, fontWeight: 700, color: WHITE, textTransform: "uppercase", letterSpacing: "1px", fontFamily: body, whiteSpace: "nowrap", paddingRight: 40 }}>
              ⭐ LIMITED TIME OFFER · MAY 11 – JUNE 30, 2026 · ⭐ LIMITED TIME OFFER · MAY 11 – JUNE 30, 2026 · ⭐ LIMITED TIME OFFER · MAY 11 – JUNE 30, 2026 ·&nbsp;
            </span>
          </div>
        </div>
        <div style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: heading,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: NAVY,
                fontWeight: 700,
                marginBottom: 12,
                lineHeight: 1.25,
              }}
            >
              More Value at the Closing Table
            </h2>
            <p style={{ color: "#4a5568", fontSize: 16.5, lineHeight: 1.65, marginBottom: 40, maxWidth: 720, margin: "0 auto 40px" }}>
              On eligible purchase loans closed through June 30, 2026, my buyers receive three lender-paid benefits.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
                marginBottom: 32,
              }}
            >
              {[
                {
                  t: "Credit Report",
                  b: "Hard pull fee credited on your closing disclosure. First pull only.",
                },
                {
                  t: "1-0 Temporary Buydown",
                  b: "Rate reduced by 1% in year one. Lender paid.",
                },
                {
                  t: "Appraisal Reimbursement",
                  b: "Up to $675 credited at closing.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  style={{
                    background: WHITE,
                    color: NAVY,
                    padding: "28px 24px",
                    borderRadius: 10,
                    textAlign: "left",
                  }}
                >
                  <div style={{ fontFamily: heading, fontSize: 18, fontWeight: 700, marginBottom: 10, color: COPPER }}>
                    {c.t}
                  </div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.65, color: "#4a5568" }}>{c.b}</div>
                </div>
              ))}
            </div>
            <p style={{ color: NAVY, fontSize: 12, lineHeight: 1.6, fontStyle: "italic", maxWidth: 920, margin: "0 auto" }}>
              Purchase loans only. Does not apply to loans utilizing down payment or closing cost assistance programs. No manually underwritten loans. Valid 5/11/2026–6/30/2026. Subject to loan approval. Shalanda Smith · NMLS #554554 · Secure Choice Lending · NMLS #1689518.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
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

      {/* Section 5: Compliance footer */}
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
