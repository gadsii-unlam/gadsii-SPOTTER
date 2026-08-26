---
type: Referencia
title: "TP2 — Consigna: Análisis de Usuarios e Hipótesis de Valor"
description: Enunciado de la cátedra GADSII (UNLaM) para el TP2, transcripto a Markdown desde el PDF original con markitdown.
tags: [consigna, tp2]
generated:
  by: markitdown/0.0.2
  at: 2026-08-25T00:00:00Z
sources:
  - id: original
    resource: originales/tp2-consigna.pdf
    title: TP2-Analisis-de-Usuarios-e-Hipotesis_1.pdf
---

# TP2. Análisis de Usuarios e Hipótesis de Valor

A partir del producto definido en el TP1, el equipo deberá analizar en profundidad al grupo de
usuarios primario de su segmento y **confrontar sus supuestos con la realidad**.

Éste es el trabajo que sostiene todo el resto del cuatrimestre. Es el único momento en que entra
al proyecto información que no existe en ningún otro lado: lo que dicen y hacen personas
concretas. Todo lo demás —el diseño, el MVP, la arquitectura— se puede razonar, generar o
acelerar. Esto no.

## 1. Seleccionar y justificar la técnica

Elegir **una** de las siguientes técnicas de análisis de usuario:
- Análisis del contexto de uso
- Análisis de tareas
- Entrevistas estructuradas o semiestructuradas
- Observación de usuario no participante
- Encuestas o cuestionarios
- Focus group

Justificar la elección: **¿por qué esta técnica es la más adecuada** para conocer al grupo de
usuarios primario identificado en el TP1, en el contexto de la comunidad UNLaM?

## 2. Aplicar la técnica con usuarios reales

Aplicar la técnica seleccionada con un **mínimo de 3 usuarios reales** del grupo primario del
segmento elegido en el TP1.

> **Evidencia obligatoria.** El material que demuestre que el análisis se hizo con personas
> reales —la guía de preguntas utilizada, transcripciones o notas, fotos, registros de
> observación, respuestas de encuesta, o lo que corresponda según la técnica— se adjunta al
> informe y **se versiona en `docs/evidencia/tp2/`**. El TP7 lo va a auditar y la TPI lo entrega
> como parte del repositorio.
>
> **Los usuarios se identifican como U1, U2 y U3.** La evidencia no lleva nombres, apellidos,
> caras reconocibles ni datos de contacto: el repositorio es público y las personas que
> entrevistaron no son de la materia. Anonimizar es práctica estándar cuando se releva con
> gente, y no le quita nada al análisis — lo que importa es lo que dijeron, no quiénes son.

## 3. Analizar los resultados

El análisis debe producir explícitamente:
- **Perfil del usuario** — descripción concreta de las personas reales analizadas, construida a
  partir de los datos relevados. No un perfil genérico.
- **Necesidades reales** — qué necesitan que hoy no tienen, o que tienen de forma deficiente.
- **Problemas y frustraciones concretas** — qué obstáculos, errores o fricciones encuentran hoy.
  Cuanto más específico, mejor.
- **Contexto de uso** — cuándo usarían el producto, en qué lugar, con qué dispositivo, en qué
  condiciones: con tiempo o apurados, solos o acompañados, con conectividad o sin ella.

## 4. Confrontar los supuestos del TP1

**Éste es el punto central del trabajo.**

Retomar la lista de supuestos del TP1 y clasificar cada uno:

| Supuesto del TP1 | ¿Se confirmó? | Evidencia que lo sostiene o lo refuta |
|---|---|---|
| | Confirmado / Refutado / Sin evidencia | Cita textual o registro concreto |

Además:
- **¿Qué apareció que no habían previsto?** Necesidades, problemas o condiciones de uso que no
  estaban en ningún supuesto.
- **¿Qué pasó con el supuesto crítico?** Si se cayó, ¿qué implica para el producto?
- **¿El usuario primario elegido en el TP1 sigue siendo el correcto?** Si el relevamiento indica
  que el problema lo tiene más fuerte otro grupo, decirlo y cambiarlo. Cambiar de usuario
  primario acá es barato; en octubre, no.

> Refutar un supuesto no es un error del TP1: es el resultado de haber preguntado. Los supuestos
> se escribieron para eso. Un equipo que encuentra que se equivocó en tres de cinco hizo un buen
> relevamiento, no uno malo — y llega al diseño sabiendo cosas que antes no sabía.

## 5. Formular la hipótesis de valor

Sintetizar todo lo anterior en una hipótesis, con este formato:

> **Creemos que** [usuario concreto, el que analizaron]
> **tiene el problema de** [problema real encontrado en el relevamiento]
> **Nuestra solución es** [propuesta del producto]
> **Sabremos que estamos en lo correcto cuando** [evidencia medible que lo confirme]

Cada parte de la hipótesis debe poder rastrearse hasta un dato del relevamiento. No se completa
con lo que el equipo cree: se completa con lo que encontró.

> Esta hipótesis se va a trabajar y refinar en la clase del 01/09, y va a determinar qué se
> construye en el TP3. Es la bisagra entre lo que averiguaron y lo que van a hacer con eso.

## 6. Brief de Producto — versión 2

Actualizar `docs/brief.md` en el repositorio, commiteando la versión 2.

Abre con el párrafo de cambios: qué cambió respecto de la versión 1 y por qué.

Incorpora:
- El perfil del usuario **real**, reemplazando al hipotético.
- Necesidades, problemas y contexto de uso relevados.
- La hipótesis de valor.
- El estado de los supuestos: cuáles quedaron confirmados, cuáles se cayeron, cuáles aparecieron
  nuevos.

> Lo que se evalúa acá es que la versión 2 esté construida con lo que encontraron.
> Concretamente: que el perfil real haya reemplazado al hipotético, que el contexto de uso salga
> del relevamiento, y que cada supuesto del TP1 tenga su estado. No importa cuánto cambió el
> brief — importa que lo que cambió, y lo que no, esté sostenido en evidencia.

## 7. Sobre el uso de IA en este trabajo

La IA sirve para **preparar** y para **ordenar**: armar la guía de preguntas, revisar que no sean
preguntas capciosas o que induzcan la respuesta, estructurar las notas después, ayudar a redactar
el informe.

**No sirve para producir los hallazgos.** La IA no habló con nadie de ese segmento, así que lo
que devuelva sobre necesidades o frustraciones va a ser lo genérico de un usuario promedio — que
es justo lo contrario de lo que este trabajo busca. Cada hallazgo del informe tiene que poder
señalarse en la evidencia adjunta; los que no, no se computan.

El intercambio con IA se registra en `docs/prompts.md`.

## 8. Formato de entrega

- **Fecha de entrega:** martes 01/09/2026. El relevamiento con los tres usuarios se hace durante
  la semana del 25/08.
- **Formato:** PDF, con el enlace al repositorio en la primera página.
- **Nombre del archivo:** `TP2-[NombreGrupo].pdf`
- **Extensión orientativa:** 3 a 4 páginas, más la evidencia adjunta.

### Material de lectura
- *Usuarios y sistemas interactivos* — Gil, de Lera Tatjer y Monjo Palau. Capítulos 2 y 3.
- Clase 2 — Análisis de usuarios, técnicas y herramientas.

*Versión 2 — Borrador para revisión con equipo docente. Agosto 2026.*
