/*Exercise 4: If Else*/

//Exercise 4.a

var num = Math.random();

if(num >= 0.5) {
    alert('Greater than 0.5')
} else {
    alert('Lower than 0.5')
}

//Exercise 4.b

var age = Math.floor(Math.random() *101);

if (age < 2){
    alert('Baby');
    
} else if (age >= 2 && age <= 12){
    alert('Child');
} else if (age >= 13 && age <= 19){
    alert('Teenager');
} else if (age >= 20 && age <= 30){
    alert('Young');
} else if (age >= 31 && age <= 60){
    alert('Adult')
} else if(age >= 61 && age <= 75){
    alert('Elderly');
}else {
    alert('Senior');
}