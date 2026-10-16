import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { initializeAnalytics } from './lib/analytics';

const rootElement = document.getElementById('root')!;

initializeAnalytics();

const app = (
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);

// Pages are prerendered at build time (scripts/prerender.mjs). Hydrate that HTML
// when it is there; fall back to a normal client render in dev.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
