// Clases

// export default class Citas {
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

// Existen 2 formas de exportar: Directamente en la clase o de esta manera
export default Citas;
