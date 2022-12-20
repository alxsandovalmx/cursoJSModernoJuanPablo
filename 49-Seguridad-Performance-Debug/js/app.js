// Proyecto cotizador de Cryptomonedas

// Promesas
const obtenerCriptomonedas = criptomonedas => new Promise ( resolve => {

    // Hasta descargar las criptomonedas
    resolve( criptomonedas );

});

// Objeto Busqueda
const objetoBusqueda = {

    // moneda = USD, MXN y criptomoneda = Bitcoin, etc
    moneda:         '',
    criptomoneda:   ''

};

// Selectores
const criptomonedasSelect = document.querySelector ('#criptomonedas');
const formulario = document.querySelector ('#formulario');
const monedaSelect = document.querySelector ('#moneda');
const resultado = document.querySelector ('#resultado');

// Eventos
// Evento al cargar la pagina completamente
window.addEventListener('DOMContentLoaded', ()=>{
    
    // Se lanza al cargar la pagina
    consultarCriptomonedas();
    
    // Evento del submit del formulario
    formulario.addEventListener('submit', submitFormulario);

    // Cuando seleccione una option de criptomonedas
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
    
} );

// Funciones
function consultarCriptomonedas () {

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    // Peticion HTTP
    fetch( url )
        .then( respuesta => respuesta.json() ) // Extraemos la informacion contenida en la respuesta y la transformamos en tipo json
        .then( resultado => obtenerCriptomonedas( resultado.Data ) ) // Recibimos los datos y los procesamos en obtenerCriptomonedas
        .then( criptomonedas => selectCriptomonedas( criptomonedas ) ) // Si se resuelve bien la promesa se ejecuta la funcion selectCriptomonedas
        .catch( error => console.log(error));

}

 // Funcion para llenar el Select de Criptomonedas
function selectCriptomonedas ( criptomonedas ) {

    // Conocer el tiempo de ejecucion
    const inicio = performance.now();

    criptomonedas.forEach( cripto => {
        
        // Destructuring Object
        const { FullName, Name } = cripto.CoinInfo;

        // Creamos el HTML
        const option = document.createElement ('OPTION');
        // Como es un OPTION debe tener un value
        option.value = Name;
        option.textContent = FullName;
        
        // Se agregan las opciones al contenedor
        criptomonedasSelect.appendChild( option );

    });

    // Terminacion de la ejecucion
    const fin = performance.now();
    
    // Tiempo que tardo
    console.log( fin - inicio );

}

// Funcion que llena el Objeto de busqueda
function leerValor ( e ) {

    // Llenamos el objeto busqueda, solo puede servir esta tecnica cuando el id del HTML es igual
    objetoBusqueda[e.target.name] = e.target.value;

}

// Funcion para validar el formulario
function submitFormulario ( e ) {

    // Prevenimos el evento por defecto
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objetoBusqueda;

    if( moneda === '' || criptomoneda === '' ){

        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    // Si la validacion paso se consulta la API con las opciones seleccionadas
    consultarAPI();


}

// Funcion para mostrar alerta HTML
function mostrarAlerta ( mensaje ) {

    const existeError = document.querySelector ('.error');

    // Si no existe la alerta muestrala
    if( !existeError ){

        // Se crea el HTML
        const divMensaje = document.createElement ('DIV');
        divMensaje.classList.add( 'error' );
        divMensaje.textContent = mensaje;

        // Se agrega al contenedor
        formulario.appendChild( divMensaje );

        // Se quita la alerta
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }        

}

// Funcion para consultar la API
function consultarAPI () {

    const inicio = performance.now();

    // Destructuring del objeto Busqueda
    const { moneda, criptomoneda } = objetoBusqueda;    

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    // Funcion que muestra el Spinner
    mostrarSpinner();

    // Peticion HTTP
    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( cotizacion => mostrarCotizacionHTML( cotizacion.DISPLAY[criptomoneda][moneda] ) );

    const fin = performance.now();
    console.log( 'Performance: ',  fin - inicio );

}

// Funcion que muestra los resultados de la API en HTML
function mostrarCotizacionHTML ( cotizacion ) {

    // Limpiamos el HTML
    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    // Detiene la ejecucion y muestra todas las variables hasta ese momento
    debugger;

    // Creacion del HTML
    const precio = document.createElement ('P');
    precio.classList.add( 'precio' );
    precio.innerHTML = `El Precio es: <span> ${PRICE} </span> `;

    const precioAlto = document.createElement ('P');
    precioAlto.innerHTML = `<p>El precio mas alto del dia: <span>${HIGHDAY}</span>`;
    
    const precioBajo = document.createElement ('P');
    precioBajo.innerHTML = `<p>El precio mas alto del dia: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement ('P');
    ultimasHoras.innerHTML = `<p>Variacion ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

    const ultimaActualizacion = document.createElement ('P');
    ultimaActualizacion.innerHTML = `<p>Ultima actualizacion: <span>${LASTUPDATE}</span>`;

    // Detiene la ejecucion y muestra todas las variables hasta ese momento
    debugger;

    // Se agrega al contenedor
    resultado.appendChild( precio );
    resultado.appendChild( precioAlto );
    resultado.appendChild( precioBajo );
    resultado.appendChild( ultimasHoras );
    resultado.appendChild( ultimaActualizacion );

}

// Ya que se uso appendChild se limpia el HTML previo
function limpiarHTML () {

    while( resultado.firstChild ){

        resultado.removeChild( resultado.firstChild );

    }

}

// Muestra el Spinner
function mostrarSpinner () {

    // Se limpia el HTML
    limpiarHTML();

    const spinner = document.createElement ('DIV');
    spinner.classList.add( 'spinner' );
    spinner.innerHTML =
    `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    
    `;

    // Se agrega al contenedor
    resultado.appendChild( spinner );

}
