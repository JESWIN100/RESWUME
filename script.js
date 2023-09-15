/***********************toogle icon navbar******** */
document.addEventListener('DOMContentLoaded', () => {
    // Select menuIcon and navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
  
    // Toggle menu icon and navbar classes when clicked
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});

// Select sections and navigation links
let selections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Function to handle active sections on scroll
function handleActiveSections() {
    const scrollY = window.scrollY;

    selections.forEach((section) => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navlinks.forEach((link) => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Function to toggle the "sticky" class on the header
function toggleStickyHeader() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

// Attach scroll event listeners
window.addEventListener('scroll', () => {
    handleActiveSections();
    toggleStickyHeader();
});

// Initialize ScrollReveal for animations
const revealConfig = {
    //reset: true,        // Reset animations when elements re-enter the viewport
    distance: '80px',   // Start animations when elements are 80 pixels from the viewport
    duration: 2000,     // Animation duration (2 seconds)
    delay: 200,         // Delay before animations start (0.2 seconds)
    origin: 'top'       // Animation originates from the top
};

// Initialize ScrollReveal with the configuration
ScrollReveal(revealConfig);

// Apply reveal animations to specific elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h2, .heading', { origin: 'left' });