/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Cria uma variavel que armazena numero total de categorias
const totalCagories = booksByCategory.length
// printa total de categorias
console.log('Total de categorias: ' + totalCagories);

// Função que conta a quantidade de livros por categoria
countBooks = () => {
    for (let objCatagory of booksByCategory) {
        console.log('Total de livros da categoria ' + objCatagory.category + ' é ' + objCatagory.books.length);
    }
}
// Printa total de livros por categoria
countBooks();


// Função que conta a quantidade total de autores
let countAuthors = () => {
    let authors = [];
    for (objCatagory of booksByCategory){
        for (book of objCatagory.books){
            if (authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    let totalAuthors = authors.length
    console.log('Total de autores: ' + totalAuthors);
}
// Printa total de autores
countAuthors();


// Função que mostra os livros de um autor determinado
const booksOfAuthor = (authorName) => {
    let books = []
    for (let objCatagory of booksByCategory) {
        for (book of objCatagory.books) {
            if (book.author === authorName) {
                books.push(book.title);
            }
            
        }
    }

    console.log(`Livros do autor ${authorName}: \n${books.join('\n')}`);
}

// Printa livros de um autor determinado
booksOfAuthor('Augusto Cury');