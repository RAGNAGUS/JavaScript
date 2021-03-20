const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')
    //const username = document.querySelector('#username');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-z]{6,12}$/

    if (usernamePattern.test(username)) {
        feedback.textContent = 'that username is valid!';
    } else {
        feedback.textContent = 'username must contain letters only & be between 6 & 12 character long!';
    }

});