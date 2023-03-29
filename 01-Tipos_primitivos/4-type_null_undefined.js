// O null é um tipo especial, pois pode ser traduzido como “ausência de valor” 
// e pode ser atribuído como valor de uma variável:

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//Nesse caso, qual seria a diferença entre os dois casos abaixo?
let input2 = null;
let input3;

console.log(input2); // null
console.log(input3); // undefined
 
/*Este tipo também representa “ausência de valor”, porém de uma outra forma:  
usualmente, enquanto null é um valor atribuído a uma variável que existe e 
foi iniciada, undefined se refere ao valor de uma variável que não foi 
inicializada (ou seja, não foi atribuído nenhum valor a ela).

undefined também é o valor retornado por uma função que não tem cláusula 
return.*/

console.log(null == undefined); // true
console.log(null === undefined); // false
// comparação "===" o tipo
//"==" (dois sinais de igual, comparando apenas o valor e não o tipo),