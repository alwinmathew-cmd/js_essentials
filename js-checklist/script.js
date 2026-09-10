/* ============================================================
   JS Before TS — Progress Tracker
   Single source of truth: TOPICS (1-40). CORE_PATH references
   the same topic ids, so checking a topic anywhere stays in sync.
   ============================================================ */

const STORAGE_KEY = "js-before-ts:v1";

const TOPICS = [
  { id: 1,  name: "Variables — let, const, var",                 group: "Fundamentals" },
  { id: 2,  name: "Data Types",                                   group: "Fundamentals" },
  { id: 3,  name: "Type Coercion",                                group: "Fundamentals" },
  { id: 4,  name: "== vs ===",                                    group: "Fundamentals" },
  { id: 5,  name: "Truthy & Falsy Values",                        group: "Fundamentals" },
  { id: 6,  name: "Operators",                                    group: "Fundamentals" },
  { id: 7,  name: "Conditional Statements",                       group: "Fundamentals" },
  { id: 8,  name: "Loops",                                        group: "Fundamentals" },

  { id: 9,  name: "Functions",                                    group: "Functions & Scope" },
  { id: 10, name: "Arrow Functions",                               group: "Functions & Scope" },
  { id: 11, name: "Function Parameters & Return Values",           group: "Functions & Scope" },
  { id: 12, name: "Callback Functions",                            group: "Functions & Scope" },
  { id: 13, name: "Higher-Order Functions",                        group: "Functions & Scope" },
  { id: 14, name: "Scope",                                         group: "Functions & Scope" },
  { id: 15, name: "Closures",                                      group: "Functions & Scope" },
  { id: 16, name: "Hoisting",                                      group: "Functions & Scope" },
  { id: 17, name: "this Keyword",                                  group: "Functions & Scope" },

  { id: 18, name: "Arrays",                                        group: "Data Structures" },
  { id: 19, name: "Array Methods — map, filter, reduce, find, some, every", group: "Data Structures" },
  { id: 20, name: "Objects",                                       group: "Data Structures" },
  { id: 21, name: "Object Destructuring",                          group: "Data Structures" },
  { id: 22, name: "Array Destructuring",                           group: "Data Structures" },
  { id: 23, name: "Spread & Rest Operators",                       group: "Data Structures" },
  { id: 39, name: "Map & Set",                                     group: "Data Structures" },

  { id: 24, name: "Optional Chaining",                             group: "Modern Syntax" },
  { id: 25, name: "Nullish Coalescing",                            group: "Modern Syntax" },
  { id: 26, name: "JSON",                                          group: "Modern Syntax" },
  { id: 40, name: "Basic ES6+ Features",                           group: "Modern Syntax" },

  { id: 27, name: "DOM Manipulation",                              group: "Browser & DOM" },
  { id: 28, name: "Events & Event Handling",                       group: "Browser & DOM" },
  { id: 29, name: "Event Bubbling & Delegation",                   group: "Browser & DOM" },

  { id: 30, name: "Error Handling — try/catch/throw",              group: "Async & Errors" },
  { id: 31, name: "Promises",                                      group: "Async & Errors" },
  { id: 32, name: "async/await",                                   group: "Async & Errors" },
  { id: 33, name: "Promise.all()",                                 group: "Async & Errors" },
  { id: 34, name: "Fetch/API Calls",                                group: "Async & Errors" },

  { id: 35, name: "ES Modules — import/export",                    group: "OOP & Modules" },
  { id: 36, name: "Classes",                                        group: "OOP & Modules" },
  { id: 37, name: "Constructors",                                   group: "OOP & Modules" },
  { id: 38, name: "Inheritance",                                    group: "OOP & Modules" },
];

// The minimum sequence before TypeScript. Each entry maps to one
// or more TOPICS ids — checking the row checks all of them.
const CORE_PATH = [
  { label: "Functions",            ids: [9] },
  { label: "Objects",              ids: [20] },
  { label: "Arrays & Methods",     ids: [18, 19] },
  { label: "Destructuring",        ids: [21, 22] },
  { label: "Spread & Rest",        ids: [23] },
  { label: "Scope",                ids: [14] },
  { label: "Closures",             ids: [15] },
  { label: "Classes",              ids: [36] },
  { label: "Promises",             ids: [31] },
  { label: "Async / Await",        ids: [32] },
  { label: "Modules",              ids: [35] },
];

const GROUP_ORDER = [
  "Fundamentals", "Functions & Scope", "Data Structures",
  "Modern Syntax", "Browser & DOM", "Async & Errors", "OOP & Modules",
];

const CORE_ID_SET = new Set(CORE_PATH.flatMap(c => c.ids));

/* ---------- state ---------- */

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

let state = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — progress just won't persist */
  }
}

function isChecked(id) {
  return !!state[id];
}

function setChecked(id, val) {
  state[id] = val;
}

/* ---------- rendering ---------- */

const ringFill = document.getElementById("ringFill");
const ringPercent = document.getElementById("ringPercent");
const totalDoneEl = document.getElementById("totalDone");
const coreDoneEl = document.getElementById("coreDone");
const coreListEl = document.getElementById("coreList");
const groupsEl = document.getElementById("groups");
const meterFill = document.getElementById("meterFill");
const meterThumb = document.getElementById("meterThumb");
const meterPct = document.getElementById("meterPct");
const meterCount = document.getElementById("meterCount");

const RING_CIRCUMFERENCE = 2 * Math.PI * 52;
ringFill.style.strokeDasharray = `${RING_CIRCUMFERENCE}`;

function renderCoreList() {
  coreListEl.innerHTML = "";
  CORE_PATH.forEach((entry, i) => {
    const checked = entry.ids.every(isChecked);
    const li = document.createElement("li");
    li.className = "core-item" + (checked ? " is-done" : "");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "core-check";
    btn.setAttribute("aria-pressed", String(checked));
    btn.setAttribute("aria-label", `Mark ${entry.label} ${checked ? "incomplete" : "complete"}`);
    btn.innerHTML = checked
      ? `<svg viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : "";

    btn.addEventListener("click", () => {
      const next = !checked;
      entry.ids.forEach(id => setChecked(id, next));
      saveState();
      renderAll();
    });

    const num = document.createElement("span");
    num.className = "core-num";
    num.textContent = String(i + 1).padStart(2, "0");

    const label = document.createElement("span");
    label.className = "core-label";
    label.textContent = entry.label;

    li.appendChild(num);
    li.appendChild(btn);
    li.appendChild(label);
    coreListEl.appendChild(li);
  });
}

function renderGroups() {
  groupsEl.innerHTML = "";
  GROUP_ORDER.forEach(groupName => {
    const items = TOPICS.filter(t => t.group === groupName);
    const doneCount = items.filter(t => isChecked(t.id)).length;

    const section = document.createElement("div");
    section.className = "group";

    const head = document.createElement("div");
    head.className = "group-head";
    head.innerHTML = `<h3>${groupName}</h3><span class="group-count">${doneCount}/${items.length}</span>`;
    section.appendChild(head);

    const ul = document.createElement("ul");
    ul.className = "group-list";

    items.forEach(t => {
      const checked = isChecked(t.id);
      const li = document.createElement("li");
      li.className = "topic-item" + (checked ? " is-done" : "");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "topic-check";
      btn.setAttribute("aria-pressed", String(checked));
      btn.setAttribute("aria-label", `Mark "${t.name}" ${checked ? "incomplete" : "complete"}`);
      btn.innerHTML = checked
        ? `<svg viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : "";

      btn.addEventListener("click", () => {
        setChecked(t.id, !checked);
        saveState();
        renderAll();
      });

      const num = document.createElement("span");
      num.className = "topic-num";
      num.textContent = String(t.id).padStart(2, "0");

      const label = document.createElement("span");
      label.className = "topic-label";
      label.textContent = t.name;

      li.appendChild(num);
      li.appendChild(btn);
      li.appendChild(label);
      if (CORE_ID_SET.has(t.id)) {
        const key = document.createElement("i");
        key.className = "key-dot";
        key.title = "On the core path";
        li.appendChild(key);
      }

      ul.appendChild(li);
    });

    section.appendChild(ul);
    groupsEl.appendChild(section);
  });
}

function renderStats() {
  const totalChecked = TOPICS.filter(t => isChecked(t.id)).length;
  const coreChecked = CORE_PATH.filter(c => c.ids.every(isChecked)).length;
  const pct = Math.round((totalChecked / TOPICS.length) * 100);

  totalDoneEl.innerHTML = `${totalChecked}<span class="status-of">/${TOPICS.length}</span>`;
  coreDoneEl.innerHTML = `${coreChecked}<span class="status-of">/${CORE_PATH.length}</span>`;

  ringPercent.textContent = `${pct}%`;
  const offset = RING_CIRCUMFERENCE - (pct / 100) * RING_CIRCUMFERENCE;
  ringFill.style.strokeDashoffset = String(offset);

  meterFill.style.width = `${pct}%`;
  meterThumb.style.left = `${pct}%`;
  meterPct.textContent = `${pct}%`;
  meterCount.textContent = `${totalChecked} / ${TOPICS.length} topics checked`;
}

function renderAll() {
  renderCoreList();
  renderGroups();
  renderStats();
}

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Reset all progress? This can't be undone.")) return;
  state = {};
  saveState();
  renderAll();
});

renderAll();
