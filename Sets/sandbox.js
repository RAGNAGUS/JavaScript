// sets
const namesArray = ['Ryu', 'Chun-Li', 'Ryu', 'Shaun'];
console.log(namesArray);

//const namesSet = new Set(['Ryu', 'Chun-Li', 'Ryu', 'Shaun']);
//const namesSet = new Set(namesArray);
//console.log(namesSet);

//const uniqueNames = [...namesSet]
const uniqueNames = [...new Set(namesArray)]
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(20); // not return
ages.delete(20);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(20));

ages.clear();
console.log(ages);

const ninjas = new Set([
    { name: 'shaun', age: 30 },
    { name: 'Crystal', age: 29 },
    { name: 'Chun-Li', age: 32 },
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
})