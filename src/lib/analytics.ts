type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim();

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

export const initializeAnalytics = () => {
  if (typeof window === "undefined") return;

  initializeGoogleAnalytics();
  initializeClarity();
  trackNavigation();
  trackMeaningfulClicks();
};

