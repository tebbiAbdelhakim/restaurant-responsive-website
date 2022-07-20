window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    header.classList.toggle("white-header", window.scrollY > 0);
});

const nav = document.querySelector(".navigation");
const menu = document.querySelector(".my-menu");
menu.addEventListener('click', menuClicked);

function menuClicked() {

    nav.classList.toggle("naved");
    menu.classList.toggle("menu-clicked");
}