// JavaScript for menu toggle and close functionality
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.menu ul li a');

// Open menu
menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
    menuClose.style.display = 'block';
});

// Close menu
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    menuClose.style.display = 'none';
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuClose.style.display = 'none';
    });
});

// Get elements
const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupContainer = document.getElementById('popupContainer');
const contactLink = document.getElementById('contactLink');

// Show the popup when clicking the floating button
openPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Show the popup when clicking the Contact link
contactLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close the popup when clicking the close button
closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
});

// Close the popup when clicking outside of it
popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none';
        document.body.style.overflow = '';
    }
});
