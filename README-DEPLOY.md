# Deploying MANASH Media

## Works today, no setup needed
Every page currently loads Tailwind from a CDN and compiles styles in the
browser. This works fine and is what makes drag-and-drop deploy to Netlify
possible with zero build step. The trade-off is page speed: the CDN script
is heavier and slower than a precompiled stylesheet.

## Optional: switch to a compiled stylesheet (faster)
This repo already includes everything needed for a real Tailwind build
(tailwind.config.js, assets/input.css, package.json, netlify.toml). It is
NOT wired into the live pages yet, because generating and testing the actual
output requires a real internet connection to install Tailwind, which the
environment that built this site did not have.

To turn it on:
1. Push this folder to a GitHub repository.
2. In Netlify: "Add new site" -> "Import an existing project" -> connect
   that repo. Netlify will detect netlify.toml and automatically run
   `npm install && npm run build`, which compiles assets/styles.css.
3. Confirm the deployed site looks correct.
4. Come back and ask to have the Tailwind CDN `<script>` tags removed from
   the HTML files and replaced with `<link rel="stylesheet" href="assets/styles.css">`
   — that's the one remaining edit needed to complete the switch.

(Alternative to step 1-2: install Node.js locally, run `npm install` then
`npm run build` yourself, confirm assets/styles.css was created, then drag
the whole folder including that file into Netlify as before.)

## Security headers & consent
netlify.toml also sets CSP and other security headers. If you complete the
Tailwind build switch above, tighten the CSP by removing
`https://cdn.tailwindcss.com` and `'unsafe-eval'` from script-src (a comment
in netlify.toml marks exactly where).
