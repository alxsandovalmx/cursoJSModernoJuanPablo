// Comparar 2 valores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log(numero1 == numero3); // False
console.log(numero1 == numero2); // True


// Typeof
console.log( typeof numero1 ); // number
console.log( typeof numero2 ); // String

// Operador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2 ); // False
console.log(numero1 === parseInt(numero2) ); // True

// Diferente a 
console.log(numero1 != numero3); // True
console.log(numero1 != numero2); // False
console.log(numero1 !== numero2); // True
console.log(numero1 !== parseInt(numero2)); // False
