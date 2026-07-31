import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { initializeAnalytics } from './lib/analytics';

const rootElement = document.getElementById('root')!;

initializeAnalytics();

createRoot(rootElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);
