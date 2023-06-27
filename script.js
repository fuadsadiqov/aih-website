const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileNav = document.getElementById('mobileNav');
const navList = document.getElementById('mobileList');
const wholePage = document.getElementById('mainPage');
const banner = document.getElementById('banner');

hamburgerMenu.addEventListener('click', () => {
  const isNavVisible = mobileNav.style.display === 'flex';

  hamburgerMenu.classList.toggle('open')
  mobileNav.style.display = isNavVisible ? 'none' : 'flex';
  navList.style.display = isNavVisible ? 'none' : 'flex';
  banner.style.display = isNavVisible ? 'flex' : 'none';
  wholePage.style.display = isNavVisible ? 'block' : 'none';
}); 