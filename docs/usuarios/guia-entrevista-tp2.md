---
type: Plantilla
title: Guía de entrevista — TP2
description: Técnica elegida para el relevamiento del TP2 (entrevistas semiestructuradas), su justificación, y el guion de preguntas aplicado a U1, U2 y U3.
tags: [tp2, entrevista, usuarios]
status: stable
sources:
  - id: brief-v1
    resource: /docs/brief.md
    title: Brief de Producto — SPOTTER (v1)
  - id: consigna-tp2
    resource: /docs/referencias/tp2-consigna.md
    title: "TP2 — Consigna: Análisis de Usuarios e Hipótesis de Valor"
  - id: evidencia-tp2
    resource: /docs/evidencia/tp2/entrevistas-transcripcion.md
    title: Transcripción anonimizada de las 3 entrevistas
---

# Guía de entrevista — TP2

> **Cambio de técnica respecto del borrador inicial:** este documento reemplaza a
> `guia-encuesta-tp2.md`. El equipo había planeado originalmente una encuesta autoadministrada,
> pero al coordinar el relevamiento con U1, U2 y U3 se optó por entrevistas semiestructuradas —
> ver justificación abajo. El guion se aplicó a los tres usuarios durante la semana del 25/08; las
> respuestas están transcriptas y anonimizadas en
> [`docs/evidencia/tp2/entrevistas-transcripcion.md`](../evidencia/tp2/entrevistas-transcripcion.md).

## Técnica elegida

**Entrevistas semiestructuradas.**

## Justificación

El grupo de usuarios primario definitivo es **estudiantes con auto**. Al basarse en
conversaciones individuales y profundas, esta técnica permite conocer directamente las
opiniones, experiencias y sentimientos de cada usuario respecto de su rutina real de
estacionamiento en la UNLaM — algo que una encuesta cerrada difícilmente capture con el mismo
detalle (por ejemplo, la decisión momento a momento entre las dos playas, o el recurso a
estacionar de forma indebida, que surgieron como respuesta abierta y no como opción
predefinida). El guion semiestructurado asegura cubrir los mismos puntos con los tres usuarios
(perfil, rutina, frustraciones, expectativas), dejando margen para repreguntar sobre lo que cada
uno mencione. Frente a un focus group, resulta más ágil de coordinar dentro de los tiempos del
trabajo práctico, al no requerir sincronizar una franja horaria común entre el equipo y tres
personas del mismo grupo primario.

## Guion de preguntas

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
anticipación?"), a propósito: el guion busca que la disposición (o no) a planificar surja de cómo
el usuario describe espontáneamente lo que necesita, no de inducirla con la pregunta.

## Nota metodológica — límites de esta técnica

Esta entrevista está dirigida al grupo primario (estudiantes con auto) y por lo tanto **no**
puede confirmar ni refutar por sí sola los supuestos que dependen de otros actores:
- *"No hay sistema de registro de autos en la UNLaM"* — un estudiante no tiene visibilidad de si
  existe ese sistema del lado de seguridad; sólo puede reportar si le consta que su auto esté
  registrado en algo.
- *"Existen APIs para comunicarnos con el sistema de alumnos/docentes de la UNLaM"* — depende del
  área de sistemas, no de los estudiantes.
- *"Hay cámaras que apuntan a la entrada y salida del estacionamiento"* — se verifica por
  observación directa en el lugar, no por entrevista a estudiantes.
- *"El personal de seguridad cuenta con conectividad a internet y un dispositivo móvil en las
  garitas"* — depende del personal de seguridad, no del segmento entrevistado.

Estos supuestos quedan marcados como **sin evidencia (pendiente)** en
[`docs/usuarios/supuestos-confrontacion.md`](supuestos-confrontacion.md) hasta que se verifiquen
por el canal que corresponde (consulta al área de sistemas, visita a los accesos, consulta al
personal operativo) — no se fuerzan preguntas sobre esto en la entrevista a estudiantes.
