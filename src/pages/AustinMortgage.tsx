import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const AustinMortgage = () => {
  return (
    <>
      <SEO {...(seoMeta as any).austinMortgage} />
      <div style={{ padding: "72px 24px", maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Lora', serif", fontSize: 40, color: "#1a3a5c" }}>
          Mortgage Broker Austin TX
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.7, marginTop: 16 }}>
          Travis County home loans — VA, FHA, conventional, physician, jumbo, and down payment assistance across the Austin metro.
        </p>
      </div>
    </>
  );
};

export default AustinMortgage;
