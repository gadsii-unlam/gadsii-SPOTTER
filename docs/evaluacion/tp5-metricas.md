---
type: Concepto
title: Métricas y criterio de éxito — TP5
description: Métricas accionables, métrica vanidosa y criterio de confirmación/refutación de la hipótesis del TP2, definidos antes de construir el MVP.
tags: [tp5, metricas, hipotesis]
status: stable
sources:
  - id: hipotesis-valor
    resource: /docs/usuarios/hipotesis-valor.md
    title: Hipótesis de valor — TP2
  - id: evidencia-tp2
    resource: /docs/evidencia/tp2/encuesta-respuestas.md
    title: Respuestas de la encuesta — TP2
  - id: wireframe
    resource: /docs/diseno/wireframe/mvp.html
    title: Wireframe final del MVP — TP3
---

# Métricas y criterio de éxito — TP5

> **Estado: validado por el equipo el 26/10/2026.** El borrador se armó con asistencia de IA (ver
> `docs/prompts.md`); la consigna no delega las métricas ni el criterio. Este archivo se
> commitea **antes de escribir la primera línea del MVP** y no se edita después de la prueba.

## Qué se pone a prueba

La hipótesis del TP2 se sostiene si **al menos 2 de los 3** usuarios eligen a qué playa ir a
partir de la ocupación que muestra la app —evitando entrar a una playa llena— y **ninguno**
necesita reservar con más de unos pocos minutos de anticipación
([hipotesis-valor.md](../usuarios/hipotesis-valor.md)).

El MVP del TP3 sólo muestra la ocupación de Perón y La Paz (niveles LLENO / MEDIO / LIBRE y
CERRADA), con datos simulados. Por eso "reporten haber elegido" se convierte en **una decisión
observada en la sesión**: vale lo que el usuario hace, no lo que dice.

## Escenarios de la sesión

Cada usuario recibe 3 escenarios, en **su** día y horario real de cursada (U1 turno mañana, U2
el horario que indique, U3 ~18:30). Antes de mostrar la app en cada escenario se le pregunta
**"¿qué harías hoy sin la app?"** y se anota la respuesta (decisión base).

| # | Situación | Datos que carga el moderador | Para qué sirve |
|---|---|---|---|
| E1 | Desvío | Contradicen la decisión base: si iba a ir a Perón, Perón LLENO y La Paz LIBRE; si iba directo a La Paz (caso esperado de U3 a las 18:30), Perón LIBRE | M1 |
| E2 | Control | Coinciden con la decisión base | Detectar cambios de decisión al azar |
| E3 | Sábado | La Paz CERRADA, Perón LIBRE | Que CERRADA no se lea como LLENO |

El nivel **MEDIO no se usa en escenarios medidos**: no tiene una respuesta "correcta" definida.
Si aparece, se registra como observación.

Si la decisión base es la calle (plan B de U1), cuenta como desvío ir a cualquier playa LIBRE.

## Métricas accionables

### M1 — Redirección por el dato (capa de negocio)

**Qué mide:** cantidad de usuarios que, en E1, toman una decisión distinta de su decisión base y
acorde al dato de la app.

**Por qué es accionable:**
- **Alta:** la información en tiempo real cambia la decisión, que es lo que promete la
  hipótesis → perseverar.
- **Baja:** el usuario va igual a donde iba (por costumbre, distancia o porque ya decide por
  horario, como U3) → la información no le aporta valor; se revisa la necesidad, no la
  interfaz.

### M2 — Decisión correcta en 10 s o menos, sin ayuda (capa de usabilidad)

**Qué mide:** de las 9 decisiones (3 usuarios × 3 escenarios), cuántas son correctas y se toman
en **10 segundos o menos** desde que ve la pantalla, sin preguntar nada. Correcta = va a una
playa LIBRE; no va a una LLENO ni a una CERRADA.

**Por qué 10 s:** el brief prioriza eficiencia y tasa de errores porque la app se usa apurado o
al volante. El número es decisión del equipo; el brief no fija umbral.

**Por qué es accionable:** si baja, el problema está en cómo se lee el mapa (trama, rótulos,
CERRADA vs. LLENO) → se rediseña la interfaz y la hipótesis no se toca.

## Métrica vanidosa

**Cantidad de visitas o aperturas del MVP.** Sube si se comparte el link o alguien entra por
curiosidad, y no dice nada sobre si alguien cambió de playa. Con datos simulados es aún menos
informativa: una visita ni siquiera es una consulta real. Lo mismo vale para "los 3 dijeron que
la usarían": es opinión, no comportamiento.

## Criterio de éxito

| Resultado | Condición |
|---|---|
| **Se sostiene** | M1: **2 o 3** usuarios redirigen en E1, **y** ninguno pide espontáneamente reservar con horas de anticipación o antes de salir de casa |
| **Se refuta** | M1: **0 o 1** usuario redirige (ve el dato y va igual a su decisión base), **o** 2 o más piden reserva anticipada |
| **Hipótesis sí, interfaz no** | Se sostiene por M1, pero M2 queda **por debajo de 7 de 9** → perseverar y rediseñar la UI |

- Pedir un **bloqueo de pocos minutos** mientras se llega (lo que propuso U1 en el TP2) **no**
  cuenta como reserva anticipada.
- La reserva se detecta sólo con la pregunta abierta final ("¿qué te faltó para usarla
  mañana?"), formulada **sin mencionar reservas**.
- Si un usuario cambia de decisión en E2 (control), su E1 se anota pero se discute como posible
  ruido en el análisis.

## Requisito que esto impone al MVP

El moderador tiene que poder **elegir día, hora y datos de cada escenario sin que el usuario lo
vea** (por ejemplo, con un parámetro en la URL). El brief ya prevé datos "hardcodeados por
horarios"; esto sólo agrega cómo se eligen.
