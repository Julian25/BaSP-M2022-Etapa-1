/* Exercise 6: Functions */
console.log("------------------");
console.log('Exercise 6');

//Exercise 6.a
console.log("------------------");
console.log('Exercise 6.a');

function addNumbers6a (num1, num2) {
    return num1 + num2;
}
var addition = addNumbers6a(3,2);
console.log(addition);

//Exercise 6.b
console.log("------------------");
console.log('Exercise 6.b');

function addNumbers6b (num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('Exercise 6.b: One or both of the choosed parameters is not a number');
        return NaN;
    }else {
        return num1 + num2;
    }
}
//Case with NaN
var addition2 = addNumbers6b('pepe', 32);
console.log(addition2);
//Case with integer
var addition3 = addNumbers6b(40, 32);
console.log(addition3);

//Exercise 6.c
console.log("------------------");
console.log('Exercise 6.c');

function validateInteger(num) {
    return Number.isInteger(num)
}
//Case with integer
var integerNumber = validateInteger(3);
console.log(integerNumber);
//Case with decimal
var integerNumber2 = validateInteger(3.2);
console.log(integerNumber2);

//Exercuse 6.d
console.log("------------------");
console.log('Exercise 6.d');

function addNumbers6d (num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('Exercise 6.d: One or both of the choosed parameters is not a number');
        return NaN;
    } else if (!validateInteger(num1) || !validateInteger(num2)) {
        alert('Exercise 6.d: one or both numbers chosed is not integer');
        return Math.round(num1 + num2);
    }else {
        return num1 + num2;
    }
}
//case with decimal
var addition4 = addNumbers6d(7.2,50.2);
console.log(addition4);
//Case with integer
var addition5 = addNumbers6d(3,3);
console.log(addition5);

//Exercise 6.e
console.log("------------------");
console.log('Exercise 6.e');

function validateInteger2(num1, num2) {
    if (!validateInteger(num1) || !validateInteger(num2)) {
        alert('Exercise 6.e: one or both numbers chosed is not integer');
        return Math.round(num1 + num2);
    }else {
        return num1 + num2;
    }
}

function addNumbers6e (num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('Exercise 6.e: One or both of the choosed parameters is not a number');
        return NaN;
    }else {
        return validateInteger2(num1, num2);
    }
}
//case with decimal
var addition6 = addNumbers6e(7.1, 1.2);
console.log(addition6);
//Case with NaN
var addition7 = addNumbers6e('c', 1);
console.log(addition7);
//Case with integer
var addition8 = addNumbers6e(3, 1);
console.log(addition8);

