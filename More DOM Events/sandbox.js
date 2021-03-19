const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log("Oi! my content is copyright!");
});

const box = document.querySelector('.box');
const position = document.querySelector('.pos');

box.addEventListener('mousemove', (e) => {
    //console.log(e);
    console.log(e.offsetX)
    position.textContent = `${e.offsetX},${e.offsetY}`
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY)
})