// eslint-disable-next-line import/no-cycle
import { eliminarCita, cargarEdicion } from '../funciones';
import { contenedorCitas, heading } from '../selectores';

class UI {
  constructor({ citas }) {
    this.textoHeading(citas);
  }

  // eslint-disable-next-line class-methods-use-this
  imprimirAlerta(mensaje, tipo) {
    const alertaPrevia = document.querySelector('.alert');

    if (alertaPrevia) {
      alertaPrevia.remove();
    }

    // Crea el div
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
    divMensaje.dataset.cy = 'alerta'; // NUEVO

    // Si es de tipo error agrega una clase
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }

    // Mensaje de error
    divMensaje.textContent = mensaje;

    // Insertar en el DOM
    document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

    // Quitar el alert despues de 3 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  imprimirCitas({ citas }) { // Se puede aplicar destructuring desde la función...
    this.limpiarHTML();

    this.textoHeading(citas);

    citas.forEach((cita) => {
      const {
        mascota, propietario, telefono, fecha, hora, sintomas, id,
      } = cita;

      const divCita = document.createElement('div');
      divCita.classList.add('cita', 'p-3');
      divCita.dataset.id = id;

      // scRIPTING DE LOS ELEMENTOS...
      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
      mascotaParrafo.innerHTML = `${mascota}`;

      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`;

      // Agregar un botón de eliminar...
      const btnEliminar = document.createElement('button');
      btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar

      btnEliminar.dataset.cy = 'eliminar'; // NUEVO

      btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
      btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

      // Añade un botón de editar...
      const btnEditar = document.createElement('button');
      btnEditar.onclick = () => cargarEdicion(cita);

      btnEditar.dataset.cy = 'editar'; // NUEVO

      btnEditar.classList.add('btn', 'btn-info');
      btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

      // Agregar al HTML
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      contenedorCitas.appendChild(divCita);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  textoHeading(citas) {
    if (citas.length > 0) {
      heading.textContent = 'Administra tus Citas ';
    } else {
      heading.textContent = 'No hay Citas, comienza creando una';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  limpiarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

export default UI;
