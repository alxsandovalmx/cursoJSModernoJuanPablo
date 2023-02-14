
// VS Cdoe

//     <!-- 02 - JavaScript en el HTML
//     JavaScript puede ser agregado en cualquier lugar (mostrar head, body o antes del cierre del body)

//     Muchas personas que vienen de lenguajes como Java o C preguntan que como se compila Javascript, todos los navegadores ya tienen un engine que comprende JavaScript, por lo tanto solo basta con colocar las etiquetas <script>
// 0-->

// <!-- <script>
//     alert("Hola Mundo")
// </script> -->




// <!-- 03 - JavaScript Externo 
//     Usualmente tu código JavaScript se recomienda colocarlo en un archivo externo 
//     veamos como hacerlo
// -->


// alert("Hola Mundo")
'use strict';


// 04 - Veamos como crear nuestro primer programa en JS
// const nombre = prompt('Cual es tu nombre?');
// document.querySelector('.contenido').innerHTML = ` ${nombre} está aprendiendo JavaScript Moderno`;


// 05 - Comentar el código

// Comentar el código es una de las caracteristicas más importantes que debes adoptar temprano en tu carrera acomo programador

// Muchas personas dicen que el buen código habla por si solo, decir algo asi es como decir que un buen libro es cuando sabes en que página y que parrafo esta una frase, podrás recordarlo a la semana o al mes, pero no lo vas a recordar en 6 meses o un año.

// Existen 2 tipos de comentarios, de una linea o de múltiples lineas

/*

*/


// 06 - Todos los navegadores tienen una consola de Javascript, las mejores sin duda son firefox y Chrome
// La consola es muy útil ya que podrás observar tu código JS, resultados y seleccionar elementos

// Se pueden crear variables e imprimirlas
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "juan", profesion: "Desarrollador Web" }
console.log( obj );

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún error
console.error("Algo salió mal");

// Limpiar la consola
console.clear();

// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); 
    console.warn("Eso no esta permitido"); 
    console.warn("Eso no esta permitido");
    console.warn("Eso no esta permitido");
console.timeEnd('Hola');
   

// 07 - Muchas programadores cometen el error de que se fijan en tener un código muy ordenado en lugar de preocuparse por aprender cosas más avanzadas, otros cometen el error al reves, aprenden un lenguaje a profunidad pero su código es muy desordenado y dificil de leer

// JavaScript tiene una caracteristica, a diferencia de otros lenguajes de programación el ; al final  no es obligatorio salvo que tengas 2 líneas de código en una misma linea.
// ejemplo

console.log('Hola')
console.log('Mundo')

// va a funcionar, pero si tienes un código desordenado; no va a funcionar salvo que pongas ; 
console.log('Hola'); console.log('Mundo');

// Como recomendación siempre pon una instrucción por linea, no es obligatorio salvo el caso que vimos anteriormente pero va a facilitar mucho tu código

// ahora, vamos a crear una función, no te preocupes aun por funciones lo veremos más adelante

// function hola() {
// console.log('ok')
// }

// en estos casos esta función es valida y va a funcionar, pero es mejor utilizar tabs o espacios 

// 08 - Obteniendo ayuda con ESLint para revisar errores de código.

// El equipo debe decidir que 'Guia de estilos' utilizan para desarrollar

// crear el archivo .eslintrc.json

// {
//     "parserOptions" : {
//         "ecmaVersion": 6
//     },
//     "rules" : {
//         "semi": ["error", "always"] // Muestra errores de código o también errores de código
//     }
// }

