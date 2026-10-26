import { LOTS, STATE_LABEL, DAYS, occupancyAt, scenarioFrom } from "./data.js";

const CONSEQUENCE = {
  full: "No hay lugar. Vas a hacer fila para entrar y es probable que tengas que salir y manejar hasta la otra playa.",
  mid: "Hay lugar disponible, pero podrías esperar unos minutos para ingresar.",
  free: "Hay lugar. Entrás sin esperar.",
  closed: "Esta playa no abre los sábados. No hay dato de ocupación.",
};

// Escenario del moderador: se lee una vez, se guarda en la pestaña y se borra de la barra de direcciones
// para que el usuario no vea nada de la prueba.
const KEY = "spotter-scenario";
if (new URLSearchParams(location.search).has("reset")) sessionStorage.removeItem(KEY);
let scenario = scenarioFrom(location.search);
if (scenario || location.search) {
  if (scenario) sessionStorage.setItem(KEY, JSON.stringify({ ...scenario, clock: scenario.clock.getTime(), loadedAt: Date.now() }));
  history.replaceState(null, "", location.pathname + location.hash);
}
if (!scenario) {
  const saved = JSON.parse(sessionStorage.getItem(KEY) || "null");
  if (saved) scenario = { ...saved, clock: new Date(saved.clock + (Date.now() - saved.loadedAt)) };
}

const loadedAt = Date.now();
const now = () => (scenario ? new Date(scenario.clock.getTime() + Date.now() - loadedAt) : new Date());

const app = {
  data: scenario ? scenario.state : occupancyAt(now()),
  updatedAt: new Date(now().getTime() - (scenario?.offline || 1) * 60000),
  forcedOffline: Boolean(scenario?.offline),
  refreshing: false,
};

const offline = () => app.forcedOffline || !navigator.onLine;

const $ = (id) => document.getElementById(id);
const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;

function ageText() {
  const min = Math.floor((now() - app.updatedAt) / 60000);
  return min < 1 ? "Dato de hace menos de 1 min" : `Dato de hace ${min} min`;
}

function renderHeader() {
  const u = app.updatedAt;
  const when = `${DAYS[u.getDay()]} ${String(u.getHours()).padStart(2, "0")}:${String(u.getMinutes()).padStart(2, "0")}`;
  $("age").innerHTML = `<strong>${app.refreshing ? "Actualizando…" : ageText()}</strong>${when}`;
  $("refresh").setAttribute("aria-busy", String(app.refreshing));
  $("refresh").setAttribute("aria-label", app.refreshing ? "Actualizando" : "Actualizar");
}

function lot(id, { link }) {
  const state = app.data[id];
  const stale = offline();
  const head = `<span class="lot__head">${LOTS[id]} ${stale ? '<span class="tag">Dato viejo</span>' : link ? icon("next") : ""}</span>`;
  const body = `<span><span class="lot__state">${STATE_LABEL[state]}</span>${state === "closed" ? '<span class="lot__note">No abre los sábados</span>' : ""}</span>`;
  const cls = `lot${link ? "" : " detail-state"}${stale ? " is-stale" : ""}`;
  return link
    ? `<a class="${cls}" data-state="${state}" href="#/${id}" aria-label="${LOTS[id]}: ${STATE_LABEL[state]}. Ver detalle">${head}${body}</a>`
    : `<div class="${cls}" data-state="${state}">${head}${body}</div>`;
}

function notice() {
  if (!offline()) return "";
  const min = Math.floor((now() - app.updatedAt) / 60000);
  return `<div class="notice" role="status">${icon("offline")}<p>Sin conexión. Estás viendo el dato de hace ${min} min y pudo cambiar. Se reintenta solo.</p></div>`;
}

function render() {
  const id = location.hash.replace("#/", "");
  const view = $("view");
  if (LOTS[id]) {
    const other = id === "peron" ? "lapaz" : "peron";
    view.innerHTML = `
      <a class="back-link" href="#/">${icon("back")}Mapa</a>
      ${notice()}
      ${lot(id, { link: false })}
      <p class="consequence">${CONSEQUENCE[app.data[id]]}</p>
      <a class="btn btn--primary btn--block" href="#/${other}">Ver ${LOTS[other]} ${icon("next")}</a>
      <a class="btn btn--secondary btn--block" href="#/">Volver al mapa</a>`;
  } else {
    view.innerHTML = `${notice()}${lot("peron", { link: true })}${lot("lapaz", { link: true })}`;
  }

  const states = ["full", "mid", "free", ...(Object.values(app.data).includes("closed") ? ["closed"] : [])];
  $("legend").innerHTML = states.map((s) => `<li><span class="swatch" data-state="${s}"></span>${STATE_LABEL[s]}</li>`).join("");
  renderHeader();
}

// El dato anterior queda a la vista mientras actualiza; si no hay señal, sigue el dato viejo.
function refresh() {
  if (app.refreshing) return;
  app.refreshing = true;
  renderHeader();
  setTimeout(() => {
    app.refreshing = false;
    if (!offline()) {
      app.updatedAt = now();
      if (!scenario) app.data = occupancyAt(app.updatedAt);
    }
    render();
  }, 700);
}

$("refresh").addEventListener("click", refresh);
addEventListener("hashchange", () => {
  render();
  $("view").focus({ preventScroll: true });
  scrollTo(0, 0);
});
addEventListener("online", refresh);
addEventListener("offline", render);
setInterval(refresh, 30000);
setInterval(renderHeader, 15000);

render();
