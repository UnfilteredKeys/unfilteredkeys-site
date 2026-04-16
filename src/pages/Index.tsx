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
  background: var(--bg-white);
  position: relative;
}
.broker-inner {
  display: grid;
  grid-template-columns: 340px 1fr;
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
  gap: 14px;
}
.broker-photo {
  width: 100%;
  max-width: 340px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center top;
  border-radius: 12px;
  box-shadow: 0 12px 48px rgba(28,38,48,0.14);
  border: 3px solid var(--border-light);
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
  background: #1a3a5c;
  padding: 80px 0;
  position: relative;
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
  color: #b5621e;
  margin-bottom: 40px;
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
  fill: rgba(26,58,92,0.2);
  stroke: #b5621e;
  stroke-width: 1.8;
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
    <h2 class="tx-map-heading" id="tx-map-heading">Serving Veterans &amp; Buyers Across Texas</h2>
    <p class="tx-map-subheading">Hover a market to see who we serve there</p>

    <div class="tx-map-wrap" id="txMapWrap">
      <svg class="tx-map-svg" viewBox="0 0 640 550" xmlns="http://www.w3.org/2000/svg" aria-label="Texas markets map">
        <path class="tx-outline" d="M192,15 H321 V130 L370,128 L430,130 L500,133 L560,136 L591,140 L594,200 L596,295 L584,340 L560,358 L536,370 L510,390 L480,408 L455,428 L433,455 L430,520 L370,468 L340,450 L299,400 L282,368 L240,358 L175,352 L132,348 L90,310 L60,272 L42,242 L42,229 H192 V15 Z"/>

        <!-- CURRENT MARKETS -->
        <circle class="tx-dot-current" cx="452" cy="185" r="6" data-city="dfw"/>
        <text class="tx-city-label" x="462" y="188">Dallas-Fort Worth</text>

        <circle class="tx-dot-current" cx="412" cy="262" r="6" data-city="forthood"/>
        <text class="tx-city-label" x="402" y="265" text-anchor="end">Fort Hood / Killeen</text>

        <circle class="tx-dot-current" cx="432" cy="275" r="6" data-city="temple"/>
        <text class="tx-city-label" x="442" y="278">Temple</text>

        <circle class="tx-dot-current" cx="428" cy="292" r="6" data-city="roundrock"/>
        <text class="tx-city-label" x="438" y="295">Round Rock</text>

        <circle class="tx-dot-current" cx="414" cy="310" r="6" data-city="austin"/>
        <text class="tx-city-label" x="404" y="313" text-anchor="end">Austin</text>

        <circle class="tx-dot-current" cx="510" cy="318" r="6" data-city="woodlands"/>
        <text class="tx-city-label" x="520" y="321">The Woodlands</text>

        <circle class="tx-dot-current" cx="514" cy="350" r="6" data-city="houston"/>
        <text class="tx-city-label" x="524" y="353">Houston</text>

        <circle class="tx-dot-current" cx="380" cy="358" r="6" data-city="sanantonio"/>
        <text class="tx-city-label" x="370" y="361" text-anchor="end">San Antonio</text>

        <circle class="tx-dot-current" cx="57" cy="248" r="6" data-city="elpaso"/>
        <text class="tx-city-label" x="67" y="251">El Paso</text>

        <circle class="tx-dot-current" cx="436" cy="448" r="6" data-city="corpuschristi"/>
        <text class="tx-city-label" x="446" y="451">Corpus Christi</text>

        <!-- POTENTIAL EXPANSION -->
        <circle class="tx-dot-expansion" cx="398" cy="138" r="6" data-city="wichitafalls"/>
        <text class="tx-city-label" x="408" y="141">Wichita Falls</text>

        <circle class="tx-dot-expansion" cx="325" cy="255" r="6" data-city="abilene"/>
        <text class="tx-city-label" x="335" y="258">Abilene</text>

        <circle class="tx-dot-expansion" cx="242" cy="158" r="6" data-city="lubbock"/>
        <text class="tx-city-label" x="252" y="161">Lubbock</text>

        <circle class="tx-dot-expansion" cx="248" cy="72" r="6" data-city="amarillo"/>
        <text class="tx-city-label" x="258" y="75">Amarillo</text>

        <circle class="tx-dot-expansion" cx="305" cy="300" r="6" data-city="sanangelo"/>
        <text class="tx-city-label" x="315" y="303">San Angelo</text>

        <circle class="tx-dot-expansion" cx="280" cy="398" r="6" data-city="delrio"/>
        <text class="tx-city-label" x="270" y="401" text-anchor="end">Del Rio</text>

        <circle class="tx-dot-expansion" cx="536" cy="210" r="6" data-city="tyler"/>
        <text class="tx-city-label" x="546" y="213">Tyler</text>

        <circle class="tx-dot-expansion" cx="400" cy="492" r="6" data-city="mcallen"/>
        <text class="tx-city-label" x="390" y="495" text-anchor="end">McAllen / RGV</text>
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
      <div class="tx-map-mobile-card"><span class="tx-map-mobile-dot"></span><span class="tx-map-mobile-name">Fort Hood / Killeen</span></div>
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
          src="data:image/png;base64,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"
          alt="Mortgage broker — Keys by Shalanda, Texas"
          class="broker-photo"
          loading="lazy"
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
     HOW IT WORKS
     ═══════════════════════════════════════════ -->
<section class="section section-parchment" aria-labelledby="process-heading">
  <div class="container">
    <p class="section-tag">The Process</p>
    <h2 class="section-title" id="process-heading">How It Works — From First Call to Closing Day</h2>
    <p class="section-sub">Most lenders lose control after pre-approval. This is where we don't.</p>
    <div class="steps-grid" role="list">
      <div class="step" role="listitem">
        <div class="step-number" aria-hidden="true">01</div>
        <h3 class="step-title">Strategy Call</h3>
        <p class="step-body">30 minutes. We review your goals, income, credit range, and timeline. You leave knowing your real buying power — not a rough estimate.</p>
        <span class="step-time">30 min · Free · No Obligation</span>
      </div>
      <div class="step" role="listitem">
        <div class="step-number" aria-hidden="true">02</div>
        <h3 class="step-title">Fully Underwritten Pre-Approval</h3>
        <p class="step-body">We gather your documents, run the numbers, and deliver a fully underwritten pre-approval letter — the kind that actually holds up with sellers and agents.</p>
        <span class="step-time">24–48 hrs · Fully Underwritten</span>
      </div>
      <div class="step" role="listitem">
        <div class="step-number" aria-hidden="true">03</div>
        <h3 class="step-title">Close &amp; Move In</h3>
        <p class="step-body">We handle the loan from application to funding. No disappearing acts. No last-minute surprises. You'll know where your file is every step of the way.</p>
        <span class="step-time">Average: 21 Days to Close</span>
      </div>
    </div>
    <div style="margin-top:32px; text-align:center;">
      <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display:inline-flex;">
        Start Your Pre-Approval →
      </a>
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


<!-- ─── MOBILE STICKY BAR ─── -->
<div class="mobile-cta-bar" role="navigation" aria-label="Quick actions">
  <a href="tel:+12549359331" class="mob-btn call" aria-label="Call us">
    <span aria-hidden="true">📞</span>
    Call
  </a>
  <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" class="mob-btn apply" aria-label="Apply for a mortgage">
    <span aria-hidden="true">📋</span>
    Apply
  </a>
  <a href="sms:+12549359331" class="mob-btn text" aria-label="Text us">
    <span aria-hidden="true">💬</span>
    Text
  </a>
</div>

<!-- ─── MINIMAL JS — Mobile nav only ─── -->
`;

export default function Index() {
  useEffect(() => {
    // Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;0,700;1,600&family=Outfit:wght@300;400;500;600;700&family=Fira+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);

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
    forthood:{name:'Fort Hood / Killeen',type:'current',category:'Military Installation',locations:['Fort Hood','Carl R. Darnall Army Medical Center']},
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

    return () => {
      try { document.head.removeChild(link); } catch(e) {}
    };
  }, []);

  return (
    <>
      <SEO {...seoMeta.home} />
     <Helmet>
      <title>Keys by Shalanda | Texas Mortgage Broker | VA Loan Specialist</title>
      <meta name="description" content="Licensed Texas mortgage broker specializing in VA loans, down payment assistance, and non-QM lending. Serving Fort Hood, Killeen, and all of Texas. NMLS #554554." />
      <link rel="canonical" href="https://shalandasmith.com/" />
    </Helmet>  
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <div dangerouslySetInnerHTML={{ __html: pageHTML }} />
      <DownPaymentSection />
      <div dangerouslySetInnerHTML={{ __html: pageHTMLAfterDPA }} />
    </>
  );
}
