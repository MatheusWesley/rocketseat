/*
Manpulando Strings e Numeros
*/

//let word = "12345";
//let number = 12345;

// Transformando String em numero
//console.log(Number(word));
// Transformando numero em String
//console.log(String(number));

// Mudando o . por , e como o numero vai ser exibido 123.12
//let number = 123.123;
//console.log(number.toFixed(2).replace(".",","));

// Transformando letrar maiuscolas em minusculas e virse versa
//let word = "Uma pequena frase.";
//console.log(word.toLowerCase());

/*
Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.
*/

// Separando usando a function split()
//let word = "Uma pequena frase.";
//let wordArray = word.split(" ");
//console.log(wordArray);
// Juntando a variavel com a function join()
//let wordArrayJoin = wordArray.join("_");
//console.log(wordArrayJoin);
//console.log(wordArrayJoin.toUpperCase());

// Verificar se no texto tem uma palavra

let phrase = "Eu amo viver o amor!";

if (phrase.includes("amor") === true){
    console.log("Você está amando."); 
} else {
    console.log("Você não está amando."); 
}

