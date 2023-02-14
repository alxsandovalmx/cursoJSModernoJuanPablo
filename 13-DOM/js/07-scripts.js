// En JavaScript también es posible cambiar el CSS de un elemento, o agregar o quitar classes...

// Vamos a cambiar el color de texto del h1

const heading = document.querySelector('h1');

// y hay todo un objeto con propiedades CSS que puedes utilizar, si quieres conocerlas todas coloca...
console.log(heading.style);

heading.style.backgroundColor = 'red'; 

//  Nota como las propiedades que le puedes pasar, son similares a las de CSS, con la diferencia de que el guion se elimina y la segunda palabra su primer letra es mayuscula.

heading.style.textTransform = 'uppercase';
heading.style.fontFamily = 'Arial';

// Ahora yo no recomiendo que pongas style, ya que tu archivo JS será muy grande, otra desventaja es que la apariencia debe ser algo que sea responsabilidad del CSS, pero lo que si puedes hacer es agregar o quitar classes..

// Vamos a seleccionar el primer card, puedes ver que tiene un parrafo con una categoria llamada concierto, eso le cambia el color: 
const card = document.querySelector('.card');
console.log(card);

console.log(card.classList); // Classlist nos permitirá listar las classes
card.classList.add('nueva-clase'); // te permitirá añadir una clase.. // si deseas añadir múltiples classes debes agregar una coma en cada una

// ahora si deseas eliminar una clase utilizas.remove
card.classList.remove('card'); // de la misma forma si deseas remover múltiples classes tendrías que hacerlo agregando una coma

// Con esto te puedes ir dando una idea de todo lo que es posible hacer con JavaScript...

