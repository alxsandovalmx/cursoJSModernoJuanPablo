// Closure

// En JavaScript los Closures son creados cada que una función se crea...

// Pero un closure es una forma de acceder a una función o valor, desde el exterior...

/*
const cliente = 'Alexis';

function mostrarCliente () {

    const cliente = 'Pablo';

    console.log( cliente );

}

console.log( cliente ); // Muestra Alexis
mostrarCliente(); // Muestra Pablo
*/

// ¿Cómo acceso a pablo desde afuera? para eso se usa un closure

const obtenerCliente = () =>  {

    const nombre = "Pablo";

    function muestraNombre() {

        console.log( nombre );

    }

    return muestraNombre;
}
  
// Recibe una funcion
const cliente = obtenerCliente();

// Ejecuta la funcion
cliente();
