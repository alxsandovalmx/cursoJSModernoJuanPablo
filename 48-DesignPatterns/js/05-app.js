// Module Pattern - Organizar código
// Module, probablemente el más popular de todos, ya lo hemos utilizado...
// Su Sintaxis era un poco diferente antes, ahora ya tenemos modules en JavaScript,
// por lo tanto ya se siente como una solución más natural, ya que antes parecia algo muy sacado de la manga.

const mostrarCliente = nombre => {
    console.log( nombre );
}

export default mostrarCliente
// Se importa el modulo y se utiliza la funcion

/*
// Version antigua de Module
const modulo1 = ( function(){

    const nombre = 'Juan';

    function hola () {
        console.log( 'Hola' );
    }

    return {
        nombre,
        hola
    }

})();

// En otro archivo
console.log( modulo1.nombre );
module1.hola();
*/
