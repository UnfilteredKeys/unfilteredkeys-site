import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const HoustonMortgagePage = () => {
  return (
    <>
      <SEO {...seoMeta.houstonMortgage} />
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl text-foreground">
          Houston TX Mortgage Broker
        </h1>
        <p className="mt-4 text-muted-foreground">
          Page coming soon.
        </p>
      </div>
    </>
  );
};

export default HoustonMortgagePage;
