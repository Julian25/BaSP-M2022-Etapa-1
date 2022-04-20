/*Exercise 4: If Else*/
console.log("------------------");
console.log('Exercise 4: If Else');

//Exercise 4.a
console.log("------------------");
console.log('Exercise 4.a');

var num = Math.random();

if(num >= 0.5) {
    alert('Exercise 4.a: Greater than 0.5')
} else {
    alert('Exercise 4.a: Lower than 0.5')
}

//Exercise 4.b
console.log("------------------");
console.log('Exercise 4.b');

var age = Math.floor(Math.random() *101);

if (age < 2){
    alert('Exercise 4.b: Baby');
    
} else if (age >= 2 && age <= 12){
    alert('Exercise 4.b: Child');
} else if (age >= 13 && age <= 19){
    alert('Exercise 4.b: Teenager');
} else if (age >= 20 && age <= 30){
    alert('Exercise 4.b: Young');
} else if (age >= 31 && age <= 60){
    alert('Exercise 4.b: Adult')
} else if(age >= 61 && age <= 75){
    alert('Exercise 4.b: Elderly');
}else {
    alert('Exercise 4.b: Senior');
}