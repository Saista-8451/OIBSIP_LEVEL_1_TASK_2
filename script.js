// script.js

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Show active link based on scroll position
window.addEventListener('scroll', () => {
    const currentPosition = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            navItems.forEach((navItem) => {
                navItem.classList.remove('active');
            });
            navItems[index].classList.add('active');
        }
    });
});

// Form submission handling
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Perform form validation and submission as required
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    };
    // Perform further actions with the form data, such as sending it to a server or displaying a success message
    console.log(formData);
    // Reset the form inputs
    form.reset();
});
