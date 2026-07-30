import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const navy = "#1a3a5c";
const copper = "#b5621e";
const ivory = "#f7f3ed";
const white = "#ffffff";
const ink = "#243447";
const muted = "#66717d";

const section: React.CSSProperties = {
  padding: "clamp(64px, 8vw, 96px) 24px",
};

const inner: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
};

const eyebrow: React.CSSProperties = {
  margin: "0 0 14px",
  color: copper,
  fontFamily: "'Fira Mono', monospace",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const heading: React.CSSProperties = {
  margin: 0,
  color: navy,
  fontFamily: "'Lora', Georgia, serif",
  fontSize: "clamp(30px, 4vw, 48px)",
  lineHeight: 1.12,
};

const body: React.CSSProperties = {
  color: muted,
  fontSize: "16px",
  lineHeight: 1.75,
};

const card: React.CSSProperties = {
  padding: "28px",
  background: white,
  borderTop: `2px solid ${copper}`,
};

const strategyUrl = "https://calendly.com/shalanda-securechoicelending/30min";

export default function ConstructionRenovationTexas() {
  const projectPaths = [
    {
      number: "01",
      title: "Build from the ground up",
      text: "Construction financing pays the builder in stages as work is completed. The loan structure must account for the land, plans, builder, budget, appraisal, inspections, draws, and permanent financing.",
    },
    {
      number: "02",
      title: "Buy and renovate",
      text: "A renovation loan can combine the purchase and eligible improvements into one financing plan. Approval is based on the property as it will be after the work, not simply its condition today.",
    },
    {
      number: "03",
      title: "Renovate a home you own",
      text: "For an existing homeowner, the right structure depends on available equity, the size and type of work, current mortgage terms, and whether replacing the first mortgage makes financial sense.",
    },
  ];

  const readiness = [
    ["Scope", "What is being built or changed, and which items are essential versus optional?"],
    ["Budget", "Does the estimate include permits, site work, contingency funds, and realistic allowances?"],
    ["Team", "Will the builder or contractor meet the selected program's approval and documentation requirements?"],
    ["Timeline", "How long will plans, appraisal, permits, closing, construction, and inspections reasonably take?"],
    ["Cash", "What funds are needed for down payment, closing, deposits, overruns, and reserves?"],
    ["Exit", "How and when does construction financing convert to or get replaced by the permanent mortgage?"],
  ];

  const process = [
    {
      title: "Start with the project, not the product",
      text: "Review the property, land, plans, estimated costs, intended occupancy, available cash, and borrower profile before choosing a program.",
    },
    {
      title: "Verify the builder and budget",
      text: "The lender reviews the builder or contractor, plans, specifications, contract, budget, insurance, and other project documents. Approval standards vary.",
    },
    {
      title: "Appraise the completed result",
      text: "The appraisal generally considers the plans, specifications, budget, and anticipated completed condition. The final value can affect the loan amount and required cash.",
    },
    {
      title: "Close and manage the work",
      text: "Funds are released through a controlled draw process after documented progress. Inspections, change orders, interest, and contingency funds must be managed throughout construction.",
    },
    {
      title: "Complete and convert",
      text: "Final inspections, title updates, insurance, and occupancy documents are completed before the permanent phase begins. The exact conversion process depends on the loan structure.",
    },
  ];

  return (
    <>
      <SEO {...seoMeta.constructionRenovation} />
      <main style={{ background: ivory, color: ink, fontFamily: "'Outfit', sans-serif" }}>
        <section style={{ ...section, paddingTop: "clamp(72px, 10vw, 118px)", paddingBottom: "clamp(68px, 9vw, 104px)" }}>
          <div style={{ ...inner, maxWidth: "900px" }}>
            <p style={eyebrow}>Construction and renovation loans in Texas</p>
            <h1 style={{ ...heading, fontSize: "clamp(42px, 7vw, 76px)", maxWidth: "820px" }}>
              Finance the home you plan to create.
            </h1>
            <p style={{ ...body, maxWidth: "690px", margin: "24px 0 32px", fontSize: "18px" }}>
              Ground-up construction and renovation loans can solve problems a standard mortgage cannot. They also require more planning, more documentation, and the right structure before you sign a builder or renovation contract.
            </p>
            <a
              href={strategyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                borderRadius: "5px",
                background: copper,
                color: white,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Book a Strategy Call
            </a>
          </div>
        </section>

        <section style={{ ...section, background: white }}>
          <div style={inner}>
            <p style={eyebrow}>Choose the right path</p>
            <h2 style={{ ...heading, maxWidth: "720px" }}>Construction and renovation are different financing decisions.</h2>
            <p style={{ ...body, maxWidth: "700px", margin: "20px 0 44px" }}>
              The first question is not which loan name sounds best. It is what you are trying to accomplish and how the property, work, and financing must fit together.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "#ddd6cc" }}>
              {projectPaths.map((path) => (
                <article key={path.title} style={card}>
                  <span style={{ color: copper, fontFamily: "'Fira Mono', monospace", fontSize: "12px", fontWeight: 700 }}>{path.number}</span>
                  <h3 style={{ margin: "16px 0 10px", color: navy, fontFamily: "'Lora', Georgia, serif", fontSize: "22px" }}>{path.title}</h3>
                  <p style={{ ...body, margin: 0, fontSize: "15px" }}>{path.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={section}>
          <div style={inner}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px", alignItems: "start" }}>
              <div>
                <p style={eyebrow}>One close or two</p>
                <h2 style={heading}>The number of closings is only part of the comparison.</h2>
              </div>
              <div>
                <p style={{ ...body, marginTop: 0 }}>
                  A one-time-close structure generally combines construction and permanent financing into one transaction. A two-close structure uses separate construction and permanent loans.
                </p>
                <p style={body}>
                  One close may reduce duplicate costs and future qualification risk. Two closes may provide different product or rate choices. Rate locks, modification terms, appraisals, qualification, and closing costs vary by lender and program, so the better structure must be verified for the specific project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ ...section, background: navy }}>
          <div style={inner}>
            <p style={{ ...eyebrow, color: "#d7945d" }}>Before the contract</p>
            <h2 style={{ ...heading, color: white, maxWidth: "720px" }}>Six things need real answers before the project moves forward.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0 44px", marginTop: "42px" }}>
              {readiness.map(([title, text]) => (
                <div key={title} style={{ padding: "22px 0", borderTop: "1px solid rgba(255,255,255,0.18)" }}>
                  <h3 style={{ margin: "0 0 8px", color: white, fontFamily: "'Lora', Georgia, serif", fontSize: "20px" }}>{title}</h3>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.68)", fontSize: "15px", lineHeight: 1.65 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...section, background: white }}>
          <div style={inner}>
            <p style={eyebrow}>How the financing moves</p>
            <h2 style={{ ...heading, maxWidth: "720px" }}>A project loan is approved in layers.</h2>
            <div style={{ maxWidth: "820px", marginTop: "44px" }}>
              {process.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 1fr",
                    gap: "18px",
                    padding: "0 0 30px",
                    marginBottom: "30px",
                    borderBottom: index === process.length - 1 ? "none" : "1px solid #e4ded5",
                  }}
                >
                  <div style={{ color: copper, fontFamily: "'Fira Mono', monospace", fontSize: "12px", fontWeight: 700 }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 8px", color: navy, fontFamily: "'Lora', Georgia, serif", fontSize: "22px" }}>{item.title}</h3>
                    <p style={{ ...body, margin: 0, fontSize: "15px" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={section}>
          <div style={{ ...inner, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px", alignItems: "start" }}>
            <div>
              <p style={eyebrow}>Texas planning</p>
              <h2 style={heading}>The permanent payment needs a realistic foundation.</h2>
            </div>
            <div>
              <p style={{ ...body, marginTop: 0 }}>
                New construction taxes may initially reflect land or an incomplete property. The payment should be evaluated using a reasonable estimate for the completed home, not a temporary tax bill that makes the numbers look prettier.
              </p>
              <p style={body}>
                Homestead and qualifying disabled-veteran exemptions can materially affect future property taxes, but timing and documentation matter. Builder contracts, financing deadlines, deposits, change orders, and cost-overrun responsibility should also be understood before closing.
              </p>
            </div>
          </div>
        </section>

        <section style={{ ...section, background: copper, textAlign: "center" }}>
          <div style={{ ...inner, maxWidth: "760px" }}>
            <p style={{ ...eyebrow, color: "rgba(255,255,255,0.75)" }}>Plan before you commit</p>
            <h2 style={{ ...heading, color: white }}>Bring the project, budget, and timeline into one conversation.</h2>
            <p style={{ margin: "20px auto 30px", color: "rgba(255,255,255,0.82)", fontSize: "17px", lineHeight: 1.7 }}>
              We can identify the questions that must be answered before you rely on a construction or renovation financing plan.
            </p>
            <a
              href={strategyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "15px 28px",
                borderRadius: "5px",
                background: white,
                color: copper,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Book a Strategy Call
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
