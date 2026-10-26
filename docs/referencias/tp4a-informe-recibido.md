---
type: Referencia
title: "TP4A — Informe recibido de UNLaM-Gym"
description: "Evaluación heurística del wireframe de SPOTTER hecha por el equipo UNLaM-Gym (22/09/2026), transcripta a mano."
tags: [devolucion, tp4]
---

# TP4A — Informe recibido de UNLaM-Gym sobre SPOTTER

> Transcripción manual del PDF entregado por UNLaM-Gym. El original **no se versiona** porque
> incluye DNI y correos del otro equipo y este repositorio es público. Las tablas del punto 2
> estaban manuscritas (escaneadas). Repositorio del equipo evaluador:
> <https://github.com/gadsii-unlam/gadsii-UNLaM-Gym>.

## 1. Antes de mirar el wireframe

El usuario concreto es el estudiante de la UNLaM que asiste en auto propio durante horarios
pico de cursada. Dicho usuario utiliza la aplicación desde su dispositivo móvil mientras
conduce en las cuadras previas a la universidad, apurado y bajo estrés cognitivo.
El equipo priorizó la eficiencia (brindar información rápida al volante) y minimizar la tasa de
errores (evitar malentendidos visuales que lo lleven a la playa equivocada).
La hipótesis que testea el MVP es que visualizar la ocupación en tiempo real permite al
estudiante decidir a qué playa dirigirse (Perón o La Paz) antes de hacer la fila.

## 2. Evaluación heurística — del equipo (manuscrita)

**Checklist** (estado de cumplimiento · hallazgos · puntuación 0 a 5):

| ID | Heurística | Cumplimiento | Hallazgos | Puntuación |
|---|---|---|---|:---:|
| H1 | Visibilidad del estado del sistema | Parcial | 1 | 3 |
| H2 | Correspondencia entre el sistema y el mundo real | Total | 0 | 5 |
| H3 | Libertad y control del usuario | Total | 0 | 4 |
| H4 | Prevención de errores | Parcial | 2 | 2 |
| H5 | Coherencia y estándares | Parcial | 1 | 3 |
| H6 | Reconocimiento en vez de recordar | Total | 0 | 5 |
| H7 | Flexibilidad y eficiencia de uso | Total | 0 | 5 |
| H8 | Diseño estético y minimalista | Total | 0 | 4 |
| H9 | Reconocimiento, diagnóstico y recuperación ante errores | Total | 0 | 5 |
| H10 | Ayuda y documentación | Total | 0 | 5 |

**Matriz de hallazgos:**

| # | Heurística | Detalle | Severidad (1-4) | Mejora sugerida |
|---|---|---|:---:|---|
| 1 | H4 — Prevención de errores | Tramas confusas para un usuario al volante | 3 | Tramas de colores estilo semáforo |
| 2 | H4 — Prevención de errores | En la pantalla 2 se ofrece un botón para la playa que se está mostrando | 2 | Mostrar sólo el botón para la otra playa |
| 3 | H1 — Visibilidad del estado del sistema | El bloque "AULAS" no aporta a la decisión del usuario; bloque no interactivo, confuso | 2 | Reemplazar por un ícono simple para no confundir |
| 4 | H5 — Coherencia y estándares | La barra inferior mezcla secciones de navegación con estados del sistema | 2 | Separar visualmente los estados de las secciones navegables |

**Conclusiones / recomendaciones generales:** el diseño logra exponer la información principal
sin requerir interacción inicial, pero presenta vulnerabilidades en la prevención de errores
(H4) dadas las condiciones del usuario. Al estar dirigido a un usuario que conduce bajo estrés y
con la atención dividida en el tránsito, la interfaz exige una carga cognitiva
desproporcionada al utilizar un sistema de tramas abstractas para comunicar el estado de
ocupación. Esto entra en conflicto directo con el atributo priorizado de "tasa de errores": un
vistazo rápido y en movimiento es propenso a malas interpretaciones visuales, lo que podría
llevar al usuario a la playa incorrecta. Además, los botones redundantes en la vista de detalle
generan fricciones que entorpecen la navegación.

## 3. Evaluación heurística — de la IA

| ID | Heurística | Cumplimiento | Hallazgos | Puntuación | Observaciones |
|---|---|---|:---:|:---:|---|
| H1 | Visibilidad del estado del sistema | Parcial | 3 | 3 | Muy bien resuelto el estado "dato viejo / sin conexión" (rótulo, borde punteado, opacidad y antigüedad en minutos). Falla en la pantalla normal: la marca de tiempo es de 11 px en el header y no hay indicador de actualización en curso ni acción manual de refrescar. |
| H2 | Correspondencia entre el sistema y el mundo real | Parcial | 2 | 3 | El lenguaje es el del usuario (LLENO / LIBRE / CERRADA, "si vas a esta playa…"). Pero la codificación por densidad de trama no tiene correlato en el mundo real y obliga a leer una leyenda; el brief preveía una metáfora de semáforo, más reconocible. |
| H3 | Libertad y control del usuario | Total | 1 | 4 | Toda pantalla tiene salida visible al mapa; ninguna acción es destructiva ni irreversible y no hay modales que bloqueen. Único punto flojo: en el detalle, los botones "Ver PERÓN" / "Ver LA PAZ" no indican cuál está activo. |
| H4 | Prevención de errores | Parcial | 2 | 3 | Buena prevención del error más caro: CERRADA se distingue de LLENO con trama propia y motivo explícito. Riesgo abierto: el bloque "AULAS" y la disposición espacial sugieren una escala real que no existe, y el dato viejo no exige ninguna confirmación. |
| H5 | Coherencia y estándares | Parcial | 2 | 3 | Las 4 pantallas comparten estructura, tipografía y jerarquía. Rompe la coherencia el nivel MEDIO, que aparece sólo en la pantalla del sábado, sin leyenda ni consecuencia asociada. |
| H6 | Reconocimiento en vez de recordar | Parcial | 1 | 3 | Las dos playas se ven simultáneamente y cada una lleva su etiqueta textual. La relación densidad de trama → nivel sí exige recordar la leyenda, que además no se repite en el detalle. |
| H7 | Flexibilidad y eficiencia de uso | Parcial | 2 | 3 | La ruta principal es óptima: cero clics hasta el dato. No hay ningún camino acelerado para el usuario recurrente (playa favorita, orden por preferencia, vista reducida) ni personalización. |
| H8 | Diseño estético y minimalista | Total | 1 | 5 | Cada pantalla muestra sólo lo que sostiene la decisión. Único exceso: los recuadros PRIORIZA/RESIGNA/POR QUÉ/SUPUESTO son documentación del wireframe y no deben llegar al producto. |
| H9 | Reconocimiento, diagnóstico y recuperación ante errores | Parcial | 1 | 4 | La pantalla 3 nombra el problema en lenguaje llano, explica la consecuencia y ofrece "Reintentar" más reintento automático. Falta diferenciar "sin conexión del teléfono" de "el servidor no responde / no hay dato". |
| H10 | Ayuda y documentación | Parcial | 1 | 2 | El onboarding fue excluido del MVP por diseño. Toda la ayuda se reduce a dos microcopys de leyenda de 10 px; no hay forma de responder "¿qué significa MEDIO?" ni "¿de dónde sale este dato?". |

**Matriz de hallazgos de la IA:**

| # | Heurística | Detalle | Severidad (1-4) | Mejora sugerida |
|---|---|---|:---:|---|
| 1 | H2 / H6 | La ocupación se codifica por densidad de trama, una convención arbitraria que se aprende de una leyenda de 10 px y se lee en 2 segundos al volante. El brief asumía un semáforo. | 3 | Sumar color de semáforo manteniendo trama y etiqueta como redundancia (daltonismo, sol directo). Agrandar la etiqueta LLENO/LIBRE. |
| 2 | H5 | El nivel MEDIO aparece (Perón, sábado) sin leyenda ni texto de consecuencia. | 3 | Definir los tres niveles en un solo lugar, misma leyenda en todas las pantallas. Consecuencia de MEDIO: "hay lugar, pero puede que esperes unos minutos". |
| 3 | H1 | La antigüedad del dato está en 11 px, en el renglón del logo y sin jerarquía. | 2 | Franja propia bajo el header, tamaño mayor y tratamiento distinto pasado un umbral (p. ej. 3 min). |
| 4 | H1 | No hay estado "actualizando" ni refresco manual en las pantallas 1, 2 y 4. | 2 | Control de actualizar siempre visible e indicador de carga que no vacíe la pantalla. |
| 5 | H4 | El bloque "AULAS" sugiere un mapa a escala que no fue relevado. | 2 | Rotular el esquema como orientativo o simplificarlo a dos tarjetas. |
| 6 | H1 / H3 | En el detalle, "Ver PERÓN" y "Ver LA PAZ" no marcan cuál está activo. | 2 | Marcar o desactivar el botón de la playa mostrada; mostrar el estado de la otra en su botón. |
| 7 | H9 | No hay estado diferenciado para "el servidor no responde" o "no hay dato para esta playa". | 2 | Dos mensajes distintos (falla de red vs. falla del servicio) con la misma degradación no bloqueante. |
| 8 | H4 | El dato viejo se marca pero nada frena la decisión sobre él. | 2 | Escalar el aviso según antigüedad: pasado un umbral, mostrar "sin dato confiable". |
| 9 | H7 | No hay camino distinto para el usuario recurrente. | 2 | Fijar una playa preferida que se muestre primero, sin ocultar la otra. |
| 10 | H10 | No hay forma de saber qué significa cada nivel, cada cuánto se actualiza ni de dónde sale el dato. | 2 | Acceso mínimo "¿Cómo funciona?" desde el header. |
| 11 | H5 | El header cambia entre pantallas ("SPOTTER" vs. "‹ Mapa", "sábado ·"). | 1 | Estructura única de header y retroceso en posición constante. |
| 12 | H8 / H3 | El detalle tiene "‹ Mapa" arriba y "Volver al mapa" abajo. | 1 | Conservar sólo el botón inferior. |

**Conclusiones de la IA:** la ruta principal (abrir, mirar, decidir) es de cero clics, con ambas
playas visibles con el mismo peso, y la pantalla del sábado separa CERRADA de LLENO; la
degradación no bloqueante sin conexión es la decisión más sólida. Las debilidades: la
legibilidad del código visual (tramas inventadas, MEDIO sin definir) y la confianza en el dato
(antigüedad tratada como metadato secundario, sin refresco manual).

## 4. Confrontación de las dos evaluaciones

| | Cantidad | Ejemplos |
|---|:---:|---|
| Encontraron los dos | 3 | Tramas en lugar de semáforo; botones redundantes en el detalle; bloque "AULAS" confuso / escala falsa |
| Sólo el equipo | 1 | La barra inferior mezcla navegación con estados del sistema |
| Sólo la IA | 5 | MEDIO sin leyenda; antigüedad del dato en 11 px; falta de refresco manual; header inconsistente; no distingue sin red vs. caída del servidor |
| Falsos positivos de la IA | 3 | Frenar ante dato viejo (#8); camino rápido para recurrentes (#9); falta de ayuda (#10) |

- **Qué se le escapa a la IA:** la carga cognitiva que impone el entorno físico; se apega a
  heurísticas de pantallas estáticas y no dimensiona el peligro de manejar bajo estrés.
- **Qué se le escapó al equipo y vio la IA:** consistencia estructural entre pantallas y caminos
  alternativos (MEDIO sin leyenda, header, refresco manual, red vs. servidor).
- **Falsos positivos:** #8 porque el usuario está al volante y quitarle información o exigir un
  modal va contra la seguridad y la eficiencia; #9 porque el diseño ya es de cero clics con
  ambas playas visibles; #10 porque el brief excluye el onboarding y el usuario no tiene tiempo
  de leer un "Cómo funciona".
