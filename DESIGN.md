---
name: SPOTTER
description: Ocupación de las playas Perón y La Paz de la UNLaM, legible de un vistazo al volante.
colors:
  brand: "#009476"
  brand-strong: "#0f7957"
  brand-hover: "#0b6448"
  ground: "#f3f4f3"
  surface: "#ffffff"
  ink: "#111111"
  ink-2: "#5f6361"
  line: "#dfe2e0"
  full: "#c62828"
  mid: "#f2a900"
  free: "#1e7e34"
  closed: "#3b3d3c"
  tag-bg: "#000000a6"
  ground-dark: "#111314"
  surface-dark: "#1b1e1f"
  ink-dark: "#f1f3f2"
  ink-2-dark: "#a8afac"
  line-dark: "#2d3233"
  brand-text-dark: "#3cc39f"
typography:
  state:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 17cqi, 3rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  brand:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    letterSpacing: "0.02em"
  title:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    letterSpacing: "0.04em"
  body:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
rounded:
  sm: "4px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
components:
  lot-full:
    backgroundColor: "{colors.full}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
  lot-mid:
    backgroundColor: "{colors.mid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
  lot-free:
    backgroundColor: "{colors.free}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
  lot-closed:
    backgroundColor: "{colors.closed}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
  button-primary:
    backgroundColor: "{colors.brand-strong}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "48px"
  notice:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: SPOTTER

Fuente normativa: `src/styles.css`. Especímenes: `docs/diseno/design-system.html`.

## Overview

**Creative North Star: "La señal vial"**

El estado de cada playa se lee como un cartel en la ruta, no como una tarjeta de app: dos
bloques grandes de color, trama y palabra que ocupan casi toda la pantalla. Todo lo demás
(header, leyenda, botones) es institucional y sobrio para no competir con la señal.

La identidad viene del sitio de la UNLaM: Open Sans, verde, blanco y grises. El bordó
institucional y el logo de la UNLaM quedan afuera a propósito: el bordó se confunde con LLENO y
el logo haría pasar la app por oficial durante las pruebas con usuarios.

**Key Characteristics:**
- Estado dicho tres veces: color, trama y palabra.
- Las dos playas con el mismo tamaño y peso; la app informa, no recomienda.
- Objetivos táctiles de 48px como mínimo; una sola familia tipográfica.
- Modo claro y oscuro según el sistema (el turno noche maneja de noche).

## Colors

Neutros institucionales con un verde de marca; los colores de semáforo son exclusivos del estado.

- **Verde UNLaM** (`brand` #009476): wordmark e íconos de acción. En texto chico se usa `brand-strong`.
- **Verde UNLaM profundo** (`brand-strong` #0f7957): fondo de botones primarios (contraste 5.3:1 con blanco).
- **Tinta / Tinta 2 / Fondo / Superficie / Línea**: neutros levemente verdosos para el shell.
- **LLENO** (`full` #c62828), **MEDIO** (`mid` #f2a900, texto oscuro), **LIBRE** (`free` #1e7e34), **CERRADA** (`closed` #3b3d3c).

**The Semáforo Exclusivo Rule.** Rojo, ámbar y verde de estado nunca aparecen fuera de un bloque
de playa, una muestra de leyenda o el detalle. El dato viejo, los errores y los avisos usan
neutros. El verde de marca es azulado y no se usa como fondo grande.

**The Riesgo Conocido.** El verde de marca y el de LIBRE comparten familia. Se separan por tono
(azulado vs. amarillento), por uso (marca nunca llena un bloque) y por la palabra LIBRE.

## Typography

**Familia:** Open Sans variable (300–800), servida desde `src/fonts/`, con `system-ui` de respaldo.

- **Estado** (800, clamp 2–3rem según el ancho del bloque, mayúsculas): la palabra LLENO / MEDIO / LIBRE / CERRADA.
- **Marca** (800, 1.375rem): "SPOTTER" en el header.
- **Nombre de playa** (800, 1.75rem, mayúsculas, tracking 0.04em, centrado en el bloque).
- **Texto** (400, 1rem–1.125rem, interlineado 1.5): consecuencias y avisos.
- **Meta / leyenda** (0.875rem): antigüedad del dato, cifras tabulares.

**The Una Familia Rule.** Una sola familia; la jerarquía sale de peso y tamaño, no de una segunda fuente.

## Layout

Columna única de hasta 480px centrada. Shell en tres filas: header, contenido que llena la
altura disponible, leyenda al pie. En el mapa, los dos bloques de playa se reparten el alto en
partes iguales. Ritmo de espaciado en múltiplos de 4px; margen lateral de 16px.

## Elevation & Depth

Casi plano. Solo los bloques de playa tienen una sombra ambiente suave para leerse como objetos
tocables; header y paneles se separan con una línea de 1px.

## Shapes

Radio de 16px en bloques de playa, 10px en botones, avisos y paneles, 4px en las muestras de la leyenda, pastilla en etiquetas.
Íconos SVG de trazo 2px con extremos redondeados.

## Components

- **Bloque de playa** (`.lot[data-state]`): nombre arriba y centrado, estado enorme abajo, flecha si lleva al detalle. Trama a 45°: densa (LLENO), media (MEDIO), cruzada (CERRADA); LIBRE va lisa (decisión del equipo). Al tocar, escala a 0.985.
- **Dato viejo** (`.lot.is-stale`): desaturado, opacidad 0.72, borde punteado y etiqueta "Dato viejo". Nunca se oculta ni se bloquea.
- **Header** (`.app-header`): SPOTTER a la izquierda; antigüedad del dato (negrita) y día/hora a la derecha; botón Actualizar de solo ícono. Mientras actualiza, el ícono gira y el dato anterior sigue a la vista.
- **Botones** (`.btn--primary`, `.btn--secondary`): 48px de alto, peso 700; deshabilitado al 45% de opacidad. En el detalle solo existe el botón hacia la otra playa.
- **Volver** (`.btn-back`): "‹" en el header, a la izquierda de SPOTTER, solo en el detalle; no corre el contenido. "Volver al mapa" abajo como segunda salida.
- **Detalle**: el bloque de la playa ocupa la misma mitad superior que en el mapa; consecuencia y botones en la mitad inferior.
- **Aviso sin conexión** (`.notice`): bloque neutro invertido con ícono; texto que nombra el problema y que se reintenta solo.
- **Leyenda** (`.legend`): la misma en todas las pantallas; suma CERRADA cuando aplica.

## Do's and Don'ts

- **Do** acompañar cada color de estado con su trama y su palabra.
- **Do** mostrar siempre la antigüedad del dato en el header.
- **Don't** usar bordó, ni rojo/ámbar/verde de estado, en el shell, en avisos o en marcas de error.
- **Don't** mostrar cifras de lugares, distancias o tiempos que el dato simulado no sostiene.
- **Don't** bloquear con modales: el usuario está manejando.
- **Don't** agregar el logo de la UNLaM.
