function minhaFuncao(param){
    // bloco de código
}

minhaFuncao("param")

// expressão de função 

const soma = function(num1, num2)  {return num1 + num2}
console.log(soma(1,1))

console.log(apresentar())
function apresentar(){
    return "Olá";
}

// diferença principal: HOISTING
// função e var são "listadas" no topo do arquivo.

// Erro
console.log(soma2(1,1))
const soma2 = function(num1, num2)  {return num1 + num2}