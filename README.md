# Frisch — sitio web

Sitio de **frischbo.com**. Node + Express + EJS, sin base de datos.
Se despliega en Coolify con el `Dockerfile` incluido.

## Correr en local

```bash
npm install
npm run dev
```

Queda en `http://localhost:3000`.

## Estructura

```
server.js            configuracion del sitio y rutas
views/landing.ejs    la pagina principal (todas las secciones)
views/partials/      cabecera, pie y <head>
public/css/          estilos (la paleta esta arriba del archivo)
public/js/           menu movil
public/img/          imagenes
```

## Variables de entorno

Se configuran en Coolify, pestana *Environment Variables*. Ver `.env.example`.

| Variable | Para que sirve |
|---|---|
| `WHATSAPP_NUMBER` | Numero en formato internacional sin `+`. Si queda vacio, los botones de WhatsApp no aparecen. |
| `CONTACT_EMAIL` | Correo que se muestra en el pie y en el boton de contacto. |
| `CONTACT_LOCATION` | Ciudad y pais del pie. |
| `INSTAGRAM_URL` / `TIKTOK_URL` | Enlaces de redes. |

## Pendiente de reemplazar

Todo lo marcado como `PROVISIONAL` en el codigo es contenido de relleno y hay
que confirmarlo con la empresa:

- [ ] **Paleta de colores** — las variables al inicio de `public/css/estilos.css`.
- [ ] **Logo** — hoy es texto. Reemplazar en `views/partials/header.ejs`.
- [ ] **Favicon** — `public/img/favicon.svg`, hoy es un circulo generico.
- [ ] **Foto de producto del hero** — hoy es una lata dibujada en CSS
      (`.lata` en el CSS). Cambiar por una `<img>` real.
- [ ] **Los cuatro sabores** — nombres, descripciones y colores en
      `views/landing.ejs`, seccion `#productos`.
- [ ] **Textos de "La marca"** y las tres cifras.
- [ ] **Puntos de venta reales** en la seccion `#comprar`.
- [ ] **Numero de WhatsApp** — falta el dato.

## Despliegue

Coolify, proyecto `Frisch` / entorno `production`, con build por `Dockerfile`.
El contenedor expone el puerto `3000`.
