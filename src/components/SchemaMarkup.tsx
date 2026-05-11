const SchemaMarkup = () => {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MortgageLoan",
    "@id": "https://shalandasmith.com/#organization",
    "name": "Keys by Shalanda",
    "alternateName": "Unfiltered Keys",
    "description": "Texas mortgage broker specializing in VA loans, FHA, Conventional, Physician, and Non-QM loans. Serving Fort Hood/Killeen, Austin, DFW, Houston, San Antonio, and statewide Texas.",
    "url": "https://shalandasmith.com",
    "telephone": "+12549359331",
    "email": "shalanda@securechoicelending.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "TX",
      "addressCountry": "US"
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
    "knowsAbout": ["VA Loans", "FHA Loans", "Mortgage Broker", "Texas Real Estate", "Military PCS", "Physician Loans"],
    "areaServed": "Texas"
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between pre-qualification and pre-approval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pre-qualification is an estimate based on self-reported information and means nothing to a serious seller. Pre-approval means your income, credit, and assets have been verified, and a fully underwritten letter is issued. In Texas's competitive market, sellers require the latter. Keys by Shalanda issues fully underwritten pre-approvals."
        }
      },
      {
        "@type": "Question",
        "name": "Can my BAH cover a mortgage payment in Killeen, TX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most pay grades, yes. At a $225K VA loan, your PITI is roughly $1,843/month. An E-5 with dependents receives $1,695 BAH — about a $148 gap. An E-6 at $2,070 BAH covers the full payment. We run your exact BAH vs. payment calculation for free before you start shopping."
        }
      },
      {
        "@type": "Question",
        "name": "Is there down payment assistance available in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. TDHCA My First Texas Home offers up to 5% assistance (620 minimum credit score). TSAHC Homes for Texas Heroes provides non-repayable grants for teachers, nurses, first responders, and veterans. SETH and Chenoa Fund programs are also available. We check your eligibility across all programs at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you close a VA loan near Fort Hood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With complete documentation, VA loans typically close in 21 to 30 days. If you have PCS orders with a hard report date, tell us upfront — we build the timeline backward from your deadline. We have closed VA loans in under 14 days when orders required it."
        }
      },
      {
        "@type": "Question",
        "name": "What credit score do I need for a VA loan in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The VA itself sets no minimum credit score, but lenders typically require 580 to 620. As a broker with access to 50+ lenders, we can often find VA loan options for scores below what retail banks accept. We run your scenario across multiple lenders to find the best fit."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a VA loan to buy new construction near Fort Hood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. VA loans can be used for new construction purchases. We also offer VA One-Time Close construction loans, which let you lock your permanent interest rate before the build starts — zero down, one closing, no re-qualification at completion."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use the builder's lender when buying new construction in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not automatically. Builder lenders offer incentives tied to their preferred lender, but those incentives can come with higher base rates or fees. We run a free side-by-side comparison before you commit. In many cases we can match or beat the net effective rate, especially on VA loans."
        }
      },
      {
        "@type": "Question",
        "name": "I am self-employed. Can I still qualify for a mortgage in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If tax returns show strong income, conventional or FHA financing may work. If write-offs reduce your reported income, a Bank Statement Loan using 12 to 24 months of deposits, or a P&L-Only loan, may qualify you at a higher amount. We run your scenario both ways and show you which structure produces the best rate and payment."
        }
      },
      {
        "@type": "Question",
        "name": "What is a One-Time Close construction loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A One-Time Close loan combines construction financing and your permanent mortgage into a single closing with one set of closing costs. You lock your permanent interest rate before construction starts, protecting you from rate moves during the build. We offer One-Time Close loans for VA, FHA, USDA, and Conventional programs."
        }
      },
      {
        "@type": "Question",
        "name": "What is a DSCR loan and who is it for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DSCR stands for Debt Service Coverage Ratio. Instead of qualifying on your personal income, the loan qualifies based on the rental income the property generates. If the rent covers the mortgage payment (typically 1.0x to 1.25x DSCR), you can qualify regardless of how many properties you own or what your tax returns show."
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
