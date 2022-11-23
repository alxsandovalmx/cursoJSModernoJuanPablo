// Proyecto CRM de Clientes
// Este proyecto usa Tailwind como framework CSS

// Creacion de un IIFE que se ejecuta automaticamente
// Tambien nos ayuda a mantener el scope localmente evitando conflictos con otros archivos JS

( function () {
    
    // Evento al cargar la pagina
    document.addEventListener('DOMContentLoaded', () => {

        // Abre una conexion a la BD
        conectarDB();
        // Valida el Cliente
        formulario.addEventListener('submit', validarCliente);

    });

    // Funcion para validar los datos del input de Nuevo Cliente
    function validarCliente( e ) {

        // Prevnimos la accion por defecto del submit
        e.preventDefault();

        // Manejamos manualmente la accion del submit
        // Leemos todos valores de los inputs
        const nombre = document.querySelector ('#nombre').value;
        const email = document.querySelector ('#email').value;
        const telefono = document.querySelector ('#telefono').value;
        const empresa = document.querySelector ('#empresa').value;

        // Validacion de los campos
        if ( nombre === '' || email === '' || telefono === '' || empresa === '' ){

            // Se muestra el DIV de error
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            // Termina la ejecucion para no seguir ejecutando las siguientes lineas
            return;

        }

        // Crear un objeto literal con la informacion
        // Object Literal Enhacement
        // Cuando la llave y el valor son iguales puede escribirse una sola palabra
        const cliente = { nombre, email, telefono, empresa, id: Date.now() };

        // Se crea un nuevo cliente despues de haber validado las entradas
        crearNuevoCliente( cliente );

    }

    function crearNuevoCliente( cliente ) {

        // Insertar registro en la BD usando la instancia a la BD creada previamente
        // Crea una transaccion, ( [BD], modo )
        const transaction = DB.transaction( ['crm'], 'readwrite' );

        // Crea el Object Store para las transacciones con la BD 'crm'
        const objectStore = transaction.objectStore('crm');

        // Metodo para agregar un elemento ( .add ) a la BD
        // let peticion = objectStore.add( objetoCita );
        objectStore.add( cliente );
 
        // En caso de que ocurrio algun error
        transaction.onerror = function( event ) {

            imprimirAlerta('Hubo un error en la transacción al Agregar', 'error');

        };

        // Cuando se completa la transaccion correctamente
        transaction.oncomplete = function( event ) {

            console.log('Transacción Completada - Cliente agregado');

            // Mensaje de agregado correctamente
            imprimirAlerta('Se agrego el Cliente correctamente');   
            
            // Despues de 3 segundos nos lleva a otra url
            setTimeout(() => {
                
                // Nos redirecciona
                window.location.href = 'index.html';

            }, 3000);
        };
    }
})();
