---
type: Concepto
title: Confrontación de supuestos TP1 vs. relevamiento TP2
description: Estado de cada supuesto del TP1 tras la encuesta del TP2 al usuario primario (estudiantes con auto).
tags: [tp2, supuestos]
status: stable
sources:
  - id: brief-v1
    resource: /docs/brief.md
    title: Brief de Producto — SPOTTER (v1)
  - id: evidencia-tp2
    resource: /docs/evidencia/tp2/encuesta-respuestas.md
    title: Respuestas de la encuesta — TP2
---

# Confrontación de supuestos

| Supuesto del TP1 | ¿Se confirmó? | Evidencia que lo sostiene o lo refuta |
|---|---|---|
| Los estudiantes en auto esperan de 10 a 15 minutos en horario pico para estacionar. | Confirmado, con matices | U2 espera "casi 20 min" en las últimas cuadras antes de llegar a la playa Perón, y luego a veces "pego toda la vuelta y no había ni un lugar", llegando "10/15 min tarde". U1 hace "la fila del estacionamiento 10 minutos" y se queda sin lugar. El rango de 10-15 min es correcto como piso, pero incompleto: buena parte de la demora ocurre en el acceso/calle, no sólo dentro de la playa. |
| No hay sistema de registro de autos en la UNLaM. | Sin evidencia (pendiente) | Los tres encuestados son estudiantes, no personal de seguridad — esta técnica no puede confirmar ni refutar este supuesto. Ninguno mencionó espontáneamente un sistema de registro de patentes al ingresar. Pendiente de verificar consultando al área de seguridad operativa. |
| Existen APIs para comunicarnos con el sistema de alumnos/docentes de la UNLaM. | Sin evidencia (pendiente) | No verificable con esta técnica — depende de consultar al área de sistemas de la UNLaM, no de los estudiantes encuestados. |
| Hay cámaras que apuntan a la entrada y salida del estacionamiento. | Sin evidencia (pendiente) | No verificable con esta técnica — depende de observación directa en los accesos al estacionamiento. |
| El personal de seguridad cuenta con conectividad a internet y un dispositivo móvil en las garitas para validar reservas en tiempo real. | Sin evidencia (pendiente) | No verificable con esta técnica — depende de consultar al personal de seguridad operativo en las garitas. |
| **[CRÍTICO]** La comunidad universitaria está dispuesta a planificar y reservar su lugar con anticipación en lugar de buscarlo al llegar. | Refutado (parcialmente) | Ninguno de los tres, al describir la función que más valoraría, mencionó reservar con anticipación desde su casa. U1 pide poder "reservar" o "bloquear un lugarcito libre por 5 minutos mientras estoy llegando" —un margen de minutos, no de horas. U2 quiere saber "si va a haber lugar en el primer estacionamiento" antes de entrar a la fila, para decidir en el momento a qué playa dirigirse. U3 pide "conocer el nivel de ocupación de cada estacionamiento antes de llegar" y notificaciones cercanas a su horario de cursada, no una reserva anticipada. Los tres describen un patrón de decisión en tiempo real (a minutos de llegar), no de planificación anticipada. |

## ¿Qué apareció que no habían previsto?

- **Estacionamiento indebido como válvula de escape:** U1 admite dejar el auto "tirado donde no
  corresponde" cuando no encuentra lugar — un costo y un riesgo que no estaba contemplado en
  ningún supuesto original.
- **Demanda externa ajena al segmento:** U1 señala que "mucha gente que no va a la facultad suele
  dejar el auto en el estacionamiento" (menciona a quienes van al Italiano) — hay competencia por
  el espacio de gente ajena a la comunidad UNLaM.
- **Dos playas físicamente distintas (Perón y La Paz), no un "estacionamiento" único:** elegir a
  cuál ir es en sí mismo un problema (U2, U3), algo que el supuesto original no contemplaba
  porque hablaba de "el estacionamiento" en singular.
- **La Paz cierra los sábados** (U3) — variabilidad operativa desconocida hasta el relevamiento.
- **Conectividad 4G/celular dispar** alrededor de la facultad: U1 reporta saturación ocasional,
  U2 no tiene problemas en los alrededores y U3 afirma que funciona muy mal — la solución no
  puede asumir conectividad estable para todos.
- **El clima no tiene un efecto único sobre la demanda:** U1 dice que la lluvia empeora todo (más
  autos), U2 dice que con lluvia a veces hay menos gente, y U3 cambia de preferencia de playa (va
  a la más cercana) para caminar y mojarse menos. El patrón real es más matizado que "más lluvia =
  más autos".

## ¿Qué pasó con el supuesto crítico?

Se refuta, al menos parcialmente, la forma en que estaba planteado: no hay evidencia de que los
usuarios quieran planificar o reservar con anticipación (desde el día anterior o antes de salir de
casa). Lo que sí piden de forma consistente es información inmediata de disponibilidad; U2 y U3
la requieren diferenciada por playa y U1 propone un bloqueo de pocos minutos mientras se acerca.

**Implicancia para el producto:** el "motor de reservas organizado por franjas horarias" descripto
en el brief v1 pierde sustento como funcionalidad central. Lo que sostiene el valor, según el
relevamiento, es la consulta de disponibilidad en tiempo real, diferenciada por playa para U2 y
U3. El bloqueo de corta duración propuesto por U1 queda como hipótesis a validar — no reemplaza
una reserva de franja horaria armada con antelación. Esto no tira abajo el producto: redirige cuál
es el mecanismo central del MVP.

## ¿El usuario primario elegido sigue siendo el correcto?

Sí. Los tres encuestados, con carreras y horarios distintos (Arquitectura a la mañana,
Kinesiología varias veces por semana, Ingeniería Electrónica a la noche), describen el mismo
problema central (incertidumbre, tiempo perdido y decisión a último momento); U2 y U3 además
explicitan la elección entre las dos playas — la consistencia entre perfiles heterogéneos dentro
del mismo grupo primario refuerza que
"estudiantes con auto" es el foco correcto. Ningún encuestado señaló que el problema lo sufra
más otro grupo (docentes, seguridad, visitantes); de hecho, U1 identificó una fuente de presión
externa (visitantes ajenos a la facultad) que abre una pista para el TP3 pero no desplaza al
primario.
