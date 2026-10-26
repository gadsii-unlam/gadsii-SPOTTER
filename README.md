# SPOTTER

Integrantes: Berti Rodrigo, Fragassi Donatella, Mendez Lucas, Miro Agustín, Morandi Mayra

Producto: Aplicación para estudiantes de la UNLaM que asisten en auto, orientada a consultar en tiempo real la ocupación de las playas Perón y La Paz antes de llegar, con alertas configurables y un posible bloqueo corto durante la aproximación.

Segmento de la comunidad UNLaM: Miembros activos de la comunidad UNLaM (estudiantes de grado y posgrado, docentes, personal administrativo, de mantenimiento, limpieza y seguridad) de todos los turnos, que se trasladan a la universidad utilizando vehículos particulares (autos, motos o bicicletas) y necesitan gestionar con anticipación un espacio en el estacionamiento.

## MVP (TP5)

HTML/CSS/JS plano en `src/`, sin build. Para correrlo local (los módulos ES no cargan desde `file://`):

```sh
cd src && python -m http.server 8765
```

y abrir <http://127.0.0.1:8765/>. Tests del horario simulado y los escenarios: `node --test`.

**Versión genérica:** sin parámetros, muestra los datos simulados del día y la hora actuales.

**Escenarios del moderador:** los parámetros fuerzan el estado. La app los guarda en la pestaña y
los borra de la barra de direcciones, así el usuario no ve nada de la prueba. `?reset` vuelve a
la versión genérica.

| Parámetro | Valores | Ejemplo |
|---|---|---|
| `peron`, `lapaz` | `lleno`, `medio`, `libre`, `cerrada` | `?peron=lleno&lapaz=libre` |
| `dia` | `lunes` … `domingo` | `&dia=martes` |
| `hora` | `HH:MM` | `&hora=18:30` |
| `offline` | minutos de antigüedad del dato | `&offline=12` |

Lo que no se pasa sale del horario simulado de ese día y hora. Sistema de diseño en `DESIGN.md`
y `docs/diseno/design-system.html`.
