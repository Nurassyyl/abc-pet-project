const openMenuBtn = document.querySelector(".hamburger-menu");
const closeMenuBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");

openMenuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    body.style.overflow = "hidden";
    closeMenuBtn.classList.add('active');
})

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    body.style.overflow = "auto";
    closeMenuBtn.classList.remove('active');
})