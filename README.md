# Super Fun Innovations Website v9 — Proof-Locked Build

This is a fresh one-page static site build intended to more closely match the original proof mockup.

## What changed
- Rebuilt `index.html` and `styles.css` from scratch to remove accumulated override conflicts.
- Uses the uploaded SVG logo to generate a cleaner logo asset.
- Uses `assets/hero-prooflocked.png`, a hero illustration composed from the logo characters/capes plus rays, skyline, halftone dots, and hill.
- Keeps the Pick-Me-Up Grogu card as the first portfolio item.
- Adds a small invisible-ish `v9` marker in the footer instead of a large test badge.

## Ideal next hero asset
For an even closer match to the proof, provide a transparent PNG:
- 1400 × 700 px
- only the hero art: two characters, capes, hill, skyline, rays, halftone
- no text, no featured-work cards, no website UI
- white/transparent background preferred

Replace:
`assets/hero-prooflocked.png`

## Local preview
Unzip the folder, open Terminal in the folder, then run:

python3 -m http.server 8000

Open:
http://localhost:8000


## V10 user-supplied WebP hero

This version uses the uploaded WebP file as the top-right hero art:

- `assets/hero-background.webp`
- source size: 1400 × 700 px

WebP is a good format for this use case because it is compact and broadly supported by modern browsers, including GitHub Pages-hosted sites.


## V11 right-anchored hero + v8-style type

This version uses the uploaded WebP hero art and anchors it to the right edge of the hero section. The image is scaled by height rather than width, so it fills the hero section more like the proof.

The headline type has also been adjusted back toward the v8 look: heavy clean sans-serif, with the line break:
Toy ideas / brought to / life.


## V12 copy updates

Merged Adam's copy edits into the v11 layout and cleaned up obvious typos:
- "developement" → "development"
- "innovatsion" → "innovation"
- "high impact" → "high-impact"
- dash in hero copy converted to an em dash


## V13 button/process fixes

- Increased hero section height so the buttons no longer get clipped by the next section.
- Kept the WebP hero art anchored right and scaled by hero height.
- Changed the process step title from Playtest to Develop.
- Removed the white dot texture from the dark process band to reduce visual busyness.


## V14 asset swap

Added the user-supplied visual assets:
- `assets/sketch-panel.webp` — truck sketch / BIG IDEA panel
- `assets/cta-burst.png` — Let's Make Something Super Fun burst

Burst image transparency detected: True

The old CSS burst has been replaced with a real image asset.


## V15 footer cleanup

- Changed the final footer from navy to white so the logo sits on the correct background.
- Removed the email address from the final footer panel.
- Kept a short company description.
- Left the main CTA button above as the primary contact action.


## V16 cream footer

Updated the final footer background to a cream tone sampled from the provided logo image background:
- `#FFF7E4`

This keeps the footer light while feeling a bit warmer and more branded than plain white.


## V17 end on blue CTA

- Removed the final footer entirely so the page ends on the blue CTA banner.
- Removed the red Concepts / Prototypes / Pitch Assets stat row from the About section.
- Expanded the BIG IDEA sketch image to fill more of the About section height.


## V18 project modal

Added one-page project detail modals for the Featured Work cards.

How it works:
- Cards with `data-project="..."` open a modal.
- Project data lives in `script.js`.
- Each project can include:
  - hero image
  - description
  - gallery images
  - retail / buy links
  - video links can be added as regular links or embedded later

Current projects:
- `grogu`
- `active2`


## V19 mobile-friendly project details

Hybrid behavior:
- Desktop/tablet: clicking a Featured Work card opens the modal/lightbox.
- Mobile (max-width 760px): clicking a card opens an inline project detail section below the grid, then scrolls to it.

This keeps the desktop experience polished while making project details feel like a normal vertical mobile page.


## V20 Grogu gallery + mobile tune

- Added user-supplied Grogu project images:
  - `assets/grogu-feature-moment.jpg`
  - `assets/grogu-retail-image.jpg`
- Updated Grogu project gallery to include:
  - product view
  - retail packaging
  - feature moment
- Added Mattel credit in project copy/meta.
- Hid the large homepage hero art on mobile for a cleaner phone layout.


## V21 Batman project

Added second launched project:
- DC Crime Crusher Batman

Image approach:
- This build references public Mattel image URLs directly instead of bundling local image files.
- Once approved product/shelf images are available, download/replace them locally in `assets/` and update `script.js`.

Copy derived from the supplied Mattel and Amazon product pages:
- 12-inch feature figure
- crouched punching attack
- 25+ signature phrases and sounds
- 16 points of articulation
- 4 weapon accessories
- launched by Mattel

Links added:
- Mattel product page
- Amazon product page


## V22 modal fix + clean Coming Soon art

- Rewrote `script.js` cleanly to fix project card click behavior.
- Desktop cards open modal; mobile cards open inline project detail.
- Removed stale `active2` card behavior and replaced it with `batman`.
- Rebuilt `coming-soon-1.svg` through `coming-soon-4.svg`:
  - no text inside SVG
  - no question mark
  - no center box
  - only clean abstract red/blue swoosh art
- Card text below the image now carries the Coming Soon label.


## V23 clean Coming Soon cards + favicon

- Replaced the favicon with the uploaded `assets/favicon.png`.
- Updated the HTML favicon link to use the PNG.
- Simplified Coming Soon SVG images by removing the red/blue leaf/swoosh shapes.
- Coming Soon art now uses a quiet white/gray halftone background, with text only in the card footer.


## V24 copy refinements + Batman primary image

- Replaced the Crime Crusher Batman primary image with the uploaded local file:
  - `assets/batman-primary.jpg`
- Updated homepage copy based on Adam's latest edits.
- Updated process copy:
  - Prototype: "We build working prototypes..."
  - Develop: "world-class electronic and mechanical concept development"
  - Pitch: "help you win with retailers"
- Updated About copy.
- Updated CTA copy from "build" to "create".
