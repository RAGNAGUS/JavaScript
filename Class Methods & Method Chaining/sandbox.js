class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
    }
    logout() {
        console.log(`${this.username} just logged out`)
    }
    incScore() {
        this.score++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this; // return the yourself(object) to use Method Chaining
    }
}

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

console.log(userOne, userTwo);

userOne.logout();
userTwo.login()

userOne.incScore().incScore().incScore(); // Method Chaining