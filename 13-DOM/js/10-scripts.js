// Finalmente otro tema importante cuando trabajas con el DOM, es la creación de HTML desde JavaScript..

// Cuando publicas un tweet, tienes un textarea que al enviarlo se agrega al listado de tweets, de ahi la gente comienza a darle me gusta, así que veamos como hacerlo generar HTML desde JavaScript...

// Y no te preocupes si todo lo que vemos en este video no queda claro, estaremos practicando mucho lo que es el DOM Scripting ya con muchos otros proyectos...

// Vamos a crear un nuevo enlace... lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...

const enlace = document.createElement('A');

// Segundo paso es crear el texto del enlace no? lo haremos con textContent

enlace.textContent = 'Nuevo Enlace';

// Despues vamos a asignar una ruta 
enlace.href = '/nuevo-enlace';

// Si quieres agregar una clas
enlace.classList.add('enlace');

// Se agregan 2 atributos
enlace.setAttribute( 'data-enlace', 'nuevo-enlace' );

// Finalmente se agrega el enlace donde deseas mostrarlo...

const navegacion = document.querySelector('.navegacion');

// Agrega enlace como hijo de navegacion al final
navegacion.appendChild(enlace);

console.log(enlace);

// Si deseamos agregarlo en otro lugar se usa el Nodo de referencia
navegacion.insertBefore( enlace, navegacion.children[1] );

// Tambien se puede insertar una funcion como evento
enlace.onclick = miFuncion;

function miFuncion () {

    alert('Diste click');
}

// Vamos a crear un segundo ejemplo, crearemos uno de nuestros cards... sin duda será algo más complejo...

// crear los 3 parrafos.

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por pesrona';
parrafo3.classList.add('precio');

// Crear el div...
const info = document.createElement('div');

// Se agrega la clase info
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
// Se agrega la url de la imagen
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const card = document.createElement('div');
// Se agrega la clase card
card.classList.add('card');

// Vamos a asignar la imagen al card...
card.appendChild(imagen);

// y el info
card.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // Al inicio info

console.log(parrafo1);
console.log(parrafo2);
