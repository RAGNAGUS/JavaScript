// type conversion
let score = "100";

score = Number(score); //แปลงตัวแปร score จาก string เป็น number
console.log(score + 1);

console.log(typeof score); //ตรวจสอบชนิดของตัวแปร

let result = Number("Hello"); //แปลงจาก string เป็น number

let result = String(50); //แปลงจาก number เป็น string

let result = Boolean(0); // 1 = true, 0 = false

let result = Boolean("0"); // return True
let result = Boolean(""); // return False

console.log(result, typeof result);
