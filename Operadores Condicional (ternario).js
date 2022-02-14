/*
Expressões e Operadores
    - Operadores Condicional (ternario)
*/
/*
// Terei café?
// - USANDO LOGICOS -
console.log('USANDO OP LOGICOS');
const cafe = {
    leite: false,
    pao: true
}

// AND
console.log(
    cafe.leite && cafe.pao ? 'Terei café!' : 'Sem café!'
    );

// OR
console.log(
    cafe.leite || cafe.pao ? 'Terei café!' : 'Sem café!'
    );

    
// Posso dirigir?
// - USANDO COMPARARÇÃO -
console.log('USANDO OP COMPARAÇÃO');
const person = {
    nome: 'Matheus',
    idade: 26
}

// maior igual >=
console.log(
    person.idade >= 18  ?
    person.nome + ' você pode dirigir!' :
    person.nome + ' você é menor de idade!'
    );

*/

// USANDO CONSTRUCTORS

function People (name, age) {
    this.name = name;
    this.age = age;

    this.maiorIdade = () => {
        return age >= 26 ? name + ' é maior de idade' :
                           name + ' é menor de idade'
    }
    this.cafe = (leite, pao) => {
        return leite && pao ? 'Tomar café' :
                              'Sem café'                  
    }
}

let math = new People("Matheus", 17)
let leite = true;
let cafe = true;
console.log(math.cafe(leite = leite,cafe = cafe));
    


