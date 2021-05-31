import { gsap } from 'gsap';
import { breakpoints as bp } from '../settings.js';



/*
  Set some GSAP defaults
*/
gsap.defaults({
    duration: 1.2,
    ease: "power4.out"
});



/*
  fade in animation function
*/
export const animateFadeIn = (section) => {
    const fadeInEls = section.querySelectorAll('.has-anim-fade-in__item');
    const tl = gsap.timeline({ paused: true });
    tl.to(fadeInEls, { autoAlpha: 1, x: 0, stagger: 0.1 });

    return tl;
}



/*
  background zoom in animation
*/
export const animateBackgroundZoomIn = ( section ) => {
    const el = section.querySelector('.has-anim__item');
    gsap.to(el, { scale: 1.2, duration: 10, ease: "none" });
}
