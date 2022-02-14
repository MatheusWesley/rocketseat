/*
functions
    callback
*/

sayMyName = (name) => {
    console.log("Executando a callback");
    name(); // definindo argumento como função
    console.log("Fim da callback");
}

// Exemplo callback (Chamando de volta)
sayMyName(
    () => {
        console.log("Estou em uma callback");
    }
)