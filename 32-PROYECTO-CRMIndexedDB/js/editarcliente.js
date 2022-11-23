// Proyecto CRM de Clientes
// Este proyecto usa Tailwind como framework CSS

// Creacion de un IIFE que se ejecuta automaticamente
// Tambien nos ayuda a mantener el scope localmente evitando conflictos con otros archivos JS

( function(){

    // Variables
    let idCliente;

    // Selectores
    const nombreInput   = document.querySelector ('#nombre');
    const emailInput    = document.querySelector ('#email');
    const telefonoInput = document.querySelector ('#telefono');
    const empresaInput  = document.querySelector ('#empresa');

    // Evento al cargar la pagina
    document.addEventListener('DOMContentLoaded', ()=>{

        // Funcion para conectarse a la BD
        // La conexion a la BD toma su tiempo, por lo cual, las operaciones siguientes podrian no funcionar
        // Esto se soluciona con la programacion asincrona pero mientras tanto usaremos setTimeout
        conectarDB();
        
        // Evento para la actualizacion del cliente
        formulario.addEventListener('submit', actualizarCliente);

        // Verificar el id de la url
        // URLSearchParams nos permite ver que parametros hay disponibles en la URL
        const parametrosURL = new URLSearchParams( window.location.search );

        // Metodo para obtener un elemento de la url, en este caso es el 'id'
        idCliente = parametrosURL.get("id");

        if ( idCliente ){

            setTimeout(() => {

                obtenerCliente( idCliente );
                
            }, 100);
        }
    });

    // Funcion para actualizar el registro de un Cliente
    function actualizarCliente( e ) {

        // Se previene el evento por defecto
        e.preventDefault();

        // Se maneja el submit manualmente
        if ( nombreInput. value === '' || emailInput. value === '' || telefonoInput. value === '' || empresaInput. value === '' ){

          // Se muestra el DIV de error
          imprimirAlerta('Todos los campos son obligatorios', 'error');
          // Termina la ejecucion para no seguir ejecutando las siguientes lineas
          return;            

        }

        // Actualizar cliente
        // Crea un Objeto de tipo Cliente
        const clienteActualizado = {
            
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente), // Si no se convierte dara error

        }

        // Insertar registro en la BD usando la instancia a la BD creada previamente
        // Crea una transaccion, ( [BD], modo )
        const transaction = DB.transaction( ['crm'], 'readwrite' );

        // Crea el Object Store para las transacciones con la BD 'crm'
        const objectStore = transaction.objectStore('crm');

        // Metodo para actualizar un elemento ( .put ) a la BD
        // let peticion = objectStore.put( clienteActualizado );
        objectStore.put( clienteActualizado );
 
        // En caso de que ocurrio algun error
        transaction.onerror = function( error ) {

            imprimirAlerta('Hubo un error en la transacción al Actualizar', 'error');
            console.log( error );

        };

        // Cuando se completa la transaccion correctamente
        transaction.oncomplete = function( event ) {

            console.log('Transacción Completada - Cliente Actualizado');

            // Mensaje de agregado correctamente
            imprimirAlerta('Se actualizo el Cliente correctamente');   
            
            // Despues de 3 segundos nos lleva a otra url
            setTimeout(() => {
                
                // Nos redirecciona
                window.location.href = 'index.html';

            }, 3000);
        };
    }

    // Funcion para obtener los datos del cliente que sera editado
    function obtenerCliente( id ){

        // Como la conexion ya fue abierta, se crea la transaccion
        // Consultar registro en la BD usando la instancia a la BD creada previamente
        // Crea una transaccion, ( [BD], modo ) y hace encadenamiento
        // Crea el Object Store para las transacciones con la BD 'crm'
        // let objectStore = DB.transaction( ['crm'], 'readonly' ).objectStore('crm'); 
        // readonly - Para solo leer datos
        const objectStore = DB.transaction( 'crm' ).objectStore('crm');

        // Metodo para abrir un cursor ( .openCursor().onsuccess ) de la BD
        objectStore.openCursor().onsuccess =  function( event ) {

            // Recibe el resultado de la apertura
            const cursor = event.target.result;

            if ( cursor ){            
                
                if ( cursor.value.id === Number( id ) ){

                    // Ejecuta la funcion para llenar el formulario
                    llenarFormulario( cursor.value );

                }
                // Avanza al siguiente registro
                cursor.continue();

            }
        }
    }

    // Esta funcion recibe los datos del cliente y los muestra en el formulario
    function llenarFormulario ( datosCliente ){

        const { nombre, email, telefono, empresa } = datosCliente;

        nombreInput.value   = nombre;
        nombreInput.value   = nombre;
        emailInput.value    = email;
        telefonoInput.value = telefono;
        empresaInput.value  = empresa;

    }
     
})();
