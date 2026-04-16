import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    noindex?: boolean;
}

const SITE_NAME = "Keys by Shalanda";
const BASE_URL = "https://shalandasmith.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

export default function SEO({
    title,
    description,
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
    noindex = false,
}: SEOProps) {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
          : `${SITE_NAME} | Texas Mortgage Broker – VA Loans & More`;
    const resolvedCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
        <Helmet>
              <title>{fullTitle}</title>title>
          {description && <meta name="description" content={description} />}
              <link rel="canonical" href={resolvedCanonical} />
          {noindex && <meta name="robots" content="noindex, nofollow" />}
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content={SITE_NAME} />
              <meta property="og:title" content={fullTitle} />
          {description && <meta property="og:description" content={description} />}
              <meta property="og:url" content={resolvedCanonical} />
              <meta property="og:image" content={ogImage} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={fullTitle} />
          {description && <meta name="twitter:description" content={description} />}
              <meta name="twitter:image" content={ogImage} />
        </Helmet>Helmet>
      );
}</Helmet>
