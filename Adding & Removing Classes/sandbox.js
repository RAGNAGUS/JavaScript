// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const contents = document.querySelectorAll('p');

contents.forEach(content => {
    if (content.textContent.includes('error')) {
        content.classList.add('error');
    }
    if (content.textContent.includes('success')) {
        content.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');