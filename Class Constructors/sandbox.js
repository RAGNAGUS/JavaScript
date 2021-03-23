class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
    }
}

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

console.log(userOne, userTwo);

// the 'new' keyword
// 1 - it create a new empty object {}
// 2 - it bind the value of 'this to the new empty object
// 3 - it calls the constructor function to 'build' the object