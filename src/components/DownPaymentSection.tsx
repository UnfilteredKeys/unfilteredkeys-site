import React from "react";

const programs = [
  {
    name: "TSAHC Homes for Texas Heroes",
    description:
      "Non-repayable grant for teachers, nurses, veterans, and first responders. No payback required. Statewide.",
    credit: "620 min credit",
  },
  {
    name: "SETH 5 Star Texas Advantage",
    description:
      "Up to 5% down payment assistance. No first-time buyer requirement. Stacks with FHA 203(k) for purchase + renovation.",
    credit: "640 min credit",
  },
  {
    name: "SETH GoldStar Program",
    description:
      "Forgivable grant — stay 3 years and keep it all. Works with FHA, VA, USDA, and Conventional. Income limits by county.",
    credit: "620 min credit",
  },
];

const additionalPrograms = [
  "TDHCA My First Texas Home",
  "Chenoa Fund",
  "Investor-Backed DPA (580+ credit available)",
];

export default function DownPaymentSection() {
  return (
    <section
      aria-label="Texas Down Payment Assistance Programs"
      style={{
        backgroundColor: "#1a3a5c",
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

        {/* Two-column layout: programs left, CTAs right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px 60px",
            alignItems: "start",
          }}
        >
          {/* Featured programs */}
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
              }}
            >
              {programs.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "20px 1fr auto",
                    gap: "0 18px",
                    alignItems: "start",
                    padding: "22px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    style={{
                      color: "#b5621e",
                      fontSize: "18px",
                      lineHeight: "1.5",
                      marginTop: "1px",
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "15px",
                        marginBottom: "4px",
                        lineHeight: 1.4,
                      }}
                    >
                      {p.name}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.68)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      color: "rgba(255,255,255,0.65)",
                      whiteSpace: "nowrap",
                      marginTop: "2px",
                    }}
                  >
                    {p.credit}
                  </span>
                </div>
              ))}
            </div>

            {/* Also available line */}
            <div style={{ marginTop: "24px" }}>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "10px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Also available
              </p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                {additionalPrograms.join(" · ")}
              </p>
            </div>

            {/* Subpage link */}
            <a
              href="/loan-programs"
              style={{
                display: "inline-block",
                marginTop: "24px",
                fontSize: "14px",
                color: "#b5621e",
                textDecoration: "none",
                borderBottom: "1px solid rgba(181,98,30,0.4)",
                paddingBottom: "2px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.borderColor = "#b5621e")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  "rgba(181,98,30,0.4)")
              }
            >
              View all Texas DPA programs →
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
