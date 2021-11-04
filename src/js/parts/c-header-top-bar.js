export const initHeaderTopBar = () => {
    const topbarEl = document.querySelector('.c-header-top-bar');
    const closeButtonEl = document.querySelector('.c-header-top-bar__close');

    if (topbarEl && closeButtonEl) {
        closeButtonEl.addEventListener('click', () => {
            topbarEl.classList.add('c-header-top-bar--hidden');
        })
    }
}
