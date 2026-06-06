
const menuOpenButton = document.querySelector(".site-header__menu-button--open");
const menuCloseButton = document.querySelector(".site-header__menu-button--close");
const nav = document.querySelector(".site-header__nav");

menuOpenButton.addEventListener("click", () => {
    nav.dataset.menuopen = "true";
});

menuCloseButton.addEventListener("click", () => {
    nav.dataset.menuopen = "false";
});