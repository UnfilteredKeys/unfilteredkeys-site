import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface FaqItem {
  q: string;
  a: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  faqs?: FaqItem[];
}

const SITE_NAME = "Keys by Shalanda";
const BASE_URL = "https://unfilteredkeys-site.lovable.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  faqs,
}: SEOProps) {
  const location = useLocation();

  const effectiveNoindex = noindex || location.pathname.startsWith("/partners/");

  const fullTitle = title
    ? title.includes("|")
      ? title
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Texas Mortgage Broker`;

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  const faqJsonLd = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {effectiveNoindex && <meta name="robots" content="noindex, nofollow" />}
      {faqJsonLd && (
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      )}
    </Helmet>
  );
}
