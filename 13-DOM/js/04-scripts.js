// En este video estaremos viendo una introducción a querySelector

//  querySelector va a retornar máximo 1 elemento, si hay múltiples coincidencias solo va a retornar el primero...

const card = document.querySelector('.card'); // QuerySelctor utiliza una sintaxis como de selector de CSS, por lo tanto si deseas seleccionar una clase, debe tener un punto al inicio...

// nota como a pesar de tener múltiples cards, solo selecciona 1

console.log(card);

// al ser una sintaxis tipo CSS puedes utilizar selectores más especificos...
// Selecciona .info que es hijo de .premium
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card... de hospedaje
// Podriamos seleccionar section.hospedaje
// .card:nth/child(2) -> Selecciona el 2do hijo de .card
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Ahora estas son clases, veamos como seleccionar un ID

// En CSS seleccionas los ID con un signo de numeral #..
const formulario = document.querySelector('#formulario'); // En CSS seleccionas los ID con un signo de numeral..
console.log(formulario);
// También los ID pueden tener selectores especificos como el de arriba, pero recuerda un ID es único asi que no tendría mucho sentido no?

// Si un selector no existe, retorna vacio y con length 0
const noExiste = document.querySelector('#no-existe');
console.log(noExiste);

// Recuerda que también en CSS puedes seleccionar etiquetas asi que si quieres seleccionar la navegación podrías tener algo asi:
const nav = document.querySelector('nav');
console.log(nav);

// .clase -> Selecciona por clase
// #id -> Selecciona por ID
// nav -> Selecciona por la etiqueta HTML
