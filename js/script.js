'use strict';
//Mobile menu
const mobileMenuBut = document.getElementById('mobile-menu-but');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuBut = document.getElementById('mobile-menu__close');

//Opening
mobileMenuBut.onclick = function (event) {
    event.stopPropagation();
    mobileMenu.style.right = 0;
};

//closing
closeMobileMenuBut.onclick = function () {
    mobileMenu.style.right = '-655px';
};

window.addEventListener('click', function () {
    mobileMenu.style.right = '-655px';
});