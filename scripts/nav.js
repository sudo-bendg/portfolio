document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const overlay = document.getElementById('navOverlay');

  if (!menuBtn || !nav || !overlay) return;

  function openNav() {
    nav.classList.add('open');
    overlay.classList.add('show');
    overlay.removeAttribute('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    const firstLink = nav.querySelector('a, button, [tabindex]');
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    nav.classList.remove('open');
    overlay.classList.remove('show');
    overlay.setAttribute('hidden', '');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
  }

  menuBtn.addEventListener('click', function () {
    const isOpen = nav.classList.contains('open');
    if (isOpen) closeNav(); else openNav();
  });

  overlay.addEventListener('click', function () {
    closeNav();
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
    }
  });

  nav.addEventListener('click', function (ev) {
    const target = ev.target;
    if (target && target.tagName === 'A' && window.matchMedia('(max-width: 700px)').matches) {
      closeNav();
    }
  });
});
