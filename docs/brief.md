---
type: Brief
title: Brief de Producto — SPOTTER
description: Definición del producto, segmento, usuarios y supuestos de SPOTTER; documento vivo versionado por TP.
tags: [producto, segmento, usuarios, supuestos]
status: draft
---

# Brief — SPOTTER

**Repositorio:** [gadsii-SPOTTER](https://github.com/gadsii-unlam/gadsii-SPOTTER)

---

## Versión 1 — TP1

**Qué cambió respecto de la versión anterior y por qué:** Esta es la versión inicial del brief. Nace en el TP1 con la definición del producto y del segmento. No hay versión previa; se establece la línea base sobre la que se irá iterando en los TPs siguientes. Este es un documento vivo: cada versión se commitea y abre con un párrafo declarando qué cambió y por qué.

> **Corrección post-devolución (25/08/2026):** la devolución del corrector observó que la
> consigna pide **un solo** grupo de usuarios primario, no tres. Se resuelve: el usuario
> primario único queda definido como **estudiantes con auto** (ver `### Usuario primario
> elegido` más abajo). El roster de usuarios reales U1/U2/U3 —también observado por la
> devolución, ya que dos de los tres no pertenecían a este grupo— se documenta en
> [`docs/usuarios/usuarios-reales.md`](usuarios/usuarios-reales.md). Detalle completo de la
> devolución en [`docs/referencias/tp1-devolucion.md`](referencias/tp1-devolucion.md).

---

## Versión 2 — TP2

**Qué cambió respecto de la versión 1 y por qué:** se reemplaza el perfil hipotético de
"estudiantes con auto" por el perfil real de U1, U2 y U3, construido a partir de entrevistas
semiestructuradas aplicadas durante la semana del 25/08/2026 (ver
[`docs/usuarios/guia-entrevista-tp2.md`](usuarios/guia-entrevista-tp2.md) y
[`docs/evidencia/tp2/entrevistas-transcripcion.md`](evidencia/tp2/entrevistas-transcripcion.md)).
El cambio más importante: el **supuesto crítico** del TP1 —que la comunidad está dispuesta a
*planificar y reservar con anticipación*— se refuta parcialmente. Lo que los tres usuarios piden
de forma consistente es información de ocupación **en tiempo real por playa** (no un dato
agregado de "el estacionamiento") y, como máximo, un bloqueo del lugar por unos minutos mientras
llegan — no una reserva armada con antelación desde su casa. Esto redirige el mecanismo central
del producto: de un "motor de reservas por franjas horarias" a consulta de disponibilidad en
tiempo real + bloqueo corto. También se incorporan hallazgos no previstos por el TP1: dos playas
físicamente distintas (Perón y La Paz) en vez de un estacionamiento único, cierre de La Paz los
sábados, estacionamiento indebido como salida de último recurso, y presión de demanda externa
ajena a la comunidad UNLaM. Detalle completo en
[`docs/usuarios/perfil-usuario.md`](usuarios/perfil-usuario.md),
[`docs/usuarios/supuestos-confrontacion.md`](usuarios/supuestos-confrontacion.md) y
[`docs/usuarios/hipotesis-valor.md`](usuarios/hipotesis-valor.md).

---

## Perfil de usuario real (TP2)

Reemplaza al perfil hipotético de la versión 1. Usuario primario: **estudiantes con auto**,
confirmado como correcto tras el relevamiento (los tres entrevistados, con carreras y horarios
distintos, describen el mismo problema central).

- **U1** (Arquitectura, 25 años, turno mañana): usa auto porque traslada maquetas. Pierde hasta
  media hora dando vueltas, hace fila y a veces se queda sin lugar, y como último recurso deja el
  auto mal estacionado.
- **U2** (Kinesiología y Fisiatría, 22 años, 5 días/semana): espera hasta 20 minutos en las
  cuadras previas a la playa Perón antes de saber si hay lugar; llega sistemáticamente 10-15
  minutos tarde.
- **U3** (Ingeniería Electrónica, 27 años, turno noche): decide entre dos playas (Perón y La Paz)
  según el horario, sin información previa de ocupación; La Paz cierra los sábados.

Perfil completo, necesidades, problemas y contexto de uso relevados en
[`docs/usuarios/perfil-usuario.md`](usuarios/perfil-usuario.md).

## Hipótesis de valor (TP2)

**Creemos que** los estudiantes de la UNLaM que se trasladan en auto propio y cursan en horarios
de alta demanda (mañana, mediodía o el turno noche cercano a las 18:30) **tiene el problema de**
no saber, antes de encolarse o de recorrer las últimas cuadras, si alguna de las dos playas de
estacionamiento (Perón o La Paz) tiene lugar disponible — lo que les hace perder entre 15 y 30
minutos por viaje, llegar tarde a clase o a instancias de evaluación, y en los casos más extremos
optar por estacionar de forma indebida en la calle. **Nuestra solución es** SPOTTER, una
aplicación que muestra el nivel de ocupación en tiempo real de cada playa por separado, permite
bloquear un lugar por unos minutos mientras el usuario se aproxima, y envía notificaciones
ajustadas al horario de cursada de cada estudiante. **Sabremos que estamos en lo correcto
cuando**, al validar el prototipo con U1, U2 y U3 en el TP5, al menos 2 de los 3 reporten haber
elegido a qué playa dirigirse a partir de la información en tiempo real de la app, y ninguno
reporte haber necesitado reservar con más de unos pocos minutos de anticipación. Desarrollo
completo y trazabilidad en
[`docs/usuarios/hipotesis-valor.md`](usuarios/hipotesis-valor.md).

---

## Segmento elegido

Miembros activos de la comunidad UNLaM (estudiantes de grado y posgrado, docentes, personal administrativo, de mantenimiento, limpieza y seguridad) de todos los turnos, y visitantes externos que concurren a actividades en el predio (deportivas o eventos en el teatro), que se trasladan a la universidad en **vehículo particular** (auto, moto o bicicleta) y necesitan gestionar con anticipación un espacio en el estacionamiento.

**Estimación del segmento:** partiendo de una base de ~70.000 personas (65.000 estudiantes regulares + ~5.000 entre docentes, seguridad, limpieza, administrativos y visitantes), se estima que un 30% se moviliza en medio propio (21.000) y que un 75% de esos usuarios motorizados busca estacionar dentro de la universidad. El resultado es un segmento de **≈15.750 personas** (70.000 × 30% × 75%).

**Por qué este segmento y no otro:** presenta una problemática real y tangible de disponibilidad y organización del estacionamiento. A diferencia de un segmento general ("estudiantes" o "docentes"), agrupar por *usuarios motorizados* sin importar su rol permite desarrollar una solución específica de reserva y gestión de espacios para distintos tipos de vehículos, resolviendo un dolor que cruza transversalmente a toda la institución.

---

## El producto

**Nombre:** SPOTTER.

**Problema:** la incertidumbre y la falta de disponibilidad de espacios de estacionamiento dentro de la universidad generan demoras diarias, especialmente en horario pico, que retrasan el inicio de la jornada laboral o de cursada.

**A quién le resuelve:** a los miembros activos de la comunidad UNLaM que asisten regularmente en vehículo particular (auto, moto o bicicleta) y a los visitantes externos que concurren a eventos del teatro o actividades deportivas. SPOTTER funciona como una aplicación de gestión que permite consultar la disponibilidad en tiempo real y reservar espacios según el horario de uso específico.

---

## Funcionalidades core

- **Consulta de disponibilidad:** visualización en tiempo real del estado de ocupación y los espacios libres asignados para autos, motos y bicicletas, brindando previsibilidad antes de llegar y, ante la falta de lugar, una estimación de la espera.
- **Reserva de lugar:** motor de reservas organizado por franjas horarias, que permite asegurar un espacio según el horario de trabajo o de cursada de cada persona.
- **Validación de ingresos:** conecta la reserva virtual con el acceso físico; el personal de seguridad, como usuario operativo, verifica autorizaciones y administra el flujo de entrada de vehículos.

---

## Integraciones previstas

**Componentes de desarrollo propio:**
- Front-end: aplicación web responsive.
- Back-end: backend de negocio y backend de procesamiento de imágenes (patentes / caras).

**Integraciones externas:**
- **API:** verifica que la persona sea miembro activo de la comunidad UNLaM y que sea dueña del vehículo (auto / moto).
- **Infraestructura:** servicio en la nube.
- **Sensores:** cámaras en las entradas con integración de IA para reconocimiento de patente.

---

## Grupos de usuarios

- **Estudiantes con auto:** asisten en horarios específicos y son la mayoría que usa el estacionamiento; podrían planificar mejor su asistencia.
- **Estudiantes con moto:** capacidad de espacio distinta a la de los autos; misma necesidad de planificación.
- **Estudiantes con bicicleta:** asisten en horarios específicos.
- **Docentes y personal académico:** una demora buscando lugar retrasa el inicio de la clase; el producto les permite cumplir sus horarios sin estrés.
- **Visitantes externos e invitados:** ajenos a la rutina universitaria (teatro, deportes); desconocen la dinámica de ocupación y buscan la tranquilidad de tener un lugar asegurado.
- **Personal de seguridad (usuario operativo):** controlan accesos y egresos; buscan una herramienta que automatice la validación de patentes y reservas para agilizar su trabajo.

### Usuario primario elegido

Grupo primario: **estudiantes con auto**. Es el grupo de mayor volumen de demanda diaria de
consulta y reserva del estacionamiento, y el que permite un relevamiento homogéneo (una técnica,
un instrumento, un mismo tipo de usuario) en el TP2. Docentes y personal de seguridad siguen
caracterizados como grupos de usuarios del producto (ver arriba), pero no como foco primario del
análisis de usuarios.

> **Validado en el TP2 (31/08/2026):** el relevamiento con U1, U2 y U3 confirma que
> "estudiantes con auto" es el foco correcto — ver
> [`docs/usuarios/supuestos-confrontacion.md`](usuarios/supuestos-confrontacion.md#el-usuario-primario-elegido-sigue-siendo-el-correcto).
> Ya no es una apuesta de diseño sin contrastar.

---

## Supuestos

Estado de cada supuesto tras el relevamiento del TP2 (detalle y evidencia en
[`docs/usuarios/supuestos-confrontacion.md`](usuarios/supuestos-confrontacion.md)):

- Los estudiantes en auto esperan de 10 a 15 minutos en horario pico para estacionar. — **Confirmado, con matices:** el piso del rango es correcto, pero buena parte de la demora ocurre en el acceso/calle antes de llegar a la playa, no sólo dentro de ella.
- No hay sistema de registro de autos en la UNLaM. — **Sin evidencia (pendiente):** no verificable entrevistando estudiantes; depende de consultar a seguridad.
- Existen APIs para comunicarse con el sistema de alumnos/docentes de la UNLaM. — **Sin evidencia (pendiente):** depende del área de sistemas.
- Hay cámaras que apuntan a la entrada y salida del estacionamiento. — **Sin evidencia (pendiente):** depende de observación directa en los accesos.
- El personal de seguridad cuenta con conectividad a internet y un dispositivo móvil en las garitas para validar reservas en tiempo real. — **Sin evidencia (pendiente):** depende de consultar al personal de seguridad.
- **[CRÍTICO]** La comunidad universitaria está dispuesta a planificar y reservar su lugar con anticipación en lugar de buscarlo al llegar. — **Refutado (parcialmente):** los tres usuarios piden información de ocupación en tiempo real y, como máximo, un bloqueo de unos minutos al llegar — no una reserva planificada con antelación. Ver implicancia para el producto en la Hipótesis de valor (TP2) más arriba.
