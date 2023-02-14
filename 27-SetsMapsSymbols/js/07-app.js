// Generador

// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de la palabra function

function *crearGenerador() {
    // Yiel es nuevo también en es6 y son los valores que podemos utilizar para iterar...
    // Hay todo tipo de elementos
    yield 1;
    yield 'Nombre';
    yield 3 +3;
    yield true;
}

// Se llaman como funciones normales pero retornan un iterador
let iterador = crearGenerador();

// Un generador cuando no se utiliza se queda dormido

// Con next() podemos iterar sobre el generador ( despierta y vuelve a suspended )
// Con .value accedemos al valor
// next().done nos regresa si ha llegado al final (true) o no (false)
console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );
console.log( iterador.next().value );

// Crear el generador
function *nuevoGenerador( carrito ) {

    for( let i = 0; i < carrito.length; i++) {

        yield carrito[i];

    }
}

// carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorrer el iterador
iterador = nuevoGenerador(carrito);

console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
