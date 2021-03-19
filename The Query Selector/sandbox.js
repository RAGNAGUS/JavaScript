const para = document.querySelector("p");
console.log(para);

const para = document.querySelector("error");
console.log(para);

const para = document.querySelector("div.error");
console.log(para);

const para = document.querySelector("body > h1");
console.log(para);

// querySelectorAll
const paras = document.querySelectorAll("p");
paras.forEach(para => { console.log(para) });

// select all error
const errors = document.querySelectorAll(".error");
console.log(errors);
