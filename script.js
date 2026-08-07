// =========================================
// ECOFY WEBSITE SCRIPT
// =========================================


// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");


        // Change ☰ to ✕ when menu is open

        if (navLinks.classList.contains("active")) {

            menuToggle.innerHTML = "✕";

        } else {

            menuToggle.innerHTML = "☰";

        }

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.innerHTML = "☰";

        });

    });

}



// =========================================
// SMOOTH SCROLLING
// =========================================


document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );


        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// =========================================
// SECTION ANIMATION
// =========================================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

}, {

    threshold: 0.08

});


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(25px)";

    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";


    observer.observe(section);

});
