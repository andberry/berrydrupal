import { breakpoints as bp } from '../settings.js';
import { animateFadeIn } from './animations.js';

const IntersectionObserverOptions = {
    rootMargin: '0px 0px -25% 0px',
    threshold: 0
}


// Animate only from lg breakpoint
if (window.innerWidth >= bp.lg) {
  /*
    Cycle all sections with animation class and get:
    - intersection observer
    - animation function to be started when intersecting
  */
  const animSections = document.querySelectorAll('.has-anim-fade-in')
  for (const section of animSections) {
    const animation = animateFadeIn(section);
    let animationDone = false; // we want animation to be done only once

    const IObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (!animationDone) {
              animation.restart();
              animationDone = true;
            }
          }
        }
      },

      IntersectionObserverOptions
    );

    IObserver.observe(section);
  }
}
