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

**Qué cambió respecto de la versión anterior y por qué:** Esta es la versión inicial del brief. Nace en el TP1 con la definición del producto y del segmento. No hay versión previa; se establece la línea base sobre la que se irá iterando en los TPs siguientes.

---

## Versión 2 — TP2

**Qué cambió respecto de la versión 1 y por qué:** se reemplaza el perfil hipotético de
"estudiantes con auto" por el perfil real de U1, U2 y U3, construido a partir de una encuesta
con preguntas abiertas aplicada durante la semana del 25/08/2026 (ver
[`docs/usuarios/guia-encuesta-tp2.md`](usuarios/guia-encuesta-tp2.md) y
[`docs/evidencia/tp2/encuesta-respuestas.md`](evidencia/tp2/encuesta-respuestas.md)).
El cambio más importante: el **supuesto crítico** del TP1 —que la comunidad está dispuesta a
*planificar y reservar con anticipación*— se refuta. Lo que los tres usuarios piden
de forma consistente es información de disponibilidad **en tiempo real**; U2 y U3 la piden por
playa y U1 propone un bloqueo del lugar por unos minutos mientras llega — no una reserva armada
con antelación desde su casa. Esto redirige el mecanismo central del producto: de un "motor de
reservas por franjas horarias" a consulta de disponibilidad en tiempo real + bloqueo corto. 
También se incorporan hallazgos no previstos por el TP1: cierre de La Paz los sábados, 
estacionamiento indebido como salida de último recurso, y presión de demanda externa
ajena a la comunidad UNLaM. Detalle completo en
[`docs/usuarios/perfil-usuario.md`](usuarios/perfil-usuario.md),
[`docs/usuarios/supuestos-confrontacion.md`](usuarios/supuestos-confrontacion.md) y
[`docs/usuarios/hipotesis-valor.md`](usuarios/hipotesis-valor.md).

---

## Versión 3 — TP3

**Qué cambió respecto de la versión anterior y por qué:** el alcance del MVP se reorientó basándose en los hallazgos del relevamiento a usuarios. Se excluyó el motor de reservas anticipadas por franjas horarias, ya que el supuesto crítico fue refutado: los usuarios exigen disponibilidad inmediata. El MVP ahora se enfoca estrictamente en resolver la pérdida de tiempo mediante la consulta visual de ocupación en tiempo real.

---

## Versión 4 — TP5

**Qué cambió respecto de la versión 3 y por qué:** el MVP salió del papel y se probó con U1,
U2 y U3 (ver [`docs/evidencia/tp5/`](evidencia/tp5/)). La hipótesis de valor se sostiene contra
el criterio escrito antes de la prueba: 2 de 3 usuarios cambiaron de playa por el dato de la app
y ninguno pidió reservar con anticipación. Pero la prueba mostró un supuesto que no estaba
escrito: el dato cambia la decisión sólo si el usuario le cree. U1 vio La Paz LLENA y fue igual
("A esta hora siempre hay lugar en La Paz"), y U2 y U3 dudaron del origen del dato. Por eso se
agrega el supuesto de confianza en el dato y se cambia la gran visión: la ocupación se estima con
los lectores de TelePase que la UNLaM va a instalar en cada playa, en lugar de cámaras y una API
de la universidad. Eso elimina los supuestos de registro de autos y de conectividad de seguridad,
y saca al personal de seguridad de los grupos de usuarios. También quedó claro que el producto
resuelve una parte del problema (la vuelta inútil dentro de una playa llena) y no la demora antes
de llegar. Análisis completo en
[`docs/evaluacion/tp5-aprendizaje.md`](evaluacion/tp5-aprendizaje.md).

**Estado de la hipótesis:** se sostiene (M1: 2 de 3; M2: 7 de 9; sin pedidos de reserva
anticipada), condicionada a que el usuario confíe en el dato. M1 es la métrica que podría estar
dando una lectura tranquilizadora: se midió con datos simulados que nunca fallaron.

**Decisión:** perseverar. Lo próximo a construir es la tendencia por horario (si cada playa se
está llenando o vaciando y a qué hora suele pasar), pedida por U2 y U3, y el acceso directo desde
la pantalla principal del celular, pedido por U3. Correcciones menores de la interfaz: explicar
en la leyenda qué significa CERRADA (que no abre, no que está llena).

---

## El producto

**Nombre:** SPOTTER.

**Problema:** la incertidumbre y la falta de disponibilidad de espacios de estacionamiento dentro de la universidad generan demoras diarias, especialmente en horario pico, que retrasan el inicio de la jornada laboral o de cursada.

**A quién le resuelve:** el foco validado del TP2 son los estudiantes de la UNLaM que asisten regularmente en auto. Otros miembros de la comunidad y tipos de vehículo permanecen como segmentos potenciales todavía no relevados. SPOTTER permite consultar la ocupación de cada playa en tiempo real antes de llegar.

---

## Funcionalidades core

- **Consulta de ocupación por playa:** visualización en tiempo real de Perón y La Paz para decidir el destino antes de ingresar a una fila.
- **Alertas configurables:** notificaciones próximas al horario de cursada y desactivación en días sin actividad académica.
- **Bloqueo corto:** reserva de cortesía por pocos minutos durante la aproximación; surgió en U1 y queda como hipótesis a validar, no como reserva anticipada por franjas.

---

## Integraciones previstas (gran visión, actualizada en el TP5)

La gran visión no se implementa en el TP. En el TP5 el equipo la cambia: la UNLaM va a instalar
lectores de **TelePase** en el estacionamiento, y eso reemplaza la API de la universidad y las
cámaras con reconocimiento de patente que preveía el TP1. Sigue siendo un supuesto sin evidencia
(ver Supuestos).

**Componentes de desarrollo propio:**
- Front-end: aplicación web responsive.
- Back-end: estima la ocupación de cada playa a partir de las entradas y salidas que registra
  TelePase y la muestra como semáforo (LLENO / MEDIO / LIBRE).

**Integraciones externas:**
- **TelePase:** lectores de tag en el acceso de cada playa. Los usuarios se anotan como
  alumnos, docentes o nodocentes para entrar gratis; al resto se le cobra el ingreso. Ese
  registro también resuelve la verificación de pertenencia a la comunidad UNLaM.
- **Infraestructura:** servicio en la nube.

**Límite aceptado:** no se sabe todavía si se va a poder entrar sin tag. Los autos que entren
sin pasar por el lector son un error que se acepta: el producto da un estimado de semáforo, no
un conteo exacto de lugares.

---

## Segmento elegido

Miembros activos de la comunidad UNLaM (estudiantes de grado y posgrado, docentes, personal administrativo, de mantenimiento, limpieza y seguridad) de todos los turnos, y visitantes externos que concurren a actividades en el predio (deportivas o eventos en el teatro), que se trasladan a la universidad en **vehículo particular** (auto, moto o bicicleta) y necesitan conocer la disponibilidad del estacionamiento antes de llegar. En el TP2 se relevó únicamente al grupo primario: estudiantes con auto.

**Estimación del segmento:** partiendo de una base de ~70.000 personas (65.000 estudiantes regulares + ~5.000 entre docentes, seguridad, limpieza, administrativos y visitantes), se estima que un 30% se moviliza en medio propio (21.000) y que un 75% de esos usuarios motorizados busca estacionar dentro de la universidad. El resultado es un segmento de **≈15.750 personas** (70.000 × 30% × 75%).

**Por qué este segmento y no otro:** presenta una problemática real y tangible de disponibilidad y organización del estacionamiento. El relevamiento del TP2 confirma ese problema en estudiantes con auto; la extensión a otros roles y tipos de vehículo permanece como una hipótesis no validada.

---

## Grupos de usuarios

- **Estudiantes con auto:** asisten en horarios específicos y son la mayoría que usa el estacionamiento; podrían planificar mejor su asistencia.
- **Estudiantes con moto:** capacidad de espacio distinta a la de los autos; misma necesidad de planificación.
- **Estudiantes con bicicleta:** asisten en horarios específicos.
- **Docentes y personal académico:** una demora buscando lugar retrasa el inicio de la clase; el producto les permite cumplir sus horarios sin estrés.
- **Visitantes externos e invitados:** ajenos a la rutina universitaria (teatro, deportes); desconocen la dinámica de ocupación y buscan la tranquilidad de tener un lugar asegurado.

---

### Usuario primario elegido

Grupo primario: **estudiantes con auto**. Es el grupo de mayor volumen de demanda diaria de
consulta y reserva del estacionamiento, y el que permite un relevamiento homogéneo (una técnica,
un instrumento, un mismo tipo de usuario) en el TP2. Los docentes siguen
caracterizados como grupos de usuarios del producto (ver arriba), pero no como foco primario del
análisis de usuarios.
El personal de seguridad deja de ser un grupo de usuarios en el TP5: con TelePase la
validación del acceso la hace el lector. Volvería sólo si la gran visión suma cámaras a TelePase.

> **Validado en el TP2 (31/08/2026):** el relevamiento con U1, U2 y U3 confirma que
> "estudiantes con auto" es el foco correcto — ver
> [`docs/usuarios/supuestos-confrontacion.md`](usuarios/supuestos-confrontacion.md#el-usuario-primario-elegido-sigue-siendo-el-correcto).
> Ya no es una apuesta de diseño sin contrastar.

---

## Perfil de usuario real (TP2)

Usuario primario: **estudiantes con auto**, confirmado como correcto tras el relevamiento (los tres encuestados, con carreras y horarios
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

---

## Hipótesis de valor (TP2)

**Creemos que** los estudiantes de la UNLaM que se trasladan en auto propio y cursan en horarios
de alta demanda (turno mañana o noche, según los perfiles relevados) **tienen el problema de**
no saber, antes de encolarse o de recorrer las últimas cuadras, si alguna de las dos playas de
estacionamiento (Perón o La Paz) tiene lugar disponible — lo que puede generar demoras de hasta
30 minutos, llegadas tarde a clase o a instancias de evaluación y, en los casos más extremos,
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

## Supuestos

Estado de cada supuesto tras el relevamiento del TP2 (detalle y evidencia en [`docs/usuarios/supuestos-confrontacion.md`](usuarios/supuestos-confrontacion.md)):

- Los estudiantes en auto esperan de 10 a 15 minutos en horario pico para estacionar. — **Confirmado, con matices:** el piso del rango es correcto, pero buena parte de la demora ocurre en el acceso/calle antes de llegar a la playa, no sólo dentro de ella.
- Existen APIs para comunicarse con el sistema de alumnos/docentes de la UNLaM. — **Reemplazado en el TP5:** la pertenencia a la comunidad la da el registro en TelePase.
- Hay cámaras que apuntan a la entrada y salida del estacionamiento. — **Reemplazado en el TP5:** el dato de entradas y salidas lo dan los lectores de TelePase.
- **[TP5]** La UNLaM va a instalar lectores de TelePase en el acceso de cada playa (Perón y La Paz por separado), con ingreso gratis para la comunidad registrada y pago para el resto. — **Sin evidencia (supuesto de la gran visión, no se implementa en el TP):** reemplaza a los supuestos de registro de autos y de conectividad de seguridad del TP1.
- **[TP5]** SPOTTER va a poder obtener de TelePase las entradas y salidas, o al menos un dato del que estimar la ocupación de cada playa. Si se puede entrar sin tag no se sabe; ese error se acepta porque el dato es un estimado de semáforo. — **Sin evidencia (supuesto de la gran visión):** surge como respuesta a la desconfianza en el dato observada en la prueba del TP5 (ver [`docs/evaluacion/tp5-aprendizaje.md`](evaluacion/tp5-aprendizaje.md#6-pivotar-o-perseverar)).
- **[TP5]** El usuario confía en el dato de la app lo suficiente como para cambiar la decisión que ya traía. — **En riesgo:** U2 y U3 cambiaron de playa por el dato pero dudaron de su origen; U1 no le creyó y fue a una playa LLENA ("A esta hora siempre hay lugar en La Paz"). Con datos simulados no se pudo probar qué pasa después de que el dato falle.
- **[CRÍTICO]** La comunidad universitaria está dispuesta a planificar y reservar su lugar con anticipación en lugar de buscarlo al llegar. — **Refutado (parcialmente):** los tres usuarios piden información de disponibilidad en tiempo real; U2 y U3 la requieren por playa y sólo U1 propone un bloqueo de pocos minutos — no una reserva planificada con antelación. Ver implicancia para el producto en la Hipótesis de valor (TP2) más arriba.

---

## Scope del MVP (TP3)

**Incluido en el MVP:**
* **Consulta de ocupación en tiempo real diferenciada por playa (Perón y La Paz):** Permite testear si conocer la disponibilidad hace que el usuario elija la playa correcta antes de hacer la fila para entrar.

**Excluido del MVP:**
* **Reserva anticipada por franjas horarias:** Fue refutado por los usuarios, quienes exigen disponibilidad inmediata; incluirlo es construir de más.
* **Monitoreo de espacios para motos y bicicletas:** El problema crítico y el segmento de usuario primario convergen únicamente en los estudiantes que se trasladan en auto.
* **Login de usuario:** Para consultar la disponibilidad, no es lo principal en esta situación identificar al usuario.
* **Onboarding de la aplicación:** La interfaz al basarse en un semáforo, es intuitiva para cualquier usuario.

---

## Qué se construye y qué se simula

* **Mapa de calor (Ocupación visual):** 
  * **Se construye:** Sí (la interfaz gráfica).
  * **Se simula:** Sí (la recolección automatizada de datos, se hardcodean por horarios). 
  * **Por qué:** Para ver si la interfaz gráfica ayuda al usuario a decidir a qué playa ir.
* **Datos de ocupación / disponibilidad de los estacionamientos:**
  * **Se construye:** No.
  * **Se simula:** Sí.
  * **Por qué:** Integrar sensores físicos reales y cámaras tomaría demasiado tiempo; simular los datos permite testear la hipótesis de valor de forma rápida.

---

## Flujo principal del MVP
1. El usuario abre la aplicación.
2. Mira el mapa de calor con la disponibilidad de los estacionamientos en tiempo real.
3. Toma la decisión de a qué playa dirigirse basándose en los datos visuales.

---

## Atributos de usabilidad priorizados
* **Eficiencia:** El estudiante usa la app al volante o apurado y necesita información al instante. Como dice el Usuario 1, cuando llega a la facultad "arranca el estrés" y molesta "perder media hora dando vueltas y terminar llegando tarde". La app tiene que ser rápida y directa.
* **Tasa de errores:** Al utilizar la aplicación en un entorno de estrés cognitivo (tránsito, presión de horario), entender mal la pantalla significa ir al estacionamiento equivocado. El Usuario 2 necesita la información clara, si la app es confusa y el usuario se equivoca de estacionamiento, no sirve de nada.

---
