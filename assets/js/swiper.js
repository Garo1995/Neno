
const swiper = new Swiper('.indispensable-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.indispensable-pagination',
        clickable: true,

    },

    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 10

        },
        1200: {
            slidesPerView: 3,
        },
    }


});



let generatorSwiper = new Swiper(".music-generate-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // autoplay:true,
    initialSlide: 3,

    coverflowEffect: {
        rotate: 0,
        stretch: -30,
        depth: 100,
        modifier: 1,
        // slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: { slidesPerView: 2.1, spaceBetween: -20 ,  },
        400: { slidesPerView: 2 ,   },
        460: { slidesPerView: 2 },
        540: { slidesPerView: 2 , },
        576: { slidesPerView: 3 },
        600: { slidesPerView: 3 },
        700: { slidesPerView: 3 ,stretch: 0,},
        800: { slidesPerView: 4 },
        855: { slidesPerView: 4 },
        1027: { slidesPerView: 4 },
        1200: { slidesPerView: 4 },
    },


});




