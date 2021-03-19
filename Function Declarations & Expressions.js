// function declaration
function greet() {
    console.log('hello there');
}

//function expression
const speak = function() {
    console.log('good day!')
};

greet();
speak();
greet2();
speak2();


function greet2() {
    console.log('hello there');
}

// this is not working because Hoisting
const speak2 = function() {
    console.log('good day!')
};
