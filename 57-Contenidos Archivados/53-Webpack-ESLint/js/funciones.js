import Citas from './classes/Citas';
// eslint-disable-next-line import/no-cycle
import UI from './classes/UI';

import {
  mascotaInput, propietarioInput, telefonoInput,
  fechaInput,
  horaInput,
  sintomasInput,
  formulario,
} from './selectores';

const administrarCitas = new Citas();
const ui = new UI(administrarCitas);

let editando = false;

const citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
};

export function reiniciarObjeto() {
  // Reiniciar el objeto
  citaObj.mascota = '';
  citaObj.propietario = '';
  citaObj.telefono = '';
  citaObj.fecha = '';
  citaObj.hora = '';
  citaObj.sintomas = '';
}

export function datosCita(e) {
  //  console.log(e.target.name) // Obtener el Input
  citaObj[e.target.name] = e.target.value;
}

export function nuevaCita(e) {
  e.preventDefault();

  const {
    mascota, propietario, telefono, fecha, hora, sintomas,
  } = citaObj;

  // Validar
  if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
    ui.imprimirAlerta('Todos los campos son Obligatorios', 'error');

    return;
  }

  if (editando) {
    // Estamos editando
    administrarCitas.editarCita({ ...citaObj });

    ui.imprimirAlerta('Guardado Correctamente');

    formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

    editando = false;
  } else {
    // Nuevo Registrando

    // Generar un ID único
    citaObj.id = Date.now();

    // Añade la nueva cita
    administrarCitas.agregarCita({ ...citaObj });

    // Mostrar mensaje de que todo esta bien...
    ui.imprimirAlerta('Se agregó correctamente');
  }

  // Imprimir el HTML de citas
  ui.imprimirCitas(administrarCitas);

  // Reinicia el objeto para evitar futuros problemas de validación
  reiniciarObjeto();

  // Reiniciar Formulario
  formulario.reset();
}

export function eliminarCita(id) {
  administrarCitas.eliminarCita(id);

  ui.imprimirCitas(administrarCitas);
}

export function cargarEdicion(cita) {
  const {
    mascota, propietario, telefono, fecha, hora, sintomas, id,
  } = cita;

  // Reiniciar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  // Llenar los Inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;
  formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
  editando = true;
}
