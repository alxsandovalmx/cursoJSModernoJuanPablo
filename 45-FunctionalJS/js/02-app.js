// Pasar funciones como argumentos..

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

// Se pasa una funcion como argumento
const sumarOmultiplicar = fn => fn(10, 20);

console.log( sumarOmultiplicar( sumar ) ); // 30
console.log( sumarOmultiplicar( multiplicar ) ); // 200

