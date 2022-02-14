/*
Revisando Objects e Array

*/

// Criando Object
const person = {
    name: 'Matheus',
    age: 30,
    weight: 52.2,
    isAdmin: true,
}

// Imprimindo Object
console.log(person.name);


// Array

const animals = [
   'Lion',
   'Monkey',
   // Objeto dentro do array
   {
       name: 'Cat',
       age: 12
   }
]

console.log(animals[0]);
console.log(animals[2].name);