---
type: Borrador
title: "TP1-SPOTTER — Reentrega (corrección post-devolución)"
description: Borrador en Markdown para exportar a PDF y volver a subir a MIEL, incorporando las dos correcciones pedidas por el corrector (usuario primario único y disponibilidad de U1/U2/U3), y ajustando la extensión a 2-3 páginas.
tags: [tp1, correccion, reentrega]
status: draft
sources:
  - id: devolucion
    resource: /docs/referencias/tp1-devolucion.md
    title: "TP1 — Devolución del corrector"
  - id: brief
    resource: /docs/brief.md
    title: Brief de Producto — SPOTTER
  - id: usuarios-reales
    resource: /docs/usuarios/usuarios-reales.md
    title: Usuarios reales del segmento (corrección)
---

> **Nota de uso (no incluir al exportar a PDF):** este documento reemplaza al `TP1-SPOTTER.pdf`
> original para la reentrega pedida antes de la clase del 01/09/2026. Exportarlo a PDF (por
> ejemplo, abriendo el render de Markdown en el navegador y usando "Imprimir → Guardar como
> PDF") apuntando a 2-3 páginas, y subirlo a MIEL como `TP1-SPOTTER.pdf` (o el nombre que pida la
> cátedra para la reentrega). Repositorio incluido como texto plano abajo, no sólo como link,
> por la observación del corrector sobre esto.

---

# TP1 — Definición del Producto y del Segmento — Equipo SPOTTER

**Repositorio:** https://github.com/gadsii-unlam/gadsii-SPOTTER

**Integrantes:** Berti Rodrigo · Fragassi Donatella · Mendez Lucas · Miro Agustín · Morandi Mayra

## El segmento

Miembros activos de la comunidad UNLaM (estudiantes de grado y posgrado, docentes, personal
administrativo, de mantenimiento, limpieza y seguridad) de todos los turnos, y visitantes
externos que concurren a actividades en el predio (deportivas o eventos en el teatro), que se
trasladan a la universidad en **vehículo particular** (auto, moto o bicicleta) y necesitan
gestionar con anticipación un espacio en el estacionamiento.

**Tamaño estimado:** de una base de ~70.000 personas (65.000 estudiantes regulares + ~5.000
entre docentes, seguridad, limpieza, administrativos y visitantes), un 30% se moviliza en medio
propio (21.000) y un 75% de esos busca estacionar dentro de la universidad → **≈15.750
personas** (70.000 × 30% × 75%).

**Por qué este segmento:** agrupar por *usuarios motorizados*, sin importar su rol, permite una
solución específica de reserva y gestión de espacios por tipo de vehículo, resolviendo un dolor
transversal a toda la institución — a diferencia de un segmento genérico como "estudiantes" o
"docentes".

## El producto

**SPOTTER** resuelve la incertidumbre y falta de disponibilidad de estacionamiento dentro de la
UNLaM, que genera demoras diarias en horario pico. Permite consultar disponibilidad en tiempo
real y reservar espacios según el horario de uso, a miembros activos de la comunidad que asisten
en vehículo particular y a visitantes de eventos del teatro o actividades deportivas.

**Funcionalidades core:**
- **Consulta de disponibilidad** en tiempo real para autos, motos y bicicletas, con estimación
  de espera si no hay lugar.
- **Reserva de lugar** por franjas horarias, según el horario de cursada o trabajo de cada
  persona.
- **Validación de ingresos:** conecta la reserva virtual con el acceso físico; el personal de
  seguridad verifica autorizaciones y administra el flujo de entrada.

**Integraciones:** componente propio de front-end (web responsive) y back-end (negocio +
procesamiento de imágenes); integraciones externas con una API que verifica membresía UNLaM y
titularidad del vehículo, infraestructura en la nube, y cámaras con reconocimiento de patente en
los accesos.

## Grupos de usuarios y usuario primario

- **Estudiantes con auto:** mayoría de uso del estacionamiento, horarios específicos.
- **Estudiantes con moto** y **estudiantes con bicicleta:** misma necesidad de planificación,
  distinta capacidad de espacio.
- **Docentes y personal académico:** una demora los retrasa frente a una clase.
- **Visitantes externos e invitados:** desconocen la dinámica de ocupación, buscan la
  tranquilidad de un lugar asegurado.
- **Personal de seguridad:** usuario operativo del sistema en los accesos.

**Usuario primario (corregido): estudiantes con auto.** Es el grupo de mayor volumen de demanda
diaria de consulta y reserva, y permite un relevamiento homogéneo (una sola técnica, un mismo
tipo de usuario) en el TP2. *(Corrección respecto de la entrega original: se habían declarado
tres grupos como "primario" en conjunto — seguridad, docentes y estudiantes con auto — cuando la
consigna pide seleccionar uno solo.)*

### Usuarios reales (U1, U2, U3) — corregidos

| | Rol | Cómo se llegó | Relación previa | Disp. TP2 | Disp. TP5 |
|---|---|---|---|---|---|
| **U1** | Estudiante avanzado de Ing. Informática, turno noche, en auto | Compañero de otra materia | Conocido de un integrante | Confirmada | Confirmada |
| **U2** | Estudiante de Medicina (mitad de la carrera), en auto | Conocido de un integrante | Conocido de un integrante | Confirmada | Confirmada |
| **U3** | Estudiante de último año de Ing. Electrónica, ayudante docente, en auto | Compañero de proyecto de investigación de un integrante | Compañero de proyecto de investigación | Confirmada | Confirmada |

*(Corrección respecto de la entrega original: U2 y U3 eran una docente y un integrante de
seguridad, con disponibilidad "pendiente de confirmación"; se reemplazan por estos dos
estudiantes con auto, con disponibilidad ya confirmada para TP2 y TP5, alineados con el usuario
primario corregido.)*

## Supuestos

- Los estudiantes en auto esperan de 10 a 15 minutos en horario pico para estacionar. *(Se
  comprueba midiendo con cronómetro la demora en la fila en una entrada.)*
- No hay sistema de registro de autos en la UNLaM. *(Se comprueba con entrevistas al personal de
  seguridad operativa en las garitas.)*
- Existen APIs para comunicarse con el sistema de alumnos/docentes de la UNLaM. *(Se comprueba
  consultando con el área de sistemas.)*
- Hay cámaras que apuntan a la entrada y salida del estacionamiento. *(Se comprueba visitando
  cada acceso.)*
- El personal de seguridad cuenta con conectividad a internet y un dispositivo móvil en las
  garitas para validar reservas en tiempo real. *(Se comprueba con observación directa y
  consultas al personal operativo.)*
- **[CRÍTICO]** La comunidad universitaria está dispuesta a planificar y reservar su lugar con
  anticipación en lugar de buscarlo al llegar. *(Se confirmaría con entrevistas donde los
  usuarios afirmen preferir usar la app antes de salir de sus casas. Es crítico porque sostiene
  la viabilidad entera del proyecto: el éxito depende de que los usuarios adopten este nuevo
  comportamiento.)*

---

*Reentrega — corrección post-devolución. Agosto 2026. Repositorio:
https://github.com/gadsii-unlam/gadsii-SPOTTER*
