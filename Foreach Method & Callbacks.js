// callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    //do something
    console.log(value)
});

let people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-Li", ];


// forEach function
people.forEach((person, index) => {
    console.log(index, person);
});

// how forEach function work same above
const logPerson = (person, index) => {
    console.log(`${index} ${person}`);
}

people.forEach(logPerson);
