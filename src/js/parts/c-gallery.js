/*
    Lightbox gallery with lightgallery.js
*/
import 'lightgallery.js';
import 'lg-fullscreen.js';

const galleryItems = document.querySelectorAll('.js-lightbox');

for (let item of Array.from(galleryItems)) {
    lightGallery(item, {
            mode: 'lg-slide',
            cssEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            // easing: 'easeInOutQuart',
            speed: 600,
            hideControlOnEnd: true,
            loop: true,
            counter: false,
            download: false,
            fullScreen: true,
            slideEndAnimatoin: false,
            subHtmlSelectorRelative: true,
            selector: 'a',
            getCaptionFromTitleOrAlt: true
        });
}
