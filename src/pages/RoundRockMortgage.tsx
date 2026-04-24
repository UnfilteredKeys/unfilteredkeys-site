import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const RoundRockMortgagePage = () => {
  return (
    <>
      <SEO
        title={seoMeta.roundRockMortgage.title}
        description={seoMeta.roundRockMortgage.description}
        canonical={seoMeta.roundRockMortgage.canonical}
      />
      <section className="bg-navy text-ivory py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-copper mb-4">
            Round Rock, TX · Mortgage Broker · Williamson County
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">
            Round Rock Mortgage Page — Coming Soon
          </h1>
          <p className="font-sans text-lg text-ivory/80 max-w-2xl mx-auto">
            The full Round Rock landing page is in development. In the meantime, reach out directly to discuss Williamson County financing.
          </p>
        </div>
      </section>
    </>
  );
};

export default RoundRockMortgagePage;
