const mobileMenu = document.querySelector('#menuIcon');
const mainNav = document.querySelector('.mainNav');
const menuClose = document.querySelector('#menuClose');

mobileMenu.addEventListener('click', e => {
    mainNav.style.display = 'block';
    mobileMenu.style.display = 'none';
    menuClose.style.display = 'block';
});

menuClose.addEventListener('click', e => {
    mainNav.style.display = 'none';
    mobileMenu.style.display = 'block';
    menuClose.style.display = 'none';
});
