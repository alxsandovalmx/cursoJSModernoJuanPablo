// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

// Convertir de Strings a Números flotantes o Enteros

// Convertir de String a Número
console.log(Number.parseInt(numero1)); 

// Convertir a número con decimales ( float )
console.log(Number.parseFloat(numero2)); 

// Regresa NaN (Not is a Number)
console.log(Number.parseInt(numero3)); // "Uno"

// Revisar si un número es entero o no
console.log(Number.isInteger(numero4) ); // true

// Revisar si un número es entero o no
console.log(Number.isInteger(numero3) ); // false

// Convertir String a numero
console.log(numero4.toString()); // "20"

// Saber que tipo de dato es
console.log( typeof numero1 ); // String