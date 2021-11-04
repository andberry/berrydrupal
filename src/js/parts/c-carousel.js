import { breakpoints as bp } from '../settings.js';
import Swiper, { Navigation, EffectFade, Pagination } from 'swiper/core';
Swiper.use([Navigation, EffectFade, Pagination]);

export const initCarousel = () => {
    const carouselEls = document.querySelectorAll('.js-carousel .swiper-container');

    for (const item of Array.from(carouselEls)) {
        if (window.innerWidth >= bp.lg) {
            const swiper = new Swiper(item, {
                direction: 'horizontal',
                loop: false,
                speed: 800,
                slidesPerView: 3,
                spaceBetween: 15,
                slidesPerGroup: 3,

                // Navigation arrows
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },

                pagination: {
                    el: item.closest('.js-carousel').querySelector('.swiper-pagination'),
                    clickable: true
                }
            });
        } else {
            const swiper = new Swiper(item, {
                direction: 'horizontal',
                loop: false,
                speed: 800,
                // slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
                slidesPerView: 2,

                pagination: {
                    el: item.closest('.js-carousel').querySelector('.swiper-pagination'),
                    clickable: true
                },

                freeMode: true,
                freeModeSticky: true,
            });
        }
    }
}
