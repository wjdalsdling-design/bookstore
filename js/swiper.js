// #slider swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },
    pagination: {
        el: "#slider .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
});


//#new swiper

var newswiper = new Swiper(".newSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: "#new .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#new .swiper-button-next",
        prevEl: "#new .swiper-button-prev",
    },
    slidesPerGroup: 3
});