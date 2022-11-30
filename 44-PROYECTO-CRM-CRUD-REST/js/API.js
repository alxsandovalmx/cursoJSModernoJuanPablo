// API

// Snippets para aprender
// enf = export const functionName = (params) => { ... };   // Function Expression
// imd = import {  } from 'module';
// edf = export default function app(params) { ... };       // Function Declaration   

/*

// Json-server soporta todos los verbos HTTP (Peticiones) - Herramienta para aprender REST API
    GET    /posts
    GET    /posts/1
    POST   /posts
    PUT    /posts/1
    PATCH  /posts/1
    DELETE /posts/1

*/

const url = 'http://localhost:4000/clientes';

// Creacion de un nuevo cliente
// Metodo POST
export const nuevoCliente = async cliente => {

    try {

        // Para crear un cliente se usa el verbo POST y la configuracion
        await fetch( url, {

            method: 'POST', // Esto es independiente del backend
            body: JSON.stringify( cliente ), // Transforma el objeto en String
            headers: {
                'Content-Type': 'application/json' // Tipo de contenido, archivos: multipart/form-data
            }

        });

        // Despues de agregar el cliente se redirecciona index
        window.location.href = 'index.html';

    } catch (error) {
        console.log( error );
    }

};

// Obtiene todos los clientes
// Metodo GET
export const obtenerClientes = async () => {
    
    try {
        
        // Fetch por default manda el verbo GET
        const resultado = await fetch( url ); // Esto es independiente del backend
        const clientes  = await resultado.json();
        return clientes;
        
    } catch (error) {
        console.log( error );
    }
};

// Funcion que elimina un cliente
// Metodo DELETE
export const eliminarCliente = async id => {
    
    try {
        
        // Para eliminar un cliente se usa el verbo DELETE y la configuracion
        await fetch( `${url}/${id}`, {

            method: 'DELETE', // Esto es independiente del backend

        });
        
    } catch (error) {

        console.log( error );
        
    }

};

// Obtiene los datos de un nuevo cliente
// Metodo GET
export const obtenerCliente = async id => {
    
    try {

        // Fetch por default manda el verbo GET
        const resultado = await fetch( `${url}/${id}` ) // Esto es independiente del backend
        const cliente   = await resultado.json();

        return cliente;
        
    } catch (error) {
        console.log( error );
    }
};

// Actualiza un cliente
// Metodo PUT
export const editarCliente = async cliente => {

    // console.log( cliente );

    try {
        // Para editar un cliente se usa el verbo PUT y la configuracion
        await fetch(`${url}/${cliente.id}`, { 
            method: 'PUT', // Esto es independiente del backend
            body: JSON.stringify( cliente ), // Transforma el objeto en String          
            headers: {
                'Content-Type': 'application/json' // Tipo de contenido, archivos: multipart/form-data
            }
        });

        // Despues de actualizar el cliente se redirecciona index
        window.location.href = 'index.html';
        
    } catch (error) {
        console.log( error );
    }
    
};

