// skills.js
// Animates each skill bar's fill width from 0 to its target percentage
// once the skills section scrolls into view. The target percentage comes
// from a data attribute set in the HTML, so the markup stays the single
// source of truth for skill levels.

export function initSkills() {
  const section = document.getElementById("skills");
  if (!section) {
    return;
  }

  const bars = section.querySelectorAll(".skill__fill");

  function animateBars() {
    bars.forEach((bar) => {
      const level = bar.dataset.level || "0";
      bar.style.width = `${level}%`;
    });
  }

  if (!("IntersectionObserver" in window)) {
    animateBars();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBars();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
}
