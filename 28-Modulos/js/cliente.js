"use strict";

// 1) El Problema...
// const nombreCliente =  'Juan';
// let ahorro = 200;

// 2) Los IIFE son funciones que se ejecutan inmediatamente que son leidas...

// Esta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente...

(function() {
    const nombreCliente =  'Juan';
    let ahorro = 200;

    console.log( 'Desde un IIFE' );
    // El problema es que implementar un IIFE, si evita que nuestro código se mezcle con otro, pero el problema que tendriamos es que si queremos tener un código más ordenado y separar en distintos archivos sería imposible hacerlo.

    // En este caso la forma de hacerlo seria con...
    window.nombreCliente =  'Juan';

    // Lo cual es una solución, he visto proyectos grandes que están registrados de esa forma para mantener acceso a las funciones y métodos  
})();

// Para ello son muy útiles los modulos y 2 palabras, export e import...

// Veamos un ejemplo de export...
export const nombreCliente =  'Juan'; // Esto nos va amarcar un error, nos dirá que los exports solo funcionan en modules...

// Hay que abrir el index.js y declararlo con type="module"

// Importar y exportar multiples valores
export const nombreCliente =  'Juan';
export const ahorro = 200

// Exportar e importar funciones...

// También puedes exportar e importar funciones...
 
// 3 ) 

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// 4)
// Exportar una clase
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}



// 6)  EXPORT DEFAULT

// Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no...

export default function funcion() {
    console.log('Función por default')
}

export default function () {
    console.log('Función por default')
}

