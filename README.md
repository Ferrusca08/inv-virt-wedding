# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Acomodo de mesas (`#/mesas`)

La página `#/mesas` le muestra a cada invitado en qué mesa se sienta, usando el
mismo enlace personalizado (`?id=Nombre`) del resto de la invitación.

Los datos salen de la misma hoja de Google (`Invitados`) que ya alimenta el RSVP.
Para que funcione hay que **agregar una columna llamada `Mesa`** en esa hoja y
poner ahí el número de mesa de cada invitado (`7`, `Mesa 7` y `07` funcionan
igual; la celda vacía significa "sin asignar todavía").

- Las columnas se buscan por nombre de encabezado, no por posición, así que se
  pueden mover o insertar columnas sin romper nada.
- Alias aceptados para la columna: `Mesa`, `Mesa asignada`, `No. mesa`,
  `Número de mesa`, `Table`.
- Mientras la columna no exista o esté vacía, la página muestra un mensaje de
  "todavía estamos terminando el acomodo" en lugar de un error.
- El croquis (posición y forma de las 12 mesas, pista, barra, DJ y mesa de
  novios) vive en [`src/data/tables.js`](src/data/tables.js).
