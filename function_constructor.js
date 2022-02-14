/*
functions
    constructor
    = É como se fosse um molde para objetos
*/

// 
function Person(name) {
    this.name = name;
    this.walk = () => {
        return this.name + " está andando."
    },
    this.job = () => {
        return this.name + " está trabalhando."
    },
    this.sleep = () => {
        return `${this.name} está descansando.`
    }
};
const math = new Person("Matheus")

console.log(math.sleep());