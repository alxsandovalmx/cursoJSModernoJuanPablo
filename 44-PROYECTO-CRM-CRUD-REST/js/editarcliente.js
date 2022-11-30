// editarcliente.js se encarga de obtener los datos del cliente y permitir su actualizacion

// Imports
import { obtenerCliente, editarCliente } from './API.js'; // Cuando no se una un build debe llevar .js
import { mostrarAlerta, validarInputsCliente } from './funciones.js'; 

// IIFE
(function (){

    // Selectores
    const nombreInput   = document.querySelector ('#nombre');
    const emailInput    = document.querySelector ('#email');
    const empresaInput  = document.querySelector ('#empresa');
    const telefonoInput = document.querySelector ('#telefono');
    const idInput       = document.querySelector ('#id');
    
    // Eventos
    // Evento inicial al cargar la pagina
    document.addEventListener('DOMContentLoaded', async ()=>{

        // URLSearchParams nos permite ver que parametros hay disponibles en la URL
        const parametrosURL = new URLSearchParams( window.location.search );

        // Metodo para obtener un elemento de la url, en este caso es el 'id'
        const idCliente = parseInt(parametrosURL.get("id"));

        // Consulta un cliente
        const cliente = await obtenerCliente( idCliente ); 

        // Mostrar cliente
        mostrarCliente( cliente );

        // Submit al formulario
        const formulario = document.querySelector ('#formulario');
        formulario.addEventListener('submit', validarCliente );

    });

    // Muestra los datos en el HTML del cliente obtenido
    function mostrarCliente ( cliente ) {
    
        // Destructuring
        const { nombre, email, empresa, telefono, id } = cliente;

        // Llena el input con el valor de la respuesta
        nombreInput.value   = nombre;
        emailInput.value    = email;
        empresaInput.value  = empresa;
        telefonoInput.value = telefono;
        idInput.value       = id;
    
    }

    // Funcion para validar cliente actualizado
    function validarCliente ( e ) {
    
        // Previnimos la accion por defecto del submit
        e.preventDefault();

        // Validacion de campos vacios
        // Crea un objeto cliente con los valores de los inputs        
        const cliente = {

            nombre      : nombreInput.value,
            email       : emailInput.value,
            empresa     : empresaInput.value,
            telefono    : telefonoInput.value,
            id          : parseInt(idInput.value)

        }

        // console.log( cliente );

        // Si algun campo esta vacio
        if ( validarInputsCliente( cliente ) ){

            // Muestra mensaje en el HTML
            mostrarAlerta( 'Todos los campos son obligatorios' );
            return;

        }
        
        // Reescribe el objeto cliente
        editarCliente( cliente );

    }
})();
