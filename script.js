// Script for navigation bar
let navbarList = document.querySelector(".navbar-list")
let menuBtn = document.querySelector(".menu")
menuBtn.addEventListener("click", () => {
    navbarList.classList.toggle("active")
})