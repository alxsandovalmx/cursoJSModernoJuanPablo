// Listado de paises
const paises = [];

// Un nuevo pais se agrega despues de 3 segundos...
function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`)
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

// Los paises se muestran despues de 3 segundos
function iniciarCallbackHell() {
    setTimeout(() => {
        // Agregar nuevo pais
        nuevoPais('Alemania', mostrarPaises); // 1er Callback
        setTimeout(  () =>  {
            nuevoPais('Francia', mostrarPaises); // 2do Callback
            setTimeout(() => { 
                nuevoPais('Inglaterra', mostrarPaises); // 3er Callback
            }, 3000);
        }, 3000 ); // Después de 3 segundos obtenemos los paises...
    }, 3000);
}

iniciarCallbackHell(); // Opcional


// mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...