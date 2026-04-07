import React from "react";

export default function DownPaymentSection() {
  return (
    <section
      aria-label="Texas Down Payment Assistance Programs"
      style={{
        backgroundColor: "#162030",
        color: "#ffffff",
        padding: "80px 24px",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#b5621e",
            marginBottom: "20px",
            fontWeight: 500,
          }}
        >
          Down Payment Assistance · Texas · All Credit Profiles
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "720px",
          }}
        >
          Texas Has Serious Down Payment Help Available.{" "}
          <span style={{ color: "#b5621e" }}>Most Buyers Never Hear About It.</span>
        </h2>

        {/* Intro line */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "640px",
            marginBottom: "52px",
          }}
        >
          Texas has more than a dozen active DPA programs — and most buyers find
          out about them after it's too late. Here are the three we place clients
          in most often, and the credit floor that applies to each.
        </p>

        {/* Two-column layout: CTA left, action buttons right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px 60px",
            alignItems: "start",
          }}
        >
          {/* Single CTA button */}
          <div>
            <a
              href="/loan-programs"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#ffffff",
                padding: "16px 32px",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.35)",
                transition: "background-color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
              }}
            >
              See All Texas DPA Programs →
            </a>
          </div>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              minWidth: "200px",
            }}
          >
            <a
              href="https://calendly.com/shalanda-securechoicelending/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#ffffff",
                color: "#1a3a5c",
                textAlign: "center",
                padding: "16px 28px",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "background-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#f0f4f8";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#ffffff";
              }}
            >
              See If I Qualify
            </a>
            <a
              href="https://scl.my1003app.com/554554/register?time=1775490954917"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#b5621e",
                color: "#ffffff",
                textAlign: "center",
                padding: "16px 28px",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#9e5219";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#b5621e";
              }}
            >
              Get Pre-Approved
            </a>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                textAlign: "center",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Programs available starting
              <br />
              at 580 credit score
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}