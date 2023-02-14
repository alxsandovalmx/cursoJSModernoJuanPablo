// Como vimos en el video anterior los objetos si se pueden modificar sus valores, veamos como prevenirlo en caso de que sea algo que desees hacer.

"use strict"; // Ayuda a prevenir malas practicas y tener un buen codigo

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// Las propiedades del objeto producto pueden ser modificadas
producto.disponible = false;
producto.imagen = "imagen.jpg"; // Agrega una propiedad

console.log(producto);

// Sin "use strict" lo siguiente seria posible
x = 20;
console.log( x );

// Cuanto activamos el "use strict" tenemos acceso a los Object Methods o Métodos de objetos.

// Pero veamos como prevenir que un objeto sea modificado, para ello utilizaremos freeze, y funciona de la siguiente forma:

// freeze congela el objeto y lo hace actuar como una constante
Object.freeze( producto ); // Freeze toma como argumento el objeto

// Freeze tampoco permite agregar nuevas propiedades
producto.imagen = "imagen.jpg"; // Error

// Tampoco se pueden eliminar propiedades
delete producto.nombre; // Error

// Finalmente si quieres revisar si un objeto esta congelado puedes usar
console.log( Object.isFrozen(producto) ); // true

console.log(producto); 



