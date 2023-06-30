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
// Responsive dropdown
function toggleDropdownOnClick() {
  const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
  dropdownItems.forEach(item => { 
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}
function toggleDropdownOnResize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    toggleDropdownOnClick();
  } else {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
      item.removeEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  }
}
toggleDropdownOnResize();
window.addEventListener('resize', toggleDropdownOnResize);
// Swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
// AOS
AOS.init();