# Implementation Notes — Sky Tech Energy site

Built by frontend-engineer (2026-09-13) from `CONTENT.md` (authoritative content +
12-section spec) and `docs/DESIGN-GUIDE.md` (v1 layout/palette).

## Stack & run commands

- **Stack:** React 18 + Vite 5 + JavaScript + Tailwind CSS 3.4. No backend, no external
  fonts (system-ui only — offline-robust per DESIGN-GUIDE §2), single page.
- **Deps:** `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `tailwindcss`,
  `postcss`, `autoprefixer`.
- **Install:** `npm install`
- **Dev:** `npm run dev` (http://localhost:5173)
- **Build:** `npm run build` (outputs `dist/`)
- **Preview:** `npm run preview`

## What was built

One-page site with the 12 sections in CONTENT.md order, as reusable components in
`src/components/`: `Navbar Hero SubsidySection Benefits Solutions Process Calculator
WhySkyTech InstagramPosts FAQ ContactForm Footer` (plus `data.js` for all content and
`Icons.jsx` for self-drawn SVG icons). All content lives in `src/data.js` and traces to
CONTENT.md — no invented facts, prices, counts, cities, or turnaround times.

## Content compliance & boundaries honoured

- Subsidy table (1 kW ₹30,000 / 2 kW ₹60,000 / 3 kW ₹78,000) and the 3 kW example
  (total ₹1,90,000 − ₹78,000 ≈ ₹1,12,000) are used verbatim; the 3 kW example is
  labelled **"Estimated / Indicative — not an official quotation"**.
- Phones (9307870422 / 7448224139 / 9699462881) and www.skytechenerg.in only — all
  from the creatives. WhatsApp deep-links to 919307870422 and are labelled clearly.
- The 4 promo creative crops in `public/images/instagram-post-*.jpg` are shown as clean
  art cards (no likes/comments/usernames/captions/dates/hashtags); CTAs are
  "Enquire Now" (WhatsApp) and "Get Quote" (contact form). Artwork is not redesigned.
- Offers section, Why Sky Tech and about copy use only creative-supported claims
  (Zero Down Payment, Loan Facility, Professional Installation, Subsidy Assistance,
  Residential/Commercial/Industrial). No certifications, awards, install counts,
  years, city lists, or warranty claims.
- Panel brands appear once as "Trusted panel partners include Adani, Waaree, Polycab,
  Fujiyama" (per DESIGN-GUIDE §7).

## Savings Calculator (section 7) — formula transparency

Inputs: monthly bill (₹, slider), optional monthly consumption (units), adjustable tariff
assumption (₹/unit, 4–12, default 8), adjustable generation assumption (units/kW/month,
80–180, default 125), and system-size override (1–10 kW, slider snaps to a
"recommended" size derived from the bill).

Outputs — all labelled Estimated/Indicative:
- Recommended capacity = bill ÷ (units-per-kW × tariff), snapped to 0.5 kW, clamped 1–10 kW.
- Estimated savings = capacity × units-per-kW × tariff (monthly), ×12 annual.
- Approximate cost = capacity × ₹63,333/kW (derived **only** from the verified 3 kW = ₹1,90,000 figure; rounded to ₹1,000).
- Subsidy = verified PM Surya Ghar rates, capped at ₹78,000 (3 kW) for larger sizes —
  noted as subject to official scheme terms.
- Final cost = cost − subsidy.

The "3 kW baseline (verified)" example is shown in the output column. A disclaimer panel
states the calculator is **not an official quotation** and recommends a site survey.

### Assumptions to be explicit about
1. ₹/kW scaling is linear from the single verified 3 kW figure. Real pricing varies by
   system configuration — the survey sets the price.
2. Generation of 125 units/kW/month is a generic Indian average (adjustable in the UI);
   actual yield depends on city, orientation, and shading.
3. Tariff default ₹8/unit; when consumption is entered, tariff is derived as bill ÷ units.
4. Subsidy beyond 3 kW is assumed capped at ₹78,000 per scheme norms — confirm with
   Sky Tech Energy for official terms.

## Accessibility & responsiveness
- Mobile-first; cards `grid-cols-1 → sm:2 → lg:3`; forms/calculator usable at 360px.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), labelled inputs,
  `aria-expanded`/`aria-controls` on the FAQ accordion and mobile menu, `focus-visible`
  rings, keyboard-operable. Smooth scrolling via CSS `scroll-behavior`.

## Deviations / notes (deliberate)
- **Navbar breakpoint:** DESIGN-GUIDE says the nav collapses below `md`; CONTENT.md's
  navbar has 8 links, which do not fit at 768px. The full link row shows at `xl` (≥1280)
  and collapses to a hamburger below — a layout necessity for the required link list.
- **Instagram link in footer:** no verified Instagram handle exists in the creatives
  (they are required to be ignored as IG chrome), so the Instagram icon links to
  www.skytechenerg.in (owned URL) per CONTENT.md, titled to make that clear.
- **WhySkyTech** carries `id="about"` to serve the navbar's "About" link; Benefits
  carries `id="benefits"` for "Why Solar".
- Tailwind palette re-mapped from the initial green-scheme to DESIGN-GUIDE colours
  (primary deep blue `#0E3A5D`, accent green `#2FA84F`, mist `#F3F7F5`, ink, muted).

## Verification run
- `npm run build` — passes (45 modules, ~188 kB JS / ~23 kB CSS before gzip).
- SSR-string-render smoke test (`react-dom/server` via Vite) — all 10 rendered
  `<section>`s and key phrases present, 0 render errors, script removed afterwards.
- Bundle grep confirms every section's heading/key phrase ships in the JS bundle.