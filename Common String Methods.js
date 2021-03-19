// common string methods

let email = "casnova152@gmail.com";

let result = email.lastIndexOf("n"); //หาตำแหน่งตัวสุดท้ายของ n

let result = email.slice(5, 10); //เก็บข้อมูลเฉพาะ index 5 ถึง 10

let result = email.substr(5, 10); //เก็บข้อมูลเฉพาะตั้งแต่ index 5 เป็นต้นไป 10 ตัว

let result = email.replace("m", "w"); //เปลี่ยน m ใน index ที่เป็นตัวแรกให้เป็น w

let result = email.replace("n", "w"); //เปลี่ยน n ใน index ที่เป็นตัวแรกให้เป็น w

console.log(result);
