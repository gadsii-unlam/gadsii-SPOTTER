---
type: Referencia
title: "TP1 — Consigna: Definición del Producto y del Segmento"
description: Enunciado de la cátedra GADSII (UNLaM) para el TP1, transcripto a Markdown desde el PDF original con markitdown.
tags: [consigna, tp1]
generated:
  by: markitdown/0.0.2
  at: 2026-08-25T00:00:00Z
sources:
  - id: original
    resource: originales/tp1-consigna.pdf
    title: TP1-Definicion-del-Producto-y-Segmento.pdf
---

# TP1. Definición del Producto y del Segmento

El producto de todos los equipos es una **App de Comunidad UNLaM**: una solución a un problema
concreto de algún segmento de la comunidad universitaria.

Este trabajo es la base de todo el cuatrimestre. El segmento que elijan acá va a ser la fuente
de los usuarios que se analizan en el TP2, el destinatario del diseño en el TP3, quienes prueban
el MVP en el TP5, la fuente de las restricciones técnicas del TP6 y el objeto de diagnóstico de
la TPI. **No se cambia a mitad de camino**, así que conviene elegir con cuidado.

## 1. Conformar el equipo

- Definir los integrantes y elegir un nombre que los identifique durante todo el cuatrimestre.
- Registrar el equipo en MIEL, que es el canal oficial de entrega.
- Crear el repositorio del equipo dentro de la organización de la cátedra en GitHub, con la
  nomenclatura `gadsii-[nombreequipo]`, y un `README.md` inicial con el nombre del equipo, sus
  integrantes y una línea sobre el producto. El README se mantiene actualizado durante todo el
  cuatrimestre.

> El repositorio no es un requisito administrativo. Va a acumular todo el trabajo del
> cuatrimestre —documentos, decisiones, prototipos y el registro del trabajo con IA— y en
> octubre va a ser el material sobre el que se trabaja gestión de configuración: el TP7 se
> resuelve leyendo la propia historia del repositorio. Por eso conviene usarlo desde la primera
> semana y no dejarlo para después.

## 2. Elegir el segmento y comprobar el acceso

**Este punto se resuelve antes que todos los demás.**

El ámbito está dado —la comunidad UNLaM— así que no hay que salir a conseguirlo. Lo que sí hay
que hacer es acotarlo.

### El segmento

"La comunidad UNLaM" son decenas de miles de personas cuyos problemas no se parecen en nada. Un
estudiante de primer año que cursa a la mañana, uno de quinto que trabaja full time, un docente
de una cátedra numerosa, alguien del personal de biblioteca y un aspirante que todavía no
ingresó no necesitan el mismo producto ni de cerca.

**Cada equipo trabaja sobre un segmento distinto.** Se eligen en la primera clase, por orden, y
no se repiten entre equipos.

Definir:
- **Qué segmento** de la comunidad: quiénes son, cuántos son aproximadamente, y qué los
  distingue del resto.
- **Por qué ese** y no otro.

> Con quince equipos trabajando sobre el mismo dominio, el segmento es lo único que va a
> diferenciar un producto de otro. Dos equipos que elijan "estudiantes" a secas van a terminar
> construyendo la misma aplicación, y las dos van a ser genéricas. Cuanto más afilado el
> segmento, más específico el problema y más propio el producto.

### El acceso a los usuarios

Documentar:
- **Tres usuarios reales** de ese segmento, identificados como U1, U2 y U3, indicando para cada
  uno el rol, cómo llegaron a esa persona y qué relación previa tiene con el equipo.
- **Confirmación de disponibilidad** para dos instancias: el relevamiento del TP2, en la última
  semana de agosto, y la prueba del MVP del TP5, en la última semana de septiembre.

> Cada persona tiene que estar en esa lista porque pertenece al segmento y tiene el problema, no
> porque estaba a mano. Que sean conocidas no las descalifica — un compañero de cursada es un
> usuario perfectamente legítimo. Pero cuanto más cercana es la relación, más probable es que
> contesten lo que creen que el equipo quiere escuchar. Por eso se declara: no para descartar a
> nadie, sino para poder leer los resultados del TP2 sabiendo de dónde vienen.

> Que los usuarios estén en la facultad no significa que estén disponibles. Un docente en época
> de parciales, alguien del personal en ventanilla o un estudiante que cursa de noche y trabaja
> de día tienen agendas reales. Conviene coordinar las dos fechas ahora, no la semana que viene:
> en septiembre, conseguir otros usuarios significa rehacer también el relevamiento.

## 3. Definir el producto

El producto debe cumplir dos condiciones técnicas:
- Requerir al menos **un componente de software de desarrollo propio** — back-end, front-end, o
  ambos.
- Requerir al menos **una integración** con sistemas o datos externos: APIs, fuentes de datos,
  servicios de infraestructura, redes de sensores, dispositivos.

Responder:
1. ¿Cuál es el nombre del producto?
2. ¿Qué problema concreto resuelve, y a quién se lo resuelve?
3. ¿Cuáles son sus funcionalidades core — las 3 a 5 sin las cuales el producto no existiría?
4. ¿Qué integraciones tecnológicas requiere y por qué son necesarias?

## 4. Identificar los grupos de usuarios

- Listar los grupos de usuarios principales que tendrá el producto.
- Caracterizar brevemente cada uno: quiénes son, qué relación tienen con el problema, qué los
  motivaría a usarlo.
- **Seleccionar el grupo de usuarios primario** dentro del segmento elegido, que será el foco
  del análisis en el TP2, y justificar la elección.
- Verificar que las tres personas identificadas en el punto 2 pertenezcan a ese grupo primario.
  Si no es así, hay que conseguir otras ahora: son las que se relevan en el TP2 y las que
  prueban el MVP en el TP5.

> La selección del usuario primario es una decisión de diseño, y por ahora es una apuesta:
> todavía no hablaron con nadie. El TP2 va a decir si acertaron.

## 5. Los supuestos

Todo lo que escribieron hasta acá está construido sobre cosas que creen pero que todavía no
verificaron. Hacerlas explícitas es la única forma de poder comprobarlas después.

Listar entre cinco y ocho supuestos que el equipo está dando por ciertos, redactados en primera
persona y en forma afirmativa:

> "Asumimos que los socios del club no se enteran de los horarios de las clases."
> "Asumimos que la mayoría usa el celular y no la computadora."
> "Asumimos que hoy resuelven esto por WhatsApp y les resulta incómodo."

Un supuesto bien escrito se puede confirmar o refutar con evidencia. Para cada uno, indicar con
qué evidencia se comprobaría: si no se puede responder eso, todavía es una opinión y hay que
reformularlo.

Indicar además cuál de todos es el **supuesto crítico**: aquel que, si resultara falso, dejaría
al producto sin razón de ser.

## 6. Brief de Producto — versión 1

Consolidar todo lo anterior en `docs/brief.md` dentro del repositorio del equipo.

El brief es un **documento vivo**: nace en este trabajo práctico y se va a actualizar en cada TP
siguiente. Cada versión se commitea y **abre con un párrafo que declara qué cambió respecto de
la anterior y por qué**.

Contenido de la versión 1:
- Segmento elegido de la comunidad UNLaM y por qué ese.
- Producto: nombre, problema, a quién le resuelve.
- Funcionalidades core.
- Integraciones previstas.
- Grupos de usuarios y usuario primario elegido, con la aclaración de que todavía es hipotético.
- La lista de supuestos, con el supuesto crítico marcado.

## 7. Sobre el uso de IA en este trabajo

Pueden usar IA para explorar ideas de producto, ordenar el documento o revisar la redacción.

**No se delega:** la elección del segmento, la identificación de los usuarios reales, y la lista
de supuestos. Los supuestos son de ustedes — son lo que *ustedes* creen y todavía no saben. Una
lista generada por IA es una lista de supuestos plausibles en general, que es exactamente lo
contrario de lo que sirve acá.

Si usan IA, el intercambio se registra en `docs/prompts.md`, anotando en cada entrada **la fecha
y la herramienta y versión utilizadas**. Es el mismo registro que se va a auditar en el TP7 y que
alimenta la retrospectiva de la TPI, así que conviene arrancarlo bien desde la primera semana.

> Un dato para más adelante, no para ahora: en el TP5 van a construir el MVP con asistencia de
> IA, y ahí sí hace falta una herramienta con capacidad de agente de código. Claude Code no
> funciona con cuenta gratuita —requiere plan Pro o Max, o facturación por API—; la alternativa
> gratuita es Gemini CLI (cuenta de Google, sin tarjeta, 1000 solicitudes por día por cuenta). No
> hay que resolverlo esta semana, pero conviene saberlo desde ahora y no recién en octubre.

## 8. Formato de entrega

- **Fecha de entrega:** martes 25/08/2026.
- **Formato:** PDF, con el enlace al repositorio en la primera página.
- **Nombre del archivo:** `TP1-[NombreGrupo].pdf`
- **Extensión orientativa:** 2 a 3 páginas. El foco está en la precisión, no en la extensión.

### Material de lectura
- Clase 1 — Interacción humano-computadora, usabilidad y atributos.

*Versión 2 — Borrador para revisión con equipo docente. Agosto 2026.*
