function toggleNav() {
    navBlock.classList.toggle('nav_visible');
}

var navButton = document.querySelector('.button_nav');
var navBlock = document.querySelector('.nav');
navButton.addEventListener('click', toggleNav);