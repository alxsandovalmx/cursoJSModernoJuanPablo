// Proyecto CRM de Clientes
// Este proyecto usa Tailwind como framework CSS

// Creacion de un IIFE que se ejecuta automaticamente
// Tambien nos ayuda a mantener el scope localmente evitando conflictos con otros archivos JS
( function () {

    // Selecciona el elemento HTML donde se mostrara la informacion
    const listadoClientes = document.querySelector ('#listado-clientes');

    // Evento al cargar la pagina
    document.addEventListener('DOMContentLoaded', ()=>{

        // Ejecuta la funcion de crear la BD
        crearDB();

        // Carga los cientes que existan en la BD
        if ( window.indexedDB.open('crm',1)) {
            
            obtenerClientes();
        }

        // Evento para eliminar Registros
        listadoClientes.addEventListener('click', eliminiarCliente);

    });

    function eliminiarCliente( e ){

        // Verifica si existe una clase en el lugar donde hemos dado click
        // Esta manera sirve cuando se usa innerHTML
        // Cuando se crea el elemento se puede usar .onclick
        if ( e.target.classList.contains('eliminar') ){

            // Obtiene el valor contenido en el dataset llamado data-cliente
            const idClienteEliminar = Number(e.target.dataset.cliente);

            // Uso de Sweet Alert
            // Confirmamos que el cliente desea eliminar
            // const confirmar = confirm('¿Desea eliminar este Cliente?');
            Swal.fire({
                title: '¿Desea eliminar este cliente?',
                text: "¡Esta acción no puede ser revertida!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminalo!'
            }).then((result) => {

                if (result.isConfirmed) {     
                    
                    // Eliminar registro en la BD usando la instancia a la BD creada previamente
                    // Crea una transaccion, ( [BD], modo )
                    const transaction = DB.transaction( ['crm'], 'readwrite' );

                    // Crea el Object Store para las transacciones con la BD 'crm'
                    const objectStore = transaction.objectStore('crm');

                    // Metodo para eliminar un elemento ( .eliminar ) a la BD
                    // let peticion = objectStore.put( clienteActualizado );
                    objectStore.delete( idClienteEliminar );
            
                    // En caso de que ocurrio algun error
                    transaction.onerror = function( error ) {

                        // Swee alert mensaje de confirmacion
                        Swal.fire({
                            icon: 'error',
                            title: '¡Error - No se puedo eliminar!',
                            toast: true,
                        });                        

                        // imprimirAlerta('Hubo un error en la transacción al Eliminar', 'error');
                        console.log( error );
                    };

                    // Cuando se completa la transaccion correctamente
                    transaction.oncomplete = function( event ) {

                        console.log('Transacción Completada - Cliente Eliminado');

                        // Para eliminar el elemento del HTML vamos al Padre del Padre
                        e.target.parentElement.parentElement.remove();
                        
                        // Swee alert mensaje de confirmacion
                        Swal.fire(
                            '¡Eliminado!',
                            'El cliente ha sido eliminado',
                            'success'
                        )
                    };                    
                }
            });
        }
    }

    // Funcion para crear la BD
    function crearDB ( ) {

        // Abre la BD pero si no existe Crea BD en Version 1.0
        const crearDB = window.indexedDB.open('crm', 1);

        // Catch de Errores
        crearDB.onerror = function () {

            console.log( 'Hubo un error al crear la BD' );

        };

        // Success de la creacion de la BD (Creacion con exito)
        crearDB.onsuccess = function (){

            // La BD se asigna a esta variable
            DB = crearDB.result;

        }

        // Definimos el Schema (Estructura de la BD)
        crearDB.onupgradeneeded = function( e ) {
        
            // Recibibe el resultado de la creacion de DB
            const db = e.target.result;

            // Definimos el Object Store para la definicion del Schema, configuracion 
            const objectStore = db.createObjectStore( 'crm', { 
                keyPath: 'id',  // Indice
                autoIncrement: true
            });

            // Definimos el Schema (Columnas) 
            // nombreColumna, keypath, 3ro los parametros
            // keypath en este caso sera el indice para poder realizar busquedas
            objectStore.createIndex('nombre', 'nombre', { unique: false } );
            objectStore.createIndex('email', 'email', { unique: true } );
            objectStore.createIndex('telefono', 'telefono', { unique: false } );
            objectStore.createIndex('empresa', 'empresa', { unique: false } );
            objectStore.createIndex('id', 'id', { unique: true } );

            console.log( 'BD creada y lista' );

        }
    }

    // Funcion para obtener la lista de clientes y mostrar en el HTML
    function obtenerClientes (){

        // Limpiar el HTML antes de mostrar los clientes
        // limpiarHTML();

        // Abre la BD pero si no existe Crea BD en Version 1.0
        const abrirConexionBD = window.indexedDB.open('crm', 1);

        // Catch de Errores
        abrirConexionBD.onerror = function () {

            console.log( 'Hubo un error al Abrir la BD' );

        };

        // Success de la creacion de la BD (Creacion con exito)
        abrirConexionBD.onsuccess = function (){

            // La BD se asigna a esta variable
            DB = abrirConexionBD.result;

            // Leer el contenido de la BD
            // Crea una transaccion y hace encadenamiento
            // Crea el Object Store para las transacciones con la BD 'crm'
            // let objectStore = DB.transaction( ['crm'], 'readonly' ).objectStore('citas'); 
            // 'readonly' - Para solo leer datos
            const objectStore = DB.transaction( 'crm' ).objectStore('crm');

            // Metodo para abrir un cursor ( .openCursor().onsuccess ) de la BD
            objectStore.openCursor().onsuccess =  function( event ) {

                // Recibe el resultado de la apertura
                const cursor = event.target.result;

                if ( cursor ){

                    // Este cursor ya viene el id
                    const { nombre, telefono, email, empresa, id } = cursor.value;

                    // Se usara innerHTML porque se insertara directamente codigo HTML y la informacion
                    listadoClientes.innerHTML += `
                    <tr>
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
                    </tr>`;
                    
                    // Va al siguiente elemento del cursor despues de mostrar el HTML del registro
                    cursor.continue();

                }else{

                    console.log( 'No hay mas resultados' );
                }            

            };        
        };
    }


})();



                    


 