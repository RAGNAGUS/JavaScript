// reduce method
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//     if (curr > 50) {
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result)

const score = [
    { player: 'Mario', score: 50 },
    { player: 'Yoshi', score: 30 },
    { player: 'Mario', score: 70 },
    { player: 'Crystal', score: 60 },
    { player: 'Mario', score: 60 },
    { player: 'Yoshi', score: 30 },
    { player: 'Mario', score: 30 },
    { player: 'Crystal', score: 60 },
    { player: 'Mario', score: 10 },
    { player: 'Yoshi', score: 30 },
    { player: 'Mario', score: 90 },
    { player: 'Crystal', score: 60 },
];

const marioTotal = score.reduce((acc, curr) => {
    if (curr.player === 'Mario') {
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal)