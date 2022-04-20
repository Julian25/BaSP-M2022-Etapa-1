/* Exercise 2: Strings */
console.log("------------------");
console.log('Exercise 2: Strings');

// Exercise 2.a 
console.log("------------------");
console.log('Exercise 2.a');

var  noun = 'friendship';
console.log(noun.toUpperCase());


//Exercise 2.b
console.log("------------------");
console.log('Exercise 2.b');

var state = "california";
var subState = state.substring(0,5);
console.log(subState);


//Exercise 2.c 
console.log("------------------");
console.log('Exercise 2.c');

var sport = 'basketball';
var subSport = sport.substring(sport.length-3);
console.log(subSport);


//Exercise 2.d
console.log("------------------");
console.log('Exercise 2.d');

var fruit = 'strawberry';
var subFruit = fruit.substring(0, 1).toUpperCase() + fruit.substring(1).toLowerCase();
console.log(subFruit);


//Exercise 2.e
console.log("------------------");
console.log('Exercise 2.e');

var myTeam = 'racing club de avellaneda';
var emptySpace = myTeam.indexOf(" ");
console.log(emptySpace);


//Exercise 2.f 
console.log("------------------");
console.log('Exercise 2.f');

var book = 'harry potter';
var harryPotter = book.substring(0,1).toUpperCase() + book.substring(1, (book.indexOf(" ") + 1)).toLowerCase()
                + book.substring((book.indexOf(" ") + 1),(book.indexOf(" ") + 2)).toUpperCase() 
                + book.substring((book.indexOf(" ") + 2)).toLowerCase();
console.log(harryPotter);






