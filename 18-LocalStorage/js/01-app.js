// Veamos algunos ejemeplos de LocalStorage...

// Local Storage funciona con una especie de Llave valor...
// Tiene un limite de 5 mb de almacenamiento
// Es una buena recomendacion para almacenar un JSON Web Token JWT

// Para agregar elementos al localStorage - Puede mantenerse la informacion mas tiempo
localStorage.setItem('nombre', 'Juan');

// Añadir algo a sessionstorage - Se pierde la informacion al cerrar la ventana
sessionStorage.setItem('nombre', 'Pablo');

// Local Storage solo soporta strings, no soporta arrays ni objetos pero puedes almacenarlos convirtiendolos a string..

const producto = {

    nombre: 'Monitor 24"',
    precio: 300
};

// Convierte un objeto literal o tipo JSON en un string
const productoString = JSON.stringify(producto);

// Agrega el String al localStorage
localStorage.setItem('productoJSON', productoString);


// Lo mismo con un array
 const meses = ['Enero', 'Febrero', 'Marzo'];

// Transforma un arreglo en un String y luego los agrega en el localStorage
localStorage.setItem('meses',  JSON.stringify(meses));
