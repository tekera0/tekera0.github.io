const $ = id => document.getElementById(id);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
let active = "All";

/* ---------- Cards ---------- */
function hue(title) { return [...title].reduce((a, c) => a + c.charCodeAt(0) * 7, 0) % 360; }

function card(p) {
  const el = document.createElement("button");
  el.className = "card";
  el.style.setProperty("--h", hue(p.title));
  el.setAttribute("aria-label", `Open details for ${p.title}`);
  const thumb = p.image
    ? `<img class="thumb" src="${p.image}" alt="" loading="lazy">`
    : `<div class="thumb" aria-hidden="true">${p.title.slice(0, 2)}</div>`;
  el.innerHTML = `${thumb}<div class="body"><h3>${p.title}</h3><p>${p.tagline}</p>
    <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div></div>`;
  el.addEventListener("click", () => openModal(p));
  if (!reduce) {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--rx", ((e.clientX - r.left) / r.width - .5) * 10);
      el.style.setProperty("--ry", ((e.clientY - r.top) / r.height - .5) * -10);
    });
    el.addEventListener("mouseleave", () => { el.style.setProperty("--rx", 0); el.style.setProperty("--ry", 0); });
  }
  return el;
}

function render() {
  $("featured").replaceChildren(...projects.filter(p => p.featured).map(card));
  $("archive").replaceChildren(...projects.filter(p => active === "All" || p.category === active).map(card));
  $("filters").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === active)));
}

["All", ...new Set(projects.map(p => p.category))].forEach(c => {
  const b = document.createElement("button");
  b.textContent = c; b.dataset.cat = c;
  b.addEventListener("click", () => { active = c; render(); });
  $("filters").appendChild(b);
});
render();

/* ---------- Modal ---------- */
function openModal(p) {
  const links = [
    p.github && `<a class="btn" href="${p.github}">Source code</a>`,
    p.demo && `<a class="btn ghost" href="${p.demo}">Live demo</a>`
  ].filter(Boolean).join("");
  $("modal-body").innerHTML = `<h3>${p.title}</h3>
    ${p.impact ? `<p class="impact">${p.impact}</p>` : ""}
    <p>${p.details || p.tagline}</p>
    <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
    ${links ? `<div class="actions">${links}</div>` : ""}`;
  $("modal").showModal();
}
$("close").addEventListener("click", () => $("modal").close());
$("modal").addEventListener("click", e => { if (e.target === $("modal")) $("modal").close(); });

/* ---------- Hero parallax ---------- */
const hero = $("hero");
if (!reduce) {
  hero.addEventListener("mousemove", e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    hero.querySelectorAll("[data-depth]").forEach(l => {
      const d = +l.dataset.depth;
      l.style.setProperty("--mx", x); l.style.setProperty("--my", y); l.style.setProperty("--d", d);
      if (!l.classList.contains("sun")) l.style.transform = `translate(${-x * d}px, ${-y * d / 2}px)`;
    });
  });
}

/* ---------- Rating stars fill as you scroll ---------- */
const stars = [...$("stars").children];
function updateStars() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const n = Math.ceil((scrollY / Math.max(max, 1)) * 5);
  stars.forEach((s, i) => s.classList.toggle("on", i < n));
}
addEventListener("scroll", updateStars, { passive: true });
updateStars();