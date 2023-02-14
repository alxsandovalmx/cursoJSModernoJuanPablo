"use strict";
// 1) El Problema
// console.log(nombreCliente);

// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas o también si decidimos implementar librerías...

// La solución es agrupar cada archivo en lo que se conoce como un IIFE ( Immediately Invoked Function Expression) ) (irse al otro archivo...)
// Constituye un patrón de diseño usado comúnmente en JS para encapsular un bloque de código dentro de un ámbito local.

// console.log(window.nombreCliente);

// Para leer ese export utilizamos

import { nombreCliente } from './cliente.js';

console.log( nombreCliente ); // También nos va a marcar un error por lo tanto agregamos type="module"  


// Comentar el código anterior...


import { nombreCliente, ahorro }  from './cliente.js';


// Y puedes exportar o importar todo, variables, funciones, classes 



// 3  ) Exportar e importar funciones..


import { nombreCliente, ahorro, mostrarInformacion }  from './cliente.js';
let cliente = mostrarInformacion(nombreCliente, ahorro);
console.log(cliente);
   


// 4 importar una clase

import { nombreCliente, ahorro, Cliente }  from './cliente.js';


let cliente = new Cliente(nombreCliente, ahorro);
console.log( cliente.mostrarInformacion() );


// 5) Importar una clase que usa herencia de otra clase que fue importada

import { Cliente }  from './cliente.js';
import { Empresa } from './empresa.js';

const nombreCliente = 'Juan',
      ahorroCliente = 400;

let cliente = new Cliente(nombreCliente, ahorroCliente);
console.log( cliente.mostrarInformacion() );

const nombreEmpresa = 'Udemy',
    ahorroEmpresa = 1000000000,
    categoriaEmpresa = 'aprendizaje';

let empresa = new Empresa( nombreEmpresa, ahorroEmpresa, categoriaEmpresa );
console.log( empresa.mostrarInformacion() );

// 6 Export default y alias
import funcion from './cliente.js';

funcion();

