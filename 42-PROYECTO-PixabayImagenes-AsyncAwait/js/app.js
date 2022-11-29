// Proyecto Buscador de imagenes con Pixabay API
// Este proyecto usa Tailwind como framework CSS

// Variables
const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;
let terminoBusqueda;

// Selectores
const resultado = document.querySelector ('#resultado');
const formulario = document.querySelector ('#formulario');
const paginacionDIV = document.querySelector ('#paginacion');

// Eventos
// Evento que se ejecutara al cargar la pagina
// Es igual a document.addEventListener('DOMContentLoaded', validarFormulario);
window.onload = ( ) => {

    formulario.addEventListener('submit', validarFormulario );

}

// Helpers
// Helper para obtener el numero de paginas segun el numero de elementos
// Redondea hacia arriba y luego lo transforma a un entero
const calcularPaginas = total => Math.ceil( total / registrosPorPagina );

// Funciones
// Funcion para validar el input del formulario
function validarFormulario ( e ) {

    // Prevenimos la accion por defecto del submit
    e.preventDefault();

    // Manejamos las acciones del submit
    // Seleccionamos el input con el id=termino y obtenemos su valor .value
    terminoBusqueda = document.querySelector ('#termino').value;

    if( terminoBusqueda === ''){

        mostrarAlerta('Agrega un termino de busqueda');
        return;

    }

    // Buscar imagenes
    buscarImagenes( );

}

// Funcion que muestra una mensaje de alerta
function mostrarAlerta ( mensaje ) {

    const existeAlerta = document.querySelector ('.error');

    // Si es diferente de true (existe)
    if ( !existeAlerta ){
    
        // Creacion del HTML
        const alerta = document.createElement ('P');
        alerta.classList.add( 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 
                        'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'error' );

        // Contenido del P
        alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class"block sm:inline">${mensaje}</span>
        `;

        // Se agrega el HTML
        formulario.appendChild( alerta );

        // Se quita el alerta: sto
        setTimeout(() => {
            
            alerta.remove();

        }, 3000);
    }
}

/*
function buscarImagenes ( ) {

    // Esto es una falla de seguridad pero con frameworks como React se mantiene oculta
    const key = '31653268-59d6f4df141663cf5d017df57';
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&image_type=photo&per_page=${registrosPorPagina}&page=${paginaActual}`;
    
    // Consulta a la API
    fetch( url )
        .then( respuesta => respuesta.json() ) // Obtiene el contenido de la respuesta
        .then( resultado => { // Obtiene las imagenes
            totalPaginas = calcularPaginas( resultado.totalHits );
            mostrarImagenes( resultado.hits );
        }) 

}
*/

async function buscarImagenes ( ) {

    // Esto es una falla de seguridad pero con frameworks como React se mantiene oculta
    const key = '31653268-59d6f4df141663cf5d017df57';
    const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&image_type=photo&per_page=${registrosPorPagina}&page=${paginaActual}`;
    
    try {
        const respuesta = await fetch( url ); // Peticion HTTP
        const resultado = await respuesta.json(); // Se obtiene la respuesta de la Peticion
        totalPaginas = calcularPaginas( resultado.totalHits );
        mostrarImagenes( resultado.hits );
    } catch ( error ) {

        console.log( error );
    }

}

// Generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function *crearPaginador( total ){

    for (let i = 1 ; i <= total; i++) {
        
        yield i;
        
    }
}

// Funcion que muestra las imagenes obtenidas de la API
function mostrarImagenes ( imagenes ) {

    // Limpiar el HTML
    while( resultado.firstChild ){

        resultado.removeChild( resultado.firstChild );

    }

    // Iterar sobre las imagenes y construir el HTML
    imagenes.forEach( imagen => {

            const { previewURL, likes, views, largeImageURL } = imagen;

            // target="_blank" es la vulnerabilidad mas subestimada y se soluciona asi rel="noopener noreferrer"
            // noopener es un atributo HTML que impide que la página de apertura obtenga algún tipo de acceso a la página original.
            // noreferrer atributo HTML para evitar pasar nuestra información personal a la nueva pestaña a la que nos dirigimos.
            // Los enlaces <a> son de tipo inline para cambiar esto se usa block
            resultado.innerHTML += `
                <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                    <div class="bg-white">
                        <img class="w-full" src="${previewURL}"/>
                        <div class="p-4">
                            <p class="font-bold"> ${likes} <span class="font-light"> Me gusta </span> </p>
                            <p class="font-bold"> ${views} <span class="font-light"> Veces vista </span> </p>
                            <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                                href="${largeImageURL}" target="_blank" rel="noopener noreferrer"> Ver Imagen </a>
                        </div>
                    </div>                    
                </div>

            `;
        
    });

    // Se limpia el paginadorPrevio
    while ( paginacionDIV.firstChild ) {
        
        paginacionDIV.removeChild( paginacionDIV.firstChild );

    }

    // Se muestra el paginador
    imprimirPaginador()

}

// Funcion para mostrar los botones de la paginacion
function imprimirPaginador () {

    // Se llama al generador
    iterador = crearPaginador( totalPaginas );

    // El fin del ciclo depende del fin del generador
    while( true ){
        const { value, done } = iterador.next();

        // Si llegamos al final del generador
        if( done ) return;

        // Genera un boton por cada generador
        const boton = document.createElement ('A');
        boton.href = '#';
        // Se asigna el dataset de pagina
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add( 'siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded' );

        // Se usa onclick porque el boton es creado al vuelo
        boton.onclick = ()=>{
            
            paginaActual = value;
            buscarImagenes( );

        }

        // Se agrega al contenedor
        paginacionDIV.appendChild( boton );

    }
}
