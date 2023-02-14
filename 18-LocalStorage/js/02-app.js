// En este video veamos como obtener los datos del Local Storage

// Obtiene el valor de la llave nombre que esta en localStorage
const nombre = localStorage.getItem('nombre'); // Regresa null si no existe la llave nombre
console.log(nombre);

// Obtiene la informacion como un String de la llave productoJSON
const productoJSON = localStorage.getItem('productoJSON');

// Transforma un String en un objeto literal o tipo JSON con JSON.parse
console.log(JSON.parse( productoJSON ));

// Obtiene los valores de la llave messes del Local Storage y las transforma con JSON.parse en un objeto literal o tipo JSON
const meses = JSON.parse( localStorage.getItem('meses') );
console.log(meses);

