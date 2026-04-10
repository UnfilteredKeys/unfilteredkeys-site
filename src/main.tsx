import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <HelmetProvider><React.StrictMode><App /></React.StrictMode></HelmetProvider>);
} else {
  createRoot(rootElement).render(<HelmetProvider><React.StrictMode><App /></React.StrictMode></HelmetProvider>);
}
