
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
