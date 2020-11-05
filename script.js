//Global ariables//
const navbar = document.getElementById("navigation-bar");
let stickTheNavbar = navbar.offsetTop;


//Eventlisteners//
window.addEventListener("scroll", stickNavOnScroll);



function stickNavOnScroll() {
    if (window.pageYOffset >= stickTheNavbar) {
        navbar.classList.add("stickTheNavbar")
    } else {
        navbar.classList.remove("stickTheNavbar");
    }
}