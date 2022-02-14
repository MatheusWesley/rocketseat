/*
Manpulando Arrays
*/


// Criando com construtor
//let myArray = new Array('a', 'b', 'c');
//console.log(myArray);

// Contando elementos do array
/*
let myArray = [
    'Texto',
     10,
     {info: "Sou um objeto"},
     func = () => {
         return "Sou uma função"
     },
    ];
console.log(myArray.length);
*/

// Transformar uma string em um array
//let word = "manipulação"
//console.log(Array.from(word));

let techs = ["html","css","js"];

// adicionando no inicio
techs.unshift('sql');
// adicionando no fim
techs.push('nodejs');
//removendo do fim
//techs.pop()
// remove do inicio
//techs.shift()

// achando um item no array
let index = techs.indexOf('html');

//removendo o item achado
techs.splice(index, 1);


console.log(techs);