// Frisch - servidor web (Express)
// Sirve la landing estatica del sitio. No usa base de datos.
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Configuracion del negocio (editable por variables de entorno) ----
// Todo lo que un dia pueda cambiar el cliente vive aca, no en las vistas.
const site = {
  name: 'Frisch',
  tagline: 'Bebida gaseosa sin azucar',
  // WhatsApp en formato internacional SIN el signo +. Si se deja vacio,
  // el boton de WhatsApp no se muestra.
  whatsapp: process.env.WHATSAPP_NUMBER === undefined ? '59177808029' : process.env.WHATSAPP_NUMBER.trim(),
  email: process.env.CONTACT_EMAIL || 'info@frischbo.com',
  location: process.env.CONTACT_LOCATION || 'La Paz - Bolivia',
  instagram: process.env.INSTAGRAM_URL || 'https://www.instagram.com/frischbo/',
  tiktok: process.env.TIKTOK_URL || 'https://www.tiktok.com/@frischbo',
  year: new Date().getFullYear(),
};

// ---- Middlewares ----
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

// Hace disponible "site" en todas las vistas
app.use((req, res, next) => {
  res.locals.site = site;
  next();
});

// ---- Rutas ----
app.get('/', (req, res) => {
  res.render('landing');
});

// Chequeo de salud para Coolify. Responde sin renderizar nada.
app.get('/salud', (req, res) => {
  res.json({ ok: true });
});

// 404 al final de todo
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frisch escuchando en el puerto ${PORT}`);
});
