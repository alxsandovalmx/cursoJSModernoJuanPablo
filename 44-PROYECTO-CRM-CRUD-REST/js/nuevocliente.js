// nuevocliente.js se encarga de validar los inputs y registrar un nuevo cliente

// Imports
import { mostrarAlerta, validarInputsCliente } from './funciones.js'; // Cuando no se una un build debe llevar .js
import { nuevoCliente } from './API.js';

// IIFE
(function () {
    
    // Selector
    const formulario = document.querySelector ('#formulario');
    
    // Evento
    formulario.addEventListener( 'submit', validarCliente );
    
    // Validacion del formulario
    function validarCliente ( e ) {
    
        // Prevenimos la accion por defecto del submit
        e.preventDefault();

        // Lee el contenido de los inputs
        const nombre    = document.querySelector ('#nombre').value;
        const email     = document.querySelector ('#email').value;
        const telefono  = document.querySelector ('#telefono').value;
        const empresa   = document.querySelector ('#empresa').value;
        
        // Los id los genera automaticamente json-server
    
        // Validacion de campos vacios
        // Object Literal Enhacement con los valores de los inputs
        const cliente = { nombre, email, telefono, empresa }

        // Si algun campo esta vacio
        if ( validarInputsCliente( cliente ) ){

            // Muestra mensaje en el HTML
            mostrarAlerta( 'Todos los campos son obligatorios' );
            return;

        }

        // Validacion aprobada
        nuevoCliente( cliente );

    }
})();
