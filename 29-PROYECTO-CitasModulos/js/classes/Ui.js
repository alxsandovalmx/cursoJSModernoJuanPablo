// Clase UI

import { eliminarCita, cargarEdicion } from '../funciones.js';
import { contenedorCitas, heading } from '../selectores.js';

// export default class UI {
class UI {

    // No tiene constructor
    constructor( {citas} ){

        this.textoHeading( citas );

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

        // Para mostrar el texto del heading
        this.textoHeading( citas );
        
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

    textoHeading( citas ){
        
        if ( citas.length > 0 ){
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

// Existen 2 formas de exportar: Directamente en la clase o de esta manera
export default UI;

