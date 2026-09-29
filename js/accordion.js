// accordion.js
// Toggles a "read more" section inside each timeline item on the work
// page. Uses a <button> with aria-expanded so screen readers announce the
// state change, and toggles a class rather than inline styles.

export function initAccordion() {
  const toggles = document.querySelectorAll(".timeline__toggle");
  if (!toggles.length) {
    return;
  }

  toggles.forEach((toggle) => {
    const targetId = toggle.getAttribute("aria-controls");
    const panel = document.getElementById(targetId);
    if (!panel) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      toggle.textContent = isOpen ? "Read more" : "Show less";
    });
  });
}
