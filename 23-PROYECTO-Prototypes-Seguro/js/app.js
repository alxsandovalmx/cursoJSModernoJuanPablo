// Proyecto - Uso de Prototypes en un cotizador de seguro
// Este proyecto usa Tailwind

// Object Constructor (Objeto Constructor)
function Seguro( marca, year, tipoSeguro ){

        this.marca  = marca,
        this.year   = year,
        this.tipo   = tipoSeguro

};

// Object Constructor (Objeto Constructor) de la interfaz de usuario
function UI(){


};

// Prototype
// Realiza la cotizacion con los datos seleccionados
Seguro.prototype.cotizarSeguro = function (){

    /*
        1 = Americano -> Aumenta el valor en 1.15
        2 = Asiatico  -> Aumenta el valor en 1.05
        3 = Europeo   -> Aumenta el valor en 1.35
    */

    let precio;
    const base = 2000;

    switch ( this.marca ) {
    
        // El case es String porque asi viene de la seleccion del selector
        case '1':

            precio = base * 1.15;
            break;

        case '2':

            precio = base * 1.05;
            break;
    
        case '3':

            precio = base * 1.35;
            break;            

        default:
            break;
    }

    // Leer el año    
    const diferencia =  new Date().getFullYear() - this.year;
    
    // Cada año que la diferencia es mayor, el precio va a reducirse un 3%
    precio -=  ( diferencia * 3 * precio ) / 100;

    /*
        Si el seguro es basico se multiplica por un 30% mas
        Si el seguro es completo se multiplica por un 50% mas
    */

    this.tipo == 'basico' ? precio *= 1.3 : precio *= 1.5;

    return precio;

};


// Prototype
// Llena las opciones de los años del vehiculo a asegurar
UI.prototype.llenarYears = ()=>{

    const maxYear = new Date().getFullYear(); // 2022
    const minYear = maxYear - 20; // 2012

    const selectYear = document.querySelector('#year');

    // Para el performance
    let optionYear;

    // For para agregar los elementos a la lista de seleccion de años
    for (let i = maxYear; i >= minYear; i--) {
        
        optionYear = document.createElement('option');
        optionYear.value = i;
        optionYear.textContent = i;
        selectYear.appendChild(optionYear);
        
    }
};

// Prototype
// Como UI no tiene ninguna propiedad se podria usar un arrow function ()=>{} en lugar de function
// Es recomendable no mezclar tipos de funciones sino ser consistente
// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function ( mensaje, tipoMensaje ){

    // Los elementos HTML se crean en Mayusculas
    const div = document.createElement ('DIV');

    if ( tipoMensaje == 'error'){

        // Estas clases estan en el CSS
        // div.classList.add('mensaje', 'error') // Mejorando el codigo
        div.classList.add( 'error' );

    }else {

        // div.classList.add('mensaje', 'correcto'); // Mejorando el codigo
        div.classList.add('correcto');

    }

    // Se agregaa la clase comun
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Se inserta en el HTML
    const formulario = document.querySelector( '#cotizar-seguro' );
    // insertBefore pide 2 parametros: Nuevo Nodo y el Nodo de referencia donde sera insertado antes de este
    formulario.insertBefore( div, document.querySelector ('#resultado') );

    // Limpiar el mensaje de error
    setTimeout(() => {
        
        // Se elimina el Nodo
        // 
        div.remove();

    }, 3000);    


};

// Prototype
// 
UI.prototype.mostrarResultado = function ( total, seguro ){

    // Destructuting de objetos
    const { marca, year, tipo } = seguro;

    let textoMarca;

    // Asignamos la marca por el numero
    switch ( marca ) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    // Crear el resultado
    const div = document.createElement ('DIV');
    div.classList.add( 'mt-10' );
    // Cuando se va a agregar HTML es innetHTML
    // El texto de tipo de seguro se hizo Capitalize
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Tipo de seguro: <span class="font-normal capitalize"> ${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;

    const resultadoDiv = document.querySelector ('#resultado');

    // Mostrar el Spinner
    const spinner = document.querySelector ('#cargando');
    
    // Muestra el spinner
    spinner.style.display = 'block';
    
    setTimeout(() => {
        
        // Se oculta el spinner
        spinner.style.display = 'none';

        // Se muestra el resultado
        resultadoDiv.appendChild( div );

    }, 3000);
    


};

// Instanciar UI
const ui = new UI();

// Evento que se ejecutara al cargar la pagina completamente
document.addEventListener('DOMContentLoaded', () => {

    // Llena el select con los años
    ui.llenarYears();

});

// No es recomendable asignar los selectores a un prototype, agregaria complejidad
// Se manda a llamar la funcion contenedora de eventos, asi no quedara en la ventana global
eventListeneres( );
function eventListeneres ( evento ){

    const formulario = document.querySelector( '#cotizar-seguro' );
    formulario.addEventListener( 'submit', cotizarSeguro );

};

// Funcion para Cotizar el seguro que es ejecutada por el evento de submit
function cotizarSeguro( evento ){

    // Prevenimos la accion por defecto del submit del formulario    
    evento.preventDefault();

    // Leer la marca seleccionada y con .value el valor contenido
    const marcaSeleccionada = document.querySelector ('#marca').value;

    // Leer el año seleccionada y con .value el valor contenido
    const yearSeleccionado = document.querySelector ('#year').value;

    // Radio Buttons - Obtener el valor en JS, es como en CSS
    // Leer la cobertura seleccionada y con .value el valor contenido
    const coberturaSeleccionada = document.querySelector ('input[name="tipo"]:checked').value;

    if ( marcaSeleccionada == '' || yearSeleccionado == '' || coberturaSeleccionada == '') {

        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;

    }

    // Procesamos la accion del submit manualmente
    ui.mostrarMensaje('Cotizando...', 'exito');

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector ('#resultado div');
    
    if ( resultados != null ) {
        
        resultados.remove();

    }

    // Instancia del seguro
    const seguro = new Seguro( marcaSeleccionada, yearSeleccionado, coberturaSeleccionada );

    // Utilizando el Prototype que va a cotizar el seguro y retorna el precio
    const totalPagar = seguro.cotizarSeguro();

    // Utiliazr el prototype que va a cotizar
    ui.mostrarResultado( totalPagar, seguro );


};
