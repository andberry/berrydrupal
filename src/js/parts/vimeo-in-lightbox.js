/*
    Vimeo video in lightbox with lightgallery
*/
import 'lightgallery.js';
import 'lg-video.js';

const lightboxVideoItems = document.querySelectorAll('.js-video-lightbox[href*="vimeo"]');

for (let item of Array.from(lightboxVideoItems)) {
    lightGallery(item, {
            mode: 'lg-slide',
            cssEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            // easing: 'easeInOutQuart',
            speed: 600,
            hideControlOnEnd: true,
            counter: false,
            download: false,
            fullScreen: false,
            actualSize: false,
            slideEndAnimatoin: false,
            videoMaxWidth: '80%',
            selector: 'this',
            vimeoPlayerParams: {
                autoplay: true,
                controls: true,
                loop: false,
                muted: false,
                portrait: true,
                responsive: true,
                title: true,
                dnt: true
            },
        });
}
