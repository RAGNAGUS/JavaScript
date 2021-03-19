// variable & block scope

let age = 30; //global variable

if (true) {
    let age = 40; //local variable
    let name = "Shaun" //local variable
    console.log("Intside code block: ", age, name) //print 40 Saun

    if (true) {
        let age = 50; //local variable
        console.log("Inside 2nd code block: ", age) //print 50
        var test = "hello";
    }
}

console.log("Outside code block: ", age, name, test)
    //print 30 //because name is local variable //var is a global variable
