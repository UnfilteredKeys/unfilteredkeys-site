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
  // If a full title is passed, use it directly.
  // If only a short title fragment is passed (no pipe), append site name.
  // If no title, use the default.
  const fullTitle = title
    ? title.includes("|")
      ? title
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Texas Mortgage Broker`;

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

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
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
