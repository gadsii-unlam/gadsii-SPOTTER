---
type: Referencia
title: "TP4B — Respuesta de SPOTTER a la evaluación recibida"
description: "Respuesta de SPOTTER al informe de UNLaM-Gym: correcciones aceptadas, cuestionadas y cuáles entran al MVP del TP5. Transcripta desde el .docx original con markitdown."
tags: [entrega, tp4, tp5]
generated:
  by: markitdown
  at: 2026-10-26T00:00:00Z
sources:
  - id: original
    resource: originales/tp4b-respuesta.docx
    title: TP4B-SPOTTER- respuesta.docx
---

# **TP4B — Evaluación de Usabilidad**

**Equipo SPOTTER**

**Integrantes:** Berti Rodrigo · Fragassi Donatella · Mendez Lucas · Miro Agustín · Morandi Mayra

**Repositorio:** <https://github.com/gadsii-unlam/gadsii-SPOTTER>

### 6. Respuesta de la evaluación

#### ¿Qué problemas aceptamos y cómo los vamos a corregir?

Aceptamos los hallazgos donde coincidieron el equipo evaluador y la IA, cuando dos evaluaciones llegan al mismo lugar es difícil sostener que es una mala lectura del wireframe:

* **Tramas en vez de semáforo (#1 de IA/ #1 del equipo)**: nosotros mismos escribimos en el brief que "la interfaz al basarse en un semáforo, es intuitiva para cualquier usuario" como justificación para excluir el onboarding del MVP. En la implementación terminamos codificando la ocupación con densidad de trama. Vamos a sumar el color de semáforo real, manteniendo la trama y la etiqueta LLENO/LIBRE como redundancia para sol directo o dificultad para distinguir colores.
* **Botones redundantes en el detalle ("Ver PERÓN" / "Ver LA PAZ" sin estado activo) (#6 de IA/ #2 del equipo)**: es un bug de estado. Se corrige deshabilitando el botón de la playa en pantalla y mostraremos únicamente el botón interactivo para saltar a la otra playa.
* **El bloque "AULAS" sugiriendo una escala geográfica que nunca relevamos (#5 de IA/ #3 del equipo)**: de acuerdo, lo vamos a rotular como esquemático o sacarlo hasta tener distancias reales.
* **Nivel MEDIO sin leyenda y separar visualmente los estados de las secciones navegables (2# de IA/ #4 del equipo)**: cabo suelto real. Va a quedar definido junto con LLENO/LIBRE en la leyenda del mapa principal y redactaremos su microcopy de consecuencia en la vista de detalle: "*Hay lugar disponible, pero podrías esperar unos minutos para ingresar*".

De los hallazgos que encontró solo la IA, tomamos además:

* **Falta de indicador "actualizando" y botón de refresco manual (#3 y #4)**: esto pesa más de lo que pensábamos porque los usuarios reportaron que la señal 4G es mala justo en la zona donde más necesitan la app. Si el dato se queda viejo por mala conexión, el usuario necesita poder pedir explícitamente una actualización en cuanto recupere señal en cualquier pantalla de la app. Se sumará un indicador visual de actualización en curso y un botón de refresco manual, conservando en paralelo la actualización automática en segundo plano.
* **Definir mensajes de recuperación ante errores (#7)**: falla de red del dispositivo vs. falla del servicio.
* **Fijar la estructura del header (#11)**: el header muestra "SPOTTER" en 1, 3 y 4, pero en el detalle lo reemplaza por "‹Mapa", vamos a fijar una estructura única de header (identidad + contexto + antigüedad del dato) y ubicar la navegación de retroceso en una posición constante.

#### ¿Qué problemas cuestionamos y por qué?

* **Frenar o bloquear ante dato viejo (#8):** el usuario está manejando — U1 pide en la encuesta una opción de "manos libres para no distraerme manejando". Un modal o un bloqueo de la información ante un dato de 12 minutos de antigüedad va en contra de la seguridad vial y del atributo de eficiencia que priorizamos en el brief. Sumado a la mala conectividad de U1 y U3, exigir una confirmación extra antes de mostrar el dato puede directamente dejarlos sin información en el peor momento. Preferimos la degradación no bloqueante que ya tenemos, ahora reforzada con el refresco manual.
* **Camino rápido para usuarios recurrentes / playa favorita (#9):** el MVP excluyó explícitamente el login ("no es lo principal identificar al usuario para consultar disponibilidad"). Guardar una playa favorita persistente requiere justamente lo que decidimos no construir en esta etapa.
* **Falta de ayuda o documentación (#10)**: el brief excluye el onboarding a propósito, apostando a que el semáforo es autoexplicativo. Es un falso positivo en la medida en que corrijamos el hallazgo #1 (tramas → semáforo real); si volvemos al lenguaje que el brief prometía, la ausencia de una sección de ayuda deja de ser un problema para un usuario que, según describe U1, arranca en estrés apenas llega a la facultad y no tiene margen para leer nada.
* **Quitar un botón de “volver al mapa” para evitar peso visual (#12)**: El estudiante interactúa al volante o en semáforos, con el celular en un soporte o en una mano. Mantener el botón superior ("‹ Mapa") y el inferior ancho ("Volver al mapa") garantiza una salida rápida según el punto de agarre físico. Es usabilidad defensiva.

#### ¿Qué aprendimos sobre nuestro propio diseño?

La mala conectividad de los usuarios y la urgencia de los mismos (20 minutos de espera reales, contra los 10-15 que habíamos supuesto), es donde el wireframe queda más débil: no hay forma de forzar una actualización en todas las pantallas (solo cuando se detecta que no hay conexión). También, buscar un estilo esquemático en baja fidelidad mediante tramas lineales abstractas fue un error conceptual crítico ya que nos desviamos de nuestra propia decisión de diseño: prometimos un semáforo para justificar sacar el onboarding del MVP, y en la maqueta terminamos con un sistema de tramas. Nadie lo marcó internamente hasta que alguien de afuera lo comparó con el brief.

#### ¿Qué entra al MVP del TP5 y qué queda para después?

Entran (bajo costo, atacan eficiencia y tasa de errores directamente):

* Semáforo de color + trama + etiqueta como triple redundancia.
* Leyenda única con los tres niveles (LLENO/MEDIO/LIBRE) en las cuatro pantallas.
* Corrección de botones de navegación entre playas.
* Indicador de actualización en curso + botón de refresco manual.
* Fijar la estructura del header + navegación de retroceso

Quedan anotadas para después:

* Rotular o simplificar el bloque "AULAS" hasta relevar distancias reales.
* Diferenciar "sin conexión del teléfono" de "caída del servidor" — requiere lógica de backend fuera del alcance actual del MVP.