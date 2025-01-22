// JavaScript for menu toggle and close functionality
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Function to toggle the menu
    const toggleMenu = () => {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");

        // Change the icon dynamically
        if (menuToggle.classList.contains("active")) {
            menuToggle.innerHTML = '<i class="bx bx-x"></i>'; // Close icon
        } else {
            menuToggle.innerHTML = '<i class="bx bx-menu"></i>'; // Hamburger icon
        }
    };

    // Add event listener to menu toggle
    menuToggle.addEventListener("click", toggleMenu);

    // Close the menu when clicking on any menu link
    menu.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            toggleMenu(); // Close the menu if a menu link is clicked
        }
    });
});


document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('active');
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
