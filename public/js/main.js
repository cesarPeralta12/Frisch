// Frisch - comportamiento de la interfaz.
// Todo lo decorativo se desactiva si el sistema pide menos movimiento.
(function () {
  const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Menu en pantallas chicas ----
  const boton = document.querySelector('.menu-boton');
  const menu = document.querySelector('.menu');
  if (boton && menu) {
    boton.addEventListener('click', () => {
      const abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', String(abierto));
    });

    // Al tocar un enlace se cierra, si no queda tapando la pagina.
    menu.addEventListener('click', (evento) => {
      if (evento.target.tagName !== 'A') return;
      menu.classList.remove('abierto');
      boton.setAttribute('aria-expanded', 'false');
    });
  }

  // ---- Barra de progreso y cabecera compacta ----
  // Se agrupan en un solo listener de scroll para no hacer dos calculos.
  const progreso = document.querySelector('.progreso');
  const cabecera = document.querySelector('.cabecera');
  let pendiente = false;

  function alDesplazar() {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(() => {
      const alto = document.documentElement.scrollHeight - window.innerHeight;
      if (progreso) {
        progreso.style.transform = `scaleX(${alto > 0 ? window.scrollY / alto : 0})`;
      }
      if (cabecera) {
        cabecera.classList.toggle('compacta', window.scrollY > 40);
      }
      pendiente = false;
    });
  }

  window.addEventListener('scroll', alDesplazar, { passive: true });
  alDesplazar();

  // ---- Aparicion de los bloques al hacer scroll ----
  const aRevelar = document.querySelectorAll('.revelar');

  if (menosMovimiento || !('IntersectionObserver' in window)) {
    // Sin animacion: se muestran de una y no se observa nada.
    aRevelar.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  aRevelar.forEach((el) => observador.observe(el));
})();
