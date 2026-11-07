// BatCH site: one page, four views (Home, History, Roster, Batchillion) switched by the URL hash,
// so the footer music keeps playing between them. Data lives in data.js.
(() => {
  const $ = (s) => document.querySelector(s);
  const esc = (x) => String(x).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const dash = (s) => s.replace("-", "–");
  document.documentElement.classList.add("js");

  // ---- Roster: sorted by last name (first-name-only entries sort by their name).
  const roster = (window.ROSTER_2627 || []).slice();
  const key = (n) => { const p = n.replace(/\./g, "").split(" "); return (p.length > 1 ? p[p.length - 1] + " " + p.slice(0, -1).join(" ") : n).toLowerCase(); };
  roster.sort((a, b) => key(a).localeCompare(key(b)));
  $("#names").innerHTML = roster.map((n) => `<li>${esc(n)}</li>`).join("");
  $("#rosterLead").textContent = "This season's team, in alphabetical order by last name.";

  // Roster photo: shows assets/roster.jpg when it exists; until then the jersey artwork stays.
  const img = new Image();
  img.onload = () => {
    img.alt = "The 2026–27 BatCH team";
    $("#rosterPhoto").appendChild(img);
    $("#rosterPhoto").classList.add("has-photo");
  };
  img.src = "assets/roster.jpg";

  // ---- Leadership & sponsors (data.js). Empty groups stay hidden.
  const L = window.LEADERSHIP || {}, groups = [["Coaches", L.coaches], ["Captains", L.captains], ["Officers", L.officers]].filter(([, xs]) => xs && xs.length);
  if (groups.length) $("#leaders").innerHTML = `<h3 class="sub-h">Leadership</h3>` + groups.map(([t, xs]) =>
    `<div class="lead-group"><p class="kicker">${esc(t)}</p><ul class="people">${xs.map((p) => `<li><b>${esc(p.name)}</b><span>${esc(p.role || "")}</span></li>`).join("")}</ul></div>`).join("");
  const S = window.SPONSORS || [];
  if (S.length) $("#sponsors").innerHTML = `<h3 class="sub-h">Sponsors</h3><ul class="sponsors">` + S.map((s) =>
    `<li>${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener"><b>${esc(s.name)}</b></a>` : `<b class="sp-name">${esc(s.name)}</b>`}${s.who ? `<span class="who">${esc(s.who)}</span>` : ""}${s.blurb ? `<p>${esc(s.blurb)}</p>` : ""}</li>`).join("") + `</ul>`;

  // ---- History: one row per season, newest first.
  const seasons = (window.SEASONS || []).slice().reverse();
  const real = seasons.filter((s) => !s.gap);
  const events = new Set(real.flatMap((s) => s.events));
  $("#histStats").innerHTML =
    `<div><b>${real.length}</b><span>seasons</span></div>` +
    `<div><b>${events.size}</b><span>events</span></div>` +
    `<div><b>#12</b><span>best finish in the Atlantic Coast region · #99 of 408 nationally</span></div>`;
  $("#timeline").innerHTML = seasons.map((s) => {
    if (s.gap) return `<li class="season-row gap"><div class="yr">${dash(s.season)}</div><div class="sr-main"><p class="note">No USA Ultimate season listed.</p></div></li>`;
    const evs = s.events.map((e) => `<li${/Regionals/.test(e) ? ' class="reg"' : ""}>${esc(e)}</li>`).join("");
    return `<li class="season-row"><div class="yr">${dash(s.season)}<small>${esc(s.name)}</small></div><div class="sr-main">`
      + `<ul class="evs" aria-label="events">${evs}</ul>`
      + (s.note ? `<p class="note">${esc(s.note)}</p>` : "")
      + `<a class="linkish src" href="${esc(s.url)}">USA Ultimate team page</a>`
      + `</div></li>`;
  }).join("");

  // ---- Views
  const VIEWS = ["home", "history", "roster", "batchillion"];
  const header = document.querySelector("header.jersey");
  function show(first) {
    const v = VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";
    document.querySelectorAll(".view").forEach((el) => el.classList.toggle("on", el.dataset.view === v));
    document.querySelectorAll(".tabs-nav a").forEach((a) => {
      if (a.dataset.view === v) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    // a new view starts at its top: if the reader had scrolled past the header, bring the tabs back up
    if (!first) { const top = header.offsetHeight; if (window.scrollY > top) window.scrollTo(0, top); }
  }
  window.addEventListener("hashchange", () => show(false));
  show(true);
})();
