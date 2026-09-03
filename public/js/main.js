// Menu de navegacion en pantallas chicas.
(function () {
  const boton = document.querySelector('.menu-boton');
  const menu = document.querySelector('.menu');
  if (!boton || !menu) return;

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
})();
