# Keele Health Partners

Standalone static website prototype for Keele Health Partners (KHP).

Live site:
- https://bearduk.github.io/keele-health-partners/

Repository:
- https://github.com/bearduk/keele-health-partners

## Project structure

- `index.html` - main one-page site
- `assets/css/styles.css` - site styling
- `assets/js/site.js` - minimal interaction logic
- `assets/media/` - local media assets used by the homepage
- `robots.txt` - blocks search indexing

## Notes

This project is intentionally simple:
- no framework
- no build step
- no package manager
- suitable for direct deployment via GitHub Pages

## Important implementation notes

### Contact form

The contact area is currently a visual mock and should not be treated as a production form workflow.

In production, this should be replaced with:
- a Microsoft Form embed, or
- a link/handoff to a Microsoft Form

This is the preferred route for the live site rather than maintaining a custom front-end-only form.

### Cookie consent

The current cookie banner is only a lightweight placeholder UI that stores a choice locally.

It is not connected to a full consent-management platform and does not provide production-grade cookie compliance on its own.

For a real deployment, add a proper consent solution such as:
- Cookiebot

If analytics, embeds, or any other non-essential scripts are introduced, they should only load after valid consent has been captured through that platform.

## Deployment

This repo is configured as a static GitHub Pages site published from:
- branch: `main`
- folder: `/`

## Search indexing

Search indexing is intentionally blocked using:
- `robots.txt`
- `<meta name="robots" content="noindex, nofollow">`
