let ninjas = ["Shaun", "Ryu", "Chun-Li"];

ninjas[1] = "Ken";
console.log(ninjas[1])

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["Shaun", "Crystal", 30, 20];
console.log(random);

console.log(ninjas.length) // จำนวน index ที่มีทั้งหมดใน Array

let result = ninjas.join(","); // แทรก , เข้าไปในแต่ละ index
let result = ninjas.indexOf("Chun-Li"); //หาตำแหน่งของ Chun-Li ใน index

let result = ninjas.concat(["Ken", "Crystal"]); //เพิ่มข้อมูลเข้าไปใน Array

let result = ninjas.push("Ken"); //เพิ่ม Ken เข้าไปใน Array แล้ว Return ค่าออกมาเป็นตำแหน่ง index ของ Ken 

let result = ninjas.pop(); //นำข้อมูลล่าสุดใน Array ออกแล้ว Return ออกมาเป็นค่านั้น

console.log(ninjas);
