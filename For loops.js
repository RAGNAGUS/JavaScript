// for loops

for (let i = 0; i < 5; i++) {
    console.log("in loop: ", i);
}

console.log("loop finished");

const names = ["Shaun", "Mario", "Luigi"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    let html = `<div>${names}</div>`
    console.log(html)
}

console.log("loop finished");
