---
type: Referencia
title: "TP4 — Consigna"
description: "Enunciado del TP4 (Evaluación de Usabilidad, cruzada entre equipos), transcripto a Markdown desde el PDF original con markitdown."
tags: [consigna, tp4]
generated:
  by: markitdown
  at: 2026-10-26T00:00:00Z
sources:
  - id: original
    resource: originales/tp4-consigna.pdf
    title: TP4-Evaluacion-Usabilidad.pdf
---

Universidad Nacional de La Matanza
Departamento de Ingeniería e Investigaciones Tecnológicas
Ingeniería Informática — Gestión Aplicada al Desarrollo de Software II (3665)

TP4. Evaluación de Usabilidad

2° cuatrimestre 2026 · Parte A: martes 22/09/2026 · Parte B: martes 29/09/2026

La evaluación se realiza de forma cruzada entre equipos: cada equipo evalúa el wireframe

del MVP de otro y recibe la evaluación del suyo.

Se evalúa el MVP diseñado en el TP3, no el producto completo del TP1. Un elemento que

quedó fuera del scope no es un problema de usabilidad: es una decisión de alcance que el
equipo ya justificó.

Asignación de equipos — la evaluación se organiza en ciclo: cada equipo evalúa a uno y es
evaluado por otro distinto.

Equipo evaluador

Evalúa a

(a completar con los equipos del cuatrimestre)

Que el evaluador y el evaluado no sean el mismo par evita la negociación mutua —"no me

marques esto y yo no te marco aquello"— y hace que cada equipo tenga que sostener su
informe frente a alguien que no le debe nada.

El intercambio se hace en la clase del 15/09: cada equipo entrega su wireframe y su brief v3
al equipo que le toca, en el estado en que están ese día. A partir de ese momento el material
queda congelado — el equipo evaluado no lo modifica mientras lo están evaluando.

Cómo se pasa el material. El brief v3 está en  docs/brief.md  y el wireframe en
docs/diseno/wireframe/  del repositorio del equipo evaluado. Para congelarlo, el equipo

evaluado crea ese mismo día el tag  tp4-entrega  sobre el commit que se evalúa y le pasa al
evaluador el enlace a ese tag. Si el repositorio es privado, agrega al equipo evaluador como
colaborador con permiso de lectura. El equipo puede seguir trabajando en su repositorio: la
evaluación se hace siempre sobre el tag.

1. Antes de mirar el wireframe

Este punto se hace antes de abrir el diseño que les tocó, y no después.

Leer el Brief de Producto v3 del equipo evaluado y escribir, en tres o cuatro líneas y con sus
propias palabras:

Quién es el usuario de ese producto: perfil concreto, no genérico.

En qué contexto lo usa: dónde, cuándo, con qué dispositivo, en qué condiciones.

Qué atributos de usabilidad priorizó ese equipo, y por qué.

Cuál es la hipótesis que el MVP intenta testear.

Commitear ese texto en  docs/evaluacion/perfil-evaluado.md  del repositorio del equipo
evaluador, antes de continuar.

GADSII 2C 2026 — TP4 — Página 1 de 4

La evaluación se hace desde la perspectiva de ese usuario, no desde la propia. Un
diseño denso y cargado de atajos es un problema para un usuario que entra dos veces por

año, y es exactamente lo correcto para uno que lo usa quince veces por día. Sin saber cuál
de los dos es, cualquier evaluación es opinión.

2. Evaluación heurística — la del equipo

Recorrer el wireframe recibido aplicando las heurísticas de Nielsen y documentar cada
problema encontrado:

# Heurística incumplida

Descripción del problema

Severidad (1-4) Mejora sugerida

Escala de severidad

1. Cosmético — no es necesario corregirlo salvo que sobre tiempo.

2. Menor — baja prioridad de corrección.

3. Mayor — alta prioridad, impacta la experiencia del usuario.

4. Catastrófico — debe corregirse antes de avanzar.

La severidad no es una propiedad del problema: es una propiedad del problema para ese
usuario. El mismo defecto puede ser cosmético para uno y catastrófico para otro. Al
asignarla, justificarla contra el perfil que escribieron en el punto 1.

Evaluar además si el diseño respeta los atributos de usabilidad que el equipo evaluado
priorizó en su TP3. Puede ocurrir que el diseño sea bueno en general y sin embargo no sirva a

los atributos que ese equipo dijo que le importaban.

3. Evaluación heurística — la de la IA

Entregarle a Claude el mismo wireframe y el mismo brief, y pedirle la misma evaluación

heurística con la misma tabla.

Guardar el resultado completo, sin editar, en  docs/evaluacion/evaluacion-ia.md .

4. Confrontar las dos evaluaciones

Éste es el punto central del trabajo. Lo que se entrega no es una evaluación: es la
comparación entre dos.

Cantidad

Ejemplos

Problemas que encontraron los dos

Problemas que encontró sólo el equipo

Problemas que encontró sólo la IA

Cosas que la IA marcó como problema y no lo son para ese usuario

GADSII 2C 2026 — TP4 — Página 2 de 4

Y responder:

¿Qué tipo de problemas se le escapan a la IA? Buscar el patrón, no el caso suelto.

¿Qué tipo de problemas se les escaparon a ustedes y la IA sí vio?

Los falsos positivos de la IA, ¿por qué lo son? Para cada uno, indicar qué dato del brief

del equipo evaluado hace que eso no sea un problema en este caso.

La última pregunta es la más importante del trabajo. Detectar que una observación
correcta en general es incorrecta acá requiere conocer al usuario. Es exactamente el

trabajo que no se puede delegar, y el que van a hacer el resto de su carrera cada vez que
revisen algo producido por una herramienta.

5. Informe al equipo evaluado

Entregar al equipo evaluado un informe que contenga:

La tabla de problemas con heurística, descripción, severidad y mejora sugerida — la del

equipo, integrando los hallazgos de la IA que hayan validado.

La evaluación del cumplimiento de los atributos priorizados.

Los falsos positivos descartados, con su justificación.

6. Respuesta del equipo evaluado

Una vez recibido el informe, responder por escrito:

¿Qué problemas aceptan y van a corregir? ¿Cómo, concretamente?

¿Qué problemas cuestionan y por qué? Fundamentar con datos del propio TP2: puede
ser que el evaluador no haya entendido el contexto de uso.

¿Qué aprendieron sobre su propio diseño?

¿Cuáles de las correcciones aceptadas entran en el MVP que van a construir en el
TP5, y cuáles quedan anotadas para después? No todo lo que hay que corregir hay que
corregirlo ahora.

Cuestionar un hallazgo es una respuesta legítima y a veces la correcta: el evaluador puede
no haber entendido el contexto de uso. Lo que se evalúa acá es que cada aceptación y
cada objeción tengan su fundamento — no cuántas de cada una haya.

7. Sobre el uso de IA en este trabajo

Acá la IA no es opcional: se usa a propósito y se la evalúa a ella también. El punto 3 es
obligatorio.

No se delega: la evaluación propia del punto 2 —que tiene que hacerse antes de ver la de la
IA, para que la comparación signifique algo—, la asignación de severidad, y la identificación de

falsos positivos.

El orden importa: la evaluación propia se termina y se guarda en el repositorio antes de

pedirle la suya a la IA. Hecho al revés, el equipo ya no puede saber qué habría encontrado

GADSII 2C 2026 — TP4 — Página 3 de 4

solo, y la comparación del punto 4 se queda sin sentido.

El registro del trabajo con IA se mantiene actualizado en  docs/prompts.md .

8. Formato de entrega

Este trabajo tiene dos entregas separadas, cada una con su nota, porque las escriben

equipos distintos.

Quién la entrega

Fecha de

entrega

Qué

contiene

Archivo

Parte

El equipo

martes

Puntos 1 a 5

TP4A-[NombreGrupo]-

A

evaluador

22/09/2026

informe.pdf

Parte
B

El equipo
evaluado

martes
29/09/2026

Punto 6

TP4B-[NombreGrupo]-

respuesta.pdf

Formato: PDF, con el enlace al repositorio en la primera página.

Extensión orientativa: 2 a 3 páginas la Parte A, 1 página la Parte B.

La Parte A se le entrega al equipo evaluado en la clase del 22/09, además de subirse a

MIEL: es lo que le da la semana siguiente para responder.

La nota de la Parte A se construye sobre la calidad del proceso de evaluación —
haberse puesto en la perspectiva del usuario ajeno, justificar la severidad, identificar los

falsos positivos —, nunca sobre la cantidad de problemas encontrados ni sobre la calidad
del diseño que les tocó evaluar.

Material de lectura

Usability Engineering — Jakob Nielsen. Capítulo: Heuristic Evaluation.

Clase 4 — Evaluación de usabilidad, métodos y herramientas.

GADSII 2C 2026 — TP4 — Página 4 de 4

