// En este video 3 métodos para strings

// Los espacios en blanco dentro de las comillas cuenta
const producto = '        Monitor 20 Pulgadas      '; 

console.log(producto);
console.log(producto.length);

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio
console.log(producto.trimEnd()); // Elimina todos los espacios en blancos del final

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
// Esto se le llama chaining
console.log(producto.trimStart().trimEnd() ); // Cortar en ambas direcciones

// Un método (que ya tiene rato ) es trim que hace lo mismo, elimina en ambas direcciones.
console.log(producto.trim().length);

