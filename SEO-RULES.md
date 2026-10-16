# SEO rules for this site (read before changing the build)

Google only sees the HTML that `npm run build` produces. These rules keep that HTML usable.

1. **Do not change the `build` script in package.json.** It must stay:
   `vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs`
   The last step writes a real HTML file for every page. Without it, Google sees blank pages.
2. **Every new page** needs a `<Route path="..." element={<Page />} />` in `src/App.tsx`
   and an `<SEO title description canonical />` with a title no other page uses.
   It is added to the sitemap automatically.
3. **Domain is `https://shalandasmith.com`** (no `www`) everywhere.
4. **Do not add a `/* /index.html 200` rewrite** in netlify.toml or public/_redirects.
   Unknown URLs must return the real 404 page.
5. **Do not hand-edit a sitemap.** `dist/sitemap.xml` is generated on every build.
6. **Inline CSS** goes in `<style dangerouslySetInnerHTML={{ __html: css }} />`, not `<style>{css}</style>`.
7. Every indexable page must show NMLS #554554.

If a build fails with "SEO CHECK FAILED", the message lists the page and the problem.
The live site stays on the last good version until it is fixed.
