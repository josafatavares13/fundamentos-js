/* var é uma palavra-chave utilizada para declarar uma variável. 
Antigamente, var era a única maneira de declarar variáveis em JavaScript,
antes do surgimento das palavras-chave let e const.
Quando você declara uma variável com var, ela é elevada ao topo do escopo atual,
 o que é conhecido como "hoisting". Isso significa que, mesmo que a declaração
 da variável seja feita em algum ponto posterior no código, a variável será 
 considerada definida desde o início do escopo em que foi declarada.

Outra característica do var é que ele tem um escopo de função. Isso significa 
que, se uma variável for declarada dentro de uma função, ela não será acessível
fora da função. No entanto, se uma variável var for declarada fora de uma 
função, ela será acessível em todo o escopo global.

Porém, é importante ressaltar que o uso de var pode levar a problemas 
de escopo e de redeclaração de variáveis. Por isso, é recomendado o uso 
de let e const no lugar de var.*/

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;

// let => valor pode muda
// oque está dentro de {} é um bloco

let forma = 'retângulo';
let altura2 = 5;
let comprimento2 = 7;
let area_2

if (forma === 'retângulo'){
    area_2 = altura2 * comprimento2;
} else {
    area_2 = (altura2 * comprimento2) / 2;
}
console.log(area_2)

// const => valor não pode muda

const forma2 = 'triângulo';
const altura3 = 5;
const comprimento3 = 7;
let area_3;

if (forma2 === 'quadrado'){
    area_3 = altura3 * comprimento3;
} else {
    area_3 = (altura3 * comprimento3) / 2;
}
console.log(area_3)
