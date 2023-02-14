// Otro Array Method que quiero mostrarte es filter...

// Filter va a crearte un arreglo basado en un parametro que es evaluado..

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

let resultado = carrito.filter( producto => producto.precio > 400 ); // Todos los mayores a 400 - añadir  && producto.precio < 600
let resultado2 = carrito.filter( producto => producto.nombre === 'Celular'  ); // Traerte el celular
let resultado3 = carrito.filter(producto => producto.nombre !== 'Laptop'); // Todos menos la laptop

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

// Filter es en mi opinión el más util y el más utilizado!
