/* Exercise 3: Arrays */
console.log('Exercise 3: Arrays');

//Exercise 3.a
console.log('Exercise 3.a');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
console.log(months[4]);
console.log(months[10]);

//Exercise 3.b
console.log('Exercise 3.b');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 
            'Diciembre'];
var orderedMonths = months.sort();
console.log(orderedMonths);

//Exercise 3.c 
console.log('Exercise 3.c');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
months.unshift('jorge');
console.log(months);
months.push('marta');
console.log(months);

//Exercise 3.d 
console.log('Exercise 3.d');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
months.shift();
console.log(months);
months.pop();
console.log(months);

//Exercise 3.e 
console.log('Exercise 3.e');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
months.reverse();
console.log(months);

//Exercise 3.f 
console.log('Exercise 3.f');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
console.log(months.join('-'));

//Exercise 3.g 
console.log('Exercise 3.g');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
            'Diciembre'];
var slicedMonths = months.slice(4,11);
console.log(slicedMonths);



