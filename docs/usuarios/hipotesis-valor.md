---
type: Concepto
title: Hipótesis de valor — TP2
description: Hipótesis de valor formulada a partir del relevamiento de estudiantes con auto en el TP2.
tags: [tp2, hipotesis]
status: stable
sources:
  - id: perfil-usuario
    resource: /docs/usuarios/perfil-usuario.md
    title: Perfil de usuario — TP2
  - id: supuestos-confrontacion
    resource: /docs/usuarios/supuestos-confrontacion.md
    title: Confrontación de supuestos TP1 vs. TP2
---

# Hipótesis de valor

**Creemos que** los estudiantes de la UNLaM que se trasladan en auto propio y cursan en horarios
de alta demanda (turno mañana o noche, según los perfiles relevados)

**tienen el problema de** no saber, antes de encolarse o de recorrer las últimas cuadras, si alguna
de las dos playas de estacionamiento (Perón o La Paz) tiene lugar disponible — lo que puede
generar demoras de hasta 30 minutos, llegadas tarde a clase o a instancias de evaluación y, en
los casos más extremos optar por estacionar de forma indebida en la calle.

**Nuestra solución es** SPOTTER, una aplicación que muestra el nivel de ocupación en tiempo real
de cada playa de estacionamiento por separado (no un dato agregado), permite bloquear un lugar por
unos minutos mientras el usuario se aproxima, y envía notificaciones ajustadas al horario de
cursada de cada estudiante.

**Sabremos que estamos en lo correcto cuando**, al validar el prototipo con este mismo grupo de
usuarios (U1, U2, U3) en el TP5, al menos 2 de los 3 reporten haber elegido a qué playa dirigirse
a partir de la información de ocupación en tiempo real de la app —evitando entrar a una playa
llena—, y ninguno reporte haber necesitado reservar su lugar con más de unos pocos minutos de
anticipación.

## Trazabilidad

- Usuario concreto → perfiles de U1, U2, U3 en [`perfil-usuario.md`](perfil-usuario.md).
- Problema real → citas de U1 ("hago la fila... me quedo sin lugar"), U2 ("casi 20 min esperando",
  "termino llegando 10/15 min tarde") y U3 ("llegar y no encontrar lugar... en el estacionamiento
  más cercano") en
  [`docs/evidencia/tp2/encuesta-respuestas.md`](../evidencia/tp2/encuesta-respuestas.md).
- Solución ajustada → refutación (parcial) del supuesto crítico de reserva anticipada, ver
  [`supuestos-confrontacion.md`](supuestos-confrontacion.md): la app se orienta a tiempo real +
  bloqueo corto, no a reserva por franja horaria con antelación.
- Evidencia medible → deriva directamente de las necesidades relevadas en las preguntas 8 y 9
  del cuestionario (información de ocupación antes de llegar, para decidir a qué playa dirigirse).
