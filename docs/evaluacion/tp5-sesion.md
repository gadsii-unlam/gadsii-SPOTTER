---
type: Concepto
title: Preparación de la sesión de prueba — TP5
description: Situaciones, guion del moderador, qué se observa, cómo se registra y preguntas finales para la prueba del MVP con U1, U2 y U3.
tags: [tp5, sesion, prueba-usuarios]
status: draft
sources:
  - id: metricas
    resource: /docs/evaluacion/tp5-metricas.md
    title: Métricas y criterio de éxito — TP5
  - id: evidencia-tp2
    resource: /docs/evidencia/tp2/encuesta-respuestas.md
    title: Respuestas de la encuesta — TP2
  - id: consigna
    resource: /docs/referencias/tp5-consigna.md
    title: TP5 — Consigna
---

# Preparación de la sesión de prueba — TP5 (punto 3)



## Estructura

Una sesión individual por usuario, de unos 15 minutos, con un **moderador** (habla) y un
**observador** (anota y toma tiempos). Los escenarios E1, E2 y E3 son los de
[tp5-metricas.md](tp5-metricas.md). Todos son en **su** día y horario de cursada, salvo el
sábado.

**Orden propuesto: E2 → E1 → E3** [decide el equipo]. Si el primer contacto es el desvío, el
usuario aprende que "la app siempre lo contradice" y el control pierde valor.

## Preparación del teléfono

- Se usa el teléfono del moderador, para que el usuario no vea la URL.
- Cada escenario va en **su propia pestaña**: la app guarda el escenario por pestaña. Se abren
  las tres pestañas **inmediatamente antes** de la sesión, no con horas de anticipación: el
  reloj simulado avanza desde que se carga la URL, y el header mostraría otra hora.
- Todas las URLs fijan **las dos playas**, así el estado no depende del horario simulado.
- Se le entrega el teléfono **ya en la pantalla del mapa** y con la pantalla apagada. El
  cronómetro arranca cuando la enciende.

Base: <https://gadsii-unlam.github.io/gadsii-SPOTTER/>

| Usuario | Decisión base esperada (TP2) | E1 Desvío | E2 Control | E3 Sábado |
|---|---|---|---|---|
| U1 | Perón, o la calle como plan B | `?dia=jueves&hora=07:40&peron=lleno&lapaz=libre` | `?dia=jueves&hora=07:40&peron=libre&lapaz=lleno` | `?dia=sabado&hora=10:00&peron=libre&lapaz=cerrada` |
| U2 | Perón primero, La Paz si no hay | `?dia=miercoles&hora=13:40&peron=lleno&lapaz=libre` | `?dia=miercoles&hora=13:40&peron=libre&lapaz=lleno` | ídem U1 |
| U3 | La Paz directo (llega ~18:30) | `?dia=martes&hora=18:30&peron=libre&lapaz=libre` | `?dia=martes&hora=18:30&peron=lleno&lapaz=libre` | ídem U1 |

- Si la decisión base que el usuario dice **no es la esperada**, el moderador usa la URL que
  contradice esa decisión (E1) o que la confirma (E2). Para eso lleva las variantes anotadas.
- **U2:** la encuesta no da su horario. Se toma miércoles 13:40, turno tarde con clase a las 14
  [decide el equipo].
- **U3, E1:** la tabla de métricas sólo fija "Perón LIBRE". Se propone **La Paz LIBRE** y no
  MEDIO, porque MEDIO no se usa en escenarios medidos [decide el equipo].
- **E3:** U1 y U2 no mencionaron cursar sábados. Para ellos es una situación hipotética, y se
  registra así.

## Situaciones (lo que dice el moderador)

Se leen tal cual, sin nombrar botones, colores ni la palabra "reserva".

**Apertura (una vez):**
> "Te vamos a contar tres situaciones de un día de facu. En cada una, primero te preguntamos qué
> harías hoy, sin ninguna app. Después te damos el teléfono con una app y nos decís **a qué
> playa irías**, en voz alta. No hay respuestas correctas, y no podemos ayudarte: si algo no se
> entiende, eso es justo lo que queremos saber."

**U1, E2 y E1 (jueves 7:40):**
> "Es jueves, son las 7:40 y tenés corrección a las 8. Vas con las maquetas en el baúl y ya
> estás a unas cuadras de la facu. ¿Qué hacés hoy, sin la app?"
> *(se anota)* "Ahora tenés esto en el celular. ¿A dónde vas?"

**U2, E2 y E1 (su día y hora):**
> "Saliste de tu casa con el tiempo justo, como siempre. Estás llegando a la estación de
> servicio y ves que empieza la fila de autos. ¿Qué hacés hoy, sin la app?"
> *(se anota)* "Ahora tenés esto en el celular. ¿A dónde vas?"

**U3, E2 y E1 (martes 18:30):**
> "Es martes, son las 18:30 y estás llegando a cursar. ¿Qué hacés hoy, sin la app?"
> *(se anota)* "Ahora tenés esto en el celular. ¿A dónde vas?"

**Todos, E3 (sábado 10:00):**
> "Es sábado a las 10 y tenés que ir a la facu. ¿Qué hacés hoy, sin la app?"
> *(se anota)* "Ahora tenés esto en el celular. ¿A dónde vas?"

Entre E2 y E1 la situación es la misma. La decisión base se pregunta **una sola vez** por
situación y vale para los dos escenarios.

## Qué se observa

| Qué | Cómo se reconoce |
|---|---|
| Decisión y tiempo | La playa que dice y los segundos desde que enciende la pantalla (M2: ≤10 s). |
| Duda | Silencio de más de 3 s, "eh…", mirar al moderador, volver atrás. |
| Error | Elige una playa LLENA o CERRADA, o confunde CERRADA con LLENA. |
| Pedido de ayuda | Cualquier pregunta al moderador ("¿esto qué es?", "¿qué toco?"). No se responde: "¿Vos qué pensás?". |
| Recorrido | Si entra al detalle, si toca actualizar, si lee la leyenda o el "Dato de hace…". |
| Dice vs. hace | Dice una playa y su dedo o su mirada va a otra; justifica con algo que no está en pantalla. |
| Fuera de lo esperado | Cualquier cosa que no esté en esta tabla. |

## Cómo se registra

- **Planilla por usuario:** [../evidencia/tp5/plantilla-registro.md](../evidencia/tp5/plantilla-registro.md),
  una copia por usuario (`u1.md`, `u2.md`, `u3.md`).
- **Tiempos:** el observador usa un cronómetro, aparte del teléfono de la prueba.
- **Grabación de pantalla** del teléfono del moderador, sólo con consentimiento. No se graban
  caras ni voces si el usuario no quiere. Si no hay grabación, se anota.
- Las citas textuales van entre comillas. Lo que el observador interpreta, aparte.

## Preguntas finales

En este orden, sin mencionar reservas, alertas ni bloqueos:

1. "¿Qué te faltó para usarla mañana?" — es la que detecta el pedido de reserva (criterio de éxito).
2. "¿En qué momento del viaje la abrirías?"
3. "¿Hubo algo que no entendiste o que te hizo dudar?"
4. "En la encuesta nos contaste cómo llegás a la facu. ¿Esto cambia algo de eso?"
5. "¿Algo más que nos quieras decir?"
