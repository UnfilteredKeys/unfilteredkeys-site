const SchemaMarkup = () => {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": "https://shalandasmith.com/#organization",
    "name": "Keys by Shalanda",
    "alternateName": "Unfiltered Keys",
    "description": "Texas mortgage broker specializing in VA loans, FHA, Conventional, Physician, and Non-QM loans. Serving Fort Hood/Killeen, Austin, DFW, Houston, San Antonio, and statewide Texas.",
    "url": "https://shalandasmith.com",
    "telephone": "+12549359331",
    "email": "shalanda@securechoicelending.com",
    "priceRange": "Free consultations",
    "openingHours": "Mo-Fr 08:00-18:00",
    "hasMap": "https://maps.google.com/?q=Keys+by+Shalanda+Killeen+TX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Killeen",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.1171,
      "longitude": -97.7278
    },
    "areaServed": [
      "Killeen, TX", "Fort Hood, TX", "Temple, TX", "Harker Heights, TX",
      "Copperas Cove, TX", "Austin, TX", "Round Rock, TX", "Georgetown, TX",
      "Dallas, TX", "Fort Worth, TX", "Houston, TX", "San Antonio, TX",
      "El Paso, TX", "Texas"
    ],
    "sameAs": [
      "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/554554"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "20"
    }
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shalanda Smith",
    "jobTitle": "Senior Loan Originator",
    "description": "Texas mortgage broker and VA loan specialist. NMLS #554554. Serving veterans, military families, and homebuyers across Texas.",
    "url": "https://shalandasmith.com",
    "telephone": "+12549359331",
    "email": "shalanda@securechoicelending.com",
    "worksFor": {
      "@type": "Organization",
      "name": "Secure Choice Lending",
      "identifier": "NMLS #1689518"
    },
    "identifier": "NMLS #554554",
    "knowsAbout": ["VA Loans", "FHA Loans", "Mortgage Broker", "Texas Real Estate", "Military PCS", "Physician Loans", "Fort Hood", "Killeen TX Real Estate"],
    "areaServed": "Texas"
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What credit score do I need for a VA loan in Killeen, TX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VA itself sets no minimum credit score, but lenders typically require 580 to 620. As a broker with access to 50+ lenders, we can often find VA loan options for scores below what retail banks accept, including manual underwriting for scores down to 550 with strong compensating factors."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a VA loan to buy new construction near Fort Hood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. VA loans can be used for new construction purchases near Fort Hood. We also offer VA One-Time Close construction loans, which let you lock your permanent interest rate before the build starts — zero down, one closing, no re-qualification at completion."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a VA loan take to close in Killeen, TX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With complete documentation, VA loans typically close in 21 to 30 days. If you have PCS orders with a hard report date, we build the timeline backward from your deadline. We have closed VA loans in under 14 days when orders required it."
        }
      },
      {
        "@type": "Question",
        "name": "What is the VA funding fee and can I roll it into my loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VA funding fee is a one-time fee ranging from 1.25% to 3.3% of the loan amount depending on your down payment, loan type, and whether it is your first VA loan use. It can be rolled into the loan balance so you pay nothing out of pocket at closing. Veterans with a service-connected disability rating have the funding fee waived entirely."
        }
      },
      {
        "@type": "Question",
        "name": "Does my BAH count as income for VA loan qualification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Basic Allowance for Housing (BAH) is considered non-taxable income and counts toward your qualifying income for a VA loan. Because it is non-taxable, lenders can gross it up by 25% when calculating your debt-to-income ratio, which increases your buying power compared to the same dollar amount of taxable pay."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a VA loan if I have used it before?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. VA entitlement is reusable as long as your previous VA loan has been paid off or the entitlement has been restored. If you still have an active VA loan on another property, your remaining entitlement may cover a new purchase in Killeen at current price points. We calculate your available entitlement during our first conversation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the VA loan limit for Bell County, Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VA loan limit for Bell County, Texas is $832,750 in 2026 — well above any Killeen or Fort Hood corridor price point. Veterans with full entitlement have no VA-imposed loan limit, meaning there is no maximum purchase price as long as you qualify based on income and credit."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Texas Veterans Land Board (VLB) loan and how is it different from a federal VA loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Texas Veterans Land Board (VLB) offers a separate below-market interest rate program exclusively for Texas veterans. It is different from the federal VA loan guaranteed by the U.S. Department of Veterans Affairs. Both programs can sometimes be used together. The VLB Veterans Housing Assistance Program provides below-market rates on home loans up to $726,200 for eligible Texas veterans."
        }
      },
      {
        "@type": "Question",
        "name": "Does a 100% VA disability rating affect my property taxes in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A 100% service-connected disability rating qualifies you for a full property tax exemption on your Texas primary residence, eliminating your entire property tax liability. On a median Killeen home this saves $3,900 to $4,900 per year. File with Bell County Appraisal District after closing using your VA award letter — it does not apply automatically."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between pre-qualification and pre-approval for a VA loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-qualification is an estimate based on self-reported information and carries no weight with sellers. Pre-approval means your income, credit, and assets have been verified and a fully underwritten letter is issued. In the Fort Hood market, sellers require the latter. Keys by Shalanda issues fully underwritten pre-approvals."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
};

export default SchemaMarkup;
