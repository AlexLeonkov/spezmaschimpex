let heroSwiper = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});




let partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    // watchSlidesProgress: true,
    // autoplay: {
    //     delay: 4000,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
            watchSlidesProgress: false,
        },
        575: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 6,
        },
        1199: {
            slidesPerView: 6,
            watchSlidesProgress: true,
        },
    }
});



let offerSwiper = new Swiper(".offers-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    watchSlidesProgress: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  
});

let reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1.5,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    }
});

let gallerySwiper = new Swiper(".gallery-swiper", {
    slidesPerView: 3,
    grid: {
        rows: 2,
        fill: 'row',
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1.5,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    }
});

let blogSwiper = new Swiper(".blog-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1.5,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    }
});
