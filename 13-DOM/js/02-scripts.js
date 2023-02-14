// En este video estaremos viendo como seleccionar elementos por su clase...

// Seleccionando el header...

                // Todos tus selectores inician con document...
const header = document.getElementsByClassName('header'); // Es muy importante las mayusculas y minusculas...
console.log(header);

const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);


// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
// Tendremos un arreglo de los elementos encontrados
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);
// El length sera 0
