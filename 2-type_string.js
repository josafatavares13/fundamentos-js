const texto1 = "Hello World!";
const texto2 = 'Hello World!';
const senha = 'SenhaSuperSegura123';
const StringDeNumeros = "123456789";

const citacao = "O Josafá disse 'oi'";
const citacao2 = "Meu nome é ";
const meuNome = "Josafá"
console.log(citacao);

// concatenação (+)

console.log(citacao2 + meuNome )

// Template string ou template literal

// codificação de strings
//https://en.wikipedia.org/wiki/List_of_Unicode_characters

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// usando métodos de string nativos do JavaScript 
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// conta o numero de caracteres 

const senha2 = "minhaSenha123";
console.log(senha.length); // 13 caracteres
