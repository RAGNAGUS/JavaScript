// template strings
const title = "Best reads of 2021"
const author = "RAGNAGUS"
const likes = 30;

// concatenation way
let result = "The blog called " + title + " by " + author + " has " + likes + " likes";

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`

// create html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);
