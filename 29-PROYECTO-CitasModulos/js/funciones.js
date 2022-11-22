// Funciones.js

// Importamos las Clases
import Citas from './classes/Citas.js'
import UI from './classes/Ui.js';

// Importamos los selectores
import { 
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario } from "./selectores.js";

// Instancias
const administrarCitas = new Citas();
const ui = new UI( administrarCitas );

// Variables
let editando = false;

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

// Funciones
// Agrega datos al objeto Cita
export function datosCita( e ){

    // Llenando el Objeto Cita
    // Accediento a la propiedad name= que debe tener el mismo nombre qye la propiedad
    objetoCita[ e.target.name ] = e.target.value;

};

// Valida y agrega una nueva cita
export function nuevaCita( e ){

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
export function reiniciarObjeto( ){

    objetoCita.mascota      = '';
    objetoCita.propietario  = '';
    objetoCita.telefono     = '';
    objetoCita.fecha        = '';
    objetoCita.hora         = '';
    objetoCita.sintomas     = '';

};

// Funcion para eliminar una cita del objeto y el html
export function eliminarCita( id ){

    // Elimina la cita del arreglo de citas
    administrarCitas.eliminarCita( id );

    // Mensaje de confirmacion de la eliminacion
    ui.imprimirAlerta('La cita se elimino correctamente');

    // Eliminar la cita del HTML
    ui.imprimirCitas( administrarCitas );

}

// Funcion para cargar las citas y el modo edicion
export function cargarEdicion( cita ) {
     
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
