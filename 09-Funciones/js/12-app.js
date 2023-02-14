// ForEach y Map con arrow functions...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Forma normal con function
// const nuevoArray = carrito.map( function(producto) {
//     return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
//  });

 // Forma reducida con Arrow function
const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} `)

// Arrow function en el forEach
carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} `));

// Imprime el arreglo
console.log(nuevoArray);

// En los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.

