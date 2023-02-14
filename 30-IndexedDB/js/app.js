// Uso de indexed DB

let DB;

document.addEventListener('DOMContentLoaded', () => {
    
    // Funcion
    crmDB();

    setTimeout( () => {
        crearCliente();
    }, 3000);

});

function crmDB() {
    // Crear base de datos con la versión 1
    let crmDB = window.indexedDB.open('crm', 1.1);

    // Si hay un error, lanzarlo
    crmDB.onerror = function() {
        console.log('Hubo un error');
    }

    // Si todo esta bien, asignar a database el resultado
    crmDB.onsuccess = function() {
        // console.log('todo listo!');

        // Guardamos el resultado de la creacion de la BD
        // Es lo mismo que esto:   let db = e.target.result;
        DB = crmDB.result;
        
        console.log(DB);
    }

    // Configuracion de la BD
    // Este método solo corre una sola vez, es para definir la estructura de la BD
    crmDB.onupgradeneeded = function( e ) {
        // El evento que se va a correr tomamos la base de datos
        let db = e.target.result;

        // Definir el objectstore, primer parametro el nombre de la BD, segundo las opciones
        // keypath es de donde se van a obtener los indices
        let objectStore = db.createObjectStore('crm', { keyPath: 'crm',  autoIncrement: true } );

        // Definir las columnas
        // createindex, nombre y keypath, 3ro los parametros, keypath en este caso sera el indice para poder realizar busquedas
        objectStore.createIndex('nombre', 'nombre', { unique: false } );
        objectStore.createIndex('email', 'email', { unique: true } );
        objectStore.createIndex('telefono', 'telefono', { unique: false } );

        console.log('DB creada y lista');
    }
}


function crearCliente() {

    // Crear un nuevo registro
    // Crea una transaccion, ( [BD], modo )
    let transaction = DB.transaction( ['crm'], 'readwrite' ); // readonly - Para solo leer datos

    // Cuando se completa la transaccion
    transaction.oncomplete = function(event) {
        console.log('Transacción Completada');
    };
    
    // En caso de que ocurrio algun error
    transaction.onerror = function(event) {
        console.log('Hubo un error en la transacción')
    };

    // Nueva transaccion
    let objectStore = transaction.objectStore('crm');

    console.log( objectStore );

    const nuevoCliente = {
        nombre : "Juan",
        email: "correo@correo.com",
        telefono: 1020912
    }

    // Metodo para agregar un elemento ( .add )
    // Para actualizar es (.put)
    // Para eliminar es (.delete)
    let peticion = objectStore.add( nuevoCliente );

    console.log( peticion );
}


