// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chun-Li'];

let html = ``;

people.forEach((person) => {
    html += `<li style='color: purple'>${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
