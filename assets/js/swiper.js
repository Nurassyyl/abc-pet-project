const swiperNews = new Swiper(".newsSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-news",
    clickable: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1
    },
    1020: {
      slidesPerView: 2,
      spaceBetween: 32,
    }
  }
});

const serticateSwiper = new Swiper(".serticateSwiper", {
  loop: true,
  breakpoints: {
    280: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1060: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1220: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const partnerSwiper = new Swiper(".partnerSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-partner",
    clickable: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1040: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1260: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
  }
});