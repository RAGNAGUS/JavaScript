const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-z]{6,12}$/
    //const username = document.querySelector('#username');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //validation
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        feedback.textContent = 'that username is valid!';
    } else {
        feedback.textContent = 'username must contain letters only & be between 6 & 12 character long!';
    }

});

form.username.addEventListener('keyup', (e) => {
    console.log(e)
        //console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        console.log('passed');
        form.username.setAttribute('class', 'success');
    } else {
        console.log('fail');
        form.username.setAttribute('class', 'error');
    }
});