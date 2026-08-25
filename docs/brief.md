# Brief — SPOTTER

**Repositorio:** [gadsii-SPOTTER](https://github.com/gadsii-unlam/gadsii-SPOTTER)

---

## Versión 1 — TP1

**Qué cambió respecto de la versión anterior y por qué:** Esta es la versión inicial del brief. Nace en el TP1 con la definición del producto y del segmento. No hay versión previa; se establece la línea base sobre la que se irá iterando en los TPs siguientes. Este es un documento vivo: cada versión se commitea y abre con un párrafo declarando qué cambió y por qué.

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

### Usuario primario elegido (hipotético)

Se eligen como grupo primario **personal de seguridad**, **docentes y personal académico**, y **estudiantes con auto**. Los estudiantes con auto y los docentes concentran el volumen principal de la demanda diaria de consulta y reserva, mientras que el personal de seguridad es indispensable por actuar como usuario operativo en los accesos.

> **Aclaración:** esta elección de usuario primario es todavía **hipotética**. Se validará en los TPs siguientes mediante el relevamiento y las pruebas del MVP con usuarios reales del segmento.

---

## Supuestos

- Los estudiantes en auto esperan de 10 a 15 minutos en horario pico para estacionar. *(Se comprueba midiendo con cronómetro la demora en la fila en una entrada.)*
- No hay sistema de registro de autos en la UNLaM. *(Se comprueba con entrevistas al personal de seguridad operativa en las garitas.)*
- Existen APIs para comunicarse con el sistema de alumnos/docentes de la UNLaM. *(Se comprueba consultando con el área de sistemas.)*
- Hay cámaras que apuntan a la entrada y salida del estacionamiento. *(Se comprueba visitando cada acceso.)*
- El personal de seguridad cuenta con conectividad a internet y un dispositivo móvil en las garitas para validar reservas en tiempo real. *(Se comprueba con observación directa y consultas al personal operativo.)*
- **[CRÍTICO]** La comunidad universitaria está dispuesta a planificar y reservar su lugar con anticipación en lugar de buscarlo al llegar. *(Se confirmaría con entrevistas donde los usuarios afirmen preferir usar la app antes de salir de sus casas. Es crítico porque sostiene la viabilidad entera del proyecto: el éxito depende de que los usuarios adopten este nuevo comportamiento.)*
