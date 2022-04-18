/* Exercise 6: Functions */

//Exercise 6.a
console.log('Exercise 6.a');
function addNumbers6a (num1, num2) {
    return num1 + num2;
}

var addition = addNumbers6a(3,2);
console.log(addition);

//Exercise 6.b
console.log('Exercise 6.b');
function addNumbers6b (num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('One or both of the choosed parameters is not a number');
        return NaN;
    }else {
        return num1 + num2;
    }
}
var addition2 = addNumbers6b('pepe', 32);
console.log(addition2);

//Exercise 6.c
console.log('Exercise 6.c');
function validateInteger(num) {
    if(Number.isInteger(num)) {
        return true;
    }else {
        return false;
    }
}

var integerNumber = validateInteger(3);
console.log(integerNumber);

//Exercuse 6.d
console.log('Exercise 6.d');
function addNumbers6d (num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('One or both of the choosed parameters is not a number');
        return NaN;
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert('one or both numbers chosed is not integer');
        return Math.round(num1) + Math.round(num2);
    }else {
        return num1 + num2;
    }
}

var addition3 = addNumbers6d(7.2,50.2);
console.log(addition3);

//Exercise 6.e
console.log('Exercise 6.e');

function validateInteger2(num1,num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert('one or both numbers chosed is not integer');
        return Math.round(num1) + Math.round(num2);
    }else {
        return num1 + num2;
    }
}
function addNumbers6e (num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert('One or both of the choosed parameters is not a number');
        return NaN;
    }else {
        return validateInteger2(num1,num2);
    }
}
var addition4 = addNumbers6e(7.2,1.2);
console.log(addition4);
