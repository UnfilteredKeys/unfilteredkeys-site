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

const problems = [];
for (const route of routes) {
  const { html, head } = await render(route);
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!/<title/.test(head)) problems.push(`${route}: no <title>`);
  if (text.length < 300) problems.push(`${route}: only ${text.length} chars of text`);
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

// Real 404 page, served by Netlify with a 404 status for unknown URLs.
const nf = await render("/__not-found__");
fs.writeFileSync(
  path.join(dist, "404.html"),
  build(nf.head.replace(/<meta[^>]*robots[^>]*>/, "") + '\n    <meta name="robots" content="noindex" />', nf.html)
);

console.log(`Prerendered ${routes.length} pages + 404.html`);
if (problems.length) {
  console.warn("Prerender warnings:\n  " + problems.join("\n  "));
}
