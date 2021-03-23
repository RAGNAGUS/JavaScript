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

class Admin extends User {
    deleteUser(user) {
        users = users.filter((u) => u.username !== user.username);
    }
}

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const userThree = new Admin('shaun', 'shaun@admin.com')

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo); // only Admin can use this method
console.log(users);