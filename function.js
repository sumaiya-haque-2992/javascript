// normal function

// function multiplication(x, y){
//     return (x*y);
// };
// let x =5;
// let y =7;
// let totalMultiplication = multiplication(x,y);
// console.log(totalMultiplication);

// function fullName(firstName, lastName, age){
//     return 'Your first Name' + ' ' + firstName + ' ' + 'last Name' + ' '
//      + lastName + '. Your age' + ' ' + age +'.';
// }
// const yourName = fullName('sumaiya', 'haque', 22);
// console.log(yourName);

// function gold(ana){
//     let vori = ana/16;
//     return `64 ana = ${vori} vori`;
// }
// let output = gold(64);
// console.log(output)


// 

// Anonymous function
// let sum = function(num1, num2){
//     return num1 + num2;
// }
// console.log(sum(10, 20));


// arrow function
// let sum = (num1, num2) => num1 + num2;
// let sum = (num1, num2) =>{
//     let total = num1 + num2;
//     return total * total;
// }
// console.log(sum(10, 20));


// higher order function
// function sum(num1, num2, add){
//     return add(num1, num2)
// };
// let add = (number1, number2) => number1 + number2;
// console.log(sum(30, 20, add))


// IIFE
// (function sum(name){
//     console.log(name)
// })("alif")


// let x = 5;
// let y = '5';
// let z = x + y;
// console.log(typeof(z))

// let x = 5;
// x = x + 10;
// console.log(x);  

// let x = 100;
// x % = 10;

// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 1)
//     console.log(i);
// }

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0)
    console.log(i);
}