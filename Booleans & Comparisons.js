// booleans & comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email = "casnova152@gmail.com";
let names = ["Mario", "Luigi", "Toad"]

let result = email.includes("gmail");
let result = names.includes("Mario");

console.log(result);

// comparison operators
let age = 25;
console.log(age == 25); // return True
console.log(age == 30); // return false
console.log(age != 30); // return True
console.log(age > 20); // return True
console.log(age < 20); // return False
console.log(age >= 25); // return True
console.log(age <= 25); // return True

let name = "Shaun";

console.log(name == "Shaun"); // return True
console.log(name == "shaun"); // return False
console.log(name > "Crystal"); // return True Because S greater than C
console.log(name < "shaun"); // return True Because s greater than S
console.log(name > "Crystalhaun"); // return True Because S greater than C
