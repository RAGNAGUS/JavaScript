const para = document.querySelector('p');

console.log(para.innerText);
para.innerText = 'ninjas are awesome!';

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text'
});

const content = document.querySelector('.content');

console.log(content.innerHTML);

content.innerHTML += '<h2> This is a new h2 </h2>';
console.log(content.innerHTML);

const people = ['Mario', 'Luigi', 'Yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});