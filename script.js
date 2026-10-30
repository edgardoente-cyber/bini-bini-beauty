
// SELECT THE MENU ELEMENTS

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");


// OPEN AND CLOSE MOBILE MENU

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("show");

    const isOpen = navbar.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change hamburger icon to X
    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// CLOSE MENU AFTER CLICKING A NAVIGATION LINK

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
