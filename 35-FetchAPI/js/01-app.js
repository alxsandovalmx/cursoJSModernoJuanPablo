// Fetch API consumir datos desde un txt...

// Carga el texto del archivo al hacer click
const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);

// Funcion que obtendra la informacion del txt
function obtenerDatos() {
   
    // URL de donde se van a recibir o enviar los datos
    // Como usa promesas no es necesario especificar resolve ni reject
    fetch('data/datos.txt') // URL
        .then( respuesta => {
            console.log(respuesta);

            console.log(respuesta.headers.get("Content-Type")); //text/plain; charset=UTF-8
            console.log(respuesta.status); // Estado // 200
            console.log(respuesta.statusText); // Estado en ingles // OK
            console.log(respuesta.url); // URL a la que consultamos // http://127.0.0.1:5500/Curso%.../data/datos.txt
            console.log(respuesta.type); // Tipo de consulta // basic

            // Hay que decirle que método vamos a utilizar...
            // Hay 2: JSON o Texto
            return respuesta.text();
            // return respuesta.json();

        })
        .then( datos => {
            console.log(datos); // Obtiene los datos que vienen de la respuesta
        })
        .catch( error => {
            console.log(error); // Captura si hay un error
        })
}
