// Similar a Freeze, existe otro object method llamado Seal
// A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...

"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// Seal = Sellar... seal sella el objeto
Object.seal(producto);

// Se pueden reasignar
producto.nombre = 'Tablet';

// Pero no eliminar
delete producto.precio; // Error

// Tampoco se pueden añadir nuevas
producto.imagen = "imagen.jpg"; // Error

// Verificar si un objeto esta sellado
console.log(Object.isSealed(producto)) // true

console.log(producto);

