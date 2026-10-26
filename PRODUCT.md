# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML/CSS/JS plano, sin framework ni paso de build (decisión del equipo, 26/10/2026). Se publica
con GitHub Actions en GitHub Pages. Se trabaja local primero.

## Users

Estudiantes de la UNLaM que van en auto propio a cursar en horario pico (U1 turno mañana, U2 cinco
días por semana, U3 turno noche ~18:30). Usan la app en el celular, en las últimas cuadras antes
de la facultad o en la fila de acceso, al volante o detenidos, apurados y bajo estrés. Su trabajo:
decidir en segundos a qué playa ir, Perón o La Paz, antes de encolarse.

## Product Purpose

SPOTTER muestra la ocupación en tiempo real de cada playa por separado para que el estudiante
elija destino antes de perder 10 a 30 minutos en una fila que termina sin lugar. El MVP existe
para probar una hipótesis: que esa información cambia la decisión del usuario. El éxito se mide
con los criterios de `docs/evaluacion/tp5-metricas.md`.

## Positioning

La app informa y no recomienda: muestra el estado de las dos playas con el mismo peso y el
usuario decide. El dato es por playa, no agregado.

## Operating Context

- Celular en soporte o en una mano, mirada de uno o dos segundos entre maniobras.
- Señal 4G mala o saturada justo en la zona de uso (U1, U3): el dato puede quedar viejo.
- La Paz cierra los sábados; CERRADA no es lo mismo que LLENO.
- Sesiones de prueba moderadas: el moderador fuerza un escenario por URL (`?e=E1&u=U3`); sin
  parámetros la app muestra los datos simulados del día y la hora actuales. En pantalla no hay
  nada que delate la prueba.

## Capabilities and Constraints

- Incluido: mapa con las dos playas, detalle de playa con su consecuencia práctica, estado sin
  conexión / dato viejo (no bloqueante), sábado con La Paz cerrada.
- Niveles: LLENO, MEDIO, LIBRE, CERRADA. Consecuencia de MEDIO: "Hay lugar disponible, pero
  podrías esperar unos minutos para ingresar".
- Correcciones del TP4 que entran: semáforo de color + trama + etiqueta (triple redundancia);
  leyenda única en todas las pantallas; en el detalle sólo el botón hacia la otra playa; indicador
  de actualización y refresco manual en todas las pantallas; header único (identidad + contexto
  + antigüedad del dato) con retroceso en posición constante.
- Excluido: login, onboarding, reserva o bloqueo de lugar, notificaciones, motos y bicicletas,
  plazas individuales, playa favorita, sección de ayuda.
- Datos simulados (hardcodeados por horario); no hay sensores ni backend.
- Sin cifras de lugares, distancias ni tiempos: el dato simulado no las sostiene.

## Brand Commitments

- Nombre: SPOTTER. No hay logo, paleta ni tipografía propios.
- Pedido del equipo: tomar como referencia el estilo de la página institucional de la UNLaM y su
  logo. **Abierto:** SPOTTER no es una app oficial de la universidad; mostrar el logo puede hacer
  que los usuarios de la prueba la lean como oficial y confíen más en el dato.

## Evidence on Hand

- Encuesta TP2: `docs/evidencia/tp2/encuesta-respuestas.md`.
- Wireframe final (baja fidelidad): `docs/diseno/wireframe/mvp.html`.
- Evaluación recibida y respuesta TP4: `docs/referencias/tp4a-informe-recibido.md`,
  `docs/referencias/tp4b-respuesta.md`.
- No hay datos reales de ocupación, distancias ni capacidades: no inventarlos.

## Product Principles

1. El dato primero: cero toques hasta ver el estado de las dos playas.
2. Legible de un vistazo, al volante, al sol y con daltonismo: nunca depender de un solo canal
   (color + trama + palabra).
3. Informar, no recomendar.
4. Degradar sin bloquear: con mala señal se muestra el último dato marcado como viejo, sin modales.
5. No prometer precisión que el sistema no tiene.

## Accessibility & Inclusion

Lectura en movimiento y con sol directo: contraste alto, etiquetas grandes, estado nunca
codificado sólo por color. Objetivos táctiles grandes para uso con una mano.
