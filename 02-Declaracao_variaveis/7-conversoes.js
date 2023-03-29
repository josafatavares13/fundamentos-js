// tipo de dado 
// booleanos 

// conversão implícita 

const numero = 456;
const numeroString = "456";
const numeroString2 = Number("456");
const numeroString3 = Number("456a");
//Number()
//String()
console.log(numero == numeroString); //true
console.log(numero === numeroString); //false
console.log(numero + numeroString);
console.log(numero + Number(numeroString))
console.log(numero + numeroString2);
console.log(numero + numeroString3); // Nan


// conversão explicita 
