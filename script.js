const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const portraitImage = document.querySelector('.portrait__image');
const portraitFallback = document.querySelector('.portrait__fallback');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Ouvrir le menu');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

function showPortrait() {
  portraitImage.hidden = false;
  portraitFallback.hidden = true;
}

portraitImage.addEventListener('load', showPortrait);
if (portraitImage.complete && portraitImage.naturalWidth > 0) showPortrait();

document.querySelector('#year').textContent = String(new Date().getFullYear());