# Solarshop responsive website

A complete multi-section Solarshop homepage built with separate HTML, CSS, and vanilla JavaScript files.

## Files
- `index.html` — semantic page structure and editable text.
- `style.css` — brand colours, layout, responsive breakpoints, hover effects, and animations.
- `script.js` — mobile navigation, reveal-on-scroll, back-to-top button, FAQ details, and demo form validation.
- `assets/` — image crops extracted from the generated Solarshop mockup screenshot.

## Run locally
Open `index.html` in a modern browser, or use VS Code's Live Server extension for a local preview.

## Editing
- Edit text, headings, project labels, and contact placeholders in `index.html`.
- Edit brand colours and spacing in the `:root` custom properties at the top of `style.css`.
- Replace images inside `assets/` while keeping the filenames, or update the corresponding paths in HTML/CSS.
- Adjust animations in the `.reveal` CSS rules and `script.js` IntersectionObserver settings.
- Replace the contact placeholders with verified company details before publishing.

## Important notes
- Images in `assets/` were cropped from a flattened generated mockup. They are useful for matching the visual reference, but they are not the original high-resolution photography or original logo source files. Replace with properly licensed original assets if available.
- The quote form validates locally and shows a demo confirmation. It does not send enquiries to a real inbox until you connect a form service or backend.
- Verify all company claims and project details before publishing.
