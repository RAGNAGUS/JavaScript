const popup = document.querySelector('.popup-wrapper');
const button = document.querySelector('button');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.style.display = 'block';
})

close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', (e) => {
    if (e.target.classList == 'popup-wrapper') {
        popup.style.display = 'none';
    }
})