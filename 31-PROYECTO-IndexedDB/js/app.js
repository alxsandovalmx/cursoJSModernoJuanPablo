// Proyecto para administrar los pacientes de un veterinario
// Este proyecto usa bootstrap como framework CSS

// Selectores HTML
const mascotaInput      = document.querySelector ('#mascota');
const propietarioInput  = document.querySelector ('#propietario');
const telefonoInput     = document.querySelector ('#telefono');
const fechaInput        = document.querySelector ('#fecha');
const horaInput         = document.querySelector ('#hora');
const sintomasInput     = document.querySelector ('#sintomas');

// Formulario nuevas citas
const formulario        = document.querySelector ('#nueva-cita');

// Contenedor para las citas
const contenedorCitas   = document.querySelector ('#citas');

// Heading
const heading = document.querySelector('#administra');

// Variables
let editando = false;
let DB;

// Evento que se lanza cuando se carga la pagina
window.onload = ( ) => {

    // Se van a cargar los Listeners
    eventListeneres();

    // Funcion para crear la BD
    crearDB();

}

// Eventos

function eventListeneres(){

    // El evento 'change' se ejecuta cuando algo haya cambiado
    mascotaInput.addEventListener('change', datosCita );
    propietarioInput.addEventListener('input', datosCita );
    telefonoInput.addEventListener('input',  datosCita);
    fechaInput.addEventListener('input',  datosCita);
    horaInput.addEventListener('input',  datosCita);
    sintomasInput.addEventListener('input',  datosCita);
    formulario.addEventListener('submit', nuevaCita);

};

// Objeto Cita
// Para que esta tecnica funciones en el HTML debe existir el atributo name
const objetoCita = {

    mascota:     '',
    propietario: '',
    telefono:    '',
    fecha:       '',
    hora:        '',
    sintomas:    ''

}

// Clases
class Citas {

    constructor() {

        this.citas = [];

    }

    agregarCita ( cita ){

        this.citas = [...this.citas, cita];
        console.log( this.citas );
    }

    eliminarCita ( id ){

        // Obtenemos un nuevo arreglo que no tenda la cita con el id recibido
        this.citas = this.citas.filter( cita => cita.id !== id );

    }

    editarCita( citaActualizada ){

        // Map recorre los elementos del arreglo y nos retorna un nuevo arreglo
        this.citas = this.citas.map( cita => cita.id == citaActualizada.id ? citaActualizada : cita );
        
    }

};

class UI {

    // No tiene constructor

    // Muestra la cita en forma de lista
    imprimirAlerta( mensaje, tipo ){

        // Se crea el DIV del mensaje 
        const divMensaje = document.createElement ('DIV');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Valida el tipo de Mensaje
        if ( tipo === 'error'){

            // Se agrega una clase de error de bootstrap
            divMensaje.classList.add('alert-danger');


        }else {

            // Se agrega una clase de exito de bootstrap
            divMensaje.classList.add('alert-success');

        }

        // Se agrega el contenido del mensaje
        divMensaje.textContent = mensaje;

        // Agregar al HTML
        document.querySelector ('#contenido').insertBefore( divMensaje, document.querySelector ('.agregar-cita') );

        // Se quita la alerta despues de 5 segundos
        setInterval(() => {

            // Elimina el DIV creado
            divMensaje.remove();
            
        }, 5000);

    }

    // Funcion para mostrar el HTML de las citas
    imprimirCitas( ){

        // Limpiar el HTML antes de mostrar las citas
        this.limpiarHTML();

        // Leer el contenido de la BD
        // Crea una transaccion, ( [BD], modo ) y hace encadenamiento
        // Crea el Object Store para las transacciones con la BD 'citas'
        // let objectStore = DB.transaction( ['citas'], 'readonly' ).objectStore('citas'); // readonly - Para solo leer datos
        let objectStore = DB.transaction( 'citas' ).objectStore('citas');

        // Crea una variable que contiene la funcion
        const fnTextoHeading = this.textoHeading;

        // Para saber cuantos elementos tiene
        const total = objectStore.count();
        total.onsuccess = function(){

            // Para llenar el texto del Heading
            fnTextoHeading( total.result );

        };

        // Metodo para leer ( .openCursor ) de la BD
        objectStore.openCursor().onsuccess =  function( event ) {

            const cursor = event.target.result;

            if ( cursor ){

                // Este cursor ya viene el id
                const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cursor.value;

                // Creando el HTML del DIV
                const divCita = document.createElement ('DIV');            
                divCita.classList.add('cita', 'p-3'); // Esto viene en el archivo CSS de estilos

                // divCita.setAttribute('data-id', id); // JS anterior
                divCita.dataset.id = id; // JS moderno

                // Scripting de los elementos de la cita
                const mascotaParrafo = document.createElement ('H2');
                mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                mascotaParrafo.textContent = mascota;

                const propietarioParrafo = document.createElement ('P');
                propietarioParrafo.innerHTML = `
                    <span class="font-weight-bolder">Propietario: </span>${propietario}`;

                const telefonoParrafo = document.createElement ('P');
                telefonoParrafo.innerHTML = ` 
                    <span class="font-weight-bolder">Telefono: </span>${telefono}`;

                const fechaParrafo = document.createElement ('P');
                fechaParrafo.innerHTML = ` 
                    <span class="font-weight-bolder">Fecha: </span>${fecha}`;     

                const horaParrafo = document.createElement ('P');
                horaParrafo.innerHTML = ` 
                    <span class="font-weight-bolder">Hora: </span>${hora}`;                

                const sintomasParrafo = document.createElement ('P');
                sintomasParrafo.innerHTML = ` 
                    <span class="font-weight-bolder">Sintomas: </span>${sintomas}`;
                    
                // Boton para eliminar esta cita
                const btnEliminarCita = document.createElement ('BUTTON');
                btnEliminarCita.classList.add('btn', 'btn-danger', 'mr-2');
                // como se agregara contenido HTML se usa innerHTML
                btnEliminarCita.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';

                // Accion de eliminar la cita, en este caso mandara a llamar una funcion pero tambien puede hacerlo aqui
                btnEliminarCita.onclick = () => eliminarCita ( id );

                // Boton para editar una cita
                const btnEditar = document.createElement ('BUTTON');
                btnEditar.classList.add('btn', 'btn-info');
                btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>';
               
                // Accion para editar la cita
                const cita = cursor.value;
                btnEditar.onclick = () => cargarEdicion( cita );

                // Agregando los elementos al DIV Cita
                divCita.appendChild( mascotaParrafo );
                divCita.appendChild( propietarioParrafo );
                divCita.appendChild( telefonoParrafo );
                divCita.appendChild( fechaParrafo );
                divCita.appendChild( horaParrafo );
                divCita.appendChild( sintomasParrafo );
                divCita.appendChild( btnEliminarCita );
                divCita.appendChild( btnEditar );

                // Agregando DIV Cita al html
                contenedorCitas.appendChild( divCita );
                
                // Va al siguiente elemento del cursor despues de mostrar el HTML del registro
                cursor.continue();

            }

        };

    }

    textoHeading( resultado ){
        
        // console.log( resultado );

        if ( resultado > 0 ){
            heading.textContent = 'Administra tus Citas';
        }else{
            heading.textContent = 'No hay citas, comienza creando una';
        }
    }

    limpiarHTML( ){

        // Mientras el contenedor tenga hijos
        while ( contenedorCitas.firstChild ) {
            
            // Elimina el primer hijo encontrado
            contenedorCitas.removeChild( contenedorCitas.firstChild );

        }
    }

};

// Instancias
const administrarCitas = new Citas();
const ui = new UI( administrarCitas );

// Funciones
// Agrega datos al objeto Cita
function datosCita( e ){

    // Llenando el Objeto Cita
    // Accediento a la propiedad name= que debe tener el mismo nombre qye la propiedad
    objetoCita[ e.target.name ] = e.target.value;

};

// Valida y agrega una nueva cita
function nuevaCita( e ){

    // Prevenimos el comportamiento por defecto del submit
    e.preventDefault();

    // Manejamos manualmente el submit

    // Destructuring del objeto cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = objetoCita;

    // Validando las entradas
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ){

        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return; // Terminamos la ejecucion

    }

    // Si editando es true
    if ( editando ){

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se actualizo correctamente la cita');

        // Pasa el Objeto Cita a edicion, le pasamos una copia
        administrarCitas.editarCita( {...objetoCita} );

        // Edita en IndexDB
        // Leer el contenido de la BD
        // Crea una transaccion, ( [BD], modo )
        let transaction = DB.transaction( ['citas'], 'readwrite' );   

        // Crea el Object Store para las transacciones con la BD 'citas'
        let objectStore = transaction.objectStore('citas');   
     
        // Put nos permite editar un registro en terminos de REST
        // Metodo para actualizar un elemento ( .put ) a la BD        
        objectStore.put( objetoCita );

        // Cuando se completa la transaccion correctamente
        transaction.oncomplete = function( event ) {

            console.log('Transacción Completada - Cita Editada');

            // Selecciona el boton submit y reemplaza el texto a su estado original
            formulario.querySelector('button[type="submit"]').textContent = 'CREAR CITA';

            // Quitar modo edicion
            editando = false;            
       
        };

        // En caso de que ocurrio algun error
        transaction.onerror = function( event ) {

            console.log('Hubo un error en la transacción')

        };          

    }else{

        // Generando un id unico al Objeto Cita porque no esta congelado o sellado
        objetoCita.id  = Date.now();

        // Creando nueva cita
        // Pasamos una copia del objeto y no el objeto global porque se duplica la informacion
        administrarCitas.agregarCita( {...objetoCita} );      

        // Insertar registro en la BD
        // Crea una transaccion, ( [BD], modo )
        let transaction = DB.transaction( ['citas'], 'readwrite' );

        // Crea el Object Store para las transacciones con la BD 'citas'
        let objectStore = transaction.objectStore('citas');        

        // Metodo para agregar un elemento ( .add ) a la BD
        // let peticion = objectStore.add( objetoCita );
        objectStore.add( objetoCita );
 
        // Cuando se completa la transaccion correctamente
        transaction.oncomplete = function( event ) {

            console.log('Transacción Completada - Cita Agregada');

            // Mensaje de agregado correctamente
            ui.imprimirAlerta('Se agrego la cita correctamente');     
       
        };

        // En caso de que ocurrio algun error
        transaction.onerror = function( event ) {

            console.log('Hubo un error en la transacción')

        };  

    }

    // Mostrae el HTML de las citas
    ui.imprimirCitas ( );    

    // Reiniciar el Objeto Cita porque tiene informacion
    reiniciarObjeto();
    
    // Se reinicia el Formulario
    formulario.reset();

};

// Funcion para reiniciar el Objeto Cita
function reiniciarObjeto( ){

    objetoCita.mascota      = '';
    objetoCita.propietario  = '';
    objetoCita.telefono     = '';
    objetoCita.fecha        = '';
    objetoCita.hora         = '';
    objetoCita.sintomas     = '';

};

// Funcion para eliminar una cita del objeto y el html
function eliminarCita( id ){

    // Eliminar registro en la BD
    // Crea una transaccion, ( [BD], modo )
    let transaction = DB.transaction( ['citas'], 'readwrite' );

    // Crea el Object Store para las transacciones con la BD 'citas'
    let objectStore = transaction.objectStore('citas');        

    // Metodo para eliminar un elemento ( .delete ) a la BD
    // let peticion = objectStore.delete( objetoCita );
    objectStore.delete( id );

    // Cuando se completa la transaccion correctamente
    transaction.oncomplete = function( event ) {

        console.log(`Transacción Completada - Cita Eliminada ${id}`);

        // Mensaje de confirmacion de la eliminacion
        ui.imprimirAlerta('La cita se elimino correctamente');

        // Eliminar la cita del HTML
        ui.imprimirCitas( ); 
    
    };

    // En caso de que ocurrio algun error
    transaction.onerror = function( event ) {

        console.log('Hubo un error en la transacción')

    };  

}

// Funcion para cargar las citas y el modo edicion
function cargarEdicion( cita ) {
     
    // Destructuring del objeto cita
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;    

    // Llenamos los inputs
    mascotaInput.value      = mascota;
    propietarioInput.value  = propietario;
    telefonoInput.value     = telefono;
    fechaInput.value        = fecha;
    horaInput.value         = hora;
    sintomasInput.value     = sintomas;

    // Llenar el Objeto Cita
    objetoCita.mascota      = mascota;
    objetoCita.propietario  = propietario;
    objetoCita.telefono     = telefono;
    objetoCita.fecha        = fecha;
    objetoCita.hora         = hora;
    objetoCita.sintomas     = sintomas;
    objetoCita.id           = id;

    // Cambiar el texto del boton
    // Selecciona el boton submit y reemplaza el texto
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    editando = true;


}

function crearDB () {

    // Crear BD en Version 1.0
    const crearDB = window.indexedDB.open('citas', 1);

    // Catch de Errores
    crearDB.onerror = function ( ) {

        console.log( 'Hubo un error' );

    };

    // Success de la creacion de la BD
    crearDB.onsuccess = function (){

        console.log( 'BD creada' );
        DB = crearDB.result;

        console.log( DB );

        // Eliminar la cita del HTML
        ui.imprimirCitas( );

    }

    // Definimos el Schema (Estructura)
    crearDB.onupgradeneeded = function( e ) {
    
        // Recibibe el resultado de la creacion de DB
        const db = e.target.result;

        // Definimos el Object Store para la definicion del Schema, configuracion 
        const objectStore = db.createObjectStore( 'citas', { 
            keyPath: 'id',  // Indice
            autoIncrement: true 
        });

        // Definimos el Schema (Columnas) 
        // nombreColumna, keypath, 3ro los parametros 
        // keypath en este caso sera el indice para poder realizar busquedas
        objectStore.createIndex('mascota', 'mascota', { unique: false } );
        objectStore.createIndex('propietario', 'propietario', { unique: false } );
        objectStore.createIndex('telefono', 'telefono', { unique: false } );
        objectStore.createIndex('fecha', 'fecha', { unique: false } );
        objectStore.createIndex('hora', 'hora', { unique: false } );
        objectStore.createIndex('sintomas', 'sintomas', { unique: false } );
        objectStore.createIndex('id', 'id', { unique: true } );

        console.log( 'BD creada y lista' );

    }

};