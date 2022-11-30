// Proyecto CRM CRUD de CLientes con REST y Async Await
// Este proyecto usa Tailwind como Framework CSS

// Imports
import { obtenerClientes, eliminarCliente } from './API.js';

// Snippets para aprender
// enf = export const functionName = (params) => { ... };   // Function Expression
// imd = import {  } from 'module';
// edf = export default function app(params) { ... };       // Function Declaration   

// IIFE
(function(){

    // Selector
    const listado = document.querySelector ('#listado-clientes');

    // Eventos
    document.addEventListener('DOMContentLoaded', mostrarClientes );
    listado.addEventListener('click', confirmarEliminar );    

    // Funciones
    // Funcion que muestra los registros existentes
    async function mostrarClientes () {
    
        // Obtiene todos los clientes
        const clientes = await obtenerClientes(); // Espera hasta obtener los clientes

        clientes.forEach( cliente => {
            const { nombre, email, telefono, empresa, id } = cliente;

            const row = document.createElement ('tr');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;
            
            // Se agrega el HTML creado al contenedor
            listado.appendChild( row );

        });
    }

    // Confirma la eliminacion del cliente
    function confirmarEliminar ( e ) {
    
        // Valida si donde ha hecho click fue en el elemento que tiene la clase eliminar
        if( e.target.classList.contains('eliminar') ){

            // Lee el data-cliente que es el id al que dio clic que esta en el dataset
            const clienteId = parseInt( e.target.dataset.cliente );

            const confirmar = confirm('¿Desea eliminar este registro? ');

            if ( confirmar ) {
                
                // Elimina el Cliente de la REST API
                eliminarCliente( clienteId );

            }
        }
    }
})();    

