const mobileMenu = document.querySelector('#menuIcon');
const mainNav = document.querySelector('.mainNav');

mobileMenu.addEventListener('click', () => {
    mainNav.classList.toggle('hidden');
 });
