// En este video estaremos viendo como seleccionar un elemento por su ID, recuerda los ID's solo se deben utilizar uno con ese mismo nombre por documento...

const formulario = document.getElementById('formulario');
console.log(formulario);

// Si no existe estará vacio (regresa un null)

const noExiste = document.getElementById('no-existe');
console.log(noExiste);

// Añadir un ID 2 veces, seleccionara el primero que encuentre...

// Existen otro par de selectores que hoy en día son los más comunes, tienen una sintaxis muy similar a la de CSS

