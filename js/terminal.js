// terminal.js
// A small command-line-styled widget. Not a real shell - it just matches
// typed text against a fixed set of commands and prints a canned response,
// styled to look like a terminal session. Built to give visitors something
// memorable that also doubles as a compact "about me" in a CS-flavored way.

const RESPONSES = {
  help: "Available commands: whoami, skills, work, contact, clear",
  whoami:
    "Heta Patel — MS Computer Science student at Northeastern's Khoury College. " +
    "Background in Computer Engineering (Data Science honours), Sarvajanik University.",
  skills:
    "See the skills section above for the full breakdown, but short version: Java, Python, SQL, and a lot of debugging.",
  work: "Calendar app (Java/Swing), library management system (Python/MySQL), and a JSON tree hierarchy. Full details on the Work page.",
  contact:
    "patel.he@northeastern.edu — or the links in the Get in touch section above.",
};

function formatResponse(command) {
  const normalized = command.trim().toLowerCase();
  if (normalized === "") {
    return null;
  }
  if (normalized === "clear") {
    return "clear";
  }
  if (Object.prototype.hasOwnProperty.call(RESPONSES, normalized)) {
    return RESPONSES[normalized];
  }
  return `command not found: ${normalized}. Type "help" to see what's available.`;
}

export function initTerminal() {
  const form = document.getElementById("terminal-form");
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  if (!form || !input || !output) {
    return;
  }

  function printLine(text, isCommand) {
    const line = document.createElement("p");
    line.className = isCommand
      ? "terminal__line terminal__line--command"
      : "terminal__line";
    line.textContent = isCommand ? `> ${text}` : text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = input.value;
    const result = formatResponse(command);

    if (result === null) {
      input.value = "";
      return;
    }

    printLine(command, true);

    if (result === "clear") {
      output.textContent = "";
    } else {
      printLine(result, false);
    }

    input.value = "";
  });

  input.addEventListener("keydown", (event) => {
    event.stopPropagation();
  });
}
