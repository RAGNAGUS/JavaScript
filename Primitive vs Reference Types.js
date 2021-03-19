// primitive values

let scoreOne = 50;
let scorreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scorreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scorreTwo}`);

// refference value

const userOne = { name: "Ryu", age: 30 }
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = "Mario";
userTwo.age = 35;

console.log(userOne, userTwo);
