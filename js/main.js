// main.js
// Entry point loaded as a module on every page. Each page only has the
// markup that its feature needs, so the init functions just no-op if their
// elements aren't on the page (see the guard clauses inside each module).

import { initThemeToggle } from "./theme.js";
import { initContactSheet } from "./contact-sheet.js";

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initContactSheet();
});
