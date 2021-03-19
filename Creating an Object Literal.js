// object literals

let user = {
    name: 'RAGNAGUS',
    age: 30,
    email: 'casnova152@gmail.com',
    location: 'Thailand',
    blog: ['Why mac & cheese rules', '10 things to make with marmite'],
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['location']);
user['name'] = 'Chun-Li';
console.log(user['name']);

console.log(typeof user);
