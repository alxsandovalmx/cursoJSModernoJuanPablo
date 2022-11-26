// Proyecto que se conecta a una API de Clima con FETCH API
// Estoy proyecto utiliza Tailwind como framework CSS

// Selectores
const container = document.querySelector ('.container');
const resultado = document.querySelector ('#resultado');
const formulario = document.querySelector ('#formulario');

// Listeners
window.addEventListener('load', ()=>{

    // Evento submit
    formulario.addEventListener('submit', buscarClima);

});


// Funciones
function buscarClima( e ){

    // Prevenimos la accion por defecto del submit
    e.preventDefault();

    console.log( 'Buscando el clima' );

    // Validar
    // Seleccionamos el elemento ciudad y obtenemos su valor con .value
    const ciudad = document.querySelector ('#ciudad').value;

    // Esta API requiere que el codigo del pais sea enviado en 2 digitos como: MX
    // Este tratamiento puede hacerse en el HTML
    const pais = document.querySelector ('#pais').value;

    if ( ciudad === '' || pais === ''){

        mostrarAlerta('Ambos campos son obligatorios', 'error');
        return;
    }

    console.log( ciudad, pais );

    // Consultar la API
    consultarAPI( ciudad, pais );


};

// Funcion que muestra en HTML el mensaje recibido
function mostrarAlerta( mensaje ){

    const alerta = document.querySelector ('.error');

    // Si existe un elemento con esa clase no se muestra nada
    if ( !alerta ){

        // Creando el HTML del alerta
        const divAlerta = document.createElement ('DIV');
        divAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 
                                'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'error');
    
        divAlerta.innerHTML = `
            <strong class="front-bold">¡Error!</strong>
            <span classs="block">${mensaje}</span>
        `;

        // Se agrega el DIV al contenedor
        container.appendChild( divAlerta );

        // Eliminamos la alerta despues de 3 segundos
        setInterval(() => {
            
            // Se elima el DIV con el alerta
            divAlerta.remove();

        }, 3000);

    }
};

// Consulta a la API de Clima, esta utiliza un API ID
function consultarAPI( ciudad, pais ){

    // Esta es la KEY generada
    const appiID = 'd867fd43b828d41afbb3448f834faf1d';

    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appiID}`;

    // Muestra el spinner
    spinner();    
    
    // Realizando la consulta con FETCH
    fetch( urlAPI )
        .then( respuesta => respuesta.json() ) // La respuesta la tranformo a objetos y la retorno
        .then( datos => {

            // Limpiamos el HTML
            limpiarHTML();
            
            // Valida que la informacion de la respuesta sea correcta
            if( datos.cod === '404' )
            {
                mostrarAlerta('Ciudad no encontrada');
                return;
            }

            // Imprime la respuesta en el HTML
            mostrarClima( datos );

        });

};

// Funcion que muestra el HTML de la respuesta del FETCH
function mostrarClima( datos ){

    // Doble destructuring de la respuesta porque viene dentro de otro objeto
    const { name, main: { temp, temp_max, temp_min }  } = datos;

    const centigrados = kevinACentrigrados( temp );
    const max = kevinACentrigrados( temp_max );
    const min = kevinACentrigrados( temp_min );

    // Elemento HTML de la Ciudad
    const nombreCiudad = document.createElement ('P');
    nombreCiudad.textContent = `Clima en ${ name }`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    // Elemento HTML de la temperatura
    const tempActual = document.createElement ('P');
    // Se usa innerHTML porque se agrega una identidad HTML
    tempActual.innerHTML = `${centigrados} &#8451`;
    tempActual.classList.add('font-bold', 'text-6xl');

    // Elemento HTML de la temperatura
    const tempMax = document.createElement ('P');
    // Se usa innerHTML porque se agrega una identidad HTML
    tempMax.innerHTML = `Max: ${max} &#8451`;
    tempMax.classList.add('text-xl');

    // Elemento HTML de la temperatura
    const tempMin = document.createElement ('P');
    // Se usa innerHTML porque se agrega una identidad HTML
    tempMin.innerHTML = `Min: ${min} &#8451`;
    tempMin.classList.add('text-xl');    
    
    // Creacion de un DIV para contener la respuesta
    const resultadoDIV = document.createElement ('DIV');
    resultadoDIV.classList.add( 'text-center', 'text-white' );
    
    // Se agrega el P al DIV
    resultadoDIV.appendChild( nombreCiudad );
    resultadoDIV.appendChild( tempActual );
    resultadoDIV.appendChild( tempMax );
    resultadoDIV.appendChild( tempMin );
    // Se agrega el DIV al contenedor HTML
    resultado.appendChild( resultadoDIV );

};

// Funcion para transformar los grados Kevin a Centigrados
// Helpers
const kevinACentrigrados = kelvin => parseInt ( kelvin -273.15 );

// Funcion para limpiar el HTML que muestra la temperatura
function limpiarHTML(){

    while( resultado.firstChild ){

        resultado.removeChild( resultado.firstChild ); 

    }
};

// 
function spinner(){

    // Limpiamos el HTML
    limpiarHTML();

    // Crea un DIV
    const divSpinner = document.createElement ('DIV');
    // Asigna las clases CSS
    divSpinner.classList.add( 'sk-fading-circle' );
    // Agrega contenido al DIV
    divSpinner.innerHTML = `
    <div class="sk-fading-circle">
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    // Se agrega el DIV al Contenedor
    resultado.appendChild( divSpinner );
    
};