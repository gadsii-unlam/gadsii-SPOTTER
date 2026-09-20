# Registro de trabajo con IA

| Fecha | Herramienta y versión | Prompt (resumen) | TP |
|---|---|---|---|
| 19/08/2026 | Gemini | Explorar ideas para dimensionar y acotar el segmento de la comunidad UNLaM, estimar el tamaño del público mediante un cálculo deductivo. | TP1 |
| 26/08/2026 | Claude | Organizar la estructura del texto y mejorar la fluidez de la redacción para acotar la cantidad de páginas. | TP1 |
| 27/08/2026 | Gemini | Refinamiento del cuestionario de preguntas abiertas y consulta sobre la cobertura total de los puntos del trabajo. Refinamiento de vocabulario para que las preguntas no induzcan respuestas. | TP2 |
| 31/08/2026 | Claude | A partir de las respuestas ya cargadas de la encuesta a U1, U2 y U3, estructurar el perfil de usuario, completar la tabla de confrontación de supuestos (incluyendo el supuesto crítico, faltante en el borrador), redactar la hipótesis de valor, actualizar `docs/brief.md` a versión 2 y completar las secciones 3, 4 y 5 de `TP2-SPOTTER.md`. Cada hallazgo se sostiene en una respuesta de la encuesta; no se generaron necesidades ni frustraciones no relevadas. | TP2 |
| 07/09/2026 | Claude | Generación de tres alternativas estructurales de wireframes de baja fidelidad en un único HTML navegable para el MVP de SPOTTER. Se solicitó priorizar eficiencia (Alt A), prevención de errores (Alt B) y facilidad de aprendizaje (Alt C) basándose en el brief v3, definiendo las pantallas clave (mapa, detalle, error de conexión) y pidiendo anotaciones que fundamenten las decisiones. (ver anexo para el detalle completo) | TP3 |



## Anexo: Prompts Completos TP3

**Fecha:** 07/09/2026
**Herramienta:** Claude

**Prompt enviado:**
> Necesito WIREFRAMES DE BAJA FIDELIDAD para el MVP de una app llamada SPOTTER.
> Entregable: un único archivo HTML navegable.
> 
> BAJA FIDELIDAD SIGNIFICA: cajas grises, bordes simples, tipografía del sistema, texto placeholder. Sin paleta de marca, sin imágenes, sin íconos decorativos, sin sombras ni gradientes. El foco es la estructura y el flujo, no el aspecto.
> Los tres niveles de ocupación se representan con ETIQUETA DE TEXTO y trama o tono de gris (ej. "LLENO" con trama densa, "MEDIO", "LIBRE"), NO con verde / amarillo / rojo.
> 
> CONTEXTO
> La UNLaM tiene dos playas de estacionamiento: Perón (cerca de las aulas, se llena primero) y La Paz (lejos, casi siempre hay lugar, cierra los sábados). Los estudiantes que van en auto pierden entre 10 y 30 minutos: hacen fila para entrar a Perón sin saber si hay cupo, y si no hay, salen y van a La Paz habiendo perdido todo ese tiempo.
> 
> USUARIO
> Estudiantes que van en auto 4-5 veces por semana. Usan la app al volante, en el tramo final del trayecto, con poco margen de tiempo y bajo estrés. Alta adopción tecnológica. Dos de tres reportan señal 4G deficiente justo en los alrededores de la facultad.
> 
> MVP (esto y nada más)
> Consultar la ocupación en tiempo real de cada playa por separado, para decidir a cuál ir ANTES de encolarse. La representación es un mapa de calor que muestra las dos playas.
> 
> FUERA DE SCOPE no los dibujes:
> - Login o registro (la app abre directamente en el dato)
> - Reserva anticipada por franjas horarias
> - Bloqueo temporal de lugar
> - Notificaciones o configuración de calendario académico
> - Motos y bicicletas
> - Detalle de plazas individuales dentro de la playa
> 
> QUÉ NECESITO
> Tres alternativas estructurales distintas para el MISMO flujo, cada una privilegiando un atributo de usabilidad diferente:
> 
> - ALTERNATIVA A - EFICIENCIA: cero clics hasta el dato. La app abre directamente en el mapa de calor con las dos playas visibles a la vez. Sin menús previos, sin pantalla de bienvenida, sin leyendas extensas. Máxima densidad de información en la primera pantalla.
> - ALTERNATIVA B - PREVENCIÓN DE ERRORES: prioriza que el usuario no interprete mal el estado. Si una playa está llena, el mapa le quita peso visual a ese sector y aparece una alerta explícita que el usuario debe reconocer con un botón antes de seguir. Muestra siempre cuán reciente es el dato y advierte cuando está desactualizado.
> - ALTERNATIVA C - FACILIDAD DE APRENDIZAJE: más pasos, cada uno evidente. Incluye una pantalla de onboarding que explica qué significa cada nivel de ocupación, rótulos explicativos permanentes y una leyenda visible del mapa.
> 
> Cada alternativa debe tener MÍNIMO 3 pantallas conectadas y navegables entre sí, con links que funcionen dentro del HTML. Como base para cada una:
> 1. Pantalla principal con el mapa de calor de Perón y La Paz
> 2. Detalle de una playa
> 3. Estado de dato desactualizado o sin conexión (crítico: el 4G falla justo en la zona donde se usa la app)
> 
> Cada pantalla muestra la marca de tiempo del último dato disponible.
> 
> ANOTACIONES
> Cada pantalla lleva anotaciones visibles al costado o debajo, explicando las decisiones de diseño de esa alternativa: qué prioriza, qué resigna y por qué.
> 
> ESTRUCTURA DEL ARCHIVO
> Un HTML con las tres alternativas separadas y claramente rotuladas (A, B, C), cada una con su flujo navegable interno. Sin dependencias externas ni CDNS todo el CSS en un <style>.
