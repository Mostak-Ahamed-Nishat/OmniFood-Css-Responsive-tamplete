// Mobile Navigation

const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function(e) {
    header.classList.toggle("nav-open")
})