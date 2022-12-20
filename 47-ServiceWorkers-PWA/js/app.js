// Este es el proyecto que va a registrar el PWA

// Con esto confirmamos si el navegator soporta las PWA
if ( 'serviceWorker' in navigator ) {
    
    // Con esto registramos el Service Worker
    // Se recibe una promesa
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log( 'Se instalo correctamente el Service worker', registrado ) )
        .catch( error => console.log( 'Fallo la instalacion del Service Worker', error ) );


}else{
    console.log( 'Service Worker no registrado' );
}