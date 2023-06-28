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

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    // When window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // When window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30
    }
    // Add more breakpoints as needed
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
