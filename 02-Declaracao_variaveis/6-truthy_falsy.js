// bollean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

//0 => false
//1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// undefined => indefinida
// null => vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "altura";

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof minhaVar)
console.log(typeof varNull)

// o varNull era pra ser Null, mas é um objeto isso é um bug em js.