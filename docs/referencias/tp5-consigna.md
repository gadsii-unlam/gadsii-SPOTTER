---
type: Referencia
title: "TP5 — Consigna: Construcción del MVP, Prueba y Aprendizaje"
description: Enunciado de la cátedra GADSII (UNLaM) para el TP5, transcripto a Markdown desde el PDF original.
tags: [consigna, tp5]
generated:
  by: Claude Code (Claude Opus 5.5)
  at: 2026-11-02T00:00:00Z
sources:
  - id: original
    resource: originales/tp5-consigna.pdf
    title: TP5-Construccion-Prueba-y-Aprendizaje.pdf
---

# TP5. Construcción del MVP, Prueba y Aprendizaje

Es el trabajo más exigente del cuatrimestre y el único donde el producto **sale del papel y se
pone frente a una persona**.

Hasta acá todo fue razonamiento: supuestos, hallazgos, decisiones de scope, diseño. Ahora se
construye lo definido en el TP3, se prueba con usuarios reales del segmento del TP1, y se decide
qué hacer con lo que se aprenda. El objetivo no es que el MVP funcione bien: es **aprender si la
hipótesis es correcta**.

## Parte 1 — Antes de construir

### 1. Métricas y criterio de éxito

> Este punto se resuelve y se commitea **antes de escribir la primera línea del MVP**.

Definir **2 métricas accionables** que permitan saber si la hipótesis del TP2 se está
confirmando. Una métrica es accionable si, cuando cambia, el equipo sabe qué decisión tomar.

Identificar además **1 métrica vanidosa** relacionada con su producto: una que parezca
importante pero que no diga nada sobre la hipótesis, y explicar por qué sería engañosa.

Y lo más importante:

> **¿Qué resultado concreto confirmaría la hipótesis, y cuál la refutaría?**
>
> Escribirlo antes de la prueba, en números o en hechos observables. Por ejemplo: *"si los tres
> usuarios completan el flujo sin pedir ayuda, la hipótesis se sostiene"*, o *"si ninguno vuelve
> a abrirlo al día siguiente, no la sostiene"*.

Un criterio escrito después de ver los resultados no mide nada: describe lo que pasó. Por eso
este punto va antes y queda commiteado.

## Parte 2 — Construir

> **Sobre la herramienta y el acceso.** Claude Code —la terminal de Claude que se usa para
> construir— no funciona con cuenta gratuita: requiere un plan Pro o Max, o facturación por API.
> Si el equipo no puede o no quiere pagarlo, la alternativa gratuita es **Gemini CLI**: pide sólo
> una cuenta de Google, sin tarjeta, y da **1000 solicitudes por día por cuenta**. Con cinco
> integrantes conviene repartir la construcción turnándose cada uno con su propia cuenta —cada
> persona ya tiene su propia cuota—, en vez de concentrar todo el trabajo en una sola cuenta o
> intentar estirarla cambiando entre cuentas dentro de la misma sesión.

### 2. Construir el MVP

Construir el scope definido en el TP3 — **únicamente ese scope**, incorporando las correcciones
del TP4 que el equipo aceptó llevar a esta versión.

Condiciones:

- El **componente de software propio** del TP1 tiene que estar construido y funcionando.
- Lo que en el TP3 se decidió simular, se simula: datos cargados a mano, integraciones resueltas
  manualmente por detrás. El usuario no tiene por qué enterarse.
- Un usuario real tiene que poder **recorrer el flujo principal de punta a punta** sin que nadie
  del equipo le opere la aplicación.

Todo se versiona en el repositorio. **Cuando una decisión estructural la resuelva la herramienta
y no el equipo —el framework, la forma de guardar los datos, la organización de los archivos—,
dejarlo anotado en el mensaje del commit o en `docs/prompts.md`**: el TP6 va a pedir reconstruir
quién decidió qué, y dentro de un mes nadie se acuerda.

> No se trata de que quede prolijo. Se trata de que aguante una sesión con una persona que no
> sabe nada del proyecto.

## Parte 3 — Probar

### 3. Preparar la sesión

Definir y documentar:

- **Las tareas** que se le van a pedir al usuario, redactadas como situaciones y no como
  instrucciones. *"Necesitás anotarte en la clase del jueves"* funciona; *"hacé clic en el botón
  Inscribirme"* no prueba nada.
- **Qué se va a observar**: dónde duda, dónde se equivoca, dónde pide ayuda, qué hace distinto
  de lo esperado.
- **Cómo se registra**: notas, grabación de pantalla, tiempos.
- **Qué se pregunta al final**, sin inducir la respuesta.

### 4. Probar con usuarios reales

Ejecutar la prueba con un **mínimo de 3 usuarios reales** del segmento del TP1 —
preferentemente los mismos del TP2, porque permite preguntarles directamente si esto resuelve lo
que ellos mismos contaron.

Reglas de la sesión:

- El equipo **observa y no ayuda**. Si el usuario se traba, eso es el dato. Rescatarlo destruye
  la medición.
- Se registra **lo que hace**, no sólo lo que dice. Cuando las dos cosas no coinciden, vale lo
  que hace.

Adjuntar la evidencia —notas, grabaciones, tiempos, registro de los puntos de fricción— y
versionarla en `docs/evidencia/tp5/`, con los usuarios identificados como U1, U2 y U3, igual que
en el TP2.

> Con tres usuarios no hay significancia estadística, y está bien: en esta etapa lo que se busca
> es aprendizaje, no medición. Tres personas alcanzan de sobra para descubrir que algo no
> funciona.

## Parte 4 — Aprender

### 5. Las dos capas

Analizar el resultado desde dos perspectivas **independientes**, sin mezclarlas:

**Capa de usabilidad — ¿el MVP funciona bien?**

- ¿Completaron el flujo? ¿Con cuánta fricción?
- ¿Aparecieron los problemas que el TP4 había anticipado? ¿Aparecieron otros?

**Capa de negocio — ¿la hipótesis se sostiene?**

- ¿El producto genera el valor que la hipótesis prometía?
- ¿Hay evidencia de que resuelve el problema real del usuario?
- ¿Qué dijeron los resultados contra el criterio de éxito que definieron en el punto 1?

> Las dos capas son independientes y hay que resistir la tentación de fundirlas. **Un producto
> puede ser impecable de usar y no resolverle nada a nadie. Y puede ser incómodo y sin embargo
> resolver un problema real.** Confundirlas lleva a corregir la interfaz cuando el que estaba mal
> era el problema elegido.

### 6. Pivotar o perseverar

Con la evidencia sobre la mesa, tomar una decisión y fundamentarla:

- **Perseverar** — la hipótesis se sostiene. ¿Qué sería lo próximo a construir y por qué?
- **Pivotar** — la hipótesis no se sostiene. Indicar **qué tipo de pivote** corresponde (de
  zoom-in, de zoom-out, de segmento de consumidor, de necesidad del consumidor, de plataforma, de
  motor de crecimiento, de canal, o de tecnología) y **cuál sería la nueva hipótesis**.

No hay que construir el pivote: hay que saber decir cuál sería y por qué.

> Pivotar no es fracasar. Es el resultado de un experimento que funcionó: aprendieron algo que no
> sabían, y lo aprendieron barato. La decisión se evalúa por su fundamento, no por su dirección —
> perseverar contra la evidencia y pivotar sin evidencia son el mismo error.

### 7. Brief de Producto — versión 4

Actualizar `docs/brief.md`, abriendo con el párrafo de cambios respecto de la versión 3.

Incorpora: lo aprendido en la prueba, el estado de la hipótesis, y la decisión de pivotar o
perseverar con su fundamento.

## Parte 5 — Fundamentación

### 8. Anclaje

Cada conclusión del punto 5 tiene que apoyarse en **una observación concreta de la sesión**: qué
hizo quién, en qué momento, con qué resultado. Las conclusiones sin observación que las sostenga
son impresiones.

### 9. El resultado que no esperaban

**¿Cuál fue el resultado que más los sorprendió, y qué hicieron con él?**

Puede ser para mal —un usuario que no entendió nada, una funcionalidad que nadie tocó, una
hipótesis que se cayó— o para bien: algo que funcionó mejor de lo previsto y abrió una puerta que
no estaba en el plan.

Anclarlo en una observación concreta de la sesión: qué pasó, en qué momento y con qué usuario.

> Lo que se evalúa acá no es que el resultado haya sido bueno, sino qué hicieron con lo que
> encontraron. Salir a probar sirve justamente para eso: para enterarse de algo que no se sabía
> antes.

### 10. La métrica que podría estar mintiendo

De las 2 métricas accionables que definieron en el punto 1: **¿cuál de las dos podría estar
dándoles una lectura tranquilizadora sin que la hipótesis sea cierta?**

## 11. Sobre el uso de IA en este trabajo

**Se delega sin problema:** construir el MVP. Es el trabajo de producción, y acá la IA es lo que
hace posible que este trabajo práctico exista — hace tres años, construir y probar un producto
en dos semanas no entraba en una materia de cuatro horas semanales.

**No se delega:** las métricas y el criterio de éxito, el diseño de las tareas de la sesión, la
observación, la interpretación de los resultados y la decisión de pivotar o perseverar.

> La IA no estuvo en la sala. No vio dudar al usuario, no lo escuchó decir una cosa y hacer
> otra. Todo lo que salga de la sesión es de ustedes, y todo lo que se concluya tiene que poder
> rastrearse hasta algo que pasó ahí.

El registro del trabajo con IA se mantiene actualizado en `docs/prompts.md`.

## 12. Formato de entrega

- **Fecha de entrega: martes 06/10/2026.**
- **La prueba con usuarios tiene que estar hecha antes del lunes 28/09.** El informe se escribe
  después, pero la sesión con gente no se posterga: es lo único que depende de coordinar con
  terceros.
- **Formato:** PDF, con el enlace al repositorio y al MVP en la primera página.
- **Nombre del archivo:** `TP5-[NombreGrupo].pdf`
- **Extensión orientativa:** 4 a 6 páginas más la evidencia de la sesión.
- **Se entrega también:** el MVP funcionando, versionado en el repositorio.

**Herramienta:** Claude Code o Gemini CLI — construcción del MVP. Ver nota sobre acceso gratuito
en la Parte 2.

### Material de lectura

- *El método Lean Startup* — Eric Ries. Capítulos 7, 8 y 9.
- Clase 5 — Aprendizaje validado, contabilidad de la innovación y build-measure-learn.

*Versión 2 — Borrador para revisión con equipo docente. Agosto 2026.*
