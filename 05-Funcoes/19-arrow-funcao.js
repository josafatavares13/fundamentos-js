function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução 

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow funcion se comporta como expressão
// operador maior ou igual que 
// >= 

console.log(somaNumerosPequenos(10,2));

// A principal estrutura condicional é if, que podemos traduzir literalmente 
// como “se”:
// if (condicao) {
//     // código a ser executado
//    }

// A condicao é sempre uma expressão que deverá ser avaliada e retornar true 
// ou false (ou seus equivalentes “truthy” ou “falsy”). O bloco de código 
// dentro do if só será executado caso a expressão retorne true ou um valor 
// “truthy”. Por exemplo:
const num = 10;

if (num === null) {
 console.log('número não fornecido');
}

// É possível usar os operadores AND (&&) ou OR (||) para executar o código no
// if caso uma das condições for verdadeira, ou as duas:

if (num > 10 || !num) {
 console.log('número não válido');
}
// O console exibe a mensagem corretamente, pois uma das condições foi atendida 
// e retornou true (num > 10). Usamos o operador lógico ||, or 
// (ou ou em português) para especificar que a condição do if será validada se
// apenas uma das condições for verdadeira, mas não necessariamente todas.

// Também é possível usar o operador lógico && (and ou e em português) para 
// especificar que a condição do if será validada apenas se todas as condições 
// retornarem true:


if (num > 10 && num < 20) {
 console.log('número válido');
}

// Outra forma de condicional muito utilizada é adicionar a cláusula else para
//  ser executada quando a condição do if retorna false. Podemos ler if…else como 
//  “se… senão”, como por exemplo “se uma dada condição for verdadeira (true) 
//  execute um determinado código; senão, execute outro código”.
function verificaNumero(numero) {
    if (numero > 10) {
         return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}

console.log(verificaNumero(9)) //número não é maior que 10

// A condicional if…else vai executar um bloco de código entre duas 
// possibilidades, dependendo do resultado da expressão que é passada como 
// condição do if. Porém, em alguns casos é necessário mais de duas opções de
// fluxo para o código; para estes casos existe a cláusula else if:


if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}