import { useState } from "react";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const navy = "#1a3a5c";
const copper = "#b5621e";
const ivory = "#faf8f4";
const white = "#ffffff";
const textPrimary = "#1c2630";
const textSecondary = "#4a5568";
const border = "#ddd8cf";

const CALENDLY = "https://calendly.com/shalanda-securechoicelending/30min";
const APPLY = "https://scl.my1003app.com/554554/register";

const container: React.CSSProperties = { maxWidth: 960, margin: "0 auto", padding: "0 24px" };
const h2Style: React.CSSProperties = {
  fontFamily: "'Lora', serif",
  fontSize: "clamp(22px,2.6vw,30px)",
  fontWeight: 700,
  color: navy,
  marginBottom: 24,
};

type QA = { q: string; a: string };
type Category = { title: string; items: QA[] };

const categories: Category[] = [
  {
    title: "Eligibility & Entitlement",
    items: [
      {
        q: "Can I use my VA loan more than once?",
        a: "Yes. The VA loan benefit is not a one-time deal. As long as you have entitlement remaining or restored, you can use it again — even multiple times in your lifetime. Selling a previous home and paying off the prior VA loan typically restores full entitlement.",
      },
      {
        q: "I still have a VA loan from a previous duty station — can I buy in Killeen with another VA loan?",
        a: "Often, yes. This is called a second-tier VA loan or bonus entitlement. If you have remaining entitlement, you can keep the first home (often as a rental) and use a new VA loan on a primary residence near Fort Hood. We run the entitlement math before you write an offer so you know exactly what you can borrow.",
      },
      {
        q: "How do I get my Certificate of Eligibility (COE)?",
        a: "The fastest way is through the VA Health and Benefits app or VA.gov. As your lender, I can also pull it directly through the VA portal in most cases — usually within minutes. You don't need to chase paperwork before talking to me.",
      },
      {
        q: "Does my disability rating affect my VA loan eligibility?",
        a: "It doesn't change whether you qualify, but it does change your costs. Veterans receiving VA disability compensation at any rating level are exempt from the VA funding fee. At 100% service-connected disability, you may also qualify for a full Texas property tax exemption on your primary residence.",
      },
      {
        q: "Can surviving spouses use the VA loan benefit?",
        a: "Yes. Eligible surviving spouses of veterans who died in service, from a service-connected disability, or who were 100% disabled can qualify for the VA loan — including the funding fee exemption.",
      },
    ],
  },
  {
    title: "Money & Costs",
    items: [
      {
        q: "What is the VA funding fee and how much is it?",
        a: "The funding fee is a one-time charge that helps fund the VA loan program. For first-time use with no down payment, it's 2.15% of the loan amount. Subsequent use is 3.30%. Putting 5% down drops it to 1.50%, and 10% or more drops it to 1.25%. Veterans with a service-connected disability rating of 10% or higher have the funding fee waived entirely.",
      },
      {
        q: "Does BAH count as income for a VA loan?",
        a: "Yes — and it can be grossed up by 25% because it's non-taxable. That gross-up often makes the difference between qualifying or not, especially for E-5 through E-7 buyers near Fort Hood. We use your LES to document it.",
      },
      {
        q: "What are the VA loan limits in Texas for 2025?",
        a: "If you have full entitlement, there is no VA loan limit — you can borrow what your income supports. If you have reduced entitlement (because of a prior VA loan still open), the standard 2025 conforming limit is $806,500 in most Texas counties, which caps the zero-down portion of a second-tier loan.",
      },
      {
        q: "Can the seller pay my closing costs?",
        a: "Yes. Sellers can pay up to 4% of the loan amount toward your concessions — including funding fee, prepaids, and even paying down debt to help you qualify. This is one of the most underused tools in VA financing, especially in slower markets where sellers want to make a deal.",
      },
    ],
  },
  {
    title: "Property & Process",
    items: [
      {
        q: "Will a VA appraisal kill my deal?",
        a: "Not if it's set up correctly. VA appraisals do have minimum property requirements (MPRs) — things like working HVAC, no chipped paint on pre-1978 homes, no active leaks. Most repairs are minor and negotiable. The bigger issue is value, and we coach you on writing offers that protect you if the appraisal comes in low.",
      },
      {
        q: "How long does a VA loan take to close?",
        a: "Our average is 21 days from contract to close. VA loans are not slower than conventional when handled by a broker who works VA files daily. Where deals stall is usually the appraisal queue or seller-side title issues — not the VA itself.",
      },
      {
        q: "Can I buy a multi-family property with a VA loan?",
        a: "Yes — up to 4 units, as long as you live in one of them as your primary residence. This is one of the strongest wealth-building plays in the VA toolkit: zero down on a fourplex, rent the other three units, and let tenants pay the mortgage.",
      },
      {
        q: "What happens to my VA loan if I PCS?",
        a: "You have options. You can sell, rent the home out (VA loans don't require you to sell when you PCS), or have the loan assumed by another qualified buyer — including a civilian. The assumability of a VA loan at today's lower locked-in rate is a real asset when you go to sell.",
      },
    ],
  },
  {
    title: "Texas-Specific",
    items: [
      {
        q: "Does the VA disability property tax exemption apply to my VA loan home?",
        a: "Yes. Texas offers a full property tax exemption on your primary residence if you have a 100% service-connected disability rating (or are rated as individually unemployable). Partial ratings receive scaled exemptions: 70-90% rating = $12,000 off appraised value, 50-69% = $10,000, 30-49% = $7,500, 10-29% = $5,000. The exemption is filed with your county appraisal district after closing.",
      },
      {
        q: "Can I use a VA loan in the Killeen and Fort Hood area?",
        a: "Absolutely — this is the heart of what I do. I work with active duty soldiers, retirees, and PCS-ing families across Killeen, Harker Heights, Copperas Cove, Nolanville, and Belton every week. If you're heading to Fort Hood, register with a realtor before visiting builder model homes so your representation is protected.",
      },
    ],
  },
];

function FAQItem({ qa }: { qa: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${border}` }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "20px 0",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontFamily: "'Outfit', sans-serif",
          fontSize: 17,
          fontWeight: 600,
          color: navy,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span>{qa.q}</span>
        <span style={{ color: copper, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 0 20px",
            fontSize: 16,
            lineHeight: 1.7,
            color: textSecondary,
            fontFamily: "'Outfit', sans-serif",
            maxWidth: 760,
          }}
        >
          {qa.a}
        </div>
      )}
    </div>
  );
}

export default function VaLoanFaqTexas() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: textPrimary }}>
      <SEO {...seoMeta.vaLoanFaqTexas} />

      {/* HERO */}
      <section style={{ background: navy, color: ivory, padding: "96px 0 80px" }}>
        <div style={container}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: copper,
              fontWeight: 600,
              marginBottom: 16,
              fontFamily: "'Fira Mono', monospace",
            }}
          >
            VA Loan FAQ · Texas
          </div>
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(34px,5vw,56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              color: ivory,
            }}
          >
            VA Loan Questions. Straight Answers.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              marginTop: 20,
              maxWidth: 680,
              color: "rgba(250,248,244,0.82)",
            }}
          >
            The questions Fort Hood and Texas veterans actually ask — before, during, and after the process.
          </p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      {categories.map((cat, i) => (
        <section
          key={cat.title}
          style={{
            background: i % 2 === 0 ? ivory : white,
            padding: "72px 0",
          }}
        >
          <div style={container}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: copper,
                fontWeight: 600,
                marginBottom: 12,
                fontFamily: "'Fira Mono', monospace",
              }}
            >
              Category {i + 1}
            </div>
            <h2 style={h2Style}>{cat.title}</h2>
            <div>
              {cat.items.map((qa) => (
                <FAQItem key={qa.q} qa={qa} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* COPPER CTA */}
      <section style={{ background: copper, color: white, padding: "72px 0" }}>
        <div style={{ ...container, textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "clamp(26px,3vw,36px)",
              fontWeight: 700,
              margin: 0,
              color: white,
            }}
          >
            Ready to run your numbers?
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              marginTop: 16,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Book a free 15-minute call — no pressure, no pitch. Just your file and a clear answer.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: navy,
                color: white,
                padding: "14px 28px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Book a Strategy Call →
            </a>
            <a
              href={APPLY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "transparent",
                color: white,
                padding: "14px 28px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              Start My Application
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: ivory, padding: "40px 0" }}>
        <div style={container}>
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.6,
              color: textSecondary,
              maxWidth: 820,
              margin: 0,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            This page is for educational purposes only and does not constitute a loan commitment, rate guarantee, or offer to lend. All loans subject to credit approval. Shalanda Smith · NMLS #554554 · Keys by Shalanda · Powered by Secure Choice Lending · NMLS #1689518 · Equal Housing Lender.
          </p>
        </div>
      </section>
    </div>
  );
}
