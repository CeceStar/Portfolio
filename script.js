//Global variables//
const navbar = document.getElementById("navigation-bar");
const dropdownMenu = document.querySelector(".dropdown-menu")
const pageLink = document.querySelectorAll(".menu-link")

const hamburgerButton = document.querySelector(".hamburger")
let stickTheNavbar = navbar.offsetTop;


//Eventlisteners//
window.addEventListener("scroll", stickNavOnScroll);
hamburgerButton.addEventListener("click", toggleDropdown);
pageLink.forEach (function(pageLink) {
        pageLink.addEventListener("click", toggleDropdown)
    }
)

//Navigation bar and Dropdownmenu

function stickNavOnScroll() {
    
    if (window.pageYOffset >= stickTheNavbar) {
        navbar.classList.add("stickTheNavbar")
        navbar.style.position = "fixed";
    } else {
        navbar.classList.remove("stickTheNavbar");
        navbar.style.position = "relative";
    }
}

function toggleDropdown() {
    dropdownMenu.classList.toggle("show-dropdown");

    let iconClass = hamburgerButton.children[0].className
    if (iconClass === "fas fa-bars") {
        iconClass = hamburgerButton.children[0].className =  "fas fa-times";
    } else {
    hamburgerButton.children[0].className =  "fas fa-bars" ;
    }
}