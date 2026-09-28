# Heta Patel &mdash; Personal Homepage

## Author

Heta Patel

## Class link

CS 5610 Web Development, Northeastern University Khoury College &mdash;
_replace this line with the actual course/section link before submitting._

## Project objective

Project 1 for CS 5610: a front-end-only static personal homepage built with
vanilla HTML5, CSS3, and ES6+ JavaScript, deployed as a public page. The site
has four pages (Home, Work, Interests, and an AI-generated page), a shared
light/dark theme toggle, and an interactive "contact sheet" photo gallery on
the Interests page as the original creative component.

## Screenshot

_Add a screenshot of the deployed homepage here before submitting, e.g._
`![Homepage screenshot](images/screenshot.png)`

## Instructions to build / run locally

1. Clone or download this folder.
2. No build step is required &mdash; this is a static site. Open `index.html`
   directly in a browser, or serve the folder locally, e.g.:
   ```
   npx http-server .
   ```
3. To install dev dependencies (ESLint, Prettier):
   ```
   npm install
   ```
4. Lint and format:
   ```
   npm run lint
   npm run format
   ```
5. To deploy, push this folder to a public GitHub repository and enable
   GitHub Pages on the `main` branch (Settings &rarr; Pages), or deploy it to
   any static host (Netlify, Vercel, etc.).

## Project structure

```
personal-homepage/
  index.html
  work.html
  interests.html
  ai-page.html
  css/
    style.css
  js/
    main.js
    theme.js
    contact-sheet.js
  images/
    favicon.svg, aperture.svg, frame-01.svg ... frame-06.svg
  design-document.md
  package.json
  .eslintrc.json
  .prettierrc.json
  LICENSE
```

## Use of GenAI tools

Generative AI (Claude, Anthropic &mdash; Sonnet 4.6, via claude.ai, September 2026) was used in building this project, as follows:

- **Scaffolding the site.** I described the assignment rubric and my
  background, and asked Claude to draft the HTML structure, CSS, and ES6
  JavaScript modules for a four-page personal homepage, including a
  light/dark theme toggle and an interactive photo-gallery component.
- **The AI-generated page.** The content of `ai-page.html` is explicitly
  AI-written and disclosed on the page itself, per the assignment
  requirement for a third, AI-generated page. Prompt used: _"Using my
  background [background summary], write a short page imagining my homepage
  ten years from now."_
- **Design document.** Claude helped draft the initial personas and user
  stories in `design-document.md`, which I then reviewed and adjusted.
- **What I did myself:** reviewed, edited, and adjusted all generated code
  and copy to match my own voice, chose the visual direction, wrote the
  academic project descriptions on the Work page, and am responsible for the
  final content submitted.

_Adjust the details above (models/prompts) if you use different tools or
prompts than shown here, so this section accurately reflects what you did._
