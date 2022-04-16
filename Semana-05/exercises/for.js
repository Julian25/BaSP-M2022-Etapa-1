/* Exercise 5: For */

//Exercise 5.a 

var advengers = ['iron Man', 'doctor Strange', 'captain America', 'thor', 'hulk'];

for(var i = 0; i < advengers.length; i++){
    alert(advengers[i]);
}

//Exercise 5.b 

var advengers = ['iron Man', 'doctor Strange', 'captain America', 'thor', 'hulk'];

for(var i = 0; i < advengers.length; i++){
    alert(advengers[i].substring(0,1).toUpperCase() + advengers[i].substring(1));
}

//Exercise 5.c
var advengers = ['iron Man', 'doctor Strange', 'captain America', 'thor', 'hulk'];
var sentence = "";

for(var i = 0; i < advengers.length; i++){
    sentence += advengers[i];
}
alert(sentence);

//Exercise 5.d 
console.log('Exercise 5.d');

var myArray = [];

for(var i = 0; i < 10; i++){
    myArray.push(i);
}

console.log(myArray);
