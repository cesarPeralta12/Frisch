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

## Contenido

Los datos de marca salen del Instagram oficial (@frischbo): eslogan, los tres
sabores (guayaba, cocoloco, chirimoya), el WhatsApp y los canales de venta
(Hipermaxi, PedidosYa, Market Tu Super).

### Pendiente de reemplazar

Lo marcado como `PROVISIONAL` en el codigo sigue sin confirmar:

- [ ] **Paleta de colores** — las variables al inicio de `public/css/estilos.css`.
      Hoy es un verde/lima generico, no el de la marca.
- [ ] **Color de cada sabor** — el `--tono` de cada tarjeta en `#productos`
      es una interpretacion de "tres colores para celebrar Bolivia".
      Confirmar contra las latas reales.
- [ ] **Logo** — hoy es texto. Reemplazar en `views/partials/header.ejs`.
- [ ] **Favicon** — `public/img/favicon.svg`, hoy es un circulo generico.
- [ ] **Fotos de producto** — el hero usa una lata dibujada en CSS (`.lata`) y
      las tarjetas de sabor usan un degradado con el nombre encima.
- [ ] **Enlaces de compra** — falta el link directo de PedidosYa y el de la
      app propia que promocionan en Instagram.
- [ ] **Descripciones de los sabores** — escritas por aproximacion, conviene
      que las valide la empresa.

## Despliegue

Coolify, proyecto `Frisch` / entorno `production`, con build por `Dockerfile`.
El contenedor expone el puerto `3000`.
