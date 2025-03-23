const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const menuCloseButton = document.querySelector('.menu-close-button');
const callbackButtons = document.querySelectorAll('.callback');
const modal = document.querySelector('#callbackModal');
const closeButton = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

menuCloseButton.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

callbackButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});