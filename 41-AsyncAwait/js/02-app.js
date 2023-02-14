// Async Await con Function Declaration

// Funcion que descarga los clientes
function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout( () => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');
            }            
        }, 3000);
    });
};

// Async await
async function ejecutar() {
    try {
        const respuesta = await descargarClientes(); // Deten la ejecución hasta que sea ejecutado...
        console.log(respuesta);
    } catch (error) { // La respuesta del reject cae aqui automaticamente
        console.log(error)
    }

}

// Ejecucion
ejecutar();
console.log( 2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta
