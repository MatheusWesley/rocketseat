/*
Mostrando as informações das variaveis usando
Concatenação e Interpolação

*/

// Declarando variaveis
let name, age, isHuman;
name = "Matheus";
age = 26;
isHuman = true;

// Exibindo usando contatenação
console.log(
'Nome: ' + name + 
' Idade: ' + age +
' Humanidade: ' + isHuman
);

// Exibindo usando interpolação
console.log(`
Nome: ${name}
Idade: ${age}
Humanidade: ${isHuman}
`);

