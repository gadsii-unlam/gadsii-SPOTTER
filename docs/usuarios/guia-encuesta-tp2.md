---
type: Plantilla
title: Guía de encuesta — TP2
description: Técnica elegida para el relevamiento del TP2 (encuesta con preguntas abiertas), su justificación y el cuestionario aplicado a U1, U2 y U3.
tags: [tp2, encuesta, usuarios]
status: stable
sources:
  - id: brief-v1
    resource: /docs/brief.md
    title: Brief de Producto — SPOTTER (v1)
  - id: consigna-tp2
    resource: /docs/referencias/tp2-consigna.md
    title: "TP2 — Consigna: Análisis de Usuarios e Hipótesis de Valor"
  - id: evidencia-tp2
    resource: /docs/evidencia/tp2/encuesta-respuestas.md
    title: Respuestas anonimizadas de los 3 usuarios encuestados
---

# Guía de encuesta — TP2

El cuestionario se aplicó a U1, U2 y U3 durante la semana del 25/08/2026. Las respuestas
completas y anonimizadas se encuentran en
[`docs/evidencia/tp2/encuesta-respuestas.md`](../evidencia/tp2/encuesta-respuestas.md).

## Técnica elegida

**Encuesta con preguntas abiertas.**

## Justificación

El grupo de usuarios primario es **estudiantes con auto**. La encuesta permite relevar a los tres
usuarios con un mismo instrumento sin coordinar una conversación grupal ni horarios individuales.
Se eligieron preguntas abiertas para obtener datos cualitativos sobre la rutina de llegada, las
demoras, las estrategias actuales, las frustraciones y las funciones esperadas sin limitar las
respuestas a opciones predefinidas. Frente a un focus group, resulta más ágil de aplicar dentro de
los plazos del trabajo práctico y evita que las respuestas de un participante condicionen las de
los demás.

## Cuestionario

### Sección A — Perfil del usuario
1. ¿Cuál es tu edad, qué carrera cursás y con qué frecuencia semanal te trasladás en auto propio a
   la universidad?
2. ¿Cómo describirías tu nivel de adopción tecnológica respecto a aplicaciones que permiten
   consultar disponibilidades en tiempo real o reservar turnos y espacios?
3. ¿Cómo te funciona la señal del celular o el 4G en las calles que rodean a la facultad?

### Sección B — Contexto de uso y rutina
4. Guiame por tu rutina: ¿qué pasa desde que estás llegando con el auto a la universidad hasta que
   lográs estacionar?
5. ¿De qué manera influyen factores externos, como tu horario de cursada o las condiciones
   climáticas, en tu proceso de búsqueda de estacionamiento?

### Sección C — Frustraciones
6. ¿Cuáles son los principales obstáculos o los momentos de mayor frustración que enfrentás
   habitualmente al buscar lugar en el estacionamiento de la UNLaM?
7. Actualmente, ¿qué estrategias o alternativas usás para intentar resolver este problema todos
   los días?

### Sección D — Expectativas y necesidades
8. Pensando en tu experiencia, ¿qué información necesitás conocer antes de llegar a la
   universidad para optimizar tu tiempo?
9. Si contaras con una herramienta para asistirte en esta problemática, ¿qué características o
   funciones considerás indispensables para adoptarla en tu día a día?

## Cobertura de los supuestos del TP1

Las preguntas 1-3 relevan el perfil (edad, carrera, frecuencia, adopción tecnológica,
conectividad). Las preguntas 4-5 relevan la rutina real de acceso al estacionamiento, con la que
se confronta el supuesto de demora en horario pico. Las preguntas 6-9 relevan frustraciones y
necesidades, con las que se confronta el supuesto crítico (disposición a planificar/reservar con
anticipación) — ninguna pregunta lo plantea de forma directa y cerrada ("¿reservarías con
anticipación?"), a propósito: el cuestionario busca que la disposición (o no) a planificar surja
de cómo el usuario describe espontáneamente lo que necesita, no de inducirla con la pregunta.

## Nota metodológica — límites de esta técnica

Esta encuesta está dirigida al grupo primario (estudiantes con auto) y por lo tanto **no**
puede confirmar ni refutar por sí sola los supuestos que dependen de otros actores:
- *"No hay sistema de registro de autos en la UNLaM"* — un estudiante no tiene visibilidad de si
  existe ese sistema del lado de seguridad; sólo puede reportar si le consta que su auto esté
  registrado en algo.
- *"Existen APIs para comunicarnos con el sistema de alumnos/docentes de la UNLaM"* — depende del
  área de sistemas, no de los estudiantes.
- *"Hay cámaras que apuntan a la entrada y salida del estacionamiento"* — se verifica por
  observación directa en el lugar, no por entrevista a estudiantes.
- *"El personal de seguridad cuenta con conectividad a internet y un dispositivo móvil en las
  garitas"* — depende del personal de seguridad, no del segmento encuestado.

Estos supuestos quedan marcados como **sin evidencia (pendiente)** en
[`docs/usuarios/supuestos-confrontacion.md`](supuestos-confrontacion.md) hasta que se verifiquen
por el canal que corresponde (consulta al área de sistemas, visita a los accesos, consulta al
personal operativo) — no se fuerzan preguntas sobre esto en la encuesta a estudiantes.
