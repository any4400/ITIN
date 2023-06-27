$(document).ready(function () {
  const slider = document.querySelector('.banner-slider');

  if (window.innerWidth > 1200) {
    slider.classList.add('swiper-no-swiping');
  }

  let swiper = new Swiper(".mySwiper", {

    direction: 'horizontal',
    spaceBetween: 20,
    width: 250,
    height: 0,

  });
});
