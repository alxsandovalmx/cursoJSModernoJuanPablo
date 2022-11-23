// Funciones comunes en el proyecto

// Variables
// DB sera una instancia de la conexion a la BD para el uso de todos los metodos disponibles
let DB;

// Selectores
const formulario = document.querySelector ('#formulario');

// La funcion se encarga de la conexion a la BD
function conectarDB(){

    // Crear BD en Version 1.0
    const abrirConexionBD = window.indexedDB.open('crm', 1);

    // Catch de Errores
    abrirConexionBD.onerror = function () {

        console.log( 'Hubo un error al abrir la conexion a la BD' );

    };

    // Success de la creacion de la BD
    abrirConexionBD.onsuccess = function () {

        DB = abrirConexionBD.result;

    }

}

// Funcion para mostrar mensajes en HTML
function imprimirAlerta( mensaje, tipoMensaje ) {
    
    // Para evitar muchos mensajes de error
    const alerta = document.querySelector ('.alerta');

    if ( !alerta ) {

        // Crear la alerta como un DIV
        const divMensaje = document.createElement ('DIV');
        // Se agregan clases al DIV
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');

        if ( tipoMensaje === 'error' ) {

            // Clases de error
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            
        }else{

            // Clases de exito
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');

        }

        // Se agrega el contenido del mensaje
        divMensaje.textContent = mensaje;
        // Se agrega el DIV al formulario como su hijo
        formulario.appendChild( divMensaje );

        // Se quita la alerta despues de 3 segundos
        setInterval(() => {
            
            divMensaje.remove();

        }, 3000);
    }
}

