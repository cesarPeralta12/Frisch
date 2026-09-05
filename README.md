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

### Pendiente

- [ ] **Video** — la seccion existe pero solo aparece si se configura la
      variable `VIDEO_URL` en Coolify, con la URL de insercion (embed).
      El cliente mando los graficos de "MIRA EL VIDEO" pero ningun video.
- [ ] **Guayaba** — el Instagram menciona ese sabor, pero en el material
      no hay ni una imagen. La web muestra solo Chirimoya y Coco Loco.
      Confirmar si existe y pedir la foto.
- [ ] **Enlaces de compra** — falta el link directo de PedidosYa y el de la
      app propia que promocionan en Instagram.
- [ ] **Descripciones de los sabores** — escritas por aproximacion, conviene
      que las valide la empresa.

## Despliegue

Coolify, proyecto `Frisch` / entorno `production`, con build por `Dockerfile`.
El contenedor expone el puerto `3000`.
