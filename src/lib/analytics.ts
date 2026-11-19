type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  push?: MetaPixelFunction;
  loaded?: boolean;
  version?: string;
};

type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  }
}

const PRODUCTION_HOSTNAMES = new Set([
  "shalandasmith.com",
  "www.shalandasmith.com",
]);
const GA_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-CHVF1GYN2K";
const CLARITY_ID =
  import.meta.env.VITE_CLARITY_PROJECT_ID?.trim() || "xv3yxohgzj";

const META_PIXEL_ID =
  import.meta.env.VITE_META_PIXEL_ID?.trim() || "667885193645172";

// Pages where the Meta pixel never fires. The mortgage review page discusses
// escrow shortages and payment increases, which Meta treats as sensitive
// financial context, so it stays out of ad tracking entirely.
const META_EXCLUDED_PATHS = [/^\/mortgage-review(\/|$)/];

const metaAllowedHere = () =>
  !META_EXCLUDED_PATHS.some((pattern) => pattern.test(window.location.pathname));

const sendMetaEvent = (eventName: "PageView" | "Lead") => {
  if (!META_PIXEL_ID || !window.fbq || !metaAllowedHere()) return;
  // No parameters on purpose: nothing about the visitor's loan, finances or
  // form answers is sent to Meta.
  window.fbq("track", eventName);
};

const addScript = (src: string, id: string) => {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const pagePath = () => `${window.location.pathname}${window.location.search}`;

const sendPageView = () => {
  sendMetaEvent("PageView");
  if (!GA_ID || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: pagePath(),
    page_title: document.title,
  });
};

export const trackEvent = (
  eventName: string,
  parameters: AnalyticsParameters = {},
) => {
  if (GA_ID && window.gtag) {
    window.gtag("event", eventName, parameters);
  }

  if (CLARITY_ID && window.clarity) {
    window.clarity("event", eventName);
  }

  if (eventName === "generate_lead") {
    sendMetaEvent("Lead");
  }
};

const trackNavigation = () => {
  let previousPath = pagePath();

  const onRouteChange = () => {
    const nextPath = pagePath();
    if (nextPath === previousPath) return;
    previousPath = nextPath;
    window.setTimeout(sendPageView, 0);
  };

  const wrapHistoryMethod = (method: "pushState" | "replaceState") => {
    const original = window.history[method];
    window.history[method] = function (...args) {
      const result = original.apply(this, args);
      onRouteChange();
      return result;
    };
  };

  wrapHistoryMethod("pushState");
  wrapHistoryMethod("replaceState");
  window.addEventListener("popstate", onRouteChange);
};

const trackMeaningfulClicks = () => {
  document.addEventListener("click", (event) => {
    const target = event.target as Element | null;
    const link = target?.closest("a");
    const button = target?.closest("button");

    if (link) {
      const rawHref = link.getAttribute("href") ?? "";
      const label = link.textContent?.trim().slice(0, 80) || "Unlabeled link";

      if (rawHref.includes("my1003app.com")) {
        trackEvent("generate_lead", {
          lead_type: "mortgage_application",
          link_text: label,
        });
        return;
      }

      if (rawHref.includes("calendly.com")) {
        trackEvent("generate_lead", {
          lead_type: "strategy_call",
          link_text: label,
        });
        return;
      }

      if (rawHref.startsWith("tel:")) {
        trackEvent("generate_lead", { lead_type: "phone_call" });
        return;
      }

      if (rawHref.startsWith("mailto:")) {
        trackEvent("generate_lead", { lead_type: "email" });
        return;
      }

      if (/^\/(guide|playbook)(\/|$)/.test(rawHref)) {
        trackEvent("select_content", {
          content_type: "homebuyer_resource",
          item_id: rawHref.split(/[?#]/)[0],
        });
      }
    }

    if (
      button &&
      window.location.pathname.startsWith("/calculators/") &&
      /calculate|compare|estimate|update|plan|results?/i.test(
        button.textContent ?? "",
      )
    ) {
      trackEvent("calculator_complete", {
        calculator_path: window.location.pathname,
      });
    }
  });
};

const initializeGoogleAnalytics = () => {
  if (!GA_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    send_page_view: false,
    allow_google_signals: false,
  });
  addScript(
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`,
    "google-analytics",
  );
  sendPageView();
};

const initializeClarity = () => {
  if (!CLARITY_ID) return;

  window.clarity =
    window.clarity ||
    ((...args: unknown[]) => {
      const clarityQueue = window.clarity as typeof window.clarity & {
        q?: unknown[][];
      };
      clarityQueue.q = clarityQueue.q || [];
      clarityQueue.q.push(args);
    });

  addScript(
    `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_ID)}`,
    "microsoft-clarity",
  );
};

const initializeMetaPixel = () => {
  if (!META_PIXEL_ID || window.fbq) return;

  const fbq: MetaPixelFunction = (...args: unknown[]) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue?.push(args);
    }
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  // Turn off Meta's automatic form and button scraping so it can't pick up
  // what visitors type into loan forms.
  fbq("set", "autoConfig", false, META_PIXEL_ID);
  fbq("init", META_PIXEL_ID);
  addScript("https://connect.facebook.net/en_US/fbevents.js", "meta-pixel");
};

export const initializeAnalytics = () => {
  if (
    typeof window === "undefined" ||
    !PRODUCTION_HOSTNAMES.has(window.location.hostname)
  ) {
    return;
  }

  initializeMetaPixel();
  initializeGoogleAnalytics();
  initializeClarity();
  trackNavigation();
  trackMeaningfulClicks();
};

