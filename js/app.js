const mobileMenu = document.querySelector('#menuIcon');
const mainNav = document.querySelector('.mainNav');
const menuClose = document.querySelector('#menuClose');

mobileMenu.addEventListener('click', e => {
    window.onresize = function() {
        if (window.innerWidth > 768) {
          menuIcon.style.display = 'none';
        } else {
          menuIcon.style.display = 'block';
        }
      }

    mainNav.style.display = 'block';
    mobileMenu.style.display = 'none';
    menuClose.style.display = 'block';
});

menuClose.addEventListener('click', e => {

    mainNav.style.display = 'none';
    mobileMenu.style.display = 'block';
    menuClose.style.display = 'none';
});
