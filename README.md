# Bridgework Dental Advisory — Website

A plain static site: no build step, no framework. `index.html` + `style.css` + `script.js` + `assets/`.

## Before you push this live

Three placeholders are marked `TODO` in the code — replace them before launch:

1. **Booking link** (`index.html`, search for `id="booking-link"`) — swap the `href="#"` for your real Calendly (or other booking tool) URL. Free Calendly setup takes a few minutes.
2. **Instagram handle** (`index.html`, footer section) — replace `https://instagram.com/` with your actual profile URL.
3. **Contact email** (`index.html`, footer section) — replace `hello@bridgeworkdental.co.uk` with your real address.

Everything else — headline, copy, pricing, the four-step process — comes straight from the Bridgework business plan. Edit any of it directly in `index.html`; it's plain HTML, no templating.

## Pushing to GitHub (for the Hostinger "Deploy from GitHub" flow)

If you don't have a repo yet:

```bash
cd bridgework-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

(Create the empty repo on github.com first — no README/license needed there, this folder already has one.)

Then in Hostinger's deploy screen, point it at that repo's `main` branch, root directory (`/`), no build command — it's a static site, so it just needs to serve the files as-is.

## Making changes later

Once the repo is live, any edit + `git commit` + `git push` will trigger a fresh deploy on Hostinger automatically (that's the whole benefit of the GitHub deploy method over uploading files by hand).

## File structure

```
bridgework-site/
├── index.html          the whole site (single page)
├── style.css            all styling — brand colors as CSS variables at the top
├── script.js             mobile menu toggle + footer year, no dependencies
├── README.md            this file
└── assets/
    ├── logo.png             full logo lockup (header, used at 40px tall)
    ├── favicon-32.png       browser tab icon
    ├── icon-192.png          used in footer + as a PWA-style icon
    ├── icon-512.png          larger icon, kept for future use
    ├── apple-touch-icon.png  iOS home-screen icon
    └── favicon-src.png       the source crop the icons were generated from
```

## Brand colors (from your logo)

- Dark green `#1c4231` — headings, wordmark, primary buttons
- Brown/olive `#4d3601` — accents, bullet points, step numbers
- Sage `#e3ede8` — soft section backgrounds

## Fonts

Playfair Display (headings) + Inter (body), both loaded from Google Fonts — no local font files to manage.
