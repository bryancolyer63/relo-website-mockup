const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.classList.toggle('is-open');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
    });
  });
}
