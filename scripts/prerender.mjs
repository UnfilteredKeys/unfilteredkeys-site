// Runs after `vite build`. Renders every route in src/App.tsx to static HTML
// (dist/<route>/index.html) so search engines get the real page text, title,
// description, canonical and schema without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);

// Every real page route in App.tsx. Redirect-only routes (<Navigate>) and the
// "*" catch-all are skipped; redirects are handled in netlify.toml.
const appSrc = fs.readFileSync(path.join(root, "src/App.tsx"), "utf8");
const routes = [...appSrc.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z]+)/g)]
  .filter(([, p, el]) => p !== "*" && el !== "Navigate")
  .map(([, p]) => p);

let template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
// Drop the sitewide fallback tags; each page now gets its own from <SEO />.
template = template
  .replace(/\s*<!-- Page-specific title[\s\S]*?-->/, "")
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<meta (name|property)="(description|og:[a-z_]+|twitter:[a-z]+)"[^>]*>/g, "");

const build = (head, html) =>
  template
    .replace("</head>", `  ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

const SITE = "https://shalandasmith.com";
const problems = [];
const seenTitles = new Map();
const indexable = [];

for (const route of routes) {
  const { html, head } = await render(route);
  const text = html.replace(/<style[\s\S]*?<\/style>|<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? "";
  const canonical = head.match(/rel="canonical" href="([^"]+)"/)?.[1] ?? "";
  const noindex = /name="robots" content="noindex/.test(head);
  const expected = route === "/" ? `${SITE}/` : `${SITE}${route}`;

  if (!title) problems.push(`${route}: missing <title>`);
  if (!/name="description"/.test(head)) problems.push(`${route}: missing meta description`);
  if (!canonical) problems.push(`${route}: missing canonical tag`);
  else if (canonical.replace(/\/$/, "") !== expected.replace(/\/$/, ""))
    problems.push(`${route}: canonical points to ${canonical}, expected ${expected}`);
  if (text.length < 300) problems.push(`${route}: only ${text.length} characters of readable text`);
  if (!noindex && !text.includes("554554")) problems.push(`${route}: NMLS #554554 not on page`);
  if (!noindex && title) {
    if (seenTitles.has(title)) problems.push(`${route}: same title as ${seenTitles.get(title)}`);
    seenTitles.set(title, route);
  }
  if (!noindex) indexable.push(route);

  const page = build(head, html);
  if (route === "/") {
    fs.writeFileSync(path.join(dist, "index.html"), page);
  } else {
    // /killeen-va-loan is served from killeen-va-loan.html (no trailing-slash
    // redirect); the folder copy covers /killeen-va-loan/. Canonical tags point
    // at the no-slash URL either way.
    fs.mkdirSync(path.join(dist, route), { recursive: true });
    fs.writeFileSync(path.join(dist, `${route}.html`), page);
    fs.writeFileSync(path.join(dist, route, "index.html"), page);
  }
}

// Sitemap is generated from the real pages on every build, so it can never
// list a page that doesn't exist, miss a new one, or use the wrong domain.
const today = new Date().toISOString().slice(0, 10);
const priority = (r) => (r === "/" ? "1.0" : /va-loan|killeen|fort-hood|bah|va-/.test(r) ? "0.9" : "0.8");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    indexable
      .map((r) => `  <url><loc>${r === "/" ? `${SITE}/` : SITE + r}</loc><lastmod>${today}</lastmod><priority>${priority(r)}</priority></url>`)
      .join("\n") +
    `\n</urlset>\n`
);
const robots = fs.readFileSync(path.join(dist, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) problems.push(`robots.txt must point to ${SITE}/sitemap.xml`);

// Real 404 page, served by Netlify with a 404 status for unknown URLs.
const nf = await render("/__not-found__");
fs.writeFileSync(
  path.join(dist, "404.html"),
  build(nf.head.replace(/<meta[^>]*robots[^>]*>/, "") + '\n    <meta name="robots" content="noindex" />', nf.html)
);

console.log(`Prerendered ${routes.length} pages + 404.html; sitemap has ${indexable.length} URLs`);
if (problems.length) {
  // Fail the build so Netlify keeps the last good version live instead of
  // publishing pages Google can't use.
  console.error("\nSEO CHECK FAILED. Fix these before this can go live:\n  " + problems.join("\n  "));
  process.exit(1);
}
