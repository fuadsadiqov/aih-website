let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
      1300: {
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
    on: {
      init: function () {
        document.querySelector('.swiper-wrapper').style.backgroundColor =
          '#FFF';
      },
    },
  });