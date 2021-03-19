// regular function
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
}

// arrow function
const calcArea = radius => {
    return 3.14 * radius ** 2;
};

const calcArea = radius => 3.14 * radius ** 2; //calcArea but shorter version

const calcSquare = (width, height) => {
    return width * height;
};

const area = calcArea(5);
console.log('area is: ', area);

const card = calcSquare(10, 30);
console.log('area of card is: ', card);


// hello world function with arrow
const greet = () => 'hello, world';

// bill calculator function with arrow
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));
