// // tipo de dado 
// // booleanos 

// // conversão implícita 

// const numero = 456;
// const numeroString = "456";
// const numeroString2 = Number("456");
// const numeroString3 = Number("456a");
// let telefone = 12341234;
// let telefone2 = 12341234;
// //Number() e String()

// console.log(numero == numeroString); //true
// console.log(numero === numeroString); //false
// console.log(numero + numeroString);
// console.log(numero + Number(numeroString))
// console.log(numero + numeroString2);
// console.log(numero + numeroString3); // Nan
//  // teremos a conversão do número 12341234 para uma string “12341234” 
//  //e assim poderemos fazer a concatenação entre as strings
// console.log("O telefone é " + String(telefone));
// // o .toString() é uma outra forma para  fazer essa conversão, 
// //que é mais parecida com outras linguagens de programação.
// console.log("O telefone é " + telefone2.toString()); 

// // Number()
// // Vamos calcular a área de um retângulo
// let largura = "10";
// let altura = "5";
// // teremos a conversão de String para números,
// // possibilitando a realização da multiplicação
// console.log(Number(largura) * Number(altura)); 
// // teremos a conversão de String para números realizado usando 
// // o + antes das variáveis
// console.log( + largura * + altura); 

// // Booleana para String
// let usuarioConectado = false;
// // teremos a conversão da booleana para string, 
// console.log(String(usuarioConectado));// nesse caso teremos uma string “false”.
// usuarioConectado = true;
// console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// let meuNome = "leonardo";
// // como a variável meuNome não contém apenas números ele retorna o erro NaN 
// //(Not a Number, não é número);
// console.log(Number(meuNome)); 
// console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
// teremos a conversão da booleana para número, sendo que false 
// (falso) retorna o número 0.
console.log(Number(usuarioConectado2)); 
usuarioConectado2 = true;
// agora teremos a conversão de true (verdadeiro) para o número 1.
console.log(Number(usuarioConectado2)); 

// conversão explicita 
