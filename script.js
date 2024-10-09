/* Mobile Menu Toggle */
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

//NEW//
// Show or hide the "Back to Top" button on scroll
window.onscroll = function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

/* HEADER FUNCTION */
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});



/*BANNER SLIDESHOW*/
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment the slide index
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to the first slide if at the end

    // Display the current slide
    slides[slideIndex].style.display = "block";  

    // Set the slideshow to change every 10 seconds
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}