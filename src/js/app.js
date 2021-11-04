import { initGallery } from './parts/c-gallery.js';
import { initCarousel } from './parts/c-carousel.js';
import { initSlideshow } from './parts/slideshow.js';
import { initHeaderTopBar } from './parts/c-header-top-bar.js';
import { initResponsiveNav } from './parts/uikit-responsive-nav.js';
import { responsiveTables } from './parts/responsiveTables.js';
import { sendGaEvents } from './parts/analyticsEventsTracking.js';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);



/*
    https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    - The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
    without waiting for stylesheets, images, and subframes to finish loading.
    - A different event, load, should be used only to detect a fully-loaded page.

    https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
    - loading: The document is still loading.
    - interactive: The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading.
    - completeThe document and all sub-resources have finished loading. The state indicates that the load event is about to fire.
*/
function doOnDocumentLoaded () {
    initGallery();
    initCarousel();
    initSlideshow();
    initHeaderTopBar();
    initResponsiveNav();
    responsiveTables();
    //setTimeout(sendGaEvents, 2500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        doOnDocumentLoaded()
    });
} else {
    doOnDocumentLoaded();
}
