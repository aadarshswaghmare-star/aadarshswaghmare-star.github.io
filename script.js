// Ecofy Website Script

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Simple reveal animation

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });


});


sections.forEach(section=>{

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);

});
