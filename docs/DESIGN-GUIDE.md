# Sky Tech Energy — Design Guide

This document drives the single-page site build for the frontend-engineer agent. It is
the design counterpart of `CONTENT.md` (the authoritative content contract). Every
section listed here corresponds 1:1 with the 12 sections specified in
`CONTENT.md` → *Spec summary*.

All colors were **sampled from the artwork inside the four promo creatives**
(`docs/pdfs/Instagram*.pdf`, artwork only — no Instagram chrome). Visuals in
`public/images/` are the only approved media (see [Asset manifest](#asset-manifest)).

---

## 1. Palette — derived from the creatives

Sampling of the artwork's dominant pixel clusters gave four color families. The design
tokens below are the tuned, on-brand values (white mid-tones for light pages, keeping
the creatives' saturated greens and sun yellows).

| Token | Hex | RGB | Roles |
|---|---|---|---|
| `skyGreen` | `#F2FBF5` | 242,251,245 | Page background (light sections), card bg |
| `lightGreen` | `#E7F5EC` | 231,245,236 | Alternating section background |
| `green` | `#22A04E` | 34,160,78 | Primary CTA, links, active states, accents |
| `deepGreen` | `#0B5C34` | 11,92,52 | Headings, footer, primary text on light |
| `ink` | `#12382A` | 18,56,42 | Body text (green-tinted neutral) |
| `panelDark` | `#102A1E` | 16,42,30 | Dark surfaces (footer, cards on green) |
| `panelLine` | `#2E6B46` | 46,107,70 | Borders/hairlines on light-green |
| `sunYellow` | `#FFC531` | 255,197,49 | Sun accent, highlights, badges, icons |
| `sunOrange` | `#FF9A1F` | 255,154,31 | CTA hover, selected state, warm accents |

Sampled source notes (families): deep greens `#004422`-family; dark teal/navy
`#001133-#111111` (creative background blocks); brilliant yellow-green
`#CEE61D`-family; sun yellow `#E6E61D`-family; red-orange `#E01600`-family (used only
as the "hot offer" accent in the creatives — keep it out of the UI except as tiny
badges/dots, prefer `sunOrange`).

Usage rules:

- One primary + one accent per view. Primary is always `green`; accent is `sunYellow`
  (or `sunOrange` on hover).
- Never pair `deepGreen` text on `panelDark` (both dark). `deepGreen` headings on white/
  `skyGreen`; white text on `panelDark`/`green`.
- The early **PM Surya Ghar** band may use the creatives' yellow-green or a light-green
  wash — never lime at full saturation on body text.
- Do NOT introduce additional hues. Everything traces to the table above.

## 2. Typography

- **Family:** system sans stack only (no web-font dependency):
  `-apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.
  (Creatives use a clean sans; system stack is the safe equivalent.)
- **Scale (mobile-first):**

| Level | Size (mobile) | Size (≥768px) | Weight | Color |
|---|---|---|---|---|
| Display / Hero H1 | 32px | 56px | 800 | `deepGreen` |
| Section H2 | 26px | 40px | 800 | `deepGreen` |
| Card H3 | 18px | 20px | 700 | `deepGreen` |
| Body | 16px | 16px | 400 | `ink` |
| Emphasis body | 16px | 16px | 600 | `deepGreen` |
| Small / captions | 13px | 13px | 500 | `panelLine` |
| Button label | 14px | 14px | 700 | white / `deepGreen` |

- Line heights: headings 1.15; body 1.6; buttons 1.1. Letter-spacing: 0 for body,
  0.02em for uppercase-eyebrows/labels.
- Numbers and prices must use `font-variant-numeric: tabular-nums` so subsidy values
  line up in cards/tables.
- RTL not required.

## 3. Spacing & layout grid

- Base unit **4px**; spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- Page container: max-width **1200px**, gutters 16px mobile / 32px desktop.
- Section padding: `96px 32px` desktop, `64px 16px` mobile.
- Section rhythm: every section is full-bleed; alternate backgrounds white →
  `lightGreen` → white → `skyGreen`.
- Card grids: 1 col mobile, 2 cols ≥600px, 3 cols ≥992px (subsidy, benefits, solutions).

## 4. Cards, shadows, CTAs (recurring treatments)

- **Card:** `border-radius: 16px`; `background: #fff`; `padding: 24px`;
  `border: 1px solid panelLine` (subtle); icon area 48px, uses `green`/`sunYellow`.
- **Shadow:** one tier only — `0 10px 24px rgba(18,56,42,0.08)`. Hover raises to
  `0 16px 32px rgba(18,56,42,0.12)` with `translateY(-4px)`; transition 160ms.
- **Rounded image cards (creatives):** `border-radius: 14px`; `overflow: hidden`;
  same shadow tier.
- **Primary CTA:** `green` bg, white text, `border-radius: 999px`, `padding: 14px 28px`,
  weight 700; hover `sunOrange`. Dark-on-dark contexts: `sunYellow` bg, `deepGreen`
  text.
- **Secondary CTA:** outline — 1px `green`, text `deepGreen`; hover fills `lightGreen`.
- **Eyebrow labels** above section H2: uppercase, 12px, weight 700, `sunOrange` or
  `green`, letter-spacing 0.12em.
- Focus states: 2px `sunYellow` ring. Accessible min tap target 44px.

## 5. Imagery

- Hero and solution visuals: use the generated placeholders so the build is never
  blocked: `hero-solar.jpg`, `solar-home.jpg`, `solar-commercial.jpg`,
  `solar-industrial.jpg`. They are flat solar scenes (sky, sun, roof + panel grid).
- Brand mark: `logo.png` (sun + panel-grid mark, "Sky Tech Energy" wordmark).
- **Critical:** reuse the Instagram-creative cards **exactly** as provided in
  `public/images/instagram-post-1..4.jpg`. Do not redesign/restyle/re-number them —
  crop only (already done). Never re-render text or numbers from the cards into HTML.

## 6. Section-by-section layout spec (all 12)

### 1 — Navbar
Sticky top bar, `rgba(247,251,248,0.92)` + backdrop blur, bottom hairline
`panelLine`. Left: `logo.png` (height 40px, `h2` auto). Center/right (≥992px):
Home · About · Solar Solutions · PM Surya Ghar · Why Solar · Process · FAQs ·
Contact as `ink` 15px links; hover `green`. CTA `Get Free Consultation` (primary,
small: `padding 10px 20px`). Mobile <992px: hamburger (44px hit box, `ink` icon),
full-height slide-down panel, `skyGreen` bg, stacked links, CTA full-width.
Scroll behavior: add `deepGreen` shadow on scroll.

### 2 — Hero
Full-bleed `skyGreen` → white gradient band, container 2-col ≥992px.
Left (order 2 on mobile, after text = visual second):
- Eyebrow: `Powering a Sustainable Future – Solar EPC & Energy Solutions`
- H1 (display): headline on rooftop solar for home & business (strong, savings- +
  subsidy-led; no invented stats)
- Highlight chip row: `Solar Savings` · `PM Surya Ghar Subsidy` · `Clean Energy` ·
  `Professional Installation` (small pill cards, sun icon in `sunYellow`)
- CTAs: primary `Get Free Consultation` (→ #contact), secondary
  `Check Solar Savings` (→ #calculator)
Right: `hero-solar.jpg` in a rounded card (radius 16px, shadow tier). Mobile: card
first, CTAs stacked (primary above secondary), each full-width.

### 3 — PM Surya Ghar (subsidy section)
`lightGreen` band. Eyebrow `PM Surya Ghar`. H2 headline about the government rooftop
subsidy. Intro line: value shown "comes straight from our promo creatives".
3 cards (1/2/3-col): **1 kW / 2 kW / 3 kW**, each with: capacity label (H3),
`₹30,000 / ₹60,000 / ₹78,000` rendered LARGE in `deepGreen` + tabular-nums
(exact verified values only — see CONTENT.md), note line "Subsidy amount — per
PM Surya Ghar guidelines". Below cards, one line: "3 kW system total from our
creative: ₹1,90,000" + a small CTA "Get Free Consultation". Do NOT add other
numbers. Highlight center card (2 kW) with `sunYellow` top-border or badge.

### 4 — Why choose solar
White band. 6 cards, 1/2/3-col. Each: 48px icon (line style, stroke `green`; one
`sunYellow` fill at index 2), H3, one sentence. Titles (exact): Lower Electricity
Bills · Government Subsidy · Clean & Green Energy · Long-Term Savings · Energy
Independence · Environmentally Friendly. Card content generic/neutral; never invent
percentages or timelines.

### 5 — Solar solutions
`skyGreen` band. H2 "Solar solutions for every space". 3 cards: **Residential /
Commercial / Industrial**. Each: rounded image (matching placeholder: `solar-home.jpg`,
`solar-commercial.jpg`, `solar-industrial.jpg`), H3, 1–2 sentence neutral copy
(no invented credentials), link-style CTA "Get a Quote" (→ #contact). Footer chip on
every card, small: `Solar EPC & Energy Solutions`.

### 6 — How it works (process)
White band. Eyebrow `Simple process`. 5 steps in a numbered vertical timeline
(≥768px: 5 columns of cards with a connecting hairline; mobile: left gutter line).
1 Contact/Consultation → 2 Site Survey → 3 System Design → 4 Installation →
5 Solar Activation/Support. Each: number badge (`sunYellow` circle, `ink` numeral),
H3, one neutral sentence. NO turnaround-day claims; where a step begs for a duration
use "confirm with Sky Tech Energy"-style wording.

### 7 — Savings calculator
`lightGreen` band. Two-col ≥992px:
- Left: copy — H2, honest framing "Indicative calculation", the assumptions list
  (anchored to verified data): subsidy table 1/2/3 kW (₹30,000/60,000/78,000);
  3 kW total ₹1,90,000 (from creative); derived net ≈ ₹1,12,000 for 3 kW
  **(label "estimated")**; capacity mapping: up to ₹2,000 bill → 1 kW, up to ₹4,000 →
  2 kW, above → 3 kW (state as assumption).
- Right: the calculator card — inputs `Monthly electricity bill (₹)` (number,
  required), optional `Monthly consumption (kWh)`; on submit show outputs:
  Recommended capacity · Estimated savings · Approximate cost · Subsidy ·
  Estimated final cost. Every output labeled **"Estimated / Indicative
  calculation"** and the card footer line "Not an official Sky Tech Energy
  quotation". Values in tabular-nums, `deepGreen`.
- CTA under outputs: "Get Free Consultation".

### 8 — Why Sky Tech Energy
White band. H2. 4 feature blocks (2×2 grid): Solar EPC & Energy Solutions ·
Residential / Commercial / Industrial · Professional Installation ·
Subsidy Assistance. Each: icon, H3, one neutral line. Optional trust strip:
the 4 brands from the creatives — Adani · Polycab · Waaree · Fujiyama — as plain
text chips (source: promo creatives) with note "modules shown in our creatives".
No invented credentials anywhere.

### 9 — Offers / creatives
`skyGreen` band. Eyebrow `Our offers`. H2. 4 image cards in a 2×4 grid
(1 col mobile, 2 cols ≥600, 4 cols ≥1200): each card = `instagram-post-1..4.jpg`
(use exactly as-is, radius 14px, shadow) above a small CTA row: `Enquire Now` +
`Get Quote` (both 32px-tall secondary/primary mix — primary on the right). Do not
re-render any card text/numbers into HTML. Above the grid add: "Offers & offers
detail as shown in our creatives".

### 10 — FAQ
White band. Accordion (single-open): chevron (`sunOrange`) rotates, 44px rows,
panel expands with 240ms height transition; item H4 `deepGreen`. Questions (from
CONTENT.md): what is rooftop solar; what is PM Surya Ghar; how it lowers bills;
what size fits my home; how the subsidy works; install time (**no invented claims —
answer marked "to be confirmed by Sky Tech Energy"**); behaviour on cloudy days;
maintenance. Keep honest + generic. Last item CTA strip: "Still have questions?
Get Free Consultation".

### 11 — Contact / lead form
`lightGreen` band. Left (copy): H2 `Ready to Switch to Solar?`; sub `Get a free
consultation and find the right solar solution for your home or business.`; below,
phone contact card (phones 9307870422 · 7448224139 · 9699462881) and WhatsApp
deep-link `wa.me/919307870422` labeled clearly.
Right (form card, radius 16px, shadow): fields `Name`(text),
`Mobile Number`(tel, required), `Email`(email), `City`(text),
`Monthly Electricity Bill`(number), `Customer Type`(select:
Residential/Commercial/Industrial). Button `Get Free Consultation` (primary,
full-width). Static handler: validated, on submit show success state
(check icon `green`, message "Thank you! We'll reach out shortly."), optionally
offer WhatsApp deep-link (labeled). No backend behavior invented.

### 12 — Footer
`panelDark` bg, white text. Grid: 
1. Brand col: `logo.png` (white-tolerant variant not available — use a light version
   or white "Sky Tech Energy" text lockup; fallback: white text wordmark) + tagline
   `Powering a Sustainable Future`.
2. Services: `Solar EPC & Energy Solutions`; list Residential · Commercial ·
   Industrial.
3. Quick links: same nav set as #1 (anchors to sections).
4. Contact: phone(s) above with `tel:` links; WhatsApp + Instagram links; owned URL
   `www.skytechenerg.in` (never invent an address).
Bottom bar (hairline `panelLine` on dark): copyright `© {year} Sky Tech Energy`.
Design: `sunYellow` accent for links/icons only; white body text 14px.

---

## Asset manifest (`public/images`, all committed)

| File | Size (px) | Purpose |
|---|---|---|
| `logo.png` | 1200×340 | Navbar + footer brand mark |
| `hero-solar.jpg` | 1600×900 | Hero visual |
| `solar-home.jpg` | 800×600 | Residential solution card |
| `solar-commercial.jpg` | 800×600 | Commercial solution card |
| `solar-industrial.jpg` | 800×600 | Industrial solution card |
| `instagram-post-1.jpg` | 5200×1700 | Offers card 1 (crop of creative 1, art-only) |
| `instagram-post-2.jpg` | 1800×1700 | Offers card 2 (art-only) |
| `instagram-post-3.jpg` | 1800×1700 | Offers card 3 (art-only) |
| `instagram-post-4.jpg` | 1800×1700 | Offers card 4 (art-only) |

Creative caveat: creative 1's art unavoidably carries the baked-in "2d See
translation" chip from the original screenshot (it sits inside the artwork frame,
adjacent to the footer URL `www.skytechenerg.in`); all other UI stringing ("likes",
"Add a comment", usernames, hashtags, dates) was removed. Digits, prices, offers,
phones, and brand names inside the artwork are untouched. Cards must be displayed
as-is — never cropped further or restyled.