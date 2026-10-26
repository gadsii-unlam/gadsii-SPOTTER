---
type: Referencia
title: "TP4A — Informe de SPOTTER sobre Bananza"
description: "Informe de evaluación heurística que SPOTTER entregó al equipo Bananza (producto UNLaMigos), transcripto desde el .docx original con markitdown."
tags: [entrega, tp4]
generated:
  by: markitdown
  at: 2026-10-26T00:00:00Z
sources:
  - id: original
    resource: originales/tp4a-informe.docx
    title: TP4A-SPOTTER- informe.docx
---

# **TP4A — Evaluación de Usabilidad**

**Equipo SPOTTER**

**Integrantes:** Berti Rodrigo · Fragassi Donatella · Mendez Lucas · Miro Agustín · Morandi Mayra

**Repositorio:** <https://github.com/gadsii-unlam/gadsii-SPOTTER>

Evalúa a: **Bananza** <https://github.com/gadsii-unlam/gadsii-Bananza>

## 1. Antes de mirar el wireframe

El **usuario** es el estudiante de Ingeniería en Informática de la UNLaM que trabaja, cursa varias materias a la vez y necesita conseguir material académico (apuntes, modelos de parcial) sin depender de tener contactos o pertenecer a grupos previos. Utiliza la plataforma desde una computadora en su casa con conectividad, en bloques acotados de tiempo.

El equipo prioriza la **eficiencia** para aprovechar el tiempo disponible, **facilidad de aprendizaje** sin asistencia ni tutoriales y baja **tasa de errores** para evitar confusiones de cuatrimestre, comisión o vigencia del material.

El MVP busca testear si el usuario puede encontrar material contextualizado de su comisión en menos de cinco minutos y resolver dudas con pares directamente en la plataforma.

Disponible en el repositorio dentro de docs/evaluacion/perfil-evaluado.md.

## 2. Evaluación heurística — la del equipo

| **#** | **Heurística incumplida** | **Descripción del problema** | **Severidad (1-4)** | **Mejora sugerida** |
| --- | --- | --- | --- | --- |
| 1 | Prevención de errores | En el formulario de registro, el campo de email no muestra una prevista del correo institucional  por lo que infiere que acepta cualquier email ej: @gmail.com a pesar de indicar "Correo institucional". | 1 - Cosmético | Aclarar en el placeholder (texto de sugerencia) que se debe ingresar un correo institucional @unlam.edu.ar. |
| 2 | Visibilidad del estado del sistema | Al hacer clic en “Descargar”, el mensaje de confirmación se renderiza en la parte inferior de la pantalla fuera del campo visual inmediato del usuario, pasa desapercibido. | 2 - Menor | Brindar retroalimentación visual directa dentro del campo visual del usuario, por ejemplo en el mismo botón que hizo clic o mediante un aviso emergente destacado. |
| 3 | Diseño estético y minimalista | En Materiales (filtros+tabla+detalle lateral) el apartado de los filtros quedó desproporcionado respecto al apartado de los Materiales. Da la impresión de ser lo más importante al ingresar a la pantalla cuando en realidad no lo es. | 1 - Cosmético | Redimensionar los filtros para poder darle mayor importancia a los materiales en sí. |
| 4 | Diseño estético y minimalista | La disposición del workspace en tres columnas (filtros - tabla - detalle lateral) sobrecarga la pantalla. La columna del detalle lateral no tiene información útil hasta hacer clic en un recurso.  mido, dificultando el escaneo rápido. | 1 - Cosmético | Ocultar por defecto la columna de detalle lateral y hacerla visible únicamente a demanda cuando el usuario haga clic en un recurso. |

***Evaluación de los atributos de usabilidad priorizados:***

En baja tasa de errores, es bastante sólido, previene confusiones al explicitar los recursos con etiquetas claras y avisos de filtros cambiados antes de abrir o un archivo. En facilidad de aprendizaje, el flujo general resulta predecible e intuitivo al apoyarse en el vocabulario real, aunque presenta pequeñas fricciones al depender exclusivamente del clic en el título para abrir el detalle. En eficiencia, si bien precarga la cursada del usuario y permite descargas directas en la tabla, la sobrecarga visual de tener tres columnas simultáneas con un panel lateral vacío por defecto hace que recorrer visualmente los materiales sea más lento.

## 3. Evaluación heurística — la de la IA

Se ejecutó la evaluación heurística automatizada utilizando el modelo Claude, suministrando como entrada el wireframe y el Brief de Producto v3 del equipo evaluado.

La salida completa y sin editar se encuentra documentada en docs/evaluacion/evaluacion-ia.md del repositorio.

## 4. Confrontar las dos evaluaciones

|  | **Cantidad** | **Ejemplos** |
| --- | --- | --- |
| **Problemas que encontraron los dos** | 3 | Email en registro: Ausencia de guía o placeholder para el dominio institucional @unlam.edu.ar (Equipo #1 vs. IA #7).  Feedback de descarga: El mensaje de confirmación se emite en la parte inferior fuera del foco visual inmediato (Equipo #2 vs. IA #10).  Sobrecarga visual de la pantalla / panel lateral vacío: La distribución y el panel de detalle ocupando espacio sin contenido activo complican el escaneo y la jerarquía visual (Equipo #3 y #4 vs. IA #6). |
| **Problemas que encontró sólo el equipo** | 1 | Desproporción específica de la columna de filtros frente a los materiales: el panel de filtros adquiere un protagonismo superior al del listado de materiales en sí al entrar a la pantalla (Equipo #3). |
| **Problemas que encontró sólo la IA** | 7 | Recuperación limitada en estado vacío: el botón 'Ver todos los tipos' no recupera la tabla cuando el filtro que la vació es de comisión o cuatrimestre (#2)  Comisiones inertes: Desplegables derivados de datos con una única opción. (#4)  Omisión de aviso de cambio de comisión: El salto a consultas/subida vuelve a la cursada base sin advertirlo. (#8)  Falta de edición, borrado y logout: Imposibilidad de retirar aportes. (#9)  Falta de metadatos de archivo: No se muestra peso, extensión ni fecha. (#11)  Falta de buscador y recuentos: Ausencia de buscador textual y contadores. (#13)  Ambigüedad en rótulo: "Restablecer mi cursada" suena a trámite académico. (#14) |
| **Cosas que la IA marcó como problema y no lo son para ese usuario** | 4 | Inversión visual por CSS: El uso de order: 2 desplaza el H1 y la cabecera por debajo del workspace. (#1)  Filtros de valor único obligatorio: No se puede consultar "Todas las comisiones" a la vez. (#3)  Acción de descarga despojada: Estilos CSS que quitan apariencia de botón a "Descargar". (#5)  Andamiaje del prototipo en pantalla: Controles de test visibles compitiendo con la UI. (#12) |

### ¿Qué tipo de problemas se le escapan a la IA?

Notamos que a la IA se le escapan los problemas vinculados a la percepción visual y jerarquía en pantalla. Un caso claro en nuestra evaluación fue la desproporción de la columna de filtros frente a los materiales (equipo #3). Este detalle no se detecta en la estructura del código ni en las etiquetas HTML, sino en cómo el ojo del usuario percibe los pesos visuales al renderizarse la interfaz. Como la IA procesó el wireframe como un artefacto textual (código HTML/CSS) junto al brief, pudo corroborar elementos existentes o flujos lógicos, pero no tiene noción del impacto visual relativo ni de si un panel secundario le quita protagonismo innecesario al contenido principal.

### ¿Qué tipo de problemas se nos escaparon a nosotros y la IA sí vio?

A nosotros se nos pasaron por alto cuestiones de cobertura exhaustiva de estados límite y flujos alternativos (como #2, #4, #9, #11 y #13). Como equipo nos concentramos en el flujo principal del estudiante encontrando material para su cursada. La IA, en cambio, analizó cada componente de manera sistemática y detectó fallas como que el botón "Ver todos los tipos" no resuelve el estado vacío si el filtro previo fue de comisión o cuatrimestre (#2). Aunque muchas de las ausencias que marcó (como editar/borrar aportes o buscar por texto libre) caen fuera del alcance de este MVP según el brief, nos sirvió para darnos cuenta de que la IA es mucho más rigurosa para auditar combinaciones de datos y estados de error del sistema.

### Falsos positivos de la IA: ¿por qué lo son?

Los falsos positivos surgen de leer el código como si fuera lo que percibe el usuario.

**#1 Inversión visual por CSS:** El brief prioriza una "experiencia web de escritorio" donde el primer atributo es la eficiencia. Mostrar el workspace de trabajo directamente arriba prioriza la tarea central del usuario. El riesgo real de order es de accesibilidad (orden de lectura y foco). Pero el brief no la incluye entre los atributos priorizados: son eficiencia, facilidad de aprendizaje y baja tasa de errores, más la satisfacción como indicador.

**#3 Filtros sin opción "Todas las comisiones"**: La IA sugiere habilitar la consulta global de comisiones. No obstante, en el brief de Bananza se explicita que el principal dolor del usuario es que los materiales de distintas cursadas y comisiones se mezclan en los grupos de WhatsApp. Restringir la vista a una comisión a la vez es una decisión de diseño intencional para garantizar el atributo de baja tasa de errores y evitar confusiones.

**#5 Acción de descarga despojada**: Dentro de la tabla de materiales, los estilos simples y compactos permiten mantener una vista despejada y escaneable de varias filas sin sobrecargar la pantalla con botones pesados en cada ítem, lo cual beneficia la rapidez de lectura del estudiante.

**#12 Andamiaje del prototipo en pantalla:** La IA confunde los controles de simulación del prototipo con fallas de la interfaz real. La regularidad del alumno y sus inscripciones se testean mediante datos simulados. Esos botones laterales forman parte del andamiaje del experimento y no del producto final.