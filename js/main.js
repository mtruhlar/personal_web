const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-link');

menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    menuButton.classList.toggle('open');
    menu.classList.toggle('open');
});

menuLinks.forEach((menuLink) => menuLink.addEventListener('click', function (e) {
    e.preventDefault();
    menuButton.classList.toggle('open');
    menu.classList.toggle('open');
}))
