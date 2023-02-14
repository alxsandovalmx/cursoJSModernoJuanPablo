// En la programación funcional las funciones son valores.

// Javascript es un buen candidato a ser un lenguaje funcional porque podemos tener algo asi:

const suma = function(a, b) {
    return a + b;
}

// Es por eso que es un lenguaje se le conoce como first-class functions, ya que pueden ser creadas como si fueran variables, de enteros, numeros o booleans

const resultado = suma; // Aquí la función es valor como si fuera un string..

console.log ( resultado(20,30) );
console.log ( suma(20,30) );

