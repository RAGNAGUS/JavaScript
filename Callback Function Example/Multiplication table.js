// normal callback function

multipleTable(5, showResult);

function multipleTable(base, result) {
    for (let i = 1; i < 13; i++) {
        result(`${base} * ${i} = `, base * i);
    }
}

function showResult(base, result) {
    console.log(base, result);
}


// callback arrow function

multipleTable = (base, result) => {
    for (let i = 1; i < 13; i++) {
        result(`${base} * ${i} = `, base * i);
    }
}

showResult = (base, result) => {
    console.log(base, result)
}

multipleTable(5, showResult);