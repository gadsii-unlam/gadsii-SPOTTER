---
type: Referencia
title: "TP1 — Entrega: TP1-SPOTTER.pdf"
description: PDF entregado por el equipo para el TP1 (Definición del Producto y del Segmento), transcripto a Markdown desde el original con markitdown.
tags: [entrega, tp1]
generated:
  by: markitdown/0.0.2
  at: 2026-08-25T00:00:00Z
sources:
  - id: original
    resource: originales/tp1-entrega.pdf
    title: TP1-SPOTTER.pdf
---

# TP1 — Definición del Producto y del Segmento

**Repositorio de GitHub:** gadsii-SPOTTER

## El Segmento

Miembros activos de la comunidad UNLaM (estudiantes de grado y posgrado, docentes, personal
administrativo, de mantenimiento, limpieza y seguridad) de todos los turnos, así como también
visitantes externos que concurren a diversas actividades en el predio, ya sea deportivas o
eventos en el teatro de la institución, que se trasladan a la universidad utilizando vehículos
particulares (autos, motos o bicicletas) y necesitan gestionar con anticipación un espacio en el
estacionamiento.

### Estimación aproximada del segmento

La universidad cuenta históricamente con unos 65.000 estudiantes regulares, más
aproximadamente 5.000 personas entre docentes, personal de seguridad, limpieza, administrativos
y visitantes externos. Esto nos da una base de 70.000 personas.

Asumimos que la mayoría utiliza transporte público o camina. Estimamos que un 30% de la
comunidad total elige movilizarse en un medio propio (auto, moto o bicicleta) por cuestiones de
distancia, comodidad o el horario de su jornada. Esto reduce el número a 21.000 personas.

No todos los que van en vehículo estacionan dentro de la universidad; algunos encuentran lugar
rápido en las calles de alrededores o prefieren no hacer fila en la entrada. Estimamos que un
75% de los usuarios motorizados busca garantizar su lugar dentro.

Multiplicando estos factores (70.000 x 30% x 75%), la estimación nos da que el segmento de la
aplicación SPOTTER estaría integrado por aproximadamente **15.750 personas**.

### Qué los distingue del resto de la comunidad UNLaM

Se distinguen porque utilizan un medio de transporte propio (auto, moto o bicicleta) para
asistir a la UNLaM, a diferencia de la gran mayoría que llega a pie o en transporte público.

Debido a su forma de traslado, dependen directamente de la disponibilidad de espacios de
estacionamiento dentro de la universidad para poder iniciar su jornada laboral o llegar a clase
a tiempo.

La necesidad de espacio y el tiempo de permanencia pueden variar según el tipo de vehículo que
manejen y el horario o turno en el que asisten a la institución.

### Por qué se eligió este segmento y no otro

Elegimos este segmento porque presenta una problemática real y tangible relacionada con la
disponibilidad y organización del estacionamiento dentro de la universidad.

A diferencia de elegir un segmento general, como podría ser "estudiantes de la UNLaM" o
"docentes", agruparlos de esta forma permite desarrollar una solución específicamente orientada
a la reserva y gestión de espacios para distintos tipos de vehículos.

Además, al elegir "usuarios motorizados" sin importar su rol (estudiante, seguridad, docente),
el producto resuelve un dolor que cruza transversalmente a toda la institución.

### Usuarios reales del segmento

**Usuario U1**
- Rol dentro del segmento: Estudiante de 4to año de Ingeniería Informática de la UNLaM que
  asiste en auto al turno noche.
- Cómo llegamos a esta persona: Compañero de otra materia.
- Relación previa con el equipo: Conocido de un integrante.
- Confirmó disponibilidad para el relevamiento del TP2, última semana de agosto.
- Confirmó disponibilidad para probar el MVP del TP5, última semana de septiembre.

**Usuario U2**
- Rol dentro del segmento: Docente de la UNLaM que asiste regularmente en auto para dictar
  clases.
- Cómo llegamos a esta persona: Conocido del trabajo.
- Relación previa con el equipo: Conocido de un integrante.
- Disponibilidad para el TP2: Pendiente de confirmación.
- Disponibilidad para el TP5: Pendiente de confirmación.

**Usuario U3**
- Rol dentro del segmento: Personal de Seguridad de la UNLaM.
- Cómo llegamos a esta persona: Conocido de la facultad.
- Relación previa con el equipo: Ninguna.
- Disponibilidad para el TP2: Pendiente de confirmación.
- Disponibilidad para el TP5: Pendiente de confirmación.

> Nota (agosto 2026): la devolución del corrector marcó esto como condición excluyente pendiente
> — ver `referencias/tp1-devolucion.md`. Confirmar y documentar la disponibilidad real de U2 y
> U3 es la corrección prioritaria antes de avanzar con el TP2.

## El producto

El sistema de gestión desarrollado por el equipo lleva el nombre de **SPOTTER**.

### Problemática abordada y alcance de la solución

Esta herramienta surge para dar respuesta a la problemática diaria vinculada con la
disponibilidad y la incertidumbre de los espacios de estacionamiento dentro de la universidad.

El sistema resuelve este conflicto funcionando como una aplicación de gestión que permite
consultar la disponibilidad en tiempo real y reservar espacios según el horario de uso
específico.

Está diseñada para resolver este contratiempo tanto a los miembros activos de la comunidad
UNLaM (estudiantes, docentes, personal administrativo, de seguridad y de limpieza) como a los
visitantes externos que asisten a eventos en el teatro o realizan actividades deportivas en la
institución, que asisten de manera regular utilizando vehículos particulares, ya sean autos,
motos o bicicletas.

### Funcionalidades core

- **Consulta de disponibilidad:** permite a los usuarios visualizar el estado de ocupación y los
  espacios libres asignados en tiempo real para autos, motos y bicicletas, brindando
  previsibilidad antes de llegar a la universidad y, en caso de no tener disponibilidad, estimar
  la espera.
- **Reserva de lugar:** se integra un motor de reservas organizado por franjas horarias. A
  través de esta función, la aplicación permite gestionar y asegurar los espacios de
  estacionamiento dependiendo del horario de trabajo o de cursada de cada persona.
- **Validación de ingresos:** sirve para conectar la reserva virtual con el acceso físico,
  permitiendo que el personal de seguridad, actuando como usuario operativo del sistema, pueda
  verificar rápidamente las autorizaciones y administrar el flujo de entrada de los vehículos.

### Integraciones tecnológicas que requiere

Componentes de software de desarrollo propio:
- Front-end: aplicación web responsive.
- Back-end: backend de negocio, backend de procesamiento de imágenes (patentes / caras).

Integración externa:
- **API:** verifica si la persona es un miembro activo de la comunidad UNLaM (estudiantes de
  grado y posgrado, docentes, personal administrativo, de mantenimiento, limpieza y seguridad).
  Además, verifica que la persona sea dueña del vehículo (auto / moto).
- **Servicio de infraestructura:** en la nube.
- **Sensor:** cámaras en las entradas con integración de IA (reconocimiento de patente).

## Los grupos de usuarios

Grupos de usuarios principales del producto:
- **Estudiantes con auto:** estudiantes de la UNLaM con auto que utilizan el estacionamiento,
  van en horarios específicos y son la mayoría que usa el estacionamiento. Con la aplicación
  podrían planificar mejor la asistencia a clases en tiempo y forma.
- **Estudiantes con moto:** estudiantes de la UNLaM con motocicleta que utilizan el
  estacionamiento, van en horarios específicos y tienen capacidad distinta que los estudiantes
  con auto. Con la aplicación podrían planificar mejor la asistencia a clases en tiempo y forma.
- **Estudiantes con bicicleta:** estudiantes de la UNLaM con bicicleta que utilizan el
  estacionamiento, van en horarios específicos.
- **Docentes y personal académico:** profesionales encargados de dictar las materias. Una
  demora en el ingreso o buscando lugar retrasa el inicio de la clase para los alumnos. Al usar
  el producto, podrán cumplir con sus horarios laborales sin estrés.
- **Visitantes externos e invitados:** personas ajenas a la rutina universitaria que asisten al
  teatro o a realizar actividades deportivas, entre otras actividades. Desconocen la dinámica de
  ocupación del estacionamiento. Su motivación para usar la app es la tranquilidad de saber de
  antemano que tendrán un lugar asegurado para dejar su vehículo durante el evento.
- **Personal de seguridad, como usuario operativo del sistema:** empleados que controlan los
  accesos y egresos en las entradas de la universidad, y enfrentan el caos vehicular y las
  congestiones. Su motivación para adoptar el sistema es contar con una herramienta que
  automatice la validación de patentes y reservas, agilizando su trabajo.

**Grupo de usuarios primario (versión 1 del brief, hipotético):**
- Personal de seguridad
- Docentes y personal académico
- Estudiantes con auto

El estudiante con auto, los docentes y personal académico representan el volumen principal de la
demanda diaria, siendo quienes necesitan utilizar el sistema para consultar la disponibilidad y
reservar un espacio de estacionamiento. Por otro lado, resulta indispensable integrar al personal
de seguridad dentro del mismo núcleo, ya que actúan como el usuario operativo del sistema en los
accesos del estacionamiento.

> Nota (agosto 2026): la devolución del corrector observó que la consigna pide **un solo** grupo
> primario, no tres — ver `referencias/tp1-devolucion.md`. Resuelto para el TP2: el usuario
> primario único queda definido como **estudiantes con auto** (ver `docs/log.md` y
> `docs/usuarios/`).

## Los supuestos

- Asumimos que los estudiantes en auto esperan de 10 a 15 minutos en horario pico para
  estacionar. *(Se comprueba yendo físicamente a una entrada del estacionamiento y midiendo con
  cronómetro el tiempo de demora en la fila.)*
- Asumimos que no hay sistema de registro de autos en la UNLaM. *(Se comprueba realizando
  entrevistas puntuales al personal de seguridad operativa en las garitas.)*
- Asumimos que existen APIs para comunicarnos con el sistema de alumnos/docentes de la UNLaM.
  *(Se comprueba consultando con el área de sistemas de la UNLaM.)*
- Asumimos que hay cámaras que apuntan a la salida y entrada del estacionamiento. *(Se comprueba
  visitando cada salida y entrada del estacionamiento.)*
- Asumimos que el personal de seguridad cuenta con conectividad a internet y un dispositivo
  móvil en las garitas de acceso para poder validar las reservas en tiempo real. *(Se
  comprobaría mediante observación directa en las entradas vehiculares y consultas formales al
  personal operativo sobre su equipamiento tecnológico actual.)*
- **[CRÍTICO]** Asumimos que la comunidad universitaria está dispuesta a planificar y reservar
  su lugar con anticipación en lugar de buscarlo en el momento de llegar a la UNLaM. *(La
  evidencia que permitiría confirmar esto serían entrevistas donde los usuarios afirmen preferir
  usar una aplicación antes de salir de sus casas. Es crítico porque sostiene la viabilidad
  entera del proyecto: el sistema está diseñado específicamente como una aplicación de gestión
  para consultar disponibilidad y reservar espacios, y su éxito depende de que los usuarios
  adopten este nuevo comportamiento.)*
