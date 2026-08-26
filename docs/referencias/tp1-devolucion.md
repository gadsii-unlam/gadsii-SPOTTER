---
type: Referencia
title: "TP1 — Devolución del corrector"
description: Devolución de Claudio Figuerola sobre la entrega de TP1, transcripta a Markdown desde el .docx original con markitdown.
tags: [devolucion, correccion, tp1]
generated:
  by: markitdown/0.0.2
  at: 2026-08-25T00:00:00Z
sources:
  - id: original
    resource: originales/tp1-devolucion.docx
    title: TP1-SPOTTER-Devolucion.docx
---

# GADSII (3665) — Gestión Aplicada al Desarrollo de Software II

2° Cuatrimestre 2026 — Universidad Nacional de La Matanza

**TP1 — Devolución del corrector**
**Equipo SPOTTER**

## Datos de la entrega

| | |
|---|---|
| **Equipo** | SPOTTER |
| **Integrantes** | Berti Rodrigo · Fragassi Donatella · Mendez Lucas · Miro Agustín · Morandi Mayra |
| **Repositorio** | https://github.com/gadsii-unlam/gadsii-SPOTTER |
| **Archivo entregado** | TP1-SPOTTER.pdf (subido a MIEL, comisión 117983) |
| **Fecha de entrega** | 25/08/2026 (último commit del brief: 25/08/2026) |
| **Corrector** | Claudio Figuerola |
| **Estado** | Condiciones pendientes |

## 1. Condiciones excluyentes

Una condición excluyente que no se cumple bloquea el resultado del TP hasta que el equipo la
corrija puntualmente.

| Condición | ¿Cumple? | Observación |
|---|---|---|
| Repositorio creado en gadsii-SPOTTER, con README inicial (integrantes y producto) y acceso de lectura para los tres docentes. | Sí | Repo público en la organización de la cátedra; README con integrantes, producto y segmento. |
| El producto cumple las dos condiciones técnicas: al menos un componente de software propio y al menos una integración externa. | Sí | Componente propio: front-end y back-end (negocio + procesamiento de imágenes). Integraciones: API de verificación, infraestructura en la nube, cámaras con IA — el más completo y explícito de los equipos corregidos hasta ahora. |
| Entre 5 y 8 supuestos, en primera persona y forma afirmativa, cada uno con la evidencia que lo confirmaría o refutaría, y el supuesto crítico marcado. | Sí | 5 supuestos en primera persona, cada uno con su propia evidencia, y el crítico marcado y explicado (por qué es crítico, no sólo etiquetado). |
| Los tres usuarios reales (U1, U2, U3) documentados con rol, cómo se llegó a cada uno, relación previa con el equipo, y disponibilidad confirmada para TP2 y TP5. | No | U1 tiene la disponibilidad confirmada para TP2 y TP5. U2 y U3 quedaron con la disponibilidad "pendiente de confirmación" para ambas instancias (el texto de U3 es además contradictorio: dice "Confirmó" y a la vez "Pendiente de Confirmación"). |
| docs/brief.md versión 1 commiteado con el contenido completo del punto 6 de la consigna. | Sí | Commiteado con segmento (incluyendo la estimación numérica del tamaño), producto, funcionalidades, integraciones, grupos de usuarios y supuestos con el crítico marcado. Consolida fielmente el PDF, incluida la aclaración de que el usuario primario es todavía hipotético. |

## 2. Checklist por dimensión

Cada ítem se marca Cumple / Cumple parcialmente / No cumple / Pendiente (si depende de una
condición excluyente todavía sin resolver). El estado de cada dimensión no sale de contar
ítems: se asigna usando el checklist como evidencia. Si algún ítem queda Pendiente, la dimensión
completa queda Pendiente.

### Evidencia — Pendiente

*El segmento es el mejor justificado numéricamente de los equipos corregidos hasta ahora; la
disponibilidad sin confirmar de U2 y U3 es la condición excluyente que bloquea esta dimensión.*

| Ítem | Estado | Nota |
|---|---|---|
| Segmento justificado: por qué ese y no otro, con tamaño aproximado y qué lo distingue | Cumple | Estimación explícita con el razonamiento completo: de 70.000 personas, 30% se moviliza en vehículo propio, 75% de esos busca estacionar dentro — da ≈15.750 personas. El cálculo más transparente y específico visto hasta ahora. |
| Usuario primario justificado dentro del segmento: por qué ese grupo y no otro | Parcial | La consigna pide seleccionar el grupo primario (uno); acá se eligen tres (personal de seguridad, docentes, estudiantes con auto) como "primario" en conjunto. La justificación de por qué esos tres son centrales es razonable, pero no resuelve cuál es el principal. |
| U1, U2 y U3 documentados como parte real de ese segmento, con cómo se llegó a cada uno | Pendiente | Rol, contacto y relación previa están para los tres; depende de la condición excluyente sin resolver: sólo U1 tiene la disponibilidad confirmada para TP2 y TP5. |

### Criterio propio — Sólido

*Los cinco supuestos son específicos y bien evidenciados, y el crítico está justificado
explicando por qué lo es, no sólo etiquetado.*

| Ítem | Estado | Nota |
|---|---|---|
| Supuestos específicos del equipo y el segmento (5 a 8, con evidencia) | Cumple | 5 supuestos, cada uno con su propia forma de comprobación (cronómetro en la fila, entrevistas al personal de seguridad, consulta al área de sistemas, etc.). |
| Supuesto crítico identificado y realmente central, no trivial | Cumple | El único de los equipos corregidos que explica por qué el supuesto es crítico, no sólo lo etiqueta: sostiene la viabilidad entera del proyecto. |
| El segmento elegido diferencia de verdad a este equipo del resto de la cursada | Cumple | "Usuarios motorizados", transversal a roles, es un recorte específico y distinto de elegir "estudiantes" o "docentes" en general — el propio documento lo explica así. |

### Contenido técnico — Con observaciones

*La definición de producto es la más completa técnicamente de los equipos corregidos hasta
ahora; el grupo de usuarios primario, igual que en Evidencia, no resuelve cuál es el principal
entre los tres elegidos.*

| Ítem | Estado | Nota |
|---|---|---|
| Nombre, problema concreto y a quién se lo resuelve | Cumple | SPOTTER, incertidumbre y falta de disponibilidad de estacionamiento, dirigido a usuarios motorizados de la comunidad UNLaM. |
| Funcionalidades core, 3 a 5, bien definidas | Cumple | 3 funcionalidades (en el límite inferior del rango): consulta de disponibilidad, reserva de lugar, validación de ingresos. |
| Integraciones tecnológicas y por qué son necesarias | Cumple | API de verificación de identidad/vehículo, infraestructura en la nube, cámaras con reconocimiento de patente — las tres bien justificadas. |
| Grupos de usuarios listados, caracterizados, y primario seleccionado con justificación | Parcial | 6 grupos bien caracterizados (incluso separando estudiantes por tipo de vehículo); el "primario" son 3 de esos 6 grupos combinados, sin resolver cuál es el principal. |
| Producto cumple las dos condiciones técnicas | Cumple | Declarado de forma explícita y detallada: componentes propios y tres tipos de integración externa. |

### Coherencia — Sólido

*El documento es internamente consistente en todos sus puntos, y docs/brief.md consolida
fielmente el PDF, incluida la aclaración sobre el usuario primario.*

| Ítem | Estado | Nota |
|---|---|---|
| Segmento, producto, grupos de usuarios y usuario primario alineados entre sí | Cumple | |
| Los supuestos son coherentes con el segmento y el producto elegidos | Cumple | Cada supuesto conecta con una funcionalidad o un riesgo concreto del producto. |
| docs/brief.md v1 consolida fielmente lo mismo que dice el PDF entregado | Cumple | Reproduce fielmente el PDF, sección por sección, incluida la aclaración de que el usuario primario es todavía hipotético. |

### Entregables formales — Con observaciones

*Repositorio y brief.md en orden; el enlace al repositorio no aparece como texto completo, la
extensión está por encima de la orientativa y el registro de IA está vacío.*

| Ítem | Estado | Nota |
|---|---|---|
| PDF TP1-SPOTTER.pdf, 2 a 3 páginas orientativas, enlace al repositorio en la primera página | Parcial | Nombre de archivo correcto; 5 páginas, por encima de la orientativa. El texto visible dice sólo "gadsii-SPOTTER" (no la URL completa) — el enlace completo está como hyperlink, pero no como texto plano legible. |
| Repositorio con nomenclatura correcta y README inicial completo | Cumple | gadsii-SPOTTER; README con integrantes, producto y segmento. |
| docs/brief.md v1 commiteado en la ruta correcta | Cumple | |
| Si usaron IA, registro en docs/prompts.md con fecha y herramienta | Parcial | El archivo existe pero está vacío (sólo el encabezado). Si no usaron IA no hay nada que corregir; si la usaron, falta completar el registro. |

## 3. Estado general

| Dimensión | Estado |
|---|---|
| Evidencia | Pendiente |
| Criterio propio | Sólido |
| Contenido técnico | Con observaciones |
| Coherencia | Sólido |
| Entregables formales | Con observaciones |

*Estado del TP: Condiciones pendientes. Una sola condición excluyente sin cumplir: falta la
disponibilidad confirmada de U2 y U3 para el TP2 y el TP5 (sólo U1 la tiene). El resto del
trabajo es el más sólido de los equipos corregidos hasta ahora — el único punto que se repite en
varias dimensiones es que el grupo de usuarios primario está formado por tres grupos en vez de
uno.*

## 4. Qué tiene que corregir el equipo

**Plazo: antes de la clase del 01/09/2026** (clase siguiente a la entrega del TP1, según el
cronograma).

- Confirmar y documentar la disponibilidad de U2 y U3 para el relevamiento del TP2 y la prueba
  del MVP del TP5 — hoy ambos dicen "pendiente de confirmación" (y en el caso de U3 el texto es
  contradictorio: dice "confirmó" y "pendiente" a la vez, conviene revisarlo).

*Es el único punto que bloquea el TP. Aprovechen también para decidir cuál de los tres grupos
(seguridad, docentes, estudiantes con auto) es el usuario primario real — la consigna pide uno
solo, y elegirlo va a simplificar el diseño del relevamiento del TP2. No es excluyente, pero
conviene resolverlo antes de esa instancia.*

## 5. Lo que ya está bien

- La estimación del tamaño del segmento es la más rigurosa vista hasta ahora: parte de una base
  de 70.000 personas y aplica dos factores (30% se moviliza en vehículo propio, 75% de esos
  busca estacionar dentro) para llegar a ≈15.750 personas, con el razonamiento completo
  explícito.
- El supuesto crítico es el único, de los equipos corregidos, que explica por qué lo es, en vez
  de sólo etiquetarlo.
- Las integraciones tecnológicas (API, infraestructura, cámaras con IA) están descriptas con un
  nivel de detalle técnico por encima del resto de las entregas.
- docs/brief.md consolida fielmente el PDF, incluyendo la aclaración honesta de que el usuario
  primario es todavía una elección hipotética.
