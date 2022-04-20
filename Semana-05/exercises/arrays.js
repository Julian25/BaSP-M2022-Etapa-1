/* Exercise 3: Arrays */
console.log("------------------");
console.log('Exercise 3: Arrays');

//Exercise 3.a
console.log("------------------");
console.log('Exercise 3.a');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
console.log(months[4]);
console.log(months[10]);

//Exercise 3.b
console.log("------------------");
console.log('Exercise 3.b');

var months2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
            'Diciembre'];
var orderedMonths = months2.sort();
console.log(orderedMonths);

//Exercise 3.c 
console.log("------------------");
console.log('Exercise 3.c');

var months3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
months3.unshift('jorge');
months3.push('marta');
console.log(months3);

//Exercise 3.d 
console.log("------------------");
console.log('Exercise 3.d');

var months4 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
months4.shift();
months4.pop();
console.log(months4);

//Exercise 3.e 
console.log("------------------");
console.log('Exercise 3.e');

var months5 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
months5.reverse();
console.log(months5);

//Exercise 3.f 
console.log("------------------");
console.log('Exercise 3.f');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
console.log(months.join('-'));

//Exercise 3.g 
console.log("------------------");
console.log('Exercise 3.g');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
var slicedMonths = months.slice(4,11);
console.log(slicedMonths);



