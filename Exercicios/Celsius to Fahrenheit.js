/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/


// transformDegree('50F')
let transformDegree = (degree) => {
    /* 
    Verificando se celsius e fahrenheit existem 
    usando o includes e deixando tudo maiusculo
    com o toUpperCase
    */
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    /* 
    Se celsius e fahrenheit não existem foi digitado
    um outro caractere que não seja 'C' ou 'F'
    */
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error ('Grau não identificado')
    }

    // Convertendo fahrenheit para celsius
    let updatedDegree = Number(degree.toUpperCase().replace('F',''))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9 
    let degreeSingn = '°C'

    
    // Caso seja celsius, converta para fahrenheit
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('C',''))
        formula = celsius => celsius * 9/5 + 32
        degreeSingn = '°F'
    }
    
    return formula(updatedDegree) + degreeSingn
}

try {
    console.log(transformDegree('10C'));
    console.log(transformDegree('50F'));
} catch (error) {
    console.log(error.message);
    
}