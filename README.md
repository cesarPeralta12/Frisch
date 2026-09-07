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

El diseno usa el material grafico oficial que paso el cliente: logotipo,
fotos de botella, patrones de cada sabor y fondo tropical. Los textos, los
canales de venta y el WhatsApp salen del Instagram oficial (@frischbo).

Las imagenes de `public/img/` estan reducidas y optimizadas para web; los
originales (algunos de 4000x6000 px) no van al repositorio.

### Tipografias

Se usa **Asap**, que es la tipografia de marca y esta en Google Fonts con
licencia libre, mas **Fredoka** para titulos por ser redondeada como el
logotipo.

Las otras fuentes que mando el cliente (MuseoSansRounded, Bebas Kai,
Big Jano) **no se incrustan a proposito**: venian en el paquete de imprenta,
y una licencia de impresion no cubre el uso como webfont.

### Video

El original (`Video frisch.mp4`, 31 MB) **no va al repositorio**, esta en el
`.gitignore`. Lo que se publica es `public/video/frisch.mp4`, recomprimido con
ffmpeg a CRF 20: mismo 848x480, 6,6 MB. La portada se saco del segundo 1,5.

Para regenerarlo si llega una version nueva:

```bash
ffmpeg -i "Video frisch.mp4" -c:v libx264 -crf 20 -preset slow -profile:v high   -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/video/frisch.mp4
```

Si algun dia el video se sube a YouTube, basta con poner `VIDEO_URL` en Coolify
con la URL de insercion y la pagina usa el iframe en vez del archivo propio.

### Pendiente

- [ ] **El video esta en 848x480**, que es resolucion baja. En pantallas
      grandes se ve blando. Si existe un master en mejor calidad, conviene
      pedirlo: el limite es el original, no la compresion.
- [ ] **Fotos de botella de Guayaba y Achachairu.** Solo hay de Chirimoya y
      Coco. Por eso las tarjetas de sabor son tipograficas, para que las
      cuatro se vean iguales.
- [ ] **Enlaces de compra** — falta el link directo de PedidosYa y el de la
      app propia que promocionan en Instagram.
