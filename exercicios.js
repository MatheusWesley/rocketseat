/*
Revisando Objects e Array

*/

// Criando Object

//let weigth;
//console.log(typeof weigth);

/*
let name = "Matheus";
let age = 26;
let weigth = 52.5;
let isSubscribed = true;
*/

let student = {
    name: 'Matheus',
    age: 26,
    weigth: 52.5,
    isSubscribed: true
};

const luis = {
    name: 'Luis',
    age: 28,
    weigth: 70.2,
    isSubscribed: true
};

//console.log(`O estudante ${student.name} tem ${student.age} anos e pesa ${student.weigth}.`);

let students = [
    student,
    luis
];

// students[1] = luis;


console.log(students[1]);