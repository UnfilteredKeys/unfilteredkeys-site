import { useEffect } from 'react';
import DownPaymentSection from '@/components/DownPaymentSection';
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { seoMeta } from "@/lib/seoData";

const pageStyles = `
/* ═══════════════════════════════════════════
   DESIGN SYSTEM — LIGHT THEME
   Background: warm ivory | Text: deep slate | Accent: copper/amber
   ═══════════════════════════════════════════ */
:root {
  /* Backgrounds — Light, warm, never harsh white */
  --bg-base:        #faf8f4;   /* warm ivory — main page bg */
  --bg-white:       #ffffff;   /* pure white — cards */
  --bg-soft:        #f2efe9;   /* slightly darker ivory — alt sections */
  --bg-hero:        #1a2535;   /* ONLY dark surface — hero. Intentional, brief */
  --bg-footer:      #1e2b3a;

  /* Text — Maximum readability */
  --text-primary:   #1c2630;   /* near-black with warm undertone — never pure #000 */
  --text-secondary: #4a5568;   /* medium gray — body copy */
  --text-muted:     #8898aa;   /* light gray — captions, labels */
  --text-on-dark:   #f0ede6;

  /* Brand Accents */
  --copper:         #b5621e;   /* warm copper — primary accent */
  --copper-light:   #fef0e6;   /* copper tint — backgrounds */
  --copper-dark:    #8f4a14;
  --navy:           #1a3a5c;   /* deep navy — secondary accent */
  --navy-light:     #eaf0f8;
  --teal:           #0d6b5e;
  --teal-light:     #e6f5f2;
  --amber:          #d4820a;

  /* Semantic */
  --success:        #1a7a4a;
  --success-bg:     #e8f5ee;
  --warning:        #d4820a;
  --warning-bg:     #fef6e4;

  /* Structure */
  --border:         #ddd8cf;
  --border-light:   #ece8e0;
  --radius:         10px;
  --radius-sm:      6px;
  --shadow-sm:      0 1px 4px rgba(28,38,48,0.07);
  --shadow:         0 2px 16px rgba(28,38,48,0.09);
  --shadow-lg:      0 8px 40px rgba(28,38,48,0.12);

  /* Type */
  --font-display:   'Lora', Georgia, serif;
  --font-body:      'Outfit', sans-serif;
  --font-mono:      'Fira Mono', monospace;
}

/* ─── RESET ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg-base);
  color: var(--text-primary);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }

/* ─── UTILITY ─── */
.container { max-width: 1120px; margin: 0 auto; padding: 0 28px; }
.text-copper { color: var(--copper); }
.text-navy { color: var(--navy); }
.mono { font-family: var(--font-mono); }

/* ─── ACCESSIBILITY: high-contrast focus ─── */
:focus-visible { outline: 3px solid var(--copper); outline-offset: 3px; }

/* ═══════════════════════════════════════════
   UTILITY BAR — Very top, compliance info
   ═══════════════════════════════════════════ */
.utility-bar {
  background: var(--navy);
  color: rgba(255,255,255,0.75);
  font-size: 12px;
  padding: 7px 0;
  font-family: var(--font-mono);
  letter-spacing: 0.3px;
}
.utility-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}
.utility-bar a { color: rgba(255,255,255,0.85); transition: color 0.2s; }
.utility-bar a:hover { color: #fff; }
.util-left, .util-right { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
.util-divider { color: rgba(255,255,255,0.2); }

/* ═══════════════════════════════════════════
   STICKY NAV
   ═══════════════════════════════════════════ */
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-white);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 16px;
}
.nav-logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.nav-logo .brand {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}
.nav-logo .tagline {
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: var(--font-mono);
}
.nav-links {
  display: flex;
  gap: 6px;
  align-items: center;
  list-style: none;
}
.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
  white-space: nowrap;
}
.nav-links a:hover { background: var(--bg-soft); color: var(--text-primary); }
.nav-phone {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 16px;
  color: var(--copper);
  white-space: nowrap;
}
.nav-phone svg { flex-shrink: 0; }
.nav-cta {
  background: var(--copper);
  color: #fff;
  font-size: 13.5px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  transition: background 0.2s, transform 0.15s;
  border: none;
  cursor: pointer;
}
.nav-cta:hover { background: var(--copper-dark); transform: translateY(-1px); }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 6px;
  border: none;
  background: none;
}
.hamburger span { width: 22px; height: 2px; background: var(--text-primary); border-radius: 2px; transition: 0.3s; }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .nav-phone span { display: none; }
}

/* ═══════════════════════════════════════════
   HERO — intentionally deep navy
   The ONLY dark section. Brief, striking, purposeful.
   ═══════════════════════════════════════════ */
.hero {
  background: var(--bg-hero);
  position: relative;
  overflow: hidden;
  padding: 76px 0 64px;
}
/* Subtle grain texture overlay */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
}
/* Warm gradient accent — top right */
.hero::after {
  content: '';
  position: absolute;
  top: -80px;
  right: -60px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(181,98,30,0.18) 0%, transparent 70%);
  pointer-events: none;
}
.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 48px;
  align-items: center;
}
@media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; } }

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(181,98,30,0.15);
  border: 1px solid rgba(181,98,30,0.3);
  color: #e8b47d;
  font-size: 11px;
  font-family: var(--font-mono);
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 4px;
  margin-bottom: 20px;
}
.hero-eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #e8b47d; }

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(30px, 4.5vw, 52px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-on-dark);
  letter-spacing: -0.5px;
  margin-bottom: 18px;
}
.hero h1 em {
  font-style: italic;
  color: #e8b47d;
}
.hero-sub {
  font-size: 17px;
  color: rgba(240,237,230,0.72);
  line-height: 1.65;
  max-width: 520px;
  margin-bottom: 32px;
}
.hero-sub strong { color: rgba(240,237,230,0.95); font-weight: 600; }

/* CTA PAIR */
.cta-pair {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.btn-primary {
  background: var(--copper);
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.2px;
}
.btn-primary:hover { background: var(--copper-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(181,98,30,0.35); }
.btn-outline {
  background: transparent;
  color: var(--text-on-dark);
  font-weight: 600;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  border: 1.5px solid rgba(240,237,230,0.3);
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-outline:hover { border-color: rgba(240,237,230,0.7); background: rgba(255,255,255,0.06); }

/* HERO TRUST ROW */
.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: rgba(240,237,230,0.65);
}
.trust-item svg { color: #e8b47d; flex-shrink: 0; }
.trust-divider { color: rgba(255,255,255,0.15); }

/* RATE CARD */
.rate-card {
  background: var(--bg-white);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow-lg);
  position: relative;
}
.rate-card-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.rate-card-label::after {
  content: 'Updated Weekly';
  background: var(--success-bg);
  color: var(--success);
  padding: 2px 7px;
  border-radius: 3px;
  font-size: 9px;
  letter-spacing: 1px;
}
.rate-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 0;
  border-bottom: 1px solid var(--border-light);
}
.rate-row:last-of-type { border-bottom: none; }
.rate-name { font-size: 13.5px; font-weight: 500; color: var(--text-secondary); }
.rate-val {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 500;
  color: var(--navy);
}
.rate-note { font-size: 11px; color: var(--text-muted); }
.rate-card-cta {
  margin-top: 18px;
  width: 100%;
  background: var(--navy);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  padding: 12px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
  display: block;
}
.rate-card-cta:hover { background: #152e4a; }
.rate-disclaimer {
  font-size: 10px;
  color: var(--text-muted);
  margin-top: 10px;
  line-height: 1.5;
  text-align: center;
}

/* ═══════════════════════════════════════════
   STATS BAR
   ═══════════════════════════════════════════ */
.stats-bar {
  background: var(--copper);
  padding: 20px 0;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
@media (max-width: 680px) { .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px 0; } }
.stat-block {
  text-align: center;
  padding: 0 20px;
  border-right: 1px solid rgba(255,255,255,0.2);
}
.stat-block:last-child { border-right: none; }
.stat-number {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin-bottom: 4px;
}
.stat-label-b {
  font-size: 12px;
  color: rgba(255,255,255,0.78);
  font-weight: 500;
  line-height: 1.3;
}

/* ═══════════════════════════════════════════
   SECTION WRAPPER
   ═══════════════════════════════════════════ */
.section { padding: 72px 0; }
.section-alt { background: var(--bg-soft); }
.section-white { background: var(--bg-white); }

.section-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--copper);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-tag::before { content: '—'; color: var(--border); }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 3.5vw, 38px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.3px;
  color: var(--text-primary);
  margin-bottom: 14px;
}
.section-sub {
  font-size: 17px;
  color: var(--text-secondary);
  max-width: 580px;
  line-height: 1.65;
}

/* ═══════════════════════════════════════════
   LOAN PROGRAMS GRID
   ═══════════════════════════════════════════ */
.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 18px;
  margin-top: 40px;
}
.program-card {
  background: var(--bg-white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  transition: all 0.25s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.program-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--card-accent, var(--copper));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}
.program-card:hover { border-color: var(--card-accent, var(--copper)); box-shadow: var(--shadow); transform: translateY(-3px); }
.program-card:hover::before { transform: scaleX(1); }
.program-card.va { --card-accent: var(--copper); }
.program-card.fha { --card-accent: var(--teal); }
.program-card.conv { --card-accent: var(--navy); }
.program-card.jumbo { --card-accent: #7c3aed; }
.program-card.usda { --card-accent: var(--success); }
.program-card.refi { --card-accent: var(--amber); }

/* ── NON-QM PROGRAM CARDS ── */
.program-card.dscr   { --card-accent: #7c3aed; }
.program-card.bankst { --card-accent: #b5621e; }
.program-card.asset  { --card-accent: #0e7490; }
.program-card.nonqm  { --card-accent: #1a3a5c; }
.program-card.itin   { --card-accent: #0d6b5e; }
.program-card.foreign{ --card-accent: #d4820a; }

.program-card.dscr   .prog-icon { background: #f5f0ff; }
.program-card.bankst .prog-icon { background: var(--copper-light); }
.program-card.asset  .prog-icon { background: #e0f2fe; }
.program-card.nonqm  .prog-icon { background: var(--navy-light); }
.program-card.itin   .prog-icon { background: var(--teal-light); }
.program-card.foreign .prog-icon { background: var(--warning-bg); }

.program-card.dscr   .prog-badge { background: #f5f0ff; color: #7c3aed; }
.program-card.bankst .prog-badge { background: var(--copper-light); color: var(--copper-dark); }
.program-card.asset  .prog-badge { background: #e0f2fe; color: #0e7490; }
.program-card.nonqm  .prog-badge { background: var(--navy-light); color: var(--navy); }
.program-card.itin   .prog-badge { background: var(--teal-light); color: var(--teal); }
.program-card.foreign .prog-badge { background: var(--warning-bg); color: var(--amber); }

/* Non-QM section — dark editorial */
.section-nonqm {
  background: #12202e;
  position: relative;
  overflow: hidden;
}
.section-nonqm::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 10% 30%, rgba(124,58,237,0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 70%, rgba(181,98,30,0.1) 0%, transparent 50%);
  pointer-events: none;
}
.section-nonqm .section-tag { color: #e8b47d; }
.section-nonqm .section-tag::before { color: rgba(255,255,255,0.12); }
.section-nonqm .section-title { color: #f0ede6; }
.section-nonqm .section-sub { color: rgba(240,237,230,0.65); }
.section-nonqm .program-card {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.09);
  backdrop-filter: blur(4px);
}
.section-nonqm .program-card:hover {
  background: rgba(255,255,255,0.09);
  border-color: var(--card-accent, rgba(181,98,30,0.5));
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
.section-nonqm .prog-title { color: #f0ede6; }
.section-nonqm .prog-desc  { color: rgba(240,237,230,0.62); }

/* Non-QM disclaimer band */
.nonqm-disclaimer {
  margin-top: 36px;
  padding: 18px 24px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: 3px solid rgba(181,98,30,0.5);
  border-radius: var(--radius-sm);
  font-size: 12.5px;
  color: rgba(240,237,230,0.45);
  line-height: 1.7;
}
.nonqm-disclaimer strong { color: rgba(240,237,230,0.65); }

/* Programs grid — two columns of category */
.programs-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 0;
}
@media (max-width: 860px) { .programs-two-col { grid-template-columns: 1fr; gap: 36px; } }

.prog-category-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--copper);
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.section-nonqm .prog-category-label {
  color: rgba(232,180,125,0.7);
  border-color: rgba(255,255,255,0.08);
}


.prog-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 14px;
  background: var(--icon-bg, var(--copper-light));
}
.program-card.va .prog-icon { background: var(--copper-light); }
.program-card.fha .prog-icon { background: var(--teal-light); }
.program-card.conv .prog-icon { background: var(--navy-light); }
.program-card.jumbo .prog-icon { background: #f5f0ff; }
.program-card.usda .prog-icon { background: var(--success-bg); }
.program-card.refi .prog-icon { background: var(--warning-bg); }

.prog-title { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
.prog-desc { font-size: 13.5px; color: var(--text-secondary); line-height: 1.55; margin-bottom: 14px; }
.prog-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 4px;
  background: var(--copper-light);
  color: var(--copper-dark);
}
.program-card.fha .prog-badge { background: var(--teal-light); color: var(--teal); }
.program-card.conv .prog-badge { background: var(--navy-light); color: var(--navy); }
.program-card.jumbo .prog-badge { background: #f5f0ff; color: #7c3aed; }
.program-card.usda .prog-badge { background: var(--success-bg); color: var(--success); }


.program-card.refi .prog-badge { background: var(--warning-bg); color: var(--amber); }

/* ═══════════════════════════════════════════
   CITY CARDS
   ═══════════════════════════════════════════ */
.cities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 14px;
  margin-top: 40px;
}
.city-card {
  background: var(--bg-white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 20px;
  transition: all 0.25s;
  cursor: pointer;
  text-decoration: none;
  display: block;
}
.city-card:hover { border-color: var(--copper); box-shadow: var(--shadow); transform: translateY(-2px); }
.city-card-flag {
  font-size: 22px;
  margin-bottom: 10px;
}
.city-card-name {
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 3px;
  color: var(--text-primary);
}
.city-card-price {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 500;
  color: var(--copper);
  margin-bottom: 4px;
}
.city-card-note {
  font-size: 11.5px;
  color: var(--text-muted);
  line-height: 1.45;
}
.city-card-tag {
  display: inline-block;
  margin-top: 10px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 3px;
  background: var(--copper-light);
  color: var(--copper-dark);
}
.city-card.military .city-card-tag { background: #fff5f0; color: #7b2d00; }
.city-card.tech .city-card-tag { background: var(--navy-light); color: var(--navy); }
.city-card.growth .city-card-tag { background: #f5f0ff; color: #5c2d8e; }
.city-card.medical .city-card-tag { background: var(--teal-light); color: var(--teal); }

/* ═══════════════════════════════════════════
   HOW IT WORKS — 3 Steps
   ═══════════════════════════════════════════ */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: 48px;
  background: var(--bg-white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
@media (max-width: 680px) { .steps-grid { grid-template-columns: 1fr; } }
.step {
  padding: 36px 30px;
  border-top: 3px solid #b5621e;
  border-right: 1px solid var(--border);
  position: relative;
}
.step:last-child { border-right: none; }
.step-number {
  font-family: var(--font-display);
  font-size: 52px;
  font-weight: 700;
  color: var(--border);
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: -2px;
}
.step-icon { font-size: 28px; margin-bottom: 14px; }
.step-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.step-body { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
.step-time {
  display: inline-block;
  margin-top: 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--copper);
  background: var(--copper-light);
  padding: 3px 9px;
  border-radius: 3px;
  letter-spacing: 0.5px;
}

/* ═══════════════════════════════════════════
   WHY UNFILTERED KEYS — Differentiators
   ═══════════════════════════════════════════ */
.diff-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 40px;
}
@media (max-width: 640px) { .diff-grid { grid-template-columns: 1fr; } }
.diff-item {
  background: var(--bg-white);
  border: none;
  border-left: 3px solid #b5621e;
  border-radius: 0;
  padding: 22px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: box-shadow 0.2s;
}
.diff-item:hover { box-shadow: var(--shadow); }
.diff-icon-wrap { display: none; }
.diff-title { font-size: 16px; font-weight: 700; margin-bottom: 5px; font-family: 'Lora', Georgia, serif; }
.diff-body { font-size: 13.5px; color: var(--text-secondary); line-height: 1.55; }

/* ═══════════════════════════════════════════
   TEXAS DPA CALLOUT
   ═══════════════════════════════════════════ */

/* ── DPA credit score badge ── */
.dpa-score-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-style: normal;
  letter-spacing: 0.8px;
  background: rgba(232,180,125,0.18);
  color: #e8b47d;
  border: 1px solid rgba(232,180,125,0.3);
  border-radius: 3px;
  padding: 2px 7px;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: 4px;
}

.dpa-band {
  background: var(--navy);
  padding: 52px 0;
  color: var(--text-on-dark);
}
.dpa-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
}
@media (max-width: 680px) { .dpa-inner { grid-template-columns: 1fr; } }
.dpa-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(232,180,125,0.8);
  margin-bottom: 8px;
  text-transform: uppercase;
}
.dpa-title {
  font-family: var(--font-display);
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.15;
}
.dpa-title span { color: #e8b47d; }
.dpa-list { list-style: none; padding: 0; }
.dpa-list li {
  font-size: 14.5px;
  color: rgba(240,237,230,0.78);
  padding: 6px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;
}
.dpa-list li::before { content: '→'; color: #e8b47d; flex-shrink: 0; margin-top: 1px; }
.dpa-cta-wrap { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
@media (max-width: 680px) { .dpa-cta-wrap { flex-direction: row; flex-wrap: wrap; } }
.btn-copper-outline {
  background: transparent;
  color: #e8b47d;
  border: 1.5px solid rgba(232,180,125,0.5);
  font-size: 14px;
  font-weight: 600;
  padding: 12px 22px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-copper-outline:hover { border-color: #e8b47d; background: rgba(232,180,125,0.08); }
.btn-white-solid {
  background: #fff;
  color: var(--navy);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  white-space: nowrap;
}
.btn-white-solid:hover { background: var(--text-on-dark); transform: translateY(-1px); }

/* ═══════════════════════════════════════════
   REVIEWS SECTION
   ═══════════════════════════════════════════ */
.reviews-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 36px;
  flex-wrap: wrap;
  gap: 16px;
}
.reviews-aggregate {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--bg-white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 20px;
  box-shadow: var(--shadow-sm);
}
.agg-score {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}
.agg-stars { color: #f4a117; font-size: 18px; letter-spacing: 1px; }
.agg-count { font-size: 12px; color: var(--text-muted); }
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 18px;
}
.review-card {
  background: var(--bg-white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s;
}
.review-card:hover { box-shadow: var(--shadow); }
.review-stars { color: #f4a117; font-size: 15px; margin-bottom: 10px; letter-spacing: 1px; }
.review-text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 16px;
  font-style: italic;
}
.review-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid var(--border-light);
}
.review-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--copper-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: var(--copper-dark);
  flex-shrink: 0;
}
.review-name { font-weight: 600; font-size: 13.5px; }
.review-city { font-size: 12px; color: var(--text-muted); }
.review-badge {
  margin-left: auto;
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 3px;
  background: var(--copper-light);
  color: var(--copper-dark);
  font-weight: 600;
}
.review-badge.va { background: #fff5f0; color: #7b2d00; }
.review-badge.conv { background: var(--navy-light); color: var(--navy); }
.reviews-placeholder {
  background: var(--bg-soft);
  border: 1.5px dashed var(--border);
  border-radius: var(--radius);
  padding: 28px;
  text-align: center;
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
}
.reviews-placeholder strong { color: var(--copper); display: block; margin-bottom: 4px; }

/* ═══════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════ */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 40px;
}
@media (max-width: 680px) { .faq-grid { grid-template-columns: 1fr; } }
details {
  background: var(--bg-white);
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow 0.2s;
}
details:hover { box-shadow: var(--shadow-sm); }
details[open] { border-color: var(--copper); box-shadow: var(--shadow-sm); }
summary {
  padding: 18px 20px;
  font-weight: 600;
  font-size: 14.5px;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  line-height: 1.4;
  color: var(--text-primary);
  user-select: none;
}
summary::-webkit-details-marker { display: none; }
summary::after {
  content: '+';
  font-size: 20px;
  font-weight: 300;
  color: var(--copper);
  flex-shrink: 0;
  transition: transform 0.2s;
}
details[open] summary::after { content: '−'; }
.faq-answer {
  padding: 0 20px 18px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  border-top: 1px solid var(--border-light);
  padding-top: 14px;
}

/* ═══════════════════════════════════════════
   LEAD MAGNET CTA BAND
   ═══════════════════════════════════════════ */
.lm-band {
  background: linear-gradient(135deg, var(--bg-soft) 0%, var(--copper-light) 100%);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 60px 0;
}
.lm-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}
@media (max-width: 640px) { .lm-inner { grid-template-columns: 1fr; } }
.lm-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--copper);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.lm-title {
  font-family: var(--font-display);
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.2;
}
.lm-sub { font-size: 15px; color: var(--text-secondary); line-height: 1.6; }
.lm-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 280px;
}
.lm-form input {
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-primary);
  background: var(--bg-white);
  transition: border-color 0.2s;
  outline: none;
}
.lm-form input:focus { border-color: var(--copper); }
.lm-form input::placeholder { color: var(--text-muted); }
.lm-form .lm-submit {
  background: var(--copper);
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 13px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.lm-form .lm-submit:hover { background: var(--copper-dark); }
.lm-microcopy {
  font-size: 11px;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.5;
}




/* ═══════════════════════════════════════════
   MOBILE STICKY BAR
   ═══════════════════════════════════════════ */
.mobile-cta-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: var(--bg-white);
  border-top: 1px solid var(--border);
  padding: 10px 16px;
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
}
@media (max-width: 640px) { .mobile-cta-bar { display: grid; } }
.mob-btn {
  border-radius: var(--radius-sm);
  padding: 11px 6px;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  transition: opacity 0.15s;
}
.mob-btn:active { opacity: 0.8; }
.mob-btn span { font-size: 18px; }
.mob-btn.call { background: var(--copper); color: #fff; }
.mob-btn.apply { background: var(--navy); color: #fff; }
.mob-btn.text { background: var(--bg-soft); color: var(--text-primary); border: 1px solid var(--border); }

/* ═══════════════════════════════════════════
   PAGE LOAD ANIMATIONS
   ═══════════════════════════════════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.anim { opacity: 0; animation: fadeUp 0.55s ease forwards; }
.anim-1 { animation-delay: 0.1s; }
.anim-2 { animation-delay: 0.22s; }
.anim-3 { animation-delay: 0.34s; }
.anim-4 { animation-delay: 0.46s; }
.anim-5 { animation-delay: 0.58s; }

/* ═══════════════════════════════════════════
   EDITORIAL SECTION THEMES
   Each section has its own visual personality.
   ═══════════════════════════════════════════ */

/* ── Warm Parchment — editorial, readable, distinct from white ── */
.section-parchment { background: #fdf9f3; }

/* ── Warm Cream — soft, inviting, different from parchment ── */
.section-cream { background: #f4efe5; }

/* ── Free Resources Section ── */
.section-resources {
  background: #162030;
  position: relative;
}
.section-resources::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 50%, rgba(181,98,30,0.06) 0%, transparent 60%);
  pointer-events: none;
}
.section-resources .section-tag { color: #e8b47d; }
.section-resources .section-tag::before { color: rgba(255,255,255,0.15); }
.section-resources .section-title { color: #f0ede6; }
.section-resources .section-sub { color: rgba(240,237,230,0.6); }

.resources-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
}
@media (max-width: 700px) { .resources-grid { grid-template-columns: 1fr; } }

.resource-card {
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 32px;
  transition: all 0.25s;
}
.resource-card:hover {
  border-color: rgba(181,98,30,0.4);
  background: rgba(255,255,255,0.06);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
.resource-card-audience {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e8b47d;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.resource-card-audience::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e8b47d;
}
.resource-card h3 {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: #f0ede6;
  line-height: 1.25;
  margin-bottom: 12px;
}
.resource-card p {
  font-size: 15px;
  color: rgba(240,237,230,0.55);
  line-height: 1.6;
  margin-bottom: 24px;
}
.resource-card .btn-primary {
  font-size: 14px;
  padding: 12px 22px;
}

/* ── Deep Slate — dark editorial, map-room authority ── */
.section-slate {
  background: #1b2d40;
  position: relative;
}
.section-slate::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 80% 50%, rgba(181,98,30,0.08) 0%, transparent 60%);
  pointer-events: none;
}

/* ── Deep Forest — authoritative, premium, serious ── */
.section-forest {
  background: #1a3a5c;
  position: relative;
}
.section-forest::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 60%, rgba(13,107,94,0.25) 0%, transparent 55%);
  pointer-events: none;
}

/* ── Dark Charcoal — contrast band, dramatic ── */
.section-charcoal {
  background: #1a2535;
  position: relative;
}
.section-charcoal::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 40%, rgba(181,98,30,0.12) 0%, transparent 60%);
  pointer-events: none;
}

/* ── Dark section typography overrides ── */
.section-slate .section-tag,
.section-forest .section-tag,
.section-charcoal .section-tag {
  color: #e8b47d;
}
.section-slate .section-tag::before,
.section-forest .section-tag::before,
.section-charcoal .section-tag::before {
  color: rgba(255,255,255,0.15);
}
.section-slate .section-title,
.section-forest .section-title,
.section-charcoal .section-title {
  color: #f0ede6;
}
.section-slate .section-sub,
.section-forest .section-sub,
.section-charcoal .section-sub {
  color: rgba(240,237,230,0.68);
}

/* ── City cards on dark slate ── */
.section-slate .city-card {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.1);
  backdrop-filter: blur(2px);
  transition: all 0.25s;
}
.section-slate .city-card:hover {
  background: rgba(255,255,255,0.09);
  border-color: rgba(181,98,30,0.6);
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.25);
}
.section-slate .city-card-name { color: #f0ede6; }
.section-slate .city-card-price { color: #e8b47d; }
.section-slate .city-card-note { color: rgba(240,237,230,0.5); }
.section-slate .city-card-flag { filter: drop-shadow(0 0 6px rgba(255,255,255,0.2)); }
.section-slate .city-card-tag {
  background: rgba(181,98,30,0.2);
  color: #e8b47d;
  border: 1px solid rgba(181,98,30,0.3);
}
.section-slate .city-card.military .city-card-tag {
  background: rgba(181,98,30,0.2);
  color: #e8b47d;
  border-color: rgba(181,98,30,0.3);
}
.section-slate .city-card.tech .city-card-tag {
  background: rgba(26,58,92,0.4);
  color: #8ab4d4;
  border-color: rgba(138,180,212,0.25);
}
.section-slate .city-card.growth .city-card-tag {
  background: rgba(124,58,237,0.2);
  color: #c4a8ff;
  border-color: rgba(196,168,255,0.25);
}
.section-slate .city-card.medical .city-card-tag {
  background: rgba(13,107,94,0.25);
  color: #6ecbbf;
  border-color: rgba(110,203,191,0.25);
}

/* ── Diff cards on deep forest ── */
.section-forest .diff-item {
  background: rgba(255,255,255,0.055);
  border-color: rgba(255,255,255,0.1);
  transition: all 0.25s;
}
.section-forest .diff-item:hover {
  background: rgba(255,255,255,0.09);
  box-shadow: 0 6px 24px rgba(0,0,0,0.2);
  border-color: rgba(232,180,125,0.3);
}
.section-forest .diff-title { color: #f0ede6; }
.section-forest .diff-body { color: rgba(240,237,230,0.65); }
.section-forest .diff-icon-wrap {
  background: rgba(181,98,30,0.2);
  border: 1px solid rgba(232,180,125,0.2);
}

/* ── How It Works steps on parchment ── */
.section-parchment .steps-grid {
  background: #fff;
  border-color: #e5dfd5;
}
.section-parchment .step {
  border-color: #e5dfd5;
}
.section-parchment .step-number { color: #e5dfd5; }



/* ── Lead magnet band — dark charcoal ── */
.lm-band-dark {
  background: #1a2535;
  padding: 64px 0;
  position: relative;
  overflow: hidden;
}
.lm-band-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 15% 50%, rgba(181,98,30,0.15) 0%, transparent 55%),
              radial-gradient(ellipse at 85% 50%, rgba(13,107,94,0.1) 0%, transparent 55%);
  pointer-events: none;
}
.lm-band-dark .lm-tag { color: #e8b47d; }
.lm-band-dark .lm-title { color: #f0ede6; }
.lm-band-dark .lm-sub { color: rgba(240,237,230,0.65); }
.lm-band-dark .lm-form input {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  color: #f0ede6;
}
.lm-band-dark .lm-form input::placeholder { color: rgba(240,237,230,0.4); }
.lm-band-dark .lm-form input:focus { border-color: var(--copper); background: rgba(255,255,255,0.12); }
.lm-band-dark .lm-microcopy { color: rgba(240,237,230,0.4); }

/* ── Final CTA — gradient dark ── */
.section-cta-dark {
  background: linear-gradient(140deg, #12253d 0%, #0c2f29 100%);
  position: relative;
  overflow: hidden;
}
.section-cta-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, rgba(181,98,30,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.section-cta-dark .section-tag { color: #e8b47d; }
.section-cta-dark .section-tag::before { color: rgba(255,255,255,0.15); }
.section-cta-dark h2 { color: #f0ede6; }
.section-cta-dark p { color: rgba(240,237,230,0.68); }
.section-cta-dark .btn-outline {
  color: rgba(240,237,230,0.85);
  border-color: rgba(240,237,230,0.25);
}
.section-cta-dark .btn-outline:hover {
  border-color: rgba(240,237,230,0.6);
  background: rgba(255,255,255,0.06);
}

/* ── FAQ on white — give details a soft bg for contrast ── */
.section-white details {
  background: var(--bg-soft);
  border-color: var(--border);
}
.section-white details[open] {
  background: #fff;
  border-color: var(--copper);
}

/* ── Horizontal rule accent between editorial sections ── */

/* ── Statewide cities grid ── */
.cities-grid-wide {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.city-region-label {
  grid-column: 1 / -1;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(232,180,125,0.55);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 8px;
  margin-top: 12px;
}
.city-region-label:first-child { margin-top: 0; }

/* ── Physician loan card accent ── */
.program-card.phys { --card-accent: #0e7490; }
.program-card.phys .prog-icon { background: #e0f2fe; }
.program-card.phys .prog-badge { background: #e0f2fe; color: #0e7490; }



.section-rule {
  height: 3px;
  background: linear-gradient(90deg, var(--copper) 0%, var(--teal) 50%, var(--navy) 100%);
  border: none;
  margin: 0;
  opacity: 0.6;
}

/* ═══════════════════════════════════════════
   BROKER INTRO SECTION
   ═══════════════════════════════════════════ */
.section-broker {
  background:
    radial-gradient(circle at 18% 48%, rgba(26,58,92,0.08), transparent 34%),
    var(--bg-white);
  position: relative;
  overflow: hidden;
}
.broker-inner {
  display: grid;
  grid-template-columns: minmax(300px, 390px) 1fr;
  gap: 64px;
  align-items: center;
}
@media (max-width: 860px) {
  .broker-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
.broker-photo-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  isolation: isolate;
}
.broker-photo-wrap::before {
  content: '';
  position: absolute;
  inset: 8% 2% 10%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(26,58,92,0.14), rgba(250,248,244,0) 68%);
  filter: blur(10px);
  z-index: -1;
}
.broker-photo {
  width: 100%;
  max-width: 390px;
  aspect-ratio: 4/5;
  object-fit: cover;
  object-position: center top;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 80%, transparent 100%);
}
@media (max-width: 860px) {
  .broker-photo { max-width: 360px; }
}
.broker-photo-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.broker-badge-line {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--text-muted);
  text-transform: uppercase;
}
.broker-bio {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}
.broker-creds {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 28px;
  margin-bottom: 4px;
}
@media (max-width: 560px) { .broker-creds { grid-template-columns: 1fr; } }
.broker-cred {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px;
  background: var(--bg-soft);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
}
.cred-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 1px;
}
.cred-label {
  font-weight: 700;
  font-size: 13.5px;
  color: var(--text-primary);
  margin-bottom: 2px;
}
.cred-note {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.4;
}


/* ── CONSTRUCTION & RENOVATION CARD ACCENTS ── */
.program-card.otc-va     { --card-accent: var(--copper); }
.program-card.otc-fha    { --card-accent: var(--teal); }
.program-card.otc-conv   { --card-accent: var(--navy); }
.program-card.otc-usda   { --card-accent: var(--success); }
.program-card.reno-203k  { --card-accent: var(--teal); }
.program-card.reno-style { --card-accent: #7c3aed; }
.program-card.reno-va    { --card-accent: var(--copper); }
.program-card.reno-conv  { --card-accent: var(--navy); }

.program-card.otc-va   .prog-icon { background: var(--copper-light); }
.program-card.otc-fha  .prog-icon { background: var(--teal-light); }
.program-card.otc-conv .prog-icon { background: var(--navy-light); }
.program-card.otc-usda .prog-icon { background: var(--success-bg); }
.program-card.reno-203k  .prog-icon { background: var(--teal-light); }
.program-card.reno-style .prog-icon { background: #f5f0ff; }
.program-card.reno-va    .prog-icon { background: var(--copper-light); }
.program-card.reno-conv  .prog-icon { background: var(--navy-light); }

.program-card.otc-va   .prog-badge { background: var(--copper-light); color: var(--copper-dark); }
.program-card.otc-fha  .prog-badge { background: var(--teal-light); color: var(--teal); }
.program-card.otc-conv .prog-badge { background: var(--navy-light); color: var(--navy); }
.program-card.otc-usda .prog-badge { background: var(--success-bg); color: var(--success); }
.program-card.reno-203k  .prog-badge { background: var(--teal-light); color: var(--teal); }
.program-card.reno-style .prog-badge { background: #f5f0ff; color: #7c3aed; }
.program-card.reno-va    .prog-badge { background: var(--copper-light); color: var(--copper-dark); }
.program-card.reno-conv  .prog-badge { background: var(--navy-light); color: var(--navy); }

/* ── Construction/Reno section — warm parchment with blueprint feel ── */
.section-construction {
  background: #f5f1ea;
  position: relative;
  overflow: hidden;
}
.section-construction::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(181,98,30,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(181,98,30,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}
.section-construction .section-tag { color: var(--copper); }
.section-construction .prog-category-label {
  color: var(--copper);
  border-color: var(--border);
}

/* ── Construction explainer block ── */
.constr-explainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
}
@media (max-width: 700px) { .constr-explainer { grid-template-columns: 1fr; } }
.constr-explain-card {
  background: #fff;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  border-top: 4px solid var(--copper);
}
.constr-explain-card.reno { border-top-color: var(--navy); }
.constr-explain-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}
.constr-explain-body {
  font-size: 13.5px;
  color: var(--text-secondary);
  line-height: 1.65;
}
.constr-explain-body strong { color: var(--text-primary); }

/* ── Construction programs sub-grid ── */
.constr-programs-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
@media (max-width: 860px) { .constr-programs-wrap { grid-template-columns: 1fr; } }

/* ── How OTC works — timeline strip ── */
.otc-timeline {
  margin-top: 48px;
  background: var(--navy);
  border-radius: var(--radius);
  padding: 32px 36px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}
@media (max-width: 700px) { .otc-timeline { grid-template-columns: 1fr 1fr; gap: 20px; } }
.otc-step {
  text-align: center;
  padding: 0 16px;
  border-right: 1px solid rgba(255,255,255,0.1);
  position: relative;
}
.otc-step:last-child { border-right: none; }
.otc-step-num {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(232,180,125,0.6);
  text-transform: uppercase;
  margin-bottom: 6px;
}
.otc-step-icon { font-size: 24px; margin-bottom: 8px; }
.otc-step-title {
  font-weight: 700;
  font-size: 13px;
  color: #f0ede6;
  margin-bottom: 4px;
  line-height: 1.3;
}
.otc-step-note {
  font-size: 11.5px;
  color: rgba(240,237,230,0.5);
  line-height: 1.45;
}
.otc-timeline-label {
  margin-bottom: 20px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(232,180,125,0.7);
  text-align: center;
  display: block;
}

/* ═══════════════════════════════════════════
   TEXAS MARKETS MAP
   ═══════════════════════════════════════════ */
.tx-map-section {
  background:
    radial-gradient(circle at 50% 42%, rgba(181,98,30,0.10), transparent 38%),
    linear-gradient(180deg, var(--bg-hero) 0%, #1a3a5c 100%);
  padding: 76px 0 84px;
  position: relative;
  overflow: hidden;
}
.tx-map-heading {
  text-align: center;
  font-family: var(--font-display);
  font-size: clamp(26px, 3.5vw, 38px);
  font-weight: 700;
  color: #faf8f4;
  margin-bottom: 8px;
  line-height: 1.15;
}
.tx-map-subheading {
  text-align: center;
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(250,248,244,0.68);
  margin: 0 auto 40px;
  max-width: 620px;
}
.tx-map-wrap {
  max-width: 680px;
  margin: 0 auto;
  position: relative;
}
.tx-map-svg {
  width: 100%;
  height: auto;
  display: block;
}
.tx-map-svg .tx-outline {
  fill: rgba(250,248,244,0.035);
  stroke: rgba(232,180,125,0.82);
  stroke-width: 2.2;
  stroke-linejoin: round;
}
.tx-map-svg .tx-dot-current {
  fill: #b5621e;
  cursor: pointer;
  transition: r 0.2s;
}
.tx-map-svg .tx-dot-expansion {
  fill: none;
  stroke: #b5621e;
  stroke-width: 1.8;
  stroke-dasharray: 3 2;
  cursor: pointer;
  transition: r 0.2s;
}
.tx-map-svg .tx-city-label {
  font-family: var(--font-body);
  font-size: 9px;
  fill: #faf8f4;
  pointer-events: none;
}
.tx-map-tooltip {
  position: absolute;
  background: #1a3a5c;
  color: #faf8f4;
  border-radius: 8px;
  padding: 10px 14px;
  pointer-events: none;
  z-index: 50;
  min-width: 200px;
  max-width: 280px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  border: 1px solid rgba(181,98,30,0.3);
  opacity: 0;
  transition: opacity 0.15s;
}
.tx-map-tooltip.visible { opacity: 1; }
.tx-map-tooltip-name {
  color: #e8a46a;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 4px;
}
.tx-map-tooltip-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 3px;
  margin-bottom: 6px;
}
.tx-map-tooltip-badge.current {
  background: rgba(181,98,30,0.25);
  color: #e8a46a;
}
.tx-map-tooltip-badge.expansion {
  background: rgba(255,255,255,0.1);
  color: rgba(250,248,244,0.6);
}
.tx-map-tooltip-category {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(250,248,244,0.5);
  margin-bottom: 6px;
}
.tx-map-tooltip-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tx-map-tooltip-list li {
  font-size: 11.5px;
  color: rgba(250,248,244,0.75);
  padding: 2px 0;
  line-height: 1.4;
}
.tx-map-tooltip-list li::before {
  content: '•';
  color: #b5621e;
  margin-right: 6px;
}
.tx-map-legend {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 28px;
}
.tx-map-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: rgba(250,248,244,0.55);
}
.tx-legend-dot-solid {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #b5621e;
  flex-shrink: 0;
}
.tx-legend-dot-dashed {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px dashed #b5621e;
  flex-shrink: 0;
}
/* Mobile: hide map, show card grid */
.tx-map-mobile-grid {
  display: none;
}
@media (max-width: 639px) {
  .tx-map-wrap, .tx-map-legend { display: none; }
  .tx-map-mobile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 500px;
    margin: 0 auto;
  }
  .tx-map-mobile-card {
    background: rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .tx-map-mobile-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #b5621e;
    flex-shrink: 0;
  }
  .tx-map-mobile-name {
    font-size: 13px;
    color: #faf8f4;
    font-weight: 500;
  }
}
`;

const pageHTML = `
<!-- ═══════════════════════════════════════════
     SCHEMA — LocalBusiness + FAQPage
     Paste this in your CMS <head> or before </body>
     ═══════════════════════════════════════════ -->



<!-- ═══════════════════════════════════════════
     HERO
     ═══════════════════════════════════════════ -->
<section class="hero" aria-labelledby="hero-heading">
  <div class="container">
    <div class="hero-inner">
      <div>
        <div class="hero-eyebrow anim anim-1">VA Loan Specialist · Texas Mortgage Broker</div>
        <h1 id="hero-heading" class="anim anim-2">
          Your Texas Mortgage,<br>
          <em>Structured Around You.</em>
        </h1>
        <p class="hero-sub anim anim-3">
          Every file starts with your full picture — real payment with Texas
          property taxes included, the right loan product matched to your
          situation, and a pre-approval structured to hold up when it counts.
        </p>
        <div class="cta-pair anim anim-4">
          <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" class="btn-outline">
            📅 Book a Strategy Call
          </a>
          <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Get Pre-Approved
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     TEXAS MARKETS MAP
     ═══════════════════════════════════════════ -->
<section class="tx-map-section" aria-labelledby="tx-map-heading">
  <div class="container">
    <h2 class="tx-map-heading" id="tx-map-heading">Texas Is Not a Side Market. It Is the Market.</h2>
    <p class="tx-map-subheading">Explore six priority markets where local taxes, military moves, medical employment, and neighborhood pricing shape the right mortgage strategy.</p>

    <div class="tx-map-wrap" id="txMapWrap">
      <svg class="tx-map-svg" viewBox="0 0 640 550" xmlns="http://www.w3.org/2000/svg" aria-label="Texas markets map">
        <path class="tx-outline" d="M192,15 H321 V130 L370,128 L430,130 L500,133 L560,136 L591,140 L594,200 L596,295 L584,340 L560,358 L536,370 L510,390 L480,408 L455,428 L433,455 L430,520 L370,468 L340,450 L299,400 L282,368 L240,358 L175,352 L132,348 L90,310 L60,272 L42,242 L42,229 H192 V15 Z"/>

        <!-- PRIORITY TEXAS MARKETS -->
        <circle class="tx-dot-current" cx="452" cy="185" r="6" data-city="dfw"/>
        <text class="tx-city-label" x="462" y="188">Dallas-Fort Worth</text>

        <circle class="tx-dot-current" cx="412" cy="262" r="6" data-city="forthood"/>
        <text class="tx-city-label" x="402" y="265" text-anchor="end">Killeen / Fort Cavazos</text>

        <circle class="tx-dot-current" cx="414" cy="310" r="6" data-city="austin"/>
        <text class="tx-city-label" x="404" y="313" text-anchor="end">Austin</text>

        <circle class="tx-dot-current" cx="514" cy="350" r="6" data-city="houston"/>
        <text class="tx-city-label" x="524" y="353">Houston</text>

        <circle class="tx-dot-current" cx="380" cy="358" r="6" data-city="sanantonio"/>
        <text class="tx-city-label" x="370" y="361" text-anchor="end">San Antonio</text>

        <circle class="tx-dot-current" cx="57" cy="248" r="6" data-city="elpaso"/>
        <text class="tx-city-label" x="67" y="251">El Paso</text>

      </svg>
      <div class="tx-map-tooltip" id="txMapTooltip"></div>
    </div>

    <div class="tx-map-legend">
      <span class="tx-map-legend-item"><span class="tx-legend-dot-solid"></span> Current market</span>
      <span class="tx-map-legend-item"><span class="tx-legend-dot-dashed"></span> Potential expansion</span>
    </div>

    <!-- Mobile fallback -->
    <div class="tx-map-mobile-grid">
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Dallas-Fort Worth</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Killeen / Fort Cavazos</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Temple</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Round Rock</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Austin</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">The Woodlands</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Houston</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">San Antonio</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">El Paso</span></div>
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Corpus Christi</span></div>
    </div>
  </div>
</section>

<!-- ─── STATS BAR ─── -->
<div class="stats-bar" aria-label="Company statistics">
  <div class="container">
    <div class="stats-grid" role="list">
      <div class="stat-block" role="listitem">
        <div class="stat-number">21</div>
        <div class="stat-label-b">Day Average Close</div>
      </div>
      <div class="stat-block" role="listitem">
        <div class="stat-number">20+</div>
        <div class="stat-label-b">Years Experience</div>
      </div>
      <div class="stat-block" role="listitem">
        <div class="stat-number">50+</div>
        <div class="stat-label-b">Lender Network</div>
      </div>
      <div class="stat-block" role="listitem">
        <div class="stat-number">1</div>
        <div class="stat-label-b">Dedicated Loan Advisor</div>
      </div>
    </div>
  </div>
</div>

<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     BROKER INTRO
     ═══════════════════════════════════════════ -->
<section class="section section-broker" aria-labelledby="broker-heading">
  <div class="container">
    <div class="broker-inner">
      <div class="broker-photo-wrap">
        <img
          src="/headshot.jpg" loading="lazy" decoding="async"
          alt="Shalanda Smith, Texas mortgage broker and VA loan specialist"
          class="broker-photo"
          width="340"
          height="340"
        >
        <div class="broker-photo-badge">
          <span class="broker-badge-line">NMLS# 554554</span>
          <span class="broker-badge-line">Licensed · Texas</span>
        </div>
      </div>
      <div class="broker-content">
        <p class="section-tag">Your Broker</p>
        <h2 class="section-title" id="broker-heading">
          Unfiltered Advice.<br>
          <span style="font-style:italic; color:var(--copper); font-family:var(--font-display);">Structured Results.</span>
        </h2>
        <p class="broker-bio">
          Keys by Shalanda was built for buyers who deserve more than a pre-qual number and a pat on the back — because real strategy, honest numbers, and someone actually in your corner when things get complicated shouldn't be optional.
        </p>
        <p class="broker-bio">
          First-time buyers, veterans PCSing to Fort Hood or Fort Bliss, physicians relocating to Houston Medical Center or Baylor Scott &amp; White, relocators landing in Leander and Georgetown, move-up buyers across the state — every client gets a full affordability picture upfront. Not a guess. Not a teaser rate.
        </p>
        <p class="broker-bio" style="font-weight:600; color:var(--text-primary);">
          VA-focused. Texas-based. Trusted when the deal actually has to close.
        </p>
        <div class="cta-pair" style="margin-top:28px; margin-bottom:0;">
          <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" class="btn-primary">Get Pre-Approved →</a>
          <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" class="btn-outline" style="border-color:var(--border); color:var(--text-secondary);">📅 Book a Strategy Call</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     LOAN PROGRAMS
     ═══════════════════════════════════════════ -->
<section class="section section-white" aria-labelledby="programs-heading">
  <div class="container" style="text-align:center; max-width:720px;">
    <p class="section-tag" style="justify-content:center;">Loan Programs</p>
    <h2 class="section-title" id="programs-heading" style="text-align:center;">Every Loan Product Available in Texas</h2>
    <p class="section-sub" style="text-align:center; margin:0 auto 32px;">Agency, non-QM, physician, and beyond — if it exists, we can structure it.</p>
    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-bottom:32px;">
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">VA</span>
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">FHA</span>
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Conventional</span>
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Jumbo</span>
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">USDA</span>
      <span style="background:var(--copper-light); color:var(--copper); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">DSCR</span>
      <span style="background:var(--copper-light); color:var(--copper); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Bank Statement</span>
      <span style="background:var(--copper-light); color:var(--copper); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Asset Depletion</span>
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Physician</span>
      <span style="background:var(--copper-light); color:var(--copper); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">P&amp;L Only</span>
      <span style="background:var(--copper-light); color:var(--copper); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">ITIN</span>
      <span style="background:var(--copper-light); color:var(--copper); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Foreign National</span>
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Down Payment Assistance</span>
      <span style="background:var(--navy-light); color:var(--navy); font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px;">Refinance</span>
    </div>
    <a href="/loan-programs" style="color:var(--copper); font-weight:600; font-size:15px;">Explore all programs →</a>
  </div>
</section>


<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     CONSTRUCTION & RENOVATION LOANS
     ═══════════════════════════════════════════ -->
<section class="section section-parchment" aria-labelledby="constr-heading">
  <div class="container">
    <p class="section-tag">Build It. Buy It. Fix It.</p>
    <h2 class="section-title" id="constr-heading">Building or Renovating? One Loan. One Closing.</h2>
    <p class="section-sub">VA, FHA, USDA, and Conventional One-Time Close construction loans — plus FHA 203(k), HomeStyle, and VA Renovation financing. Lock your rate before the first shovel hits the ground.</p>
    <a href="/loan-programs" style="color:#b5621e; font-size:15px; font-weight:600; text-decoration:none; border-bottom:1px solid rgba(181,98,30,0.4); padding-bottom:2px; margin-top:24px; display:inline-block;">See Construction &amp; Renovation Loans →</a>
  </div>
</section>

<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     FREE RESOURCES
     ═══════════════════════════════════════════ -->
<section class="section section-resources" aria-labelledby="resources-heading">
  <div class="container">
    <p class="section-tag">Free Resources</p>
    <h2 class="section-title" id="resources-heading">Education is part of the strategy.</h2>
    <p class="section-sub">Built for Texas buyers who want to show up ready.</p>

    <div class="resources-grid">
      <a href="/guide" class="resource-card" style="text-decoration:none;">
        <div class="resource-card-audience">Just starting to research</div>
        <h3>The mortgage industry wasn't built to educate you. This guide is.</h3>
        <p>What every Texas buyer should understand before they apply — so you show up informed, not surprised.</p>
        <span class="btn-primary">Get the Free Guide →</span>
      </a>
      <a href="/playbook" class="resource-card" style="text-decoration:none;">
        <div class="resource-card-audience">Serious buyers · 60–90 days out</div>
        <h3>The 90-Day Mortgage Strategy Playbook</h3>
        <p>A week-by-week action plan for the 90 days before you apply — credit, cash, timelines, and exactly what to do.</p>
        <span class="btn-primary">Get the Free Playbook →</span>
      </a>
    </div>
  </div>
</section>

<!-- ─── EDITORIAL RULE ─── -->
<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     CHOOSE YOUR NEXT STEP
     ═══════════════════════════════════════════ -->
<section class="section section-parchment" aria-labelledby="process-heading">
  <div class="container">
    <p class="section-tag">Start Where You Are</p>
    <h2 class="section-title" id="process-heading">Learn. Plan. Apply.</h2>
    <p class="section-sub">You do not have to be ready to apply before you get useful answers. Choose the step that fits where you are today.</p>
    <div class="steps-grid" role="list">
      <div class="step" role="listitem">
        <div class="step-number" aria-hidden="true">01</div>
        <h3 class="step-title">Learn</h3>
        <p class="step-body">Understand the mortgage process, loan options, and the numbers that matter before anyone asks you to complete an application.</p>
        <a href="/guide" class="step-time" style="text-decoration:none;">Start with the free guide →</a>
      </div>
      <div class="step" role="listitem">
        <div class="step-number" aria-hidden="true">02</div>
        <h3 class="step-title">Plan</h3>
        <p class="step-body">Talk through your goals, timing, payment comfort, and possible loan strategies so you know what to work toward.</p>
        <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" class="step-time" style="text-decoration:none;">Book a strategy call →</a>
      </div>
      <div class="step" role="listitem">
        <div class="step-number" aria-hidden="true">03</div>
        <h3 class="step-title">Apply</h3>
        <p class="step-body">When you are ready for real numbers, complete the secure application so we can review your full financial picture.</p>
        <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" class="step-time" style="text-decoration:none;">Begin the secure application →</a>
      </div>
    </div>
  </div>
</section>

<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     WHY UNFILTERED KEYS
     ═══════════════════════════════════════════ -->
<section class="section section-forest" aria-labelledby="why-heading">
  <div class="container">
    <p class="section-tag">Why Us</p>
    <h2 class="section-title" id="why-heading">Retail Banks Have One Product Shelf. We Have 50+. That Difference Is Why Deals Close Here That Don't Close Elsewhere.</h2>
    <p class="section-sub">As an independent broker we shop your loan across 50+ lenders to find the best rate, terms, and fit for your situation — not the best fit for our quota. More lenders. More options. Better outcomes.</p>
    <div class="diff-grid" role="list" style="grid-template-columns:repeat(3,1fr);">
      <div class="diff-item" role="listitem">
        <div class="diff-icon-wrap" aria-hidden="true">🎯</div>
        <div>
          <div class="diff-title">We Run Your Numbers Before You Shop</div>
          <div class="diff-body">Most lenders issue a pre-qual number and send you shopping. We build a full affordability model — including Texas property taxes — so you know your real monthly payment before you fall in love with a house.</div>
        </div>
      </div>
      <div class="diff-item" role="listitem">
        <div class="diff-icon-wrap" aria-hidden="true">🎖️</div>
        <div>
          <div class="diff-title">Military PCS Specialists</div>
          <div class="diff-body">We understand military pay, BAH calculations, COE pulls, and PCS timelines. If you have orders with a report date, we build your closing timeline backward from that deadline — not forward from when it's convenient for us.</div>
        </div>
      </div>
      <div class="diff-item" role="listitem">
        <div class="diff-icon-wrap" aria-hidden="true">🚫</div>
        <div>
          <div class="diff-title">No Hidden Fees. No Surprises at Closing.</div>
          <div class="diff-body">Every fee on your Loan Estimate is one we can explain in plain English. If we can't explain it, we don't charge it. You'll see your real closing costs from Day 1 — not a bait-and-switch number that changes on Day 20.</div>
        </div>
      </div>
    </div>
    <p style="margin-top:40px; text-align:center; font-family:var(--font-display); font-style:italic; font-size:clamp(16px,2vw,20px); color:rgba(240,237,230,0.75); max-width:620px; margin-left:auto; margin-right:auto; line-height:1.5;">
      Anyone can quote a rate. Very few can structure a loan that actually closes clean.
    </p>
  </div>
  </div>
</section>
`;

const pageHTMLAfterDPA = `
<section class="section section-cream" aria-labelledby="testimonials-heading">
  <div class="container" style="max-width:900px;">
    <div style="text-align:center; margin-bottom:48px;">
      <p class="section-tag" style="justify-content:center;">Client Testimonials</p>
      <h2 class="section-title" id="testimonials-heading">What Clients Say</h2>
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
      <div style="background:var(--navy); border-radius:12px; padding:32px;">
        <p style="color:#faf8f4; font-size:16px; line-height:1.7; font-style:italic; margin:0 0 16px;">"She took time to teach and guide me through the overwhelming process of buying a house, making it super easy and stress-free."</p>
        <p style="color:var(--copper); font-weight:600; font-size:14px; margin:0;">— Yaniska W.</p>
      </div>
      <div style="background:var(--navy); border-radius:12px; padding:32px;">
        <p style="color:#faf8f4; font-size:16px; line-height:1.7; font-style:italic; margin:0 0 16px;">"It was clear she genuinely cared about helping me make the right decisions, not just closing a deal."</p>
        <p style="color:var(--copper); font-weight:600; font-size:14px; margin:0;">— Thomas S.</p>
      </div>
      <div style="background:var(--navy); border-radius:12px; padding:32px;">
        <p style="color:#faf8f4; font-size:16px; line-height:1.7; font-style:italic; margin:0 0 16px;">"The entire process was smooth from start to finish, and I felt supported every step of the way."</p>
        <p style="color:var(--copper); font-weight:600; font-size:14px; margin:0;">— Moya T.</p>
      </div>
      <div style="background:var(--navy); border-radius:12px; padding:32px;">
        <p style="color:#faf8f4; font-size:16px; line-height:1.7; font-style:italic; margin:0 0 16px;">"She helped us purchase our home and later refinance to better fit our budget — we never felt alone."</p>
        <p style="color:var(--copper); font-weight:600; font-size:14px; margin:0;">— Gardenia B.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     LEAD MAGNET
     ═══════════════════════════════════════════ -->
<div class="lm-band lm-band-dark" aria-labelledby="lm-heading">
  <div class="container">
    <div class="lm-inner">
      <div>
        <div class="lm-tag">Free Download</div>
        <h2 class="lm-title" id="lm-heading">The Texas Homebuyer's<br>90-Day Mortgage Strategy Playbook</h2>
        <p class="lm-sub">The unfiltered guide to buying a home in Texas — property taxes, loan programs, DPA, and exactly what to do 90 days before you apply.</p>
      </div>
      <form class="lm-form" aria-label="Download the free Texas Mortgage Playbook">
        <input type="text" name="first_name" placeholder="First Name" autocomplete="given-name" aria-label="First Name" required>
        <input type="email" name="email" placeholder="Email Address" autocomplete="email" aria-label="Email Address" required>
        <button type="submit" class="lm-submit">Send My Free Playbook →</button>
        <p class="lm-microcopy">Zero spam. Unsubscribe anytime.<br>We hate pushy emails as much as you do.</p>
      </form>
    </div>
  </div>
</div>

<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     FAQ
     ═══════════════════════════════════════════ -->
<section class="section section-white" aria-labelledby="faq-heading">
  <div class="container">
    <p class="section-tag">Common Questions</p>
    <h2 class="section-title" id="faq-heading">Answers to What You're Actually Wondering</h2>
    <div class="faq-grid" role="list">
      <details role="listitem">
        <summary>What's the difference between pre-qualification and pre-approval?</summary>
        <div class="faq-answer">Pre-qualification is an estimate based on self-reported information — it means nothing to a serious seller. Pre-approval means we've verified your income, credit, and assets, and a fully underwritten letter is issued. In Texas's competitive market, sellers require the latter. We issue fully underwritten pre-approvals.</div>
      </details>
      <details role="listitem">
        <summary>Can my BAH cover a mortgage payment in Killeen?</summary>
        <div class="faq-answer">For most pay grades, yes. At a $225K VA loan, your PITI is roughly $1,843/month. An E-5 with dependents gets $1,695 BAH — about $148 gap. An E-6 at $2,070 BAH covers the full payment. We run your exact BAH vs. payment calculation for free before you start shopping.</div>
      </details>
      <details role="listitem">
        <summary>Is there down payment assistance in Texas?</summary>
        <div class="faq-answer">Yes — and most qualifying buyers never find out because their lender isn't enrolled in these programs. TDHCA My First Texas Home (620 minimum) offers up to 5% as a silent second lien, statewide, combinable with FHA 203(k). TSAHC Homes for Texas Heroes (620 minimum) provides non-repayable grants for teachers, nurses, first responders, and veterans. SETH 5 Star (640 minimum) and GoldStar (620 minimum) require no first-time buyer status and layer on top of FHA 203(k) renovation loans. Chenoa Fund (600 minimum) covers the FHA 3.5% requirement with no income limit on the repayable version. We also have access to investor-backed DPA products that go to 580 credit. We check your eligibility across all programs at no cost.</div>
      </details>
      <details role="listitem">
        <summary>Should I use the builder's lender when buying new construction in Georgetown?</summary>
        <div class="faq-answer">Not automatically. Builder lenders offer incentives tied to their preferred lender — but those incentives can come with higher base rates or fees that erode the value. We run a free side-by-side comparison before you commit. In many cases we can match or beat the net effective rate, especially on VA loans and conventional financing.</div>
      </details>
      <details role="listitem">
        <summary>How quickly can you close a VA loan near Fort Hood?</summary>
        <div class="faq-answer">With complete documentation, VA loans typically close in 21–30 days. If you have PCS orders with a hard report date, tell us upfront — we build the timeline backward from your deadline, not forward from when it's convenient. We've closed VA loans in under 14 days when orders required it.</div>
      </details>
      <details role="listitem">
        <summary>What makes Round Rock a better value than Austin in 2026?</summary>
        <div class="faq-answer">Round Rock's median home price is about $390K — 29% below Austin's $549K — while offering comparable school quality (Round Rock ISD), identical commute access to Dell, Apple, and Amazon campuses, and more square footage per dollar. Homes are sitting longer than during the 2021–22 peak, giving buyers real negotiating leverage right now.</div>
      </details>
      <details role="listitem">
        <summary>I'm self-employed. Can I still qualify for a mortgage in Texas?</summary>
        <div class="faq-answer">Yes — and you have multiple paths. If your tax returns show strong income, conventional or FHA financing may work. If write-offs reduce your reported income significantly, a Bank Statement Loan (12–24 months of deposits) or a P&L-Only loan may qualify you at a higher amount. We run your scenario both ways and show you which structure produces the best rate and payment.</div>
      </details>
      <details role="listitem">
        <summary>What is a One-Time Close construction loan and how is it different?</summary>
        <div class="faq-answer">A traditional construction loan requires two closings — one when you break ground and a second to convert to a permanent mortgage. A One-Time Close (OTC) loan does both in a single closing, with one set of closing costs. You lock your permanent interest rate before construction starts, so you're protected from rate moves during the build. VA OTC is the most powerful version — zero down, rate locked, no re-qualification at completion. We offer OTC loans for VA, FHA, USDA, and Conventional programs.</div>
      </details>
      <details role="listitem">
        <summary>Can I buy a fixer-upper and roll the renovation costs into my mortgage?</summary>
        <div class="faq-answer">Yes — that's exactly what renovation loans are for. FHA 203(k) lets you purchase and fund repairs in one FHA loan based on the after-improved value, with as little as 3.5% down. Fannie Mae HomeStyle is the conventional version — no minimum project size, structural work allowed, and no FHA mortgage insurance if you qualify. VA Renovation loans let eligible veterans do the same thing with zero down. We'll run your numbers on all applicable programs side by side.</div>
      </details>
      <details role="listitem">
        <summary>What is a DSCR loan and who is it for?</summary>
        <div class="faq-answer">DSCR stands for Debt Service Coverage Ratio. Instead of qualifying on your personal income, the loan qualifies based on the rental income the property generates. If the rent covers the mortgage payment (typically 1.0x–1.25x DSCR), you can qualify — regardless of how many properties you own or what your tax returns show.</div>
      </details>
    </div>
  </div>
</section>

<!-- ─── EDITORIAL RULE ─── -->
<hr class="section-rule" aria-hidden="true">

<!-- ═══════════════════════════════════════════
     FINAL CTA
     ═══════════════════════════════════════════ -->
<section class="section section-cta-dark" aria-labelledby="final-cta-heading">
  <div class="container" style="text-align:center; max-width:640px;">
    <p class="section-tag" style="justify-content:center">Get Started</p>
    <h2 class="section-title" id="final-cta-heading" style="margin:0 auto 14px">Ready to Talk Strategy?</h2>
    <p style="font-size:17px; color:rgba(240,237,230,0.7); line-height:1.65; margin-bottom:32px;">
      15 minutes. We'll tell you your real buying power, which loan product fits your situation, and exactly what to do next.
    </p>
    <div class="cta-pair" style="justify-content:center">
      <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size:16px; padding:16px 32px;">
        Get Pre-Approved Today →
      </a>
      <a href="https://calendly.com/shalanda-securechoicelending/30min" target="_blank" rel="noopener noreferrer" class="btn-outline" style="border:1.5px solid rgba(240,237,230,0.25); color:rgba(240,237,230,0.85);">
        📅 Book a Strategy Call
      </a>
    </div>
    <p style="margin-top:20px; font-size:12px; color:rgba(240,237,230,0.45);">
      📞 Or call us directly: <a href="tel:+12549359331" style="color:var(--copper); font-weight:600;">(254) 935-9331</a>
    </p>
  </div>
</section>


<!-- Mobile quick actions are provided once by StickyMobileCTA in SiteLayout. -->
`;

export default function Index() {
  useEffect(() => {
    // Set page background
    document.body.style.background = '#faf8f4';
    document.body.style.margin = '0';

    // Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links') as HTMLElement | null;
  hamburger?.addEventListener('click', () => {
    if (!navLinks) return;
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#fff';
    navLinks.style.padding = '12px 28px 20px';
    navLinks.style.borderBottom = '1px solid #ddd8cf';
    navLinks.style.zIndex = '99';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
  });

  // Texas Map tooltip
  const txCityData: Record<string, {name:string,type:string,category:string,locations:string[]}> = {
    dfw:{name:'Dallas-Fort Worth',type:'current',category:'Military & Medical',locations:['NAS Joint Reserve Base Fort Worth','Parkland Memorial Hospital','UT Southwestern Medical Center','Baylor Scott & White – Dallas','Medical City Dallas']},
    forthood:{name:'Killeen / Fort Cavazos',type:'current',category:'Military Installation',locations:['Fort Cavazos (formerly Fort Hood)','Carl R. Darnall Army Medical Center']},
    temple:{name:'Temple',type:'current',category:'Medical Hub',locations:['Baylor Scott & White Medical Center (flagship)','Scott & White Memorial Hospital']},
    roundrock:{name:'Round Rock',type:'current',category:'Medical Hub',locations:['Baylor Scott & White Round Rock','St. David\'s Round Rock Medical Center']},
    austin:{name:'Austin',type:'current',category:'Military & Medical',locations:['Army Futures Command','Dell Seton Medical Center','St. David\'s Medical Center','Ascension Seton Medical Center']},
    woodlands:{name:'The Woodlands',type:'current',category:'Medical Hub',locations:['Houston Methodist The Woodlands','Memorial Hermann The Woodlands']},
    houston:{name:'Houston',type:'current',category:'Military & Medical',locations:['Ellington Field Joint Reserve Base','Texas Medical Center','MD Anderson Cancer Center','Houston Methodist Hospital','Memorial Hermann Hospital']},
    sanantonio:{name:'San Antonio',type:'current',category:'Military & Medical',locations:['Joint Base San Antonio (JBSA)','Brooke Army Medical Center','Audie Murphy VA Hospital']},
    elpaso:{name:'El Paso',type:'current',category:'Military & Medical',locations:['Fort Bliss','William Beaumont Army Medical Center']},
    corpuschristi:{name:'Corpus Christi',type:'current',category:'Military Installation',locations:['Naval Air Station Corpus Christi','Corpus Christi Army Depot','NAS Kingsville (40 mi south)']},
    wichitafalls:{name:'Wichita Falls',type:'expansion',category:'Military Installation',locations:['Sheppard Air Force Base','United Regional Health Care System']},
    abilene:{name:'Abilene',type:'expansion',category:'Military & Medical',locations:['Dyess Air Force Base','Baylor Scott & White – Abilene','Hendrick Medical Center']},
    lubbock:{name:'Lubbock',type:'expansion',category:'Medical Hub',locations:['Texas Tech Health Sciences Center','Covenant Medical Center','University Medical Center']},
    amarillo:{name:'Amarillo',type:'expansion',category:'Medical Hub',locations:['BSA Health System','Northwest Texas Healthcare System','Texas Tech Physicians of Amarillo']},
    sanangelo:{name:'San Angelo',type:'expansion',category:'Military Installation',locations:['Goodfellow Air Force Base']},
    delrio:{name:'Del Rio',type:'expansion',category:'Military Installation',locations:['Laughlin Air Force Base']},
    tyler:{name:'Tyler',type:'expansion',category:'Medical Hub',locations:['UT Health East Texas','Christus Mother Frances Hospital']},
    mcallen:{name:'McAllen / Rio Grande Valley',type:'expansion',category:'Medical Hub',locations:['McAllen Medical Center','Doctors Hospital at Renaissance','South Texas Health System']},
  };
  const tooltip = document.getElementById('txMapTooltip');
  const mapWrap = document.getElementById('txMapWrap');
  const dots = document.querySelectorAll('.tx-dot-current, .tx-dot-expansion');
  const dotHandlers: Array<{el:Element, enter:(e:MouseEvent)=>void, move:(e:MouseEvent)=>void, leave:()=>void}> = [];
  dots.forEach(dot => {
    const city = dot.getAttribute('data-city');
    if (!city || !txCityData[city] || !tooltip || !mapWrap) return;
    const d = txCityData[city];
    const enter = () => {
      (dot as SVGCircleElement).setAttribute('r', '9');
      const badgeClass = d.type === 'current' ? 'current' : 'expansion';
      const badgeText = d.type === 'current' ? 'Current Market' : 'Potential Expansion';
      tooltip.innerHTML = '<div class="tx-map-tooltip-name">' + d.name + '</div>' +
        '<span class="tx-map-tooltip-badge ' + badgeClass + '">' + badgeText + '</span>' +
        '<div class="tx-map-tooltip-category">' + d.category + '</div>' +
        '<ul class="tx-map-tooltip-list">' + d.locations.map(l => '<li>' + l + '</li>').join('') + '</ul>';
      tooltip.classList.add('visible');
    };
    const move = (e: MouseEvent) => {
      if (!tooltip || !mapWrap) return;
      const rect = mapWrap.getBoundingClientRect();
      let left = e.clientX - rect.left + 14;
      const top = e.clientY - rect.top - 10;
      if (left + 240 > rect.width) left = e.clientX - rect.left - 254;
      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
    };
    const leave = () => {
      (dot as SVGCircleElement).setAttribute('r', '6');
      if (tooltip) { tooltip.classList.remove('visible'); }
    };
    dot.addEventListener('mouseenter', enter as any);
    dot.addEventListener('mousemove', move as any);
    dot.addEventListener('mouseleave', leave);
    dotHandlers.push({el: dot, enter: enter as any, move: move as any, leave});
  });

  // Intersection Observer for scroll animations
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          (el.target as HTMLElement).style.animationPlayState = 'running';
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.program-card, .city-card, .step, .diff-item, .review-card, details').forEach(el => {
      (el as HTMLElement).style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

  }, []);

  return (
    <>
      <SEO {...seoMeta.home} />
      <SchemaMarkup />
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <div dangerouslySetInnerHTML={{ __html: pageHTML }} />
      <DownPaymentSection />
      <div dangerouslySetInnerHTML={{ __html: pageHTMLAfterDPA }} />
    </>
  );
}
