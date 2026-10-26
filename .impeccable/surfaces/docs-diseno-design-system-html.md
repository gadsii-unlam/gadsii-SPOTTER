---
version: 1
slug: "docs-diseno-design-system-html"
primary_target: "docs/diseno/design-system.html"
related_targets: ["src/styles.css"]
---

Scope: sistema de diseño de SPOTTER y su página de especímenes (`docs/diseno/design-system.html`), base de las cuatro pantallas del MVP (mapa, detalle, sin conexión, sábado). Modo: Operate.

Audiencia y tarea: estudiante con auto, celular en soporte o en la mano, decide en uno o dos vistazos a qué playa ir. Restricciones: correcciones aceptadas del TP4 (semáforo + trama + etiqueta, leyenda única, header único, refresco manual, botón sólo hacia la otra playa), estilo institucional UNLaM en verde, blanco y gris, sin bordó y sin logo UNLaM.

## Direction contract

THESIS: El estado de cada playa se lee como una señal vial, no como una tarjeta de app: dos bloques grandes de color, trama y palabra que ocupan la pantalla. Rechaza el dashboard de tarjetas con números chicos y el header de marca que compite con el dato.

OWN-WORLD: Institucional UNLaM sobrio: blanco, grises neutros, Open Sans, verde azulado `#009476` sólo para identidad y acciones. Rojo, ámbar y verde de semáforo reservados al estado, siempre con trama diagonal (densa, media, ninguna) y la palabra en mayúsculas pesadas. CERRADA en gris oscuro con trama cruzada.

STORY: Abre la app y en un vistazo sabe cómo está cada playa y cuán reciente es el dato; si duda, toca la playa y lee qué le pasa si va. Decide y guarda el teléfono.

FIRST VIEWPORT: Header fino (SPOTTER en verde a la izquierda; antigüedad del dato y botón Actualizar a la derecha). Debajo, Perón y La Paz como dos bloques apilados de igual tamaño que llenan el resto de la pantalla, nombre arriba y estado enorme. Leyenda de una línea al pie.

FORM: Señalética vial de estado (bloques de color + trama + palabra), dirección fijada por el equipo (estilo institucional UNLaM). seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
