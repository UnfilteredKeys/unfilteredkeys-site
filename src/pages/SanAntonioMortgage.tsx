import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const SanAntonioMortgage = () => {
  return (
    <>
      <SEO {...(seoMeta as any).sanAntonioMortgage} />
      <div style={{ padding: "120px 24px", maxWidth: 1120, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#b5621e",
            fontFamily: "'Fira Mono', monospace",
            marginBottom: 12,
            fontWeight: 600,
          }}
        >
          San Antonio, TX · Bexar County
        </p>
        <h1
          style={{
            fontFamily: "'Lora', serif",
            fontSize: 40,
            fontWeight: 700,
            color: "#1a3a5c",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Mortgage Broker in San Antonio, TX — Coming Soon
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.7, maxWidth: 720 }}>
          A dedicated San Antonio resource page is in production. In the meantime,
          contact Shalanda directly at 254-935-9331 for VA, FHA, conventional,
          physician, and down payment assistance programs in Bexar County and the
          greater San Antonio area, including Joint Base San Antonio.
        </p>
      </div>
    </>
  );
};

export default SanAntonioMortgage;
