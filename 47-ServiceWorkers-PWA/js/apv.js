// Proyecto para administrar las citas de un veterinario
// Este proyecto usa bootstrap como framework CSS

// Selectores HTML
const mascotaInput      = document.querySelector ('#mascota');
const propietarioInput  = document.querySelector ('#propietario');
const telefonoInput     = document.querySelector ('#telefono');
const fechaInput        = document.querySelector ('#fecha');
const horaInput         = document.querySelector ('#hora');
const sintomasInput     = document.querySelector ('#sintomas');
// Heading
const heading = document.querySelector('#administra');

// UI
const formulario        = document.querySelector ('#nueva-cita');
const contenedorCitas   = document.querySelector ('#citas');

// Variables
let editando = false;

// Eventos
eventListeneres();
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

    // Constructor
    constructor( {citas} ) {
        this.textoHeading(citas);
    }    

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

    // Como es un Objeto con objetos citas, hacemos un Destructuring en los parametros
    imprimirCitas( { citas } ){

        // Limpiar el HTML antes de mostrar las citas
        this.limpiarHTML();

        // Muestra el mensaje del encabezado
        this.textoHeading(citas);

        // Destructuring del objeto cita
        citas.forEach( cita => {

            // Este objeto ya viene el id
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

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
            
        });
    }

    textoHeading( citas ) {
        if(citas.length > 0 ) {
            heading.textContent = 'Administra tus Citas '
        } else {
            heading.textContent = 'No hay Citas, comienza creando una'
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
console.log(administrarCitas);
const ui = new UI(administrarCitas);

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

        // Selecciona el boton submit y reemplaza el texto a su estado original
        formulario.querySelector('button[type="submit"]').textContent = 'CREAR CITA';

        // Quitar modo edicion
        editando = false;

    }else{

        // Generando un id unico al Objeto Cita porque no esta congelado o sellado
        objetoCita.id  = Date.now();

        // Creando nueva cita
        // Pasamos una copia del objeto y no el objeto global porque se duplica la informacion
        administrarCitas.agregarCita( {...objetoCita} );      

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agrego la cita correctamente');

    }

    // Reiniciar el Objeto Cita porque tiene informacion
    reiniciarObjeto();
    
    // Se reinicia el Formulario
    formulario.reset();

    // Mostrae el HTML de las citas
    ui.imprimirCitas ( administrarCitas );

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

    // Elimina la cita del arreglo de citas
    administrarCitas.eliminarCita( id );

    // Mensaje de confirmacion de la eliminacion
    ui.imprimirAlerta('La cita se elimino correctamente');

    // Eliminar la cita del HTML
    ui.imprimirCitas( administrarCitas );


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
