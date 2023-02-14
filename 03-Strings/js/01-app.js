// Los strings o cadenas de texto representan un Texto que se puede asignar a una variable
// existen 3 formas de crearlos que son más populares.


// Las otras 2 formas crean lo que se conoce como una cadena primitiva
// const producto = 'Monitor 20 Pulgadas';
// const producto2 = String('Monitor 24 Pulgadas');


// // La siguiente forma es menos común
// const producto3 = new String('Monitor 30 Pulgadas'); // Esto crea un objeto cadena

// console.log(producto);
// console.log(producto2);
// console.log(producto3);

// Veamos algunas reglas para crear los strings:
const producto = 'Monitor 20 Pulgadas'; // Utiliza comillas sencillas
const producto2 = "Monitor 20 Pulgadas"; // Utiliza comillas o dobles

// pero nunca las mezcles porque dara un error
// const producto3 = "Monitor 20 Pulgadas';

// Para poner comillas dentro del string, ejemplo con Pulgadas
const producto4 = "Monitor 24\"";

console.log(producto4);