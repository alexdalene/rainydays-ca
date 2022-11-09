const burgerMenu = document.querySelector(".burger-menu");

const overlay = document.querySelector(".menu");

burgerMenu.addEventListener("click", function() {
    overlay.classList.toggle("overlay");
});