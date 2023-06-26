const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileNav = document.getElementById('mobileNav');
const mobileList = document.getElementById('mobileList');
const wholePage = document.getElementById('mainPage');

hamburgerMenu.addEventListener('click', () => {
  const isNavVisible = mobileNav.style.display === 'flex';

  hamburgerMenu.classList.toggle('open')
  mobileNav.style.display = isNavVisible ? 'none' : 'flex';
  mobileList.style.display = isNavVisible ? 'none' : 'flex';
  wholePage.style.display = isNavVisible ? 'none' : 'block';
}); 