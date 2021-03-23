// constructor function
function User(username, email) {
    this.username = username;
    this.email = email;

}

// add prototype
User.prototype.login = function() {
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout = function() {
    console.log(`${this.username} has logged out`);
    return this;
}

// class User {
//     constructor(username, email) {
//         // set up properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }

// }

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

console.log(userOne, userTwo);

userOne.login().logout();