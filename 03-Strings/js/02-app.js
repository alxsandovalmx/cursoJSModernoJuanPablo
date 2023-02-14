// Veamos algunos métodos existentes en los strings o cadenas de Texto:

const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD';

console.log(producto.length); // Conocer el tamaño de una cadena, length es de los muy pocos métodos que no usan () y es más que nada porque no es un método como tal sino una propiedad.

// IndexOf
console.log(producto.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

// Includes
// Regresa true o false
// Es sensitive case: sentible a mayusculas y minusculas
console.log(producto.includes('Monitor')); // Conocer si un texto existe
console.log(producto.includes('monitor')); // Conocer si un texto existe
