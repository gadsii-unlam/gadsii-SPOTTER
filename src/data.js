// Datos simulados de ocupación (TP3: "se hardcodean por horarios"). No hay sensores ni backend.

export const LOTS = { peron: "Perón", lapaz: "La Paz" };

export const STATE_LABEL = { full: "Lleno", mid: "Medio", free: "Libre", closed: "Cerrada" };

export const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const hm = (h, m = 0) => h * 60 + m;

// Franjas [desde, hasta) en minutos del día; fuera de ellas, LIBRE.
// Turnos de cursada 8–12, 14–18 y 19–23: Perón se llena en la media hora previa a la entrada y
// sigue llena hasta la salida; La Paz recibe el desborde en el pico de llegada.
// ponytail: tabla fija simulada (decisión del TP3), no hay datos reales de ocupación.
const WEEKDAY = {
  peron: [
    [hm(7), hm(7, 30), "mid"], [hm(7, 30), hm(12), "full"], [hm(12), hm(12, 30), "mid"],
    [hm(13), hm(13, 30), "mid"], [hm(13, 30), hm(18), "full"],
    [hm(18), hm(18, 30), "mid"], [hm(18, 30), hm(23), "full"], [hm(23), hm(23, 30), "mid"],
  ],
  lapaz: [[hm(7, 30), hm(9), "mid"], [hm(13, 30), hm(15), "mid"], [hm(18, 30), hm(20), "mid"]],
};
const SATURDAY = {
  peron: [[hm(9), hm(13), "mid"]],
  lapaz: [[0, hm(24), "closed"]],
};

export function occupancyAt(date) {
  const day = date.getDay();
  const table = day === 6 ? SATURDAY : day === 0 ? { peron: [], lapaz: [] } : WEEKDAY;
  const min = date.getHours() * 60 + date.getMinutes();
  const at = (slots) => (slots.find(([from, to]) => min >= from && min < to) || [, , "free"])[2];
  return { peron: at(table.peron), lapaz: at(table.lapaz) };
}

const PARAM_STATE = { lleno: "full", medio: "mid", libre: "free", cerrada: "closed" };

// Escenario del moderador: ?peron=lleno&lapaz=libre&dia=martes&hora=18:30&offline=12
// Devuelve null si la URL no trae nada de eso (versión genérica).
export function scenarioFrom(search, today = new Date()) {
  const q = new URLSearchParams(search);
  const keys = ["peron", "lapaz", "dia", "hora", "offline"];
  if (!keys.some((k) => q.has(k))) return null;

  const clock = new Date(today);
  const dayIdx = DAYS.findIndex((d) => norm(d) === norm(q.get("dia") || ""));
  if (dayIdx >= 0) clock.setDate(clock.getDate() + ((dayIdx - clock.getDay() + 7) % 7));
  const [h, m] = (q.get("hora") || "").split(":").map(Number);
  if (Number.isInteger(h) && Number.isInteger(m)) clock.setHours(h, m, 0, 0);

  const fallback = occupancyAt(clock);
  const state = {
    peron: PARAM_STATE[norm(q.get("peron") || "")] || fallback.peron,
    lapaz: PARAM_STATE[norm(q.get("lapaz") || "")] || fallback.lapaz,
  };
  const offline = Math.max(0, parseInt(q.get("offline"), 10) || 0);
  return { clock, state, offline };
}

function norm(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();
}
