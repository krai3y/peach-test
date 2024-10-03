import "../scss/style.scss";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const swiper = new Swiper('.gallerySwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});