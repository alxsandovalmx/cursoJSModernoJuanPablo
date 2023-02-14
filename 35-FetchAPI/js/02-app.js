// Fetch API desde un JSON (Objeto)

// JSON se considera una tecnologia de traansporte
// La diferencia con un objeto literal es que la llave va con "comillas"

// Evento que se ejecutara al hacer click
const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

// Funcion para cargar los datos del JSON
function obtenerDatos() {
    
    // Busca el archivo json
    fetch('data/empleado.json') 
        .then( respuesta => {
            return respuesta.json(); // Recibe un JSON como respuesta y lo transforma a un Objeto
        }) 
        .then( resultado => {
            mostrarHTML(resultado); // Enviar el resultado de la peticion a la funcion
            console.log(resultado);
        })
}

// Funcion que formatea la respuesta que viene en texto en HTML
// Destructuring del objeto json
function mostrarHTML( {empresa,  id, nombre, trabajo} ) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <DIV style="background-color:#33475b"><br>
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p><br>
        </DIV>
    `
}

