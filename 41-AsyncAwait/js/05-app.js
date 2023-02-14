// Async Await Con una API...

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Funcion con Promises
// Fetch ya incluye el .catch
function obtenerDatos() {
    fetch('https://picsum.photos/list') 
        .then( respuesta => { return respuesta.json() }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
        .catch(error => console.log(error) )
}

// Funcion con Async await
async function obtenerDatos() {
    const resultado = await fetch('https://picsum.photos/list'); // Su ejecucion es secuencial porque son dependientes
    const respuesta = await resultado.json(); // Espera hasta terminar la promesa anterior
    console.log(respuesta);

}

// Function con Async await y try{} catch{}
async function obtenerDatos() {
    try {
        const resultado = await fetch('https://picsum.photos/list');
        const respuesta = await resultado.json();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }

}