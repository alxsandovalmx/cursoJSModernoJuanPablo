// Proyecto de Tweets usando LocalStorage

// Variables
const formulario = document.querySelector ('#formulario');
const listaTweets = document.querySelector ('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners(){

    // Evento cuando un usuario agrega un nuevo Tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', ()=> {

        // Obtiene los valores de la llave tweets del Local Storage y 
        // las transforma con JSON.parse en un objeto literal o tipo JSON
        // Si no hay informacion en localStorage regresa null, con || crea un arreglo vacio
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];

        console.log( tweets );

        // Muestra los tweets almacenados en el LocalStorage
        crearHTML();

    });

};


// Funciones
function agregarTweet ( e ){

    // Previmos la accion por default
    e.preventDefault();

    // Text area donde el usuario escribe
    // Obtenemos el valor contenido en el elemento con id=tweet que es un textarea
    const tweet = document.querySelector('#tweet').value.trim();

    // Si el tweet esta vacio
    if ( tweet === '') {

        mostrarError( 'No puede enviar un Tweet vacio' );
        return;

    }

    const objTweet = {
        id: Date.now(), // Como ID obtiene los milisegundos        
        // En JS reciente si son iguales puedes dejar solo uno
        // tweet: tweet
        tweet 
    }

    // Se agregan los tweets
    tweets = [...tweets, objTweet];
  
    // Se crea el contenido HTML
    crearHTML();

    // Reiniciar el input del formulario de Tweets
    formulario.reset();


};

// Funcion para mostrar mensaje de error
function mostrarError( error ) {
    
    const mensajeError = document.createElement ('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar en el HTML
    const contenido = document.querySelector ('#contenido');
    contenido.appendChild( mensajeError );

    // Quita mensaje de error despues de 3 segundos
    setTimeout(() => {

        mensajeError.remove();

    }, 3000);

}


// Muestra un listado de los tweets en el HTML
function crearHTML( ) {

    // Primero debemos limpiar el HTML por los tweet previos
    limpiarHTML( )

    // Cuando eliminamos todo no debe ejecutarse esta funcion
    if ( tweets.length > 0 ){

        // Por performance
        let liTweet = '';

        tweets.forEach( tweet => {

            // Se crea boton para eliminar tweet
            const btnEliminar = document.createElement ('a'); // Enlace
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X'; // btnEliminar.innerText

            // Se agrega la funcion de eliminar un tweet
            // Funcion delegation
            // Se hace asi porque hay que pasar parametros
            btnEliminar.onclick = () =>{

                borrarTweet( tweet.id );

            }

            // Se crea el HTML
            liTweet = document.createElement ('li');

            // Le agrega el contenido
            liTweet.textContent = tweet.tweet;

            // Se agrega el link X de eliminar
            listaTweets.appendChild( btnEliminar ); 

            // Se agregan como hijos de #lista-tweets
            // Si no se limpia el HTML se duplica la informacion 
            // porque se mantienen los Nodos
            listaTweets.appendChild( liTweet );

   

        } );

    }

    // Registra los tweet en el LocalStorage
    sincronizarStorage();

    
}

// Limpiamos el HTML
function limpiarHTML( ) {

    // Mientras haya elementos en #listaTweets
    while ( listaTweets.firstChild ) {
        
        // Elimina el primer hijo que encuentre hasta eliminar todos
        listaTweets.removeChild( listaTweets.firstChild );
    }
    
}

// Funcion para agregar al Local Storage la lista de tweets
function sincronizarStorage( ) {
    
    // Transforma un arreglo de objetos en un String y luego los agrega en el localStorage
    localStorage.setItem('tweets', JSON.stringify(tweets));

};

// Funcion para eliminar un Tweet
function borrarTweet ( idTweet ){

    tweets = tweets.filter( tweet => tweet.id != idTweet );

    // Se crea el contenido HTML
    crearHTML();

    console.log( tweets );

};


