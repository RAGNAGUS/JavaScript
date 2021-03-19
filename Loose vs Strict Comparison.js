let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25); // return True
console.log(age == "25"); // return True
console.log(age != 25); // return False
console.log(age != "25"); // return False

// strict comparison (different types cannot be equal)

console.log(age === 25); // return True
console.log(age === "25"); // return False
console.log(age !== 25); // return False
console.log(age !== "25"); //return True
