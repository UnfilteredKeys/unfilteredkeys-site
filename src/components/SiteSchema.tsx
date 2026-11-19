import { Helmet } from "react-helmet-async";

const BASE_URL = "https://shalandasmith.com";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${BASE_URL}/#website`, name: "Keys by Shalanda", url: BASE_URL },
    {
      "@type": "FinancialService",
      "@id": `${BASE_URL}/#business`,
      name: "Keys by Shalanda",
      url: BASE_URL,
      description:
        "Texas mortgage broker specializing in VA loans for military families and veterans, plus FHA, conventional, physician, construction, and investor loans.",
      telephone: "+1-254-935-9331",
      logo: `${BASE_URL}/favicon.svg`,
      image: `${BASE_URL}/headshot.jpg`,
      areaServed: ["Texas", "Killeen", "Fort Hood", "Copperas Cove", "Temple", "San Antonio", "Austin", "Round Rock", "Georgetown", "Houston", "Dallas", "El Paso"].map((name) => ({ "@type": "Place", name })),
      employee: { "@id": `${BASE_URL}/#shalanda` },
      parentOrganization: { "@id": `${BASE_URL}/#securechoice` },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#shalanda`,
      name: "Shalanda Smith",
      jobTitle: "Senior Loan Originator",
      url: `${BASE_URL}/about`,
      email: "shalanda@securechoicelending.com",
      image: `${BASE_URL}/headshot.jpg`,
      identifier: { "@type": "PropertyValue", propertyID: "NMLS", value: "554554" },
      worksFor: { "@id": `${BASE_URL}/#securechoice` },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#securechoice`,
      name: "Secure Choice Lending",
      identifier: { "@type": "PropertyValue", propertyID: "NMLS", value: "1689518" },
      address: { "@type": "PostalAddress", addressLocality: "Riverside", addressRegion: "CA", addressCountry: "US" },
    },
  ],
};

export default function SiteSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
    </Helmet>
  );
}
