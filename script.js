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


//Modal of the projects
//First picture in the grid
let projectImg = document.getElementsByClassName("project");

//The modal container
let modal = document.getElementsByClassName("modal");

//Span element with the closebutton
let closeBtn = document.getElementsByClassName("close-project");


//FIRST MODAL
projectImg[0].addEventListener("click", firstModal)


function firstModal() {
    modal[0].style.display = "block";

    closeBtn[0].addEventListener("click", closeModal)
    function closeModal() {
        modal[0].style.display = "none"; 
    }
    
    window.onclick = function(event) {
        if (event.target === modal[0]) {
            modal[0].style.display = "none";
        }
    }
}

//SECOND MODAL
projectImg[1].addEventListener("click", showSecondModal)

function showSecondModal() {
    modal[1].style.display = "block";

    closeBtn[1].addEventListener("click", closeModal)
    function closeModal() {
        modal[1].style.display = "none"; 
    }

    window.onclick = function(event) {
        if (event.target === modal[1]) {
            modal[1].style.display = "none";
        }
    }
}

//THIRD MODAL
projectImg[2].addEventListener("click", showThirdModal)

function showThirdModal() {
    modal[2].style.display = "block";

    closeBtn[2].addEventListener("click", closeModal)
    function closeModal() {
        modal[2].style.display = "none"; 
    }

    window.onclick = function(event) {
        if (event.target === modal[2]) {
            modal[2].style.display = "none";
        }
    }
}


//Animations!
ScrollReveal().reveal('.presentation', { 
    delay: 1000, 
    easing: 'ease-in',
});

ScrollReveal().reveal('.know-more', {
    delay: 2300, 
    easing: 'ease-in',
});


ScrollReveal().reveal('.about-me-content', {
    delay: 300, 
    easing: 'ease-in',
    reset: 'true',
});

ScrollReveal().reveal('.portfolio-page-content', {
    delay: 300, 
    easing: 'ease-in',
    reset: 'true',
});

ScrollReveal().reveal('.contact-page-content', {
    delay: 300, 
    easing: 'ease-in',
    reset: 'true',
});