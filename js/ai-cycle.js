// ai-cycle.js
// Two small pieces of interactivity for the AI-generated page:
// 1. Tabs that swap between three pre-written AI takes (1/5/10 years out).
// 2. A toggle that reveals the literal prompt used to generate the content,
//    which doubles as a transparency touch for the GenAI-disclosure
//    requirement.

const VERSIONS = {
  1: `
    <p>One year on, the calendar app's recurring-event bug has probably been
    replaced by a new one in whatever Heta's working on next, but the habit
    of splitting a problem into a model, a view, and a controller before
    writing a line of business logic has stuck around. The photography
    hasn't gotten more serious, just more automatic &mdash; the phone comes
    out before the thought "that's a good shot" finishes forming.</p>
  `,
  5: `
    <p>Five years out, the MS is finished and has turned into a few years of
    real production work, most of it far less tidy than a coursework
    calendar app. The database schema instincts from CS 5200 turned out to
    transfer better than expected &mdash; a surprising amount of software
    engineering is still, underneath everything, arguing about what a table
    should look like. The Gujarati cooking is better than it used to be,
    mostly through repetition rather than any deliberate effort to improve.</p>
  `,
  10: `
    <p>By the time this page is out of date, Heta has likely traded the
    calendar app's recurring-event bugs for a different kind of recurring
    problem: the kind that shows up in production at two in the morning.
    The photography habit never really left, either &mdash; if anything, a
    decade of practice means the contact sheet on the interests page has
    been replaced a few times over, each version a little more particular
    about light. If there's a throughline from a Northeastern grad-school
    homepage to whatever comes next, it's probably this: the projects
    change, the languages change, but the habit of writing things down
    tends to stick.</p>
  `,
};

export function initAiCycle() {
  const tabs = document.querySelectorAll(".ai-cycle__tab");
  const content = document.getElementById("ai-cycle-content");

  if (tabs.length && content) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const version = tab.dataset.version;
        if (!VERSIONS[version]) {
          return;
        }
        content.innerHTML = VERSIONS[version];
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");
      });
    });
  }

  const promptToggle = document.getElementById("prompt-toggle");
  const promptPanel = document.getElementById("prompt-panel");

  if (promptToggle && promptPanel) {
    promptToggle.addEventListener("click", () => {
      const isOpen = promptToggle.getAttribute("aria-expanded") === "true";
      promptToggle.setAttribute("aria-expanded", String(!isOpen));
      promptPanel.hidden = isOpen;
      promptToggle.textContent = isOpen
        ? "Show the exact prompt used"
        : "Hide the prompt";
    });
  }
}
