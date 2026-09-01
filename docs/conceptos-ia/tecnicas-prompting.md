---
type: Concepto
title: Técnicas de prompting utilizadas
description: Patrones de uso de IA en el proyecto SPOTTER (no reemplaza el registro obligatorio de docs/prompts.md).
tags: [ia, metodologia]
status: draft
---

# Técnicas de prompting utilizadas

Categorías de uso de IA identificadas en el proyecto hasta ahora. Cada categoría referencia por
fecha la(s) entrada(s) correspondiente(s) en [`docs/prompts.md`](../prompts.md) en vez de
repetir el contenido del log.

## Reestructuración de documentación (OKF)
Conversión de PDF/DOCX de la cátedra a Markdown y organización de `docs/` como bundle de
conocimiento (frontmatter, índices, historial). No interviene en el contenido sustantivo del
TP2 (perfil de usuario, hallazgos, hipótesis) — sólo en la estructura documental.

## Preparación de instrumento de relevamiento
Armado y revisión del cuestionario de preguntas abiertas de la encuesta del TP2 (ver
[`docs/usuarios/guia-encuesta-tp2.md`](../usuarios/guia-encuesta-tp2.md)), verificando que las
preguntas no sean capciosas ni induzcan la respuesta. Los hallazgos de la encuesta —una vez
aplicada a usuarios reales— no se generan con IA.

## Estructuración de hallazgos y redacción del informe
Una vez registradas las respuestas de U1, U2 y U3 (ver
[`docs/evidencia/tp2/encuesta-respuestas.md`](../evidencia/tp2/encuesta-respuestas.md)),
se usó IA para estructurar el perfil de usuario, la confrontación de supuestos y la hipótesis de
valor, y para completar el informe `TP2-SPOTTER.docx`. Cada hallazgo volcado se corresponde con
una respuesta concreta de la encuesta — la IA no aportó necesidades, frustraciones ni datos que no
estuvieran ya en las respuestas de los tres usuarios. Ver entrada del 31/08/2026 en
`docs/prompts.md`.

## [completar próximas categorías a medida que surjan, con su fecha en docs/prompts.md]
