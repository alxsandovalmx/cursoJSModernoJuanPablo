// De aquí en adelante estaremos viendo una serie de métodos de arreglos
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500}
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
console.time ( 'for' );
for( let i = 0; i < carrito.length; i++ ){
    console.log( `Articulo: ${ carrito[i].nombre } Precio: $ ${carrito[i].precio} ` )
}
console.timeEnd('for');

// forEach
// Cada arreglo tiene el metodo forEach
console.time ( 'forEach' );
carrito.forEach( function( producto ) {

    console.log( `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} ` )

});
console.timeEnd('forEach');

console.time ( 'forEach arrow' );
carrito.forEach(  producto => {

    console.log( `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} ` )

});
console.timeEnd('forEach arrow');

// Mejor el forEach arrow
