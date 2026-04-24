import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const GeorgetownMortgagePage = () => {
  return (
    <>
      <SEO {...(seoMeta as any).georgetownMortgage} />
      <section className="bg-navy text-ivory py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-copper mb-4">
            Georgetown, TX Mortgage — Coming Soon
          </h1>
          <p className="text-lg opacity-90">
            Williamson County home loans for Georgetown buyers. Page in development.
          </p>
        </div>
      </section>
    </>
  );
};

export default GeorgetownMortgagePage;
