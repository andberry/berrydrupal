import { breakpoints as bp } from '../settings.js';

export const initResponsiveNav = () => {
    /*
        make responsive navigation with UIkit:
         - by default markup in Drupal mene template has mobile offcanvas attributes/classes in place
         - if viewport is desktop switch to navbar with dropdown
    */
    if (window.innerWidth >= bp.lg) {
        // const rNavContEl = document.querySelector('.js-responsive-nav-container');
        // const offcanvasBarEl = rNavContEl.querySelector('.uk-offcanvas-bar');
        const rNavEl = document.querySelector('.js-responsive-nav');
        const menuEl = rNavEl.querySelector('.menu');
        const dropdownFistEls = rNavEl.querySelectorAll('.menu__sub-container');
        const dropdownOthersEls = rNavEl.querySelectorAll('.menu__sub-container-others');
        const submenuEls = rNavEl.querySelectorAll('.menu__sub');

        if (rNavContEl && rNavEl) {
            // rNavContEl.removeAttribute('uk-offcanvas');
            // rNavContEl.classList.remove('uk-offcanvas')
            // offcanvasBarEl.classList.remove('uk-offcanvas-bar');

            // remove dropdown for mobile
            rNavEl.removeAttribute('uk-dropdown');
            rNavEl.classList.remove('uk-dropdown');

            // add navbar dropdown for desktop
            rNavEl.setAttribute('uk-navbar', true);
            rNavEl.classList.add('uk-navbar-container');

            // remove accordion for mobile
            menuEl.classList.remove('uk-nav', 'uk-nav-default');
            menuEl.classList.add('uk-navbar-nav');
            menuEl.removeAttribute('uk-nav');

            for (let item of Array.from(dropdownFistEls)) {
                item.setAttribute('uk-dropdown', 'pos: bottom-left;');
                item.classList.add('uk-navbar-dropdown');

                // remove dropdown for mobile
                item.classList.remove('uk-nav-sub');
            }

            for (let item of Array.from(dropdownOthersEls)) {
                item.setAttribute('uk-dropdown', 'pos: right-top;');
                item.classList.add('uk-navbar-dropdown');

                // remove dropdown for mobile
                item.classList.remove('uk-nav-sub');
            }

            for (let item of Array.from(submenuEls)) {
                item.classList.add('uk-nav', 'uk-navbar-dropdown-nav');

            }


        }
    }

}
