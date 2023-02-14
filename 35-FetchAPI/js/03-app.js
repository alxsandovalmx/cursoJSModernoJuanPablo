// Fetch API desde un JSON (Array)

// Evento que se lanza al dar click
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

// Funcion paara cargar un json que es un arreglo
function obtenerDatos() {

    // Lee el archivo json
    fetch('data/empleados.json') 
        .then( respuesta => {
            return respuesta.json() // Recibe la respuesta de la peticion
        }) 
        .then( resultado => {
            mostrarHTML( resultado ); // Recibe el resultado como objeto
            console.log( resultado )
        })
}

// Funcion para mostrar el HTML
function mostrarHTML( empleados ) {
    const contenido = document.querySelector('#contenido');

    let html = '<DIV style="background-color:#33475b"><br>';

    // Itera sobre el json que es un arreglo
    empleados.forEach( empleado => {

        // Destructuring del objeto
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p><br>
        `
    });

    html += '</DIV>';

    contenido.innerHTML = html;
    
}