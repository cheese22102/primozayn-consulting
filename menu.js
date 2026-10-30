/* Menu mobile : bouton qui affiche ou masque la navigation sur petit écran. Sans JavaScript, le menu reste visible. */
(function () {
  var btn = document.querySelector('.menu-btn');
  var list = document.getElementById('menu-principal');
  if (!btn || !list) return;
  document.documentElement.classList.add('js-menu');
  btn.hidden = false;
  function set(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Fermer' : 'Menu';
    list.classList.toggle('is-open', open);
  }
  btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
  list.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { set(false); btn.focus(); }
  });
})();
