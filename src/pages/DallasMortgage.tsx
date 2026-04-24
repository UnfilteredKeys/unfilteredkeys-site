import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const DallasMortgage = () => {
  return (
    <>
      <SEO {...(seoMeta as any).dallasMortgage} />
      <main style={{ padding: "72px 24px", maxWidth: 1120, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#b5621e", fontFamily: "'Fira Mono', monospace", marginBottom: 12, fontWeight: 600 }}>
          Dallas, TX · Dallas County · DFW Metroplex
        </p>
        <h1 style={{ fontFamily: "'Lora', serif", fontSize: 40, fontWeight: 700, color: "#1a3a5c", lineHeight: 1.2, marginBottom: 16 }}>
          Mortgage Broker Dallas, TX
        </h1>
        <p style={{ fontSize: 17, color: "#4a5568", lineHeight: 1.7, maxWidth: 760 }}>
          DFW home loans for first-time buyers, physicians, veterans, and move-up families. VA, FHA, conventional, physician, and down payment assistance programs across Dallas County. Full Dallas page content coming soon.
        </p>
      </main>
    </>
  );
};

export default DallasMortgage;
