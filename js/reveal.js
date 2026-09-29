// reveal.js
// Adds a "is-visible" class to any element with the "reveal" class once it
// scrolls into view, so CSS can animate it in. Uses IntersectionObserver
// instead of a scroll listener so it doesn't run on every scroll tick.

export function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    // Fallback: just show everything if the browser is old.
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}
