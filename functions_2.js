/*
functions
    Parametros
*/
/*
const sum = (number1, number2) => { // Aqui é argumento
   console.log( number1 + number2 );
}

sum(2,2) // Aqui é paramet
*/

const sum = (number1, number2) => {
   let total = number1 + number2;
   return total
}

let num1 = 10;
let num2 = 15;

console.log(`
Numero 1 = ${num1}
Numero 2 = ${num2}
A soma deles é ${sum(num1, num2)}
 `);

