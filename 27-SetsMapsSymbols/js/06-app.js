// Iterators - Para crear un iterador propio

function crearIterador( carrito ) {

    let i = 0;

    return {

        siguiente: () => {

            let fin = ( i >= carrito.length ); // Hemos llegado al final
            let valor = !fin ? carrito[i++] : undefined; // Posicion Carrito[0,1,2,3...]

            return {
                fin: fin, // fin,
                valor: valor // valor
            };
        }
    };
};

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorrerCarrito = crearIterador( carrito );

console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );

