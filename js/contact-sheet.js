// contact-sheet.js
// The creative component for the interests page: a "contact sheet" of photo
// frames. Clicking (or pressing Enter/Space on) a frame brings it forward.
// Once a frame is active, left/right arrow keys move to the next or
// previous frame, and Escape clears the selection.

export function initContactSheet() {
  const strip = document.getElementById("contact-sheet");
  const hint = document.getElementById("contact-sheet-hint");
  if (!strip) {
    return;
  }

  const frames = Array.from(strip.querySelectorAll(".contact-sheet__frame"));
  let activeIndex = -1;

  function setActive(index) {
    frames.forEach((frame) => frame.classList.remove("is-active"));

    if (index < 0 || index >= frames.length) {
      activeIndex = -1;
      hint.textContent = "No frame selected.";
      return;
    }

    activeIndex = index;
    const frame = frames[index];
    frame.classList.add("is-active");
    // Keep real focus on the active frame so the focus ring and the
    // selection cannot drift apart during arrow-key navigation.
    if (document.activeElement !== frame) {
      frame.focus();
    }
    const caption = frame.querySelector(".contact-sheet__caption").textContent;
    hint.textContent = `Viewing: ${caption} (${index + 1} of ${frames.length}). Use arrow keys to move, Escape to close.`;
  }

  frames.forEach((frame, index) => {
    frame.addEventListener("click", () => {
      setActive(activeIndex === index ? -1 : index);
    });

    frame.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActive(activeIndex === index ? -1 : index);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (activeIndex === -1) {
      return;
    }
    if (event.key === "ArrowRight") {
      setActive((activeIndex + 1) % frames.length);
    } else if (event.key === "ArrowLeft") {
      setActive((activeIndex - 1 + frames.length) % frames.length);
    } else if (event.key === "Escape") {
      setActive(-1);
    }
  });
}
