// Veamos lo que se conoce como Traversing the DOM

// Todo en JavaScript esta conectado en el document, la forma en que te moverás entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo..

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

// Cada elemento en la navegación, los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
console.log(navegacion.childNodes);

// También existe algo llamado Children
console.log(navegacion.children)

// La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos...

// Hay mucha información aqui...
console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un elemento

console.log(navegacion.children[0].nodeName) // Que etiqueta es...


// Por ejemplo si selecciono el primer card...

const card = document.querySelector('.card');
console.log(card.nodeType); // 1
console.log(card.nodeName); // DIV

// 1 = Elemento
// 2 - Atributo
// 3 - Text node
// 8 - Commentario
// 9 - Documento
// 10 - doctype

// En javascript puedes seleccionar un elemento y navegar en sus diferentes elementos... por ejemplo el card...

console.log(card.children);

// Si quieres acceder a ese div con la clase de info puedes colocar...
console.log(card.children[1]);

// Si quieres acceder a los elementos hijos de ese info... recuerda puedes anidar las propiedades.
console.log(card.children[1].children[1]);

// Acceder al titulo
console.log(card.children[1].children[1].textContent);

// Modificar ese titulo con un traversing
card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'

console.log(card.children[1].children[1].textContent);

// Intenta cambiar el texto que dice concierto por algo más siguiendo esta sintaxis de ir navegando por el DOM...

console.log(card.children[1].children[0].textContent);

card.children[1].children[0].textContent = 'Cambiando el Texto con traversing de concierto...';

console.log(card.children[1].children[0].textContent);

// No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen...
console.log(card.children); // Hijos del .card
console.log(card.children[0]); // imagen
console.log(card.children[0].src); // url de la imagen

// Cambiar la imagen...
card.children[0].src = 'img/hacer2.jpg';

// Children es una buena forma de acceder a los elementos por su posición, pero supongamos que de nuestra navegación queremos acceder al primer o último enlace...

console.log(navegacion.lastChild); // Ultimo Nodo hijo - #text espacios
console.log(navegacion.lastElementChild); // Ultimo Nodo hijo / HTML

// Si desesa acceder al primero
console.log(navegacion.firstChild) // Primer Nodo Hijo - #text espacios
console.log(navegacion.firstElementChild); // Primer Nodo hijo - HTML

// Cambiar el primer texto...
navegacion.firstElementChild.textContent = 'Nuevo Enlace...';


// En el video anterior vimos como hacer traversing de un elemento padre hacia el hijo, JavaScript también te permite seleccionar un elemento hijo e ir navegando hacia el padre...

// vamos a seleccionar el primer enlace...
const enlace = document.querySelector('a');
console.log(enlace);

// Hay diferentes formas...

console.log(enlace.parentNode) // // Primer Nodo Padre - Incluye espacios 
console.log(enlace.parentElement) // Primer Nodo Padre - Solo HTML

// En algunos casos ambos van a dar el mismo resultado, en otros recuerda el espacio es importante...

// También puedes ir al padre del padre...
console.log(enlace.parentElement.parentElement)

// En JavaScript también es posible de hacer traversing a elementos que estan en el mismo nivel, digamos el vecino aunque en javascript se les conoce como hermanos...

console.log(enlace);
console.log(enlace.nextElementSibling);
console.log(enlace.nextElementSibling.nextElementSibling);

console.log(card.nextElementSibling);


// También hay una forma de ir digamos en la otra dirección...

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard)

console.log(ultimoCard.previousElementSibling);

