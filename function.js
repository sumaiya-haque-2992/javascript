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
let sum = (num1, num2) =>{
    let total = num1 + num2;
    return total * total;
}
console.log(sum(10, 20));