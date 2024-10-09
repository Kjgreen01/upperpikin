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



// Array of sponsor objects
const sponsors = [
    { logo: 'logo1.jpg', name: 'Company 1' },
    { logo: 'logo3.jpg', name: 'Company 2' },
    { logo: 'logo4.jpg', name: 'Company 3' },
    { logo: 'logo5.jpg', name: 'Company 4' },
    { logo: 'logo6.png', name: 'Company 5' },
    { logo: 'logo7.jpg', name: 'Company 6' },
    { logo: 'logo8.png', name: 'Company 7' },
    { logo: 'logo9.jpg', name: 'Company 8' },
    { logo: 'logo10.jpg', name: 'Company 9' },
    { logo: 'logo11.jpg', name: 'Company 10' },

];

// Get the container for sponsor logos
const sponsorContainer = document.getElementById('sponsor-logos');

// Function to create sponsor elements dynamically
sponsors.forEach(sponsor => {
    // Create a new div for each sponsor
    const sponsorDiv = document.createElement('div');
    sponsorDiv.classList.add('sponsors');

    // Create an image element for the logo
    const img = document.createElement('img');
    img.src = sponsor.logo;
    img.alt = `${sponsor.name} Logo`;

    // Create a paragraph element for the sponsor name
    const name = document.createElement('p');
    name.classList.add('sponsor-name');
    name.textContent = sponsor.name;

    // Append the logo and name to the sponsor div
    sponsorDiv.appendChild(img);
    sponsorDiv.appendChild(name);

    // Append the sponsor div to the container
    sponsorContainer.appendChild(sponsorDiv);
});
