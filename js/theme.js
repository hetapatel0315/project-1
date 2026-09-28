// theme.js
// Handles the light/dark toggle in the header and remembers the choice
// between visits using localStorage.

const STORAGE_KEY = "hp-theme";

function getStoredTheme() {
  return window.localStorage.getItem(STORAGE_KEY);
}

function applyTheme(theme, toggleButton) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleButton.setAttribute("aria-pressed", "true");
    toggleButton.querySelector(".theme-toggle__label").textContent = "Light mode";
  } else {
    document.documentElement.removeAttribute("data-theme");
    toggleButton.setAttribute("aria-pressed", "false");
    toggleButton.querySelector(".theme-toggle__label").textContent = "Dark mode";
  }
}

export function initThemeToggle() {
  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) {
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const stored = getStoredTheme();
  const startingTheme = stored || (prefersDark ? "dark" : "light");
  applyTheme(startingTheme, toggleButton);

  toggleButton.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme, toggleButton);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  });
}
