// Clase para arrancar la ejecucion de todo

// Importa las funciones utilizadas
import { datosCita, nuevaCita } from '../funciones.js'

// Importamos los selectores
import { 
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario 
} from "../selectores.js";

export default class App {

    constructor (){

        // Arranca la ejecucion
        this.initApp();

    }

    // Metodo inicial
    initApp (){

        // El evento 'change' se ejecuta cuando algo haya cambiado
        mascotaInput.addEventListener('change', datosCita );
        propietarioInput.addEventListener('input', datosCita );
        telefonoInput.addEventListener('input',  datosCita);
        fechaInput.addEventListener('input',  datosCita);
        horaInput.addEventListener('input',  datosCita);
        sintomasInput.addEventListener('input',  datosCita);
        formulario.addEventListener('submit', nuevaCita);

    }
}

