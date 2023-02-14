// Uso de la libreria Moment.js
// Sitio web: https://momentjs.com

// Formas de mostras las fechas
let diaHoy = new Date();
console.log( diaHoy ); // Wed Nov 16 2022 17:44:37 GMT-0800 (Pacific Standard Time)

// Otro formato de mostrar la fecha
diaHoy = new Date().toLocaleString();
console.log( diaHoy ); // 11/16/2022, 5:45:08 PM

// Otra forma de motras las fechas
diaHoy = new Date().toLocaleTimeString();
console.log( diaHoy ); // 5:45:21 PM

// Otra forma de motras las fechas
diaHoy = new Date().toLocaleDateString();
console.log( diaHoy ); // 11/16/2022 - MM/DD/YYYY

// Moment.js sirve para darle un formato como uno desee de fecha
// Locate nos sirven para que las fechas esten en español
moment.locale('es'); // Mostrara las fechas en español
console.log( moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy) ); // Se establece el formato

console.log( moment().format('LLLL', diaHoy) ) // miércoles, 16 de noviembre de 2022 17:52

// Tambien cuenta con operaciones
// Podemos agregar dias por ejemplo para un cupon en el que termina su validez
console.log ( moment().add(3, 'days').calendar() ); // sábado a las 17:53

