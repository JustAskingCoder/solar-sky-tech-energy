# Creative extraction tools (god's OCR rig — works without image vision)

The site worker model cannot see images, so verify everything through OCR.
Two compiled Swift/macOS binaries (also sources here):

- `docs/tools/ocr <img> <out>` — OCR an image (accurate EN), writes out +
  prints `box…\ttext` lines (normalized x y w h, origin = BOTTOM-left).
- `docs/tools/crop <img> <x> <y> <w> <h> <scale> <out>` — crop source pixels
  (origin = TOP-left) then upscale; outputs PNG.

## Verified creative bounds (god, 2026-09-13)

Rendered each PDF (single page) with `qlmanage -t -s 4096` to a 2894×4096 PNG.
The promotional artwork sits at approximately:

- x: 120 … 2700 (px), y-from-top: 1560 … 2560 (px)
- The brand footer strip ("Sky Tech Energy ☎ …") is the BOTTOM ~180px of the
  artwork (~2380–2560).
- IG chrome lives above (~y<1560: header/@username/AI content/caption) and below
  (~y>2560: likes, "Add a comment", URL bar).

## Extraction workflow (do this for each of the 4 PDFs)

1. `qlmanage -t -s 4096 -o out dir Instagram<N>.pdf` → `Instagram<N>.pdf.png`
2. `./crop Instagram<N>.pdf.png 120 1560 2600 1000 2 crop.png`
3. `./ocr crop.png out.txt` — check: the verified numbers for that post survive
   (subsidy table, offer text, phones) and NO IG-UI strings remain
   (`likes`, `Add a comment`, `Post`, `@sky_tech_energy_`, `See translation`,
   `AI content`).
4. Adjust bounds a few px (not by more than ~60px on any side) until clean;
   then save the FINAL art-only crop as `public/images/instagram-post-<N>.jpg`.
   Goal is the artwork with as little margin as possible — do NOT "improve" the
   artwork, and NEVER include the IG screenshot chrome.

## The 4 posts' OCR-verified content (sanity anchor)

| Post | Key content (use to verify crops) |
|---|---|
| 1 | Sky Tech ENERGY · PM Surya Ghar · subsidy ₹30,000 / ₹60,000 / ₹78,000 · "Zero electricity bill" style line · www.skytechenerg.in |
| 2 | Sky Tech ENERGY · "Powering a Sustainable Future" · Zero Down Payment · Loan Facility · 78,000 / 18,000 · Professional Installation + Subsidy Assistance · Residential / Commercial / Industrial · phones |
| 3 | 1 KW ₹30,000 / 2 KW ₹60,000 / 3 KW ₹78,000 · brands Waaree/Adani/Polycab/Fujiyama · footer "Sky Tech Energy ☎ 9307870422 / 7448224139 / 9699462881" |
| 4 | 3 KW · ₹1,90,000 · subsidy ₹78,000 · brands Adani/Polycab/Waaree/Fujiyama · footer phones |

## Save rules for reused creatives

- `public/images/instagram-post-1.jpg` … `instagram-post-4.jpg` (JPEG ~ q90).
- Never alter numbers/prices/phones inside the artwork.
- You may use the brand panel at the footer strip as-is (it is part of the
  artwork).