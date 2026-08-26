---
type: Plantilla
title: Guía de encuesta — TP2
description: Técnica elegida para el relevamiento del TP2, su justificación, y el borrador de preguntas para validar el perfil y los supuestos del TP1 con estudiantes con auto.
tags: [tp2, encuesta, usuarios]
status: draft
sources:
  - id: brief-v1
    resource: /docs/brief.md
    title: Brief de Producto — SPOTTER (v1)
  - id: consigna-tp2
    resource: /docs/referencias/tp2-consigna.md
    title: "TP2 — Consigna: Análisis de Usuarios e Hipótesis de Valor"
---

# Guía de encuesta — TP2

> Borrador de instrumento. Revisar en equipo antes de aplicarlo: ajustar redacción, orden y
> cualquier pregunta que induzca la respuesta. Una vez aplicado a U1, U2 y U3, las respuestas
> (anonimizadas) van en `docs/evidencia/tp2/`, y este documento pasa a describir la técnica ya
> usada, no un borrador.

## Técnica elegida

**Encuesta / cuestionario autoadministrado.**

## Justificación

El grupo de usuarios primario definitivo es **estudiantes con auto**. Una encuesta permite que
cada respondiente complete el cuestionario en su propio horario, sin necesidad de coordinar una
franja horaria en común entre el equipo y tres personas del mismo grupo (a diferencia de una
entrevista, observación o focus group, que sí requieren esa coordinación). Dado que el objetivo
central del TP2 es confrontar los supuestos del TP1 —afirmaciones puntuales, verificables con
respuestas cerradas o cortas— más que explorar en profundidad una experiencia abierta, el
formato encuesta es adecuado para el tipo de dato que se necesita.

## Público objetivo y preguntas de filtro

Mínimo 3 respondientes reales (U1, U2, U3), cada uno debe cumplir:
1. ¿Sos estudiante de la UNLaM? (Sí/No — descarta si No)
2. ¿Venís a la universidad en auto habitualmente? (Sí/No — descarta si No)
3. ¿Con qué frecuencia venís en auto a la UNLaM? (Todos los días / Varias veces por semana /
   Ocasionalmente)

## Preguntas mapeadas a los supuestos del TP1

Cada bloque referencia el supuesto de `docs/brief.md` (v1) que busca confirmar o refutar.

**Supuesto: "Los estudiantes en auto esperan de 10 a 15 minutos en horario pico para
estacionar."**
4. Cuando venís en horario pico, ¿cuánto tiempo estimás que tardás en conseguir lugar para
   estacionar? (Menos de 5 min / 5 a 10 min / 10 a 15 min / Más de 15 min)
5. ¿En qué franja horaria notás más demora para estacionar? (abierta/franjas)

**Supuesto crítico: "La comunidad universitaria está dispuesta a planificar y reservar su lugar
con anticipación en lugar de buscarlo al llegar."**
6. Si pudieras reservar tu lugar de estacionamiento antes de salir de tu casa, ¿lo harías?
   (Sí, siempre / Sí, en horarios pico / No, prefiero buscar al llegar)
7. ¿Por qué? (abierta)
8. ¿Con cuánta anticipación te resultaría razonable reservar? (El mismo día / Con 1 día / Con
   varios días)

**Supuesto: "No hay sistema de registro de autos en la UNLaM."** (validación indirecta desde la
perspectiva del estudiante; la confirmación definitiva depende de consultar a seguridad —ver
nota metodológica más abajo)
9. ¿Tenés tu auto registrado en algún sistema de la universidad (patente, DNI, etc.)? (Sí / No /
   No sé)

**Necesidades, problemas y contexto de uso (punto 3 de la consigna del TP2)**
10. ¿Cuál es la mayor molestia que tenés hoy al buscar estacionamiento en la UNLaM? (abierta)
11. ¿Qué dispositivo usarías para consultar disponibilidad o reservar? (Celular / Computadora /
    Ambos)
12. Cuando venís a la facultad, ¿solés venir con tiempo o justo? (Con tiempo / Justo / Depende
    del día)
13. ¿Tenés conectividad a internet en el momento en que llegás al estacionamiento? (Sí, siempre
    / A veces / No)

## Nota metodológica — límites de esta técnica

Esta encuesta está dirigida al grupo primario (estudiantes con auto) y por lo tanto **no** puede
confirmar ni refutar por sí sola los supuestos que dependen de otros actores:
- *"Existen APIs para comunicarnos con el sistema de alumnos/docentes de la UNLaM"* — depende
  del área de sistemas, no de los estudiantes.
- *"Hay cámaras que apuntan a la entrada y salida del estacionamiento"* — se verifica por
  observación directa en el lugar, no por encuesta.
- *"El personal de seguridad cuenta con conectividad a internet y un dispositivo móvil en las
  garitas"* — depende del personal de seguridad, no del segmento encuestado.

Estos tres supuestos quedan marcados como **sin evidencia (pendiente)** en
`docs/usuarios/supuestos-confrontacion.md` hasta que se verifiquen por el canal que corresponde
(consulta al área de sistemas, visita a los accesos, consulta al personal operativo) — no se
fuerzan preguntas sobre esto en la encuesta a estudiantes.
