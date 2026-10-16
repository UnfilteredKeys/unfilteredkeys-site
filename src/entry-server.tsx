// Build-time renderer. scripts/prerender.mjs calls render() once per route so
// every page ships as real HTML that Google can read without running JavaScript.
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { Writable } from "node:stream";
import { AppShell, AppRoutes } from "./App";

export function render(url: string): Promise<{ html: string; head: string }> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        const h = helmetContext.helmet;
        const head = h
          ? [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join("\n    ")
          : "";
        resolve({ html, head });
        cb();
      },
    });

    const { pipe } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <AppShell>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </AppShell>
      </HelmetProvider>,
      {
        // Wait for every lazy-loaded page so the full content is in the HTML.
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError(err) {
          reject(err);
        },
      }
    );
  });
}
