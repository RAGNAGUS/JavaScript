const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter((score) => {
    return score > 20;
});

console.log('before filter');
console.log(scores);
console.log('after filter');
console.log(filteredScores);

const users = [
    { name: 'Shaun', premium: true },
    { name: 'Yoshi', premium: false },
    { name: 'Mario', premium: false },
    { name: 'Chun-Li', premium: true },
];

const premiunUsers = users.filter((user) => user.premium);

console.log(premiunUsers)