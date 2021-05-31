const mobileMenuToggle = document.querySelector('.region-we-mega-menu .navbar-toggle');
const mobileMenu = document.querySelector('.navbar-we-mega-menu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('menu-opened');
    })
}
