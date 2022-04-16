/* Exercise 3: Arrays */

//Exercise 1.a

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
            "Diciembre"];
console.log(months[4]);
console.log(months[10]);

//Exercise 1.b

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
            "Diciembre"];
var orderedMonths = months.sort();
console.log(orderedMonths);

//Exercise 1.c 
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
            "Diciembre"];
months.unshift("jorge");
console.log(months);
months.push("marta");
console.log(months);

//Exercise 1.d 
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
            "Diciembre"];
months.shift();
console.log(months);
months.pop();
console.log(months);

//Exercise 1.e 
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
            "Diciembre"];
months.reverse();
console.log(months);

//Exercise 1.f 
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
            "Diciembre"];
console.log(months.join('-'));

//Exercise 1.g 
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
            "Diciembre"];
var slicedMonths = months.slice(4,11);
console.log(slicedMonths);



