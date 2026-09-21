# Sky Tech Energy — site content contract (authoritative)

Read this first. Every number and claim on the site must trace to this file or
to the creatives themselves. **Do not invent facts, prices, statistics, awards,
cities, or turnaround times.**

## Source rules (non-negotiable)

- The 4 promotional **Instagram creatives** (PDFs in `docs/pdfs/`) are the ONLY
  approved source of Sky Tech-specific marketing content.
- Read ONLY the promotional image inside each PDF. Ignore the Instagram
  profile, username, follower counts, likes, comments, captions, hashtags,
  dates, "AI content" label, and all surrounding Instagram UI.
- The Ecozen reference (https://www.ecozensolutions.com/rooftopsolar/) is a
  **structure/UX reference only** — never copy its branding, text, or images.
- Preserve the creatives exactly when reusing them (do not redesign, renumber,
  or restyle them). Crop only the artwork itself out of the screenshot.

## Verified facts (extracted from the creatives via OCR — god, 2026-09-13)

| Fact | Value | Where verified |
|---|---|---|
| Company | Sky Tech Energy | all 4 creatives |
| Tagline | "Powering a Sustainable Future" | post 2 |
| Offering | Solar EPC & Energy Solutions; Residential / Commercial / Industrial | post 2 footer + human |
| Website | www.skytechenerg.in | post 1 |
| Email | skytechenergy03@gmail.com | human request (2026-09-21) |
| Phone 1 | 9307870422 | posts 2, 3, 4 |
| Phone 2 | 7448224139 | posts 3, 4 |
| Phone 3 | 9699462881 | posts 2, 3, 4 |
| Subsidy (PM Surya Ghar) | 1 kW → ₹30,000; 2 kW → ₹60,000; 3 kW → ₹78,000 | posts 1 & 3 |
| 3 kW system total | ₹1,90,000 (removed from hero strip per human request; post 4 removed from site) | post 4 (archived) |
| Offers shown | Zero Down Payment; Loan Facility; Professional Installation + Subsidy Assistance Available | post 2 |
| Panel/module brands shown | Adani, Waaree, Polycab, Fujiyama | posts 3 & 4 |

## Number arithmetic (allowed, label as estimated)

- 3 kW net after subsidy: ₹1,90,000 − ₹78,000 = ₹1,12,000 → **label "estimated"**
  in the savings calculator context. Never present as a firm quotation.

## Content that must NOT appear (not in creatives / not provided)

- Installation counts, years of experience, certifications, awards, pan-India
  presence, service-area city lists, turnaround days, warranty years, "₹/unit
  savings", average bill-reduction percentages.
- If a section begs for one of these, write neutral wording or a
  "confirm with Sky Tech Energy" line.

## Spec summary (full brief from the human — god, 2026-09-13)

Build ONE single-page static site, modern/professional/trustworthy. Reusable
React components: `Navbar Hero SubsidySection Benefits Solutions Process
Calculator InstagramPosts FAQ ContactForm Footer`.

Sections (in order):
1. **Navbar** — logo "Sky Tech Energy"; links Home/About/Solar Solutions/PM
   Surya Ghar/Why Solar/Process/FAQs/Contact; CTA "Get Free Consultation";
   hamburger on mobile.
2. **Hero** — strong rooftop-solar headline; highlights = solar savings, PM
   Surya Ghar, subsidy, clean energy, professional installation; CTAs "Get Free
   Consultation" + "Check Solar Savings". Use a royalty-free rooftop-solar
   visual (placeholder ok).
3. **PM Surya Ghar section** — cards for 1 kW / 2 kW / 3 kW with ONLY the
   verified subsidy values above. Prominent.
4. **Why choose solar** — cards: Lower Electricity Bills, Government Subsidy,
   Clean & Green Energy, Long-Term Savings, Energy Independence, Environmentally
   Friendly.
5. **Solar solutions** — Residential / Commercial / Industrial cards (suitable
   icon/visual; royalty-free placeholder ok).
6. **How it works** — 5 steps: Contact/Consultation → Site Survey → System
   Design → Installation → Solar Activation/Support. No turnaround claims.
7. **Savings calculator** — interactive; inputs monthly bill (+ optional
   consumption); outputs recommended capacity, estimated savings, approximate
   cost, subsidy, estimated final cost. Clearly label all results "Estimated /
   Indicative calculation" and "not an official Sky Tech Energy quotation".
   Anchor math to the verified subsidy table and ₹1,90,000 3 kW figure; keep
   assumptions transparent.
8. **Why Sky Tech Energy** — Solar EPC & Energy Solutions; Residential /
   Commercial / Industrial; professional installation; subsidy assistance;
   customer-focused service. No invented credentials.
9. **Offers / creatives** — display the 4 promo creatives as clean cards (crop
   out the Instagram chrome), each with CTA "Enquire Now"/"Get Quote". No
   likes/comments/captions/usernames/dates/hashtags/UI.
10. **FAQ** — accordion: what is rooftop solar; what is PM Surya Ghar; how it
    lowers bills; what size fits my home; how subsidy works; install time
    (no invented claims — mark for company confirmation); cloudy-day behaviour;
    maintenance. Keep honest, generic where unsupported.
11. **Contact / lead form** — heading "Ready to Switch to Solar?"; sub
    "Get a free consultation and find the right solar solution for your home or
    business." Fields: Name, Mobile Number, Email, City, Monthly Electricity
    Bill, Customer Type (Residential/Commercial/Industrial). Button "Get Free
    Consultation". Static handler — show a success state; optionally WhatsApp
    deep-link to 9307870422 (label clearly).
12. **Footer** — Sky Tech Energy, "Powering a Sustainable Future", "Solar EPC &
    Energy Solutions", Residential | Commercial | Industrial, phone(s) above,
    quick links, WhatsApp + Instagram links (use www.skytechenerg.in where an
    owned URL is needed; no invented address).

## Design direction

Green primary, dark green headings, white backgrounds, light-green sections,
yellow/orange sun accents; rounded cards, clean typography, large hero, strong
CTAs, subtle shadows, modern icons, generous whitespace, mobile-first. Derive
the palette from the creatives' artwork. Trustworthy, not templated.