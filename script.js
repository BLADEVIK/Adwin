const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const callbackButton = document.querySelector('.callback');
const modal = document.querySelector('#callbackModal');
const closeButton = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

callbackButton.addEventListener('click', () => {
    modal.style.display = 'flex'; // Показываем модальное окно
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Скрываем модальное окно
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Скрываем при клике вне формы
    }
});