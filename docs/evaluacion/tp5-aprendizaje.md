---
type: Concepto
title: Aprendizaje de la prueba del MVP — TP5
description: Puntos 5 a 10 del TP5. Resultados de las sesiones con U1, U2 y U3, las dos capas, la decisión de perseverar, el anclaje, el resultado inesperado y la métrica que podría estar mintiendo.
tags: [tp5, aprendizaje, pivotar-perseverar]
status: draft
sources:
  - id: metricas
    resource: /docs/evaluacion/tp5-metricas.md
    title: Métricas y criterio de éxito — TP5
  - id: u1
    resource: /docs/evidencia/tp5/u1.md
    title: Registro de sesión — U1
  - id: u2
    resource: /docs/evidencia/tp5/u2.md
    title: Registro de sesión — U2
  - id: u3
    resource: /docs/evidencia/tp5/u3.md
    title: Registro de sesión — U3
  - id: tp4
    resource: /docs/referencias/tp4a-informe-recibido.md
    title: Informe de evaluación recibido — TP4
---

# Aprendizaje de la prueba del MVP — TP5 (puntos 5 a 10)

> Las observaciones salen de `docs/evidencia/tp5/`. Las decisiones (perseverar, qué construir
> después, el resultado inesperado y la métrica que podría mentir) las tomó el equipo; la
> redacción se hizo con asistencia de IA (ver `docs/prompts.md`).

## Resultados contra el criterio de éxito

| Decisión | U1 | U2 | U3 |
|---|---|---|---|
| Decisión base (sin app) | La Paz | Perón, La Paz si no hay | Perón, La Paz si no hay |
| E2 Control | La Paz ✓ | Perón ✓ | Perón ✓ |
| E1 Desvío | La Paz ✗ (estaba LLENA) | La Paz ✓ redirige | La Paz ✓ redirige |
| E3 Sábado | Perón ✓ | Perón ✓, pidió ayuda | Perón ✓ |
| ¿Pidió reserva anticipada? | No | No | No |

- **M1 (redirección en E1):** 2 de 3 (U2, U3). Nadie pidió reserva anticipada. Por el criterio
  escrito antes de la prueba: **se sostiene**.
- **M2 (correcta, ≤10 s, sin ayuda):** 7 de 9. El umbral es "por debajo de 7": **no** corresponde
  rediseñar, sin margen. Límites del dato: los tiempos de U1 y U3 son un promedio informado
  (~5 s), no por decisión, y los pedidos de ayuda de U1 y U3 no quedaron registrados.
- **E2 (control):** nadie cambió de decisión cuando el dato coincidía con su plan. No hay
  indicio de cambios al azar.

## 5. Las dos capas

### Capa de usabilidad: ¿el MVP funciona bien?

Observaciones:
- Los tres completaron los tres escenarios sin que nadie les operara la app.
- U2, E3: "¿Cerrada es que está llena?". Mira la leyenda: dice "Cerrada" pero no explica qué
  significa. Lo resuelve al leer "No abre los sábados" en la tarjeta.
- U2, E1: no decide desde el mapa; entra al detalle de Perón y decide al leer la consecuencia
  ("Eso es lo que me pasa siempre").
- U2, E2: "¿Y esto es ahora, en vivo?", mirando "Dato de hace menos de 1 min".
- U3, pregunta final 1: pide poder guardarla en la pantalla principal del celular.

Contra lo que anticipó el TP4 ([informe recibido](../referencias/tp4a-informe-recibido.md)):
- **Apareció:** #10, "no hay forma de saber de dónde sale el dato". U3: "No entiendo de dónde
  salen los datos y eso me da desconfianza". El equipo había **cuestionado** esa corrección
  (sección de ayuda) y no entró al MVP.
- **Apareció en parte:** CERRADA vs. LLENO. El TP4 la daba por bien resuelta; a U2 le generó
  una duda, que resolvió solo.
- **No apareció:** confusión por la trama o el color. Nadie eligió mal por no entender el nivel.
- **Apareció en parte:** el TP4 marcó la falta de un camino rápido para el usuario recurrente
  (#9) y el equipo lo cuestionó. U3 pide algo de esa familia: guardarla en la pantalla
  principal.
- **Apareció y no estaba anticipado:** en E1, U2 no decide desde el mapa sino desde el detalle:
  la consecuencia escrita ("Vas a hacer fila para entrar…") le dice más que la etiqueta LLENO.

**Conclusión de la capa: el MVP funciona.** Los tres usuarios recorrieron el flujo sin que nadie
les operara la app, y M2 llega a 7 de 9, en el umbral que se fijó antes de la prueba. No hubo
errores por no entender el semáforo: la única decisión incorrecta (U1, E1) no vino de leer mal
LLENO, sino de no creerle. Lo que hay que corregir es menor y está localizado: la leyenda tiene que
explicar qué significa CERRADA, no sólo nombrarla (U2, E3) y el acceso a la app tiene que ser directo (U3). El resultado de M2
se lee con cautela: los tiempos de U1 y U3 son un promedio, no por decisión.

### Capa de negocio: ¿la hipótesis se sostiene?

Observaciones:
- U2 y U3 cambian de playa en E1 por el dato (M1).
- U1, E1: ve La Paz LLENA y va igual: "A esta hora siempre hay lugar en La Paz".
- U2: "Igual la fila de la estación de servicio me la como, ¿no? Eso es la calle, la app no me
  lo saca". Y: "Pero llegar tarde llego no se, porque lo que me mata es el tráfico de antes".
- U2 pide "saber a qué hora se arma el lío, para saber cuándo salir".
- U3: "Podrían ser más precisos en los tiempos donde el estacionamiento se está vaciando, por
  ejemplo 12 del mediodía, porque hoy me fijé y decía lleno".
- U3, pregunta 4: "No cambia nada". U1: "Me da más tiempo para decidir".
- Los tres dudan del dato: U1 no le cree, U2 pregunta si es en vivo, U3 desconfía del origen.

**Conclusión de la capa: la hipótesis se sostiene, con una condición que no estaba escrita.**
Contra el criterio de éxito, M1 da 2 de 3 y nadie pidió reservar con anticipación. U2 y U3
cambian de playa por el dato, y U2 lo conecta con su problema real: "Eso es lo que me pasa
siempre, entro, doy toda la vuelta y nada". La condición es la **confianza en el dato**: la
información cambia la decisión sólo si el usuario le cree. U1 ve La Paz LLENA y va igual ("A
esta hora siempre hay lugar en La Paz"), y los tres expresaron dudas sobre el dato.

El producto resuelve **una parte** del problema: la vuelta inútil dentro de una playa llena. No
resuelve la demora antes de llegar, que para U2 es la principal ("lo que me mata es el tráfico
de antes").

## 6. Pivotar o perseverar

**Decisión: perseverar.** El criterio escrito antes de la prueba se cumple, y lo que no
funcionó (U1) no muestra que la necesidad sea otra, sino que el dato tiene que ser creíble.
Eso se ataca con el origen del dato (TelePase) y no cambiando el problema elegido.

Evidencia a favor de perseverar:
- El criterio escrito se cumple (M1 2 de 3, M2 7 de 9, sin pedidos de reserva).
- U2 y U3 cambian de decisión por el dato; la vuelta inútil dentro de Perón se evita.

Evidencia en contra:
- El dato cambia la decisión sólo si el usuario le cree (U1), y los tres expresaron desconfianza.
- La demora principal de U2 está antes de la playa, en la calle; la app no la toca.
- U2 y U3 piden algo distinto de la ocupación actual: saber cuándo se llena o se vacía.

Mitigación del riesgo del dato (el equipo cambia la gran visión en el TP5; no se implementa en
el TP): la UNLaM va a instalar lectores de **TelePase** en el estacionamiento. Los usuarios de
TelePase se anotan como alumnos, docentes o nodocentes para entrar gratis, y al resto se le cobra
el ingreso. SPOTTER se integraría a TelePase para obtener las entradas y salidas, y a partir de
ellas estimar la ocupación. Se asume que ese dato va a estar disponible (supuesto sin evidencia,
ver [brief](../brief.md#supuestos)).

Qué observación de la sesión responde y cuál no:
- **Responde:** el origen del dato (U3: "no entiendo de dónde salen los datos") y su precisión
  (U3, mediodía: "decía lleno, cuando se están yendo todos"). Con datos reales, la app puede
  decir de dónde salen.
- **No responde por sí sola:** U1 no le cree al dato porque ya sabe cómo está la facultad a esa
  hora; eso se juega en que el dato acierte durante el uso, no en su origen. Tampoco la demora de
  U2 antes de llegar ("el tráfico de antes").
- **Supuestos del equipo:** hay lectores en cada playa por separado. Si se puede entrar sin tag
  no se sabe; ese error se acepta, porque lo que se da es un estimado de semáforo, no un conteo
  exacto.

**Lo próximo a construir, en este orden:**

1. **Tendencia por horario:** mostrar si cada playa se está llenando o vaciando y a qué hora
   suele pasar. Responde a U3 ("Podrían ser más precisos en los tiempos donde el estacionamiento
   se está vaciando, por ejemplo 12 del mediodía") y a U2 ("Saber a qué hora se arma el lío,
   para saber cuándo salir"). También ayuda con U1: si la app muestra la tendencia del día, el
   dato compite mejor contra lo que el usuario cree saber del horario.
2. **Acceso directo desde la pantalla principal del celular:** lo pidió U3 en la pregunta 1
   ("¿Qué te faltó para usarla mañana?"), y U2 pidió que sea "así de simple, que lo mires y ya
   está".

La tendencia complementa la ocupación actual, no la reemplaza. Si en la próxima prueba los
usuarios usan sólo la predicción y dejan de mirar la ocupación, eso sería señal de un pivote de
necesidad del consumidor, que hoy la evidencia no sostiene.

## 8. Anclaje

| Conclusión | Observación que la sostiene |
|---|---|
| El MVP se usa sin ayuda del equipo | U1, U2 y U3 completan E1, E2 y E3 sin que nadie les opere la app |
| El semáforo se entiende | 7 de 9 decisiones correctas en ≤10 s y sin ayuda; ninguna incorrecta por leer mal el nivel |
| La leyenda tiene que explicar CERRADA | U2, E3: "¿Cerrada es que está llena?"; la leyenda la nombra pero no dice que significa que no abre |
| El dato cambia la decisión | U2 y U3, E1: pasan de "Perón primero" a La Paz directo |
| Resuelve la vuelta inútil dentro de la playa | U2, E1: "Eso es lo que me pasa siempre, entro, doy toda la vuelta y nada" |
| No resuelve la demora antes de llegar | U2, E1: "Igual la fila de la estación de servicio me la como, ¿no?" |
| Sin confianza, el dato no redirige | U1, E1: La Paz LLENA en pantalla, va igual: "A esta hora siempre hay lugar en La Paz" |
| Hace falta mostrar el origen del dato | U3, pregunta 3: "No entiendo de dónde salen los datos y eso me da desconfianza" |
| Hace falta la tendencia por horario | U3, pregunta 5 (mediodía, "decía lleno"); U2, pregunta 1 ("a qué hora se arma el lío") |
| Hace falta acceso directo | U3, pregunta 1: "Me gustaría que se pueda guardar en el acceso rápido del celular" |
| No hay demanda de reserva anticipada | Ninguno de los tres la pidió en "¿Qué te faltó para usarla mañana?" |

## 9. El resultado que no esperaban

**U1 no le cree al dato.** En E1 (jueves 7:40), con La Paz LLENA en pantalla, U1 elige La Paz
igual: "A esta hora siempre hay lugar en La Paz". La app mostraba la información correcta para el
escenario y U1 la leyó, pero le creyó más a su experiencia del horario. Además, al final dijo
"Nada, podría usarla así como está": lo que dice no coincide con lo que hace.

Esperábamos que el riesgo estuviera en entender el semáforo, y estuvo en creerle. Apoyado en
U2 ("¿Y esto es ahora, en vivo?") y U3 ("No entiendo de dónde salen los datos"), muestra que la
hipótesis depende de un supuesto que no habíamos escrito: que el usuario confíe en el dato.

**Qué hicimos con él:**
- Cambiamos la gran visión: el dato sale de los lectores de TelePase, con la ocupación estimada
  a partir de las entradas y salidas de cada playa, en lugar de cámaras y una API de la
  universidad (ver [brief](../brief.md#integraciones-previstas-gran-visión-actualizada-en-el-tp5)).
- La confianza pasa a ser un supuesto explícito del brief, con TelePase como forma de atacarla.
- Lo próximo a construir es la tendencia por horario, que le da al usuario un dato con el cual
  comparar lo que cree saber del horario.

## 10. La métrica que podría estar mintiendo

**M1, la redirección por el dato.** Da 2 de 3 y cumple el criterio, pero puede estar
tranquilizándonos sin que la hipótesis sea cierta:

- **Seguir el dato no costaba nada.** En la sesión la situación es contada y no hay consecuencia
  por equivocarse. En la calle, ir a La Paz por la app y no encontrar lugar cuesta tiempo real, y
  U2 lo anticipa: "si me dice libre y llego y no hay lugar es lo mismo que nada".
- **El dato nunca falló durante la prueba.** Cada escenario era coherente por construcción, así
  que M1 no midió qué pasa con la confianza después del primer error. U3, cuando usó la app por
  su cuenta al mediodía, la encontró equivocada.
- **La confianza ya era frágil.** U1 no siguió el dato, y U2 y U3 lo siguieron pero dijeron que
  desconfían. Con tres usuarios, que uno más no le crea basta para que M1 pase de 2 a 1 y la
  hipótesis se refute.

M2 no tiene el mismo problema: mide si se entiende la pantalla, y eso no depende de que el dato
sea real.

Para que M1 diga algo sobre la hipótesis, la próxima medición tiene que hacerse con uso real y
repetido (dato de TelePase, varios días): si los usuarios siguen redirigiendo después de que el
dato les falle alguna vez.
