import Swiper, { Navigation, EffectFade } from 'swiper';
Swiper.use([Navigation, EffectFade]);



export const initSlideshow = () => {
    const swiperEls = document.querySelectorAll('.js-slideshow');
    for (const item of Array.from(swiperEls)) {
        const swiper = new Swiper(item, {
            speed: 900,
            loop: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }

    /*
      Slideshows, fade
    */
    const swiperElsFade = document.querySelectorAll('.js-slideshow--fade');
    for (const item of Array.from(swiperElsFade)) {
        const swiper = new Swiper(item, {
            speed: 600,
            loop: true,
            effect: 'fade',

        // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }
}
