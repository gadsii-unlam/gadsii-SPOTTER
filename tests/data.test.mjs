// node --test
import { test } from "node:test";
import assert from "node:assert/strict";
import { occupancyAt, scenarioFrom } from "../src/data.js";

const at = (iso) => new Date(iso);

test("horario simulado", () => {
  assert.deepEqual(occupancyAt(at("2026-10-27T08:00")), { peron: "full", lapaz: "mid" }); // martes pico mañana
  assert.deepEqual(occupancyAt(at("2026-10-27T18:30")), { peron: "full", lapaz: "mid" }); // martes 18:30 (U3)
  assert.deepEqual(occupancyAt(at("2026-10-27T15:00")), { peron: "full", lapaz: "free" }); // en cursada tarde
  assert.deepEqual(occupancyAt(at("2026-10-27T12:45")), { peron: "free", lapaz: "free" }); // entre turnos
  assert.deepEqual(occupancyAt(at("2026-10-27T18:10")), { peron: "mid", lapaz: "free" }); // recambio tarde/noche
  assert.deepEqual(occupancyAt(at("2026-10-31T10:00")), { peron: "mid", lapaz: "closed" }); // sábado
});

test("sin parámetros es la versión genérica", () => {
  assert.equal(scenarioFrom(""), null);
  assert.equal(scenarioFrom("?utm=x"), null);
});

test("escenario del moderador", () => {
  const today = at("2026-10-26T11:00"); // lunes
  const s = scenarioFrom("?peron=libre&lapaz=libre&dia=martes&hora=18:30", today);
  assert.deepEqual(s.state, { peron: "free", lapaz: "free" });
  assert.equal(s.clock.getDay(), 2);
  assert.equal(s.clock.getHours(), 18);
  assert.equal(s.offline, 0);

  const sab = scenarioFrom("?dia=sábado&hora=10:00", today); // estado sale del horario
  assert.deepEqual(sab.state, { peron: "mid", lapaz: "closed" });

  assert.equal(scenarioFrom("?peron=lleno&offline=12", today).offline, 12);
  assert.equal(scenarioFrom("?peron=cualquiera&hora=08:00", today).state.peron, "full");
});
