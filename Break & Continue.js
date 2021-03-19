// break and continue

const score = [50, 25, 0, 30, 100, 20, 10];


for (let i = 0; i < score.length; i++) {
    console.log("your score: ", score[i]);

    if (score[i] === 0) {
        continue;
    }

    if (score[i] === 100) {
        console.log("congrats, you got the top score!");
        break;
    }
}
