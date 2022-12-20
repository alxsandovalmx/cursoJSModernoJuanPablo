// Archivo Service Worker
// En un Service Worker no se puede utilizar window, por lo tanto se utiliza self

/* Para instalar una PWA en un equipo movil o de escritorio debe cumplir lo siguiente:
    1. Tener un manifest.json valido
    2. Tener un dominio HTTPS o ser un LocalHost
    3. Tener registrado el EventListener de Fetch
*/

// Variables
const nombreCache = 'apv-v5';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
    '/manifest.json'
];

// Se ejecuta 1 vez hasta que el Service Worker es instalado
// Este es el momento para cachear nuevos archivos
// Instalar el service Worker, no se puede utilizar window, 
// por lo tanto se utiliza self
self.addEventListener('install', e => {

    console.log( 'Instalado el Service Worker' );

    // Se ejecuta hasta descargar todos los archivos del cache
    e.waitUntil(
        // Buen lugar para cachear
        caches.open( nombreCache ) // No se usa document
            .then( cache => { // Esta función es asincrona...
                console.log( 'Cacheando' );
                cache.addAll( archivos ); // Se agregan al cache // Un archivo es .add
            })
    )

    // Revisar en App (Chrome) en Firefox en Almacenamiento
    // console.log( e );

});

// Se ejecuta cuando se Activa el Service Worker
// Este es el momento para cargar nuevas versiones de nuestro PWA
self.addEventListener('activate', e => {

    console.log( 'Service Worker Activado' );

    // console.log( e );

    // Actualizar la PWA
    e.waitUntil(

        caches.keys()
            .then( keys => {
                // console.log( keys )
                
                return Promise.all(
                    keys.filter( key => key !== nombreCache ) // Regresa el cache donde sea igual
                    .map( key => caches.delete( key )) // Borra los demas caches
                )  
            })
    )

});

// Evento Fetch para descargar archivos estaticos
// Fetch events para el CSS, HTML, imagenes JS, y hasta llamados a fetch.
self.addEventListener('fetch', e => {

    console.log( 'Fetch... ', e );

    // Mostrar los archivos que tenemos en cache
    e.respondWith(
        caches.match( e.request )
            .then( respuestaCache => {
                return respuestaCache || fetch( e.request );
            })
            .catch( () => caches.match('/error.html') )
    )

});

// // Evento Fetch para descargar archivos estaticos
// self.addEventListener('fetch', e => {
//     console.log('Fetch', e)
   
//     e.respondWith(
//       caches
//         .match(e.request)
//         .then( cacheResponse => (cacheResponse ? cacheResponse : caches.match('/error.html') )) 
//     )
// });
