# QA Report — Sky Tech Energy marketing site

**Site:** `solar-sky-tech-energy` (React 18 + Vite 5 + Tailwind 3, single-page static)
**QA engineer:** worker-qa-engineer · **Date:** 2026-09-13
**Commit under test:** `86b52a4` (build) + `b497650` (DESIGN-GUIDE v2 / post-1 recompress)
**Contract:** `CONTENT.md` (authoritative) + `docs/TOOLS.md` · **Verdict:**

> **PASS — all checks green. No blocking defects. 1 defect found and verified fixed. 1 accepted MINOR (palette drift).**

## Method & environment (what was and wasn't run)

- **Objective (a) build:** `npm run build` → exit **0**, 45 modules, `dist/` produced (`✓ built in 600ms`). ✓
- **Objective (b) runtime/console:** Playwright/puppeteer are **not installed** here (no extra deps added). Instead ran the production build (`vite preview` on `:4173`) in **real headless Google Chrome 153 driven over CDP** with a purpose-built Node driver — strictly stronger than a jsdom import smoke test (real layout engine, real network, real browser JS).
  - Console output: **0** entries (no errors, warnings, or logs).
  - Uncaught exceptions: **0**. Failed/4xx+ responses: **0** (all 10 `<img>` assets resolve, `naturalWidth > 0`).
  - Honest limits: no screenshots (this worker has no image vision), no visual-snapshot diffing; all checks programmatic (DOM/console/CDP evaluation + OCR for image content).
- **Creative content:** verified via the repo's own `docs/tools/ocr` binary (no vision).

## PASS / FAIL matrix

| Check | Result | Evidence |
|---|---|---|
| (a) `npm run build` clean | **PASS** | exit 0, `✓ built in 600ms` |
| (b) Runtime console clean | **PASS** | 0 console messages, 0 exceptions, 0 failed requests (headless Chrome CDP) |
| (c) Required content in live DOM | **PASS** | 20/20 rendered strings found (see §Required) |
| (d) Forbidden content absent | **PASS** | scanned rendered text + source; no prohibited claims (see §Forbidden) |
| (e1) Horizontal overflow 360 / 768 / 1280 | **PASS** | `scrollWidth == innerWidth` at all three (360: 360/360, 768: 768/768, 1280: 1280/1280) |
| (e2) Sections present and ordered | **PASS** | order matches spec exactly: `home → subsidy → benefits → solutions → process → calculator → about(Why Sky Tech) → offers → faq → contact` (+ footer). All 10 `<section>` ids present |
| (e3) Title / meta | **PASS** | `index.html:6` title `Sky Tech Energy — Solar EPC & Energy Solutions | Rooftop Solar, PM Surya Ghar` |
| (f1) Navbar links | **PASS** | 8 spec anchors (`Home/About/Solar Solutions/PM Surya Ghar/Why Solar/Process/FAQs/Contact`) + `tel:+919307870422` + CTA `Get Free Consultation` (`src/data.js:11-20`, `src/components/Navbar.jsx`) |
| (f2) Hamburger | **PASS** | at 360px: desktop `<ul>` hidden (`display:none`); toggle sets `aria-expanded false→true`, mounts `#mobile-menu` (10 links incl. CTA + Call), locks `body overflow:hidden`; second click closes (`Navbar.jsx:69-112`) |
| (f3) FAQ accordion | **PASS** | item 0 open by default; clicking item 2 moves `aria-expanded` and panel to item 2 (single-open accordion, `FAQ.jsx:35-58`) |
| (f4) Contact form validation | **PASS** | empty submit → blocked with 4 `:invalid` (Name, Mobile, City, Bill — all `required`), no success fired (`ContactForm.jsx:112-212`) |
| (f5) Contact form success handler | **PASS** | valid submit → "Thank you!" success card + WhatsApp deep-link `https://wa.me/919307870422?...` + "Submit another request" reset (`ContactForm.jsx:22-62`) |
| (f6) Instagram images | **PASS** | only 4 refs: `/images/instagram-post-{1..4}.jpg` (`src/data.js:185-188`); all load in browser; no other `instagram` paths |
| (g) Calculator interaction | **PASS** | live re-render on input change; all outputs labelled `Estimated`/`Indicative`; 3 kW baseline verified line `₹1,90,000 − ₹78,000 ≈ net ₹1,12,000 — Estimated / Indicative` (`Calculator.jsx:269-273`); quotation disclaimer present (`Calculator.jsx:278-279`); assumptions transparent (`Calculator.jsx:9-16`) |

## §Required content — rendered, verified

All present in the live DOM (asserted on `document.body.innerText`):

`₹30,000` · `₹60,000` · `₹78,000` · `₹1,90,000` · `₹1,12,000` (calculated, *Estimated/Indicative*) · `Powering a Sustainable Future` · `9307870422` · `7448224139` · `9699462881` · `www.skytechenerg.in` · `Estimated` ×N · `Indicative` ×N · `not an official Sky Tech Energy quotation` · `Ready to Switch to Solar?` · `Get Free Consultation` · `Zero Down Payment` · `PM Surya Ghar: Muft Bijli Yojana` · `Residential` · `Commercial` · `Industrial`.

Sources: `src/data.js:2-8` (SITE), `:22-26` (SUBSIDY), `:33` (`COST_PER_KW = 190000/3`), `:190-193` (contact defaults).

## §Forbidden content — absent

Rendered-text and full-source scans for `years of experience`, `certified`, `award`, `winner`, `pan-India`, `turnaround`, `warranty`, `1,000+`, `500+`, `across India` → **0 hits**. The only "installation" matches are the spec-mandated Process step 4 and "Professional Installation" offer (`src/data.js:89-115`, `:117-147`) — allowed, not invented claims. No install counts, no invented cities, no fabricated percentages.

## Console-error evidence

```
Runtime.consoleAPICalled : (none)
Runtime.exceptionThrown  : (none)
Network failures (4xx+)  : (none)
```

## Defect log

| # | Severity | Defect | Detail | Status |
|---|---|---|---|---|
| 1 | **HIGH** (found) → resolved | IG crop leaked chrome on `public/images/instagram-post-1.jpg` | Original crop retained IG UI: `@sky_tech_energy`, "See translation", and the IG URL-bar typo **`www.skytechenergy.in`** (contradicts verified domain `www.skytechenerg.in`), violating TOOLS.md (no IG UI in artwork crops) | **FIXED by god** (re-crop, commit `b497650`). Re-verified by this QA on the committed blob via `docs/tools/ocr`: **0** chrome tokens (`sky_tech_energy_`, `See translation`, `skytechenergy`, `likes`, `@sky`), and all 4 content markers survive: `30,000 / 60,000 / 78,000 / Surya Ghar` |
| 2 | **LOW / accepted** (non-blocking) | Palette drift vs `docs/DESIGN-GUIDE.md` v2 | Implementation uses god v1 tokens `#0E3A5D` (primary-900, `tailwind.config.js:20`) / `#2FA84F` (accent-500, `tailwind.config.js:29`); DESIGN-GUIDE v2 is the canonical art-sampled palette | Accepted by god for a vision-led polish pass; NOT a functional/content defect. Color-fidelity itself could not be machine-verified (no vision) |
| 3 | INFO | FAQ item 0 expands on load | `useState(0)` (`FAQ.jsx:13`) — first question open by default | Benign UX choice, not a defect |
| 4 | INFO | Calculator subsidy capped at ₹78,000 for systems > 3 kW | `Calculator.jsx:19-22` + UI copy explains "capped at ₹78,000 (3 kW) per verified rates" | Transparent and labelled; intentional per verified rates |
| 5 | INFO | WhatsApp success text omits the "optional" email/consumption from deep-link | Deep-link payload is a static consult message (`ContactForm.jsx:27-29`) | Matches spec ("label clearly"); not a defect |

## Notes for the integrator (god)

- No implementer defects to fix — everything is green. The only repair done mid-flight (post-1 crop) was god's re-crop and is verified.
- `src/components/` contains 12 spec components **incl. `Footer.jsx`** (my earlier interim note about a missing Footer was resolved once `App.jsx` composition landed).
- Suggested next: optional vision-led palette alignment (item #2), then final integration/user report.

— worker-qa-engineer