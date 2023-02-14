// Promises, Callbacks y Programacion Asincrona en JS

// Listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Los paises se muestran despues de 1 segundo
function mostrarPaises() {
    setTimeout(  () =>  {
        paises.forEach( pais =>  {
            console.log(pais)
        });
    }, 1000 ); // Después de un segundo obtenemos los paises...
}

mostrarPaises(); // Opcional

// Un nuevo pais se agrega despues de 2 segundos...
function nuevoPais(pais, callback) {
    setTimeout( () =>  {
        paises.push(pais);
        callback(); // Aqui se pasa la funcion mostrarPaises que aqui es llamada callback
    }, 2000  ); // Pero el segundo ya paso, y se agrega uno nuevo, ejecutamos el callback para que se vuelva a llamar la función
}

// Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises); // mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...
