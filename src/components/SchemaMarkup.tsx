import { Helmet } from "react-helmet-async";

export default function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shalanda Smith",
    jobTitle: "Senior Loan Officer",
    description:
      "Licensed Texas mortgage broker specializing in VA loans, FHA, USDA, down payment assistance, and non-QM lending. Serving Fort Hood, Killeen, Central Texas, and all of Texas.",
    url: "https://shalandasmith.com",
    telephone: "+12549359331",
    email: "shalanda@securechoicelending.com",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NMLS License",
      name: "NMLS #554554",
    },
    worksFor: {
      "@type": "Organization",
      name: "Secure Choice Lending",
      identifier: "NMLS #1689518",
    },
    knowsAbout: [
      "VA Loans","FHA Loans","USDA Loans","Down Payment Assistance",
      "Texas Home Loans","Non-QM Loans","Construction Loans","Mortgage Refinancing","First-Time Homebuyers",
    ],
    areaServed: { "@type": "State", name: "Texas" },
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shalandasmith.com/#business",
    name: "Keys by Shalanda",
    alternateName: "Shalanda Smith – Texas Mortgage Broker",
    description: "Texas mortgage brokerage specializing in VA loans, FHA, USDA, down payment assistance, and non-QM lending. 50+ lender network. 21-day average close. 5.0 Google rating.",
    url: "https://shalandasmith.com",
    telephone: "+12549359331",
    email: "shalanda@securechoicelending.com",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", worstRating: "1", ratingCount: "1" },
    address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "City", name: "Killeen, TX" },
      { "@type": "City", name: "Fort Hood, TX" },
      { "@type": "City", name: "Temple, TX" },
      { "@type": "City", name: "Waco, TX" },
      { "@type": "City", name: "Austin, TX" },
      { "@type": "City", name: "San Antonio, TX" },
      { "@type": "City", name: "Houston, TX" },
      { "@type": "City", name: "El Paso, TX" },
      { "@type": "City", name: "Dallas, TX" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Loan Programs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "VA Home Loans" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "FHA Loans" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "USDA Loans" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conventional Loans" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Down Payment Assistance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Non-QM Loans" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Loans" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mortgage Refinancing" } },
      ],
    },
    founder: { "@type": "Person", name: "Shalanda Smith", identifier: "NMLS #554554" },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
    </Helmet>
  );
}
