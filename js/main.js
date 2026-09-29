// main.js
// Entry point loaded as a module on every page. Each page only has the
// markup that its feature needs, so the init functions just no-op if their
// elements aren't on the page (see the guard clauses inside each module).

import { initThemeToggle } from "./theme.js";
import { initContactSheet } from "./contact-sheet.js";
import { initReveal } from "./reveal.js";
import { initSkills } from "./skills.js";
import { initTerminal } from "./terminal.js";
import { initAccordion } from "./accordion.js";
import { initAiCycle } from "./ai-cycle.js";

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initContactSheet();
  initReveal();
  initSkills();
  initTerminal();
  initAccordion();
  initAiCycle();
});
