// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';

new Swiper('.hero', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
});

new Swiper('.programs__swiper-container', {
  modules: [ Navigation, Scrollbar ],
  navigation: {
    nextEl: '.slider-button--right',
    prevEl: '.slider-button--left'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  // allowTouchMove: false,
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: -16,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    }
  },
  slidesPerGroup: 1
});

new Swiper('.reviews__swiper-container', {
  modules: [ Navigation, Scrollbar ],
  navigation: {
    nextEl: '.slider-button--right',
    prevEl: '.slider-button--left'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 457,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    }
  },
  slidesPerGroup: 1
});
