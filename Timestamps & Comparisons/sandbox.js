// timestamp

const before = new Date('February 1 2020 7:30:59');
const now = new Date();

console.log('from')
console.log(before);

console.log('to')
console.log(now);

console.log("it's take");

const diff = now.getTime() - before.getTime();
console.log(`${diff} Milliseconds`);

const sec = Math.round(diff / 1000);
console.log(`${sec} Seconds`);

const min = Math.round(sec / 60);
console.log(`${min} Minutes`);

const hour = Math.round(min / 60);
console.log(`${hour} Hours`);

const day = Math.round(hour / 24);
console.log(`${day} Days`);

const year = Math.round(day / 365);
console.log(`${year} Years`);

// converting timestamp into date objects
const timestamp = 1580517059000;
console.log(new Date(timestamp))