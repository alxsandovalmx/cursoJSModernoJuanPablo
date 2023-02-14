// Fetch API desde una API

// Al hacer click carga el API
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

// Funcion para cargar los datos
function obtenerDatos() {
    // Hace la peticion
    fetch('https://picsum.photos/list') 
        .then( respuesta => {
            return respuesta.json() // Obtiene la respuesta como un json y lo transforma a un objeto
        }) 
        .then(resultado => {
            mostrarHTML(resultado); // Recibe el objeto y lo envia como un arreglo de objetos
            console.log(resultado)
        })
}

// Funcion para mostrar el HTML de los datos recibidos
function mostrarHTML( datos ) {
    
    const contenido = document.querySelector('#contenido');

    let html = '<DIV style="background-color:#33475b"><br>';

    datos.forEach( perfil => {

        // Destructuring del objeto
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    html += '</DIV>';

    contenido.innerHTML = html;
    
}
