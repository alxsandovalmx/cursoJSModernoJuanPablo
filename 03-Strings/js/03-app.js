// Veamos como concatenar o unir 2 textos o variables:
const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

console.log(producto.concat('En Descuento')); // Concactenar un string
console.log(producto.concat(precio)); // Concactenar una variable

// Otras formas de concatenar:
console.log(producto + precio); 
console.log(producto +  "Con un precio de " +precio); 
console.log("El Producto" + producto +  " tiene un precio de " + precio); // Esta forma se puede complicar
console.log("El Producto" , producto ,  " tiene un precio de ",  precio); // Otra forma

// ES6 trajo consigo una mejor forma de concatenar variables que es con algo llamado Template String o template literal
// Uso del backtick ` ${} `

console.log(`El Producto ${producto} tiene un precio de ${precio}`);