# Registro de cambios — docs/

## 2026-10-26 — TP5: MVP construido (local)
* **Creation**: `src/index.html`, `src/app.js`, `src/data.js` y `tests/data.test.mjs`. Mapa,
  detalle, sin conexión y sábado, con las correcciones del TP4. Versión genérica (datos simulados
  según día y hora) y escenarios del moderador por URL, documentados en el `README.md`.

## 2026-10-26 — TP5: sistema de diseño
* **Creation**: `PRODUCT.md` y `DESIGN.md` en la raíz (formato de la skill Impeccable),
  `src/styles.css` con tokens y componentes, y `docs/diseno/design-system.html` con los
  especímenes y las cuatro pantallas del MVP. Estilo institucional UNLaM (Open Sans, verde,
  blanco y gris); se descartan el bordó (se confunde con LLENO) y el logo (haría pasar la app por
  oficial y podría inflar M1). Incorpora las correcciones del TP4 que entran al MVP.

## 2026-10-26 — TP4: documentos de la evaluación cruzada
* **Creation**: Se transcriben a `docs/referencias/` la consigna del TP4, nuestro informe sobre
  Bananza (TP4A), el informe que UNLaM-Gym hizo sobre SPOTTER y nuestra respuesta (TP4B). El
  informe de UNLaM-Gym se transcribe a mano y su PDF no se versiona: incluye DNI y correos de
  otro equipo y el repositorio es público.
* **Update**: `docs/evaluacion/index.md` resume las correcciones del TP4 que entran al MVP del
  TP5 (semáforo + trama + etiqueta, leyenda única con MEDIO, botón sólo hacia la otra playa,
  refresco manual, header único) y las que quedan para después. Resuelve el pendiente (2) del
  25/10.
* **Update**: `docs/usuarios/usuarios-reales.md`: disponibilidad de U1, U2 y U3 para el TP5
  confirmada. Resuelve el pendiente (1) del 25/10.

## 2026-10-25 — TP5: métricas y criterio de éxito
* **Creation**: `docs/evaluacion/tp5-metricas.md` (borrador, a validar por el equipo): M1
  redirección por el dato (negocio), M2 decisión correcta en ≤10 s sin ayuda (usabilidad),
  visitas/aperturas como métrica vanidosa, y criterio de confirmación/refutación. Se commitea
  antes de empezar el MVP, como pide la consigna. M1 se mide contra la decisión que el usuario
  tomaría sin la app en cada escenario, no contra una "playa habitual": la encuesta del TP2
  muestra que U3 decide por horario y que el plan B de U1 es la calle.

## 2026-10-25 — Mantenimiento de la wiki
* **Update**: Se completan en este log las entradas de TP3 y TP4, que se habían commiteado sin
  registrarse acá. Se agregan `docs/diseno/index.md` y `docs/evaluacion/index.md`, frontmatter
  en `docs/evaluacion/perfil-evaluado.md`, y se corrige la descripción de `evaluacion/` en
  `docs/index.md` (contiene la evaluación cruzada del TP4, no sólo la del TPI).
* **Pendiente detectado**: (1) `docs/usuarios/usuarios-reales.md` sigue con la disponibilidad
  de U1, U2 y U3 para el TP5 "pendiente de reconfirmación". (2) Las correcciones del TP4 que
  recibimos sobre nuestro wireframe no están en el repo; el TP5 pide construir incorporando las
  aceptadas. (3) `docs/brief.md` v3 mantiene alertas y bloqueo corto como "funcionalidades
  core" y habla de "semáforo", mientras el scope v3 los excluye y el wireframe final usa
  niveles en grises (LLENO / MEDIO / LIBRE / CERRADA); a resolver en el brief v4 (TP5).

## 2026-09-21 — TP4: evaluación cruzada
* **Creation**: Punto 1 del TP4 (Rodrigo): `docs/evaluacion/perfil-evaluado.md`, perfil de
  usuario del producto del equipo evaluado (UNLaMigos).
* **Creation**: Punto 3 del TP4 (Mayra, asistido por IA): `docs/evaluacion/evaluacion-ia.md`,
  evaluación heurística (Nielsen) generada con IA sobre el wireframe y el brief del equipo
  evaluado, con lectura de los tres atributos de usabilidad que ese equipo priorizó.
* **Update**: `docs/prompts.md` registra los prompts del TP4A (evaluación con IA y redacción del
  informe comparativo).

## 2026-09-07 — TP3: wireframes del MVP
* **Creation**: `docs/diseno/alternativas-recibidas.html`: las tres alternativas estructurales
  generadas con IA (A eficiencia, B prevención de errores, C facilidad de aprendizaje).
* **Creation**: `docs/diseno/wireframe/mvp.html`: wireframe final, **alternativa A**
  desarrollada. Cuatro pantallas: mapa (apertura), detalle de playa, sin conexión / dato viejo
  y sábado con La Paz cerrada. Niveles representados con etiqueta y trama de grises; la app
  informa y no recomienda.
* **Update**: `docs/prompts.md` registra el prompt completo de los wireframes (anexo TP3).

## 2026-09-05 — TP3: brief versión 3
* **Update**: `docs/brief.md` pasa a versión 3. El MVP se reduce a la consulta de ocupación en
  tiempo real por playa (Perón y La Paz), con datos simulados por horario. Quedan fuera la
  reserva anticipada por franjas, motos y bicicletas, login y onboarding. Atributos de
  usabilidad priorizados: eficiencia y tasa de errores.

## 2026-08-31 — TP2: entrega
* **Update**: Se completa el TP2 con los hallazgos de la encuesta con preguntas abiertas aplicada
  a U1, U2 y U3 durante la semana del 25/08 (ver
  `docs/usuarios/guia-encuesta-tp2.md`). Se completan
  `docs/usuarios/perfil-usuario.md`, `docs/usuarios/supuestos-confrontacion.md` y
  `docs/usuarios/hipotesis-valor.md`, y se agregan las respuestas anonimizadas en
  `docs/evidencia/tp2/encuesta-respuestas.md`.
* **Hallazgo central**: el supuesto crítico del TP1 (disposición a reservar con anticipación) se
  refuta parcialmente — los tres usuarios piden disponibilidad inmediata, U2 y U3 la requieren
  por playa y U1 propone un bloqueo de pocos minutos, no una reserva planificada desde su casa.
  El usuario primario (estudiantes con auto) se confirma como correcto.
* **Update**: `docs/brief.md` pasa a versión 2: perfil real, hipótesis de valor y estado de los
  seis supuestos (incluyendo el crítico, que faltaba en el borrador de la entrega).
* **Corrección de consistencia**: el roster tentativo del TP1 se reemplaza por los perfiles que
  efectivamente respondieron la encuesta (Arquitectura, Kinesiología e Ingeniería Electrónica),
  se corrige el análisis de conectividad y se alinea la documentación con `TP2-SPOTTER.md`.

## 2026-08-25 — TP1: reentrega post-devolución
* **Update**: Se corrigen los dos puntos de la devolución del TP1. (1) Usuario primario único:
  **estudiantes con auto**, actualizado en `docs/brief.md`. (2) Roster de U1/U2/U3: se
  reemplaza a U2 (antes docente) y U3 (antes personal de seguridad) — que ya no pertenecían al
  grupo primario corregido — por dos estudiantes con auto (Medicina y último año de Ingeniería
  Electrónica); U1 (Ingeniería Informática) se mantiene sin cambios. Los tres con disponibilidad
  confirmada para TP2 y TP5. Detalle en `docs/usuarios/usuarios-reales.md`.

## 2026-08-25
* **Update**: Se resuelve la observación no excluyente de la devolución del TP1: el usuario
  primario único queda definido como **estudiantes con auto** (antes eran tres grupos
  combinados). Ver `docs/usuarios/`.
* **Update**: Se define la técnica de relevamiento del TP2: **encuesta**, dirigida a
  estudiantes con auto. Justificación: no requiere coordinar horarios individuales con cada
  usuario del grupo primario, a diferencia de una entrevista u observación. Ver
  `docs/usuarios/guia-encuesta-tp2.md`.
* **Creation**: Se estructura `docs/` como bundle OKF v0.2 — se agregan `index.md` y `log.md`
  en la raíz y en las subcarpetas nuevas, se agrega frontmatter a `brief.md`, y se transcriben a
  Markdown (con `markitdown`) las consignas de TP1 y TP2, la entrega de TP1 y la devolución del
  corrector, en `docs/referencias/`. `docs/prompts.md` queda sin cambios (registro exigido por
  la cátedra).

## 2026-08-25 — TP1: devolución del corrector
* **Update**: Devolución de TP1 recibida (corrector: Claudio Figuerola). Estado: condiciones
  pendientes. Condición excluyente sin cumplir: falta confirmar disponibilidad de U2 y U3 para
  TP2 y TP5 (sólo U1 la tiene confirmada). Observación no excluyente: definir un único usuario
  primario entre los tres declarados (seguridad, docentes, estudiantes con auto). Ver
  `docs/referencias/tp1-devolucion.md`.

## 2026-08-25 — TP1: entrega
* **Creation**: Entrega de `TP1-SPOTTER.pdf` vía MIEL y commit de `docs/brief.md` versión 1. Ver
  `docs/referencias/tp1-entrega.md`.
