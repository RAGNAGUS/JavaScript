// rest parameter
const double = (...nums) => {
    console.log(nums)
    return nums.map(num => num * 2)
}

const result = double(1, 3, 5, 7, 9)
console.log(result);


// spread syntax (arrays)
const people = ['Shaun', 'Ryu', 'Crystal'];
const members = ['Mario', 'Chun-Li', ...people];
console.log(members);


// spread syntax (object)

const person = { name: 'Shaun', age: 30, job: 'Web Master' };
const personClone = {...person, location: 'Thailand' };

console.log(personClone)