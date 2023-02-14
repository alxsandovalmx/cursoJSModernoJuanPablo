// En este video estaremos viendo 3 métodos más .replace, .slice y .repeat

// Replace
// Nos sirve para reemplazar caracteres
const producto = 'Monitor 20 Pulgadas';
console.log(producto.replace("20", "24"));
console.log(producto.replace('Pulgadas', '"'));

// Slice te va a permitir extraer una parte de una cadena
console.log( producto.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto.slice(8));// Con 1 valor, corta del el 8 al fin
console.log(producto.slice(2, 10)); // cortar desde 2 hasta el 10

console.log(producto.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras... no hace nada

// Existe uno similar a Slice que se llama substring
console.log( producto.substring(0, 10) );

// Si el 1 valor es mayor al 2, ordena los argumentos de >
console.log( producto.substring(2, 1) );  // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)

// Si has visto algunos sitios web muestran tu primer letra de tu nombre:
const nombre = "Juan";
console.log(nombre.substring(0,1)); // Toma el 1er caracter
console.log(nombre.charAt(0)); // Hace lo mismo que lo anterior

