//--------Start----------//
setTimeout(function() {
    alert("Hello");
}, 3000);
//----------End---------//





//--------Start----------//
console.log('Step 1');
funcSync();
console.log('Step 3');

function funcSync() {
    console.log('Step 2');
}

// ผลลัพท์
// Step 1
// Step 2
// Step 3
//----------End---------//





//--------Start----------//
setTimeout(function() {
    console.log('Step 1')
}, 3000);

console.log('Step 2')

// ผลลัพท์
// Step 2
// Step 1
//----------End---------//





//--------Start----------//
setTimeout(function() {
    alert("Hello");
}, 3000);
//----------End---------//





//--------Start----------//
setInterval(function() {
    console.log("Hello");
}, 1000);
//----------End---------//





//--------Start----------//
setTimeout(doSomeThing, 3000);

function doSomeThing() {
    console.log('Hello')
}
//----------End---------//





//--------Start----------//
myAsyncFunc(callbackFunc);

function myAsyncFunc(callback) {
    callback();
}

function callbackFunc() {
    console.log('this is callback function')
}
//----------End---------//





//--------Start----------//
asyncFunc(function(str) {
    console.log('cb1 : ' + str);
}, function(str) {
    console.log('cb2 : ' + str);
});

function asyncFunc(cb1, cb2) {
    cb1('A');
    cb2('B');
}
//------------------//





//--------Start----------//
asyncFunc(cb, cb);

function asyncFunc(cb1, cb2) {
    cb1('A');
    cb2('B');
}

function cb(str) {
    console.log('cb : ' + str);
}
//------------------//





//--------Start----------//
asyncFunc(cb, cb);

function asyncFunc(running, done) {
    for (var i = 0; i < 10; i++) {
        running('i = ' + i);
    }
    done('done');
}

function cb(str) {
    console.log(str);
}
//------------------//