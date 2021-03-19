// object literals

let user = {
    name: "RAGNAGUS",
    age: 30,
    email: "casnova152@gmail.com",
    location: "Thailand",
    blog: ["Why mac & cheese rules", "10 things to make with marmite"],
    login: () => { console.log("The user logged in") },
    logout: () => { console.log("The user logged out") },
};

user.login();
user.logout();
