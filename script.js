//Global variables//
const navbar = document.getElementById("navigation-bar");
const dropdownMenu = document.querySelector(".dropdown-menu")
const hamburgerButton = document.querySelector(".hamburger")
let stickTheNavbar = navbar.offsetTop;



//Eventlisteners//
window.addEventListener("scroll", stickNavOnScroll);
hamburgerButton.addEventListener("click", toggleHamburger)



function stickNavOnScroll() {
    
    if (window.pageYOffset >= stickTheNavbar) {
        navbar.classList.add("stickTheNavbar")
        navbar.style.position = "fixed";
    } else {
        navbar.classList.remove("stickTheNavbar");
        navbar.style.position = "relative";
    }
}

//MAKE THE HAMBURGER ICON CHANGE TO A CLOSE ICON
function toggleHamburger() {
    dropdownMenu.classList.toggle("show-dropdown")
    
}