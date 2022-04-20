/* Exercise 5: For */
console.log("------------------");
console.log('Exercise 5: For');

//Exercise 5.a 
console.log("------------------");
console.log('Exercise 5.a');

var advengers = ['iron Man', 'doctor Strange', 'captain America', 'thor', 'hulk'];

for(var i = 0; i < advengers.length; i++){
    alert('Exercise 5.a: ' + advengers[i]);
}

//Exercise 5.b 
console.log("------------------");
console.log('Exercise 5.b');

var advengers2 = ['iron Man', 'doctor Strange', 'captain America', 'thor', 'hulk'];

for(var i = 0; i < advengers2.length; i++){
    alert('Exercise 5.b: ' + advengers2[i].substring(0,1).toUpperCase() + advengers2[i].substring(1));
}

//Exercise 5.c
console.log("------------------");
console.log('Exercise 5.c');

var advengers3 = ['iron Man', 'doctor Strange', 'captain America', 'thor', 'hulk'];
var sentence = "";

for(var i = 0; i < advengers3.length; i++){
    sentence += advengers3[i];
}
alert('Exercise 5.c: ' + sentence);

//Exercise 5.d 
console.log("------------------");
console.log('Exercise 5.d');

var myArray = [];

for(var i = 0; i < 10; i++){
    myArray.push(i);
}

console.log(myArray);
