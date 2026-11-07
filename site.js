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
  $("#rosterCount").textContent = roster.length;
  $("#rosterLead").textContent = `${roster.length} players on the team this season, in alphabetical order by last name.`;

  // Roster photo: shows assets/roster.jpg when it exists; until then the jersey artwork stays.
  const img = new Image();
  img.onload = () => {
    img.alt = "The 2026–27 BatCH team";
    $("#rosterPhoto").appendChild(img);
    $("#rosterPhoto").classList.add("has-photo");
  };
  img.src = "assets/roster.jpg";

  // ---- History: one row per season, newest first.
  const seasons = (window.SEASONS || []).slice().reverse();
  const real = seasons.filter((s) => !s.gap);
  const most = Math.max(...real.map((s) => s.players));
  const events = new Set(real.flatMap((s) => s.events));
  $("#histStats").innerHTML =
    `<div><b>${real.length}</b><span>seasons</span></div>` +
    `<div><b>${events.size}</b><span>events</span></div>` +
    `<div><b>${most}</b><span>biggest roster</span></div>`;
  $("#timeline").innerHTML = seasons.map((s) => {
    if (s.gap) return `<li class="season-row gap"><div class="yr">${dash(s.season)}</div><div class="sr-main"><p class="note">No USA Ultimate season listed.</p></div></li>`;
    const evs = s.events.map((e) => `<li${/Regionals/.test(e) ? ' class="reg"' : ""}>${esc(e)}</li>`).join("");
    return `<li class="season-row"><div class="yr">${dash(s.season)}<small>${esc(s.name)}</small></div><div class="sr-main">`
      + `<div class="size"><span class="bar"><i style="width:${Math.round((s.players / most) * 100)}%"></i></span><span class="n">${s.players} players</span></div>`
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
