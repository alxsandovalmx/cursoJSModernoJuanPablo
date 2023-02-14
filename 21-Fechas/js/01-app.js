// Seccion 21 - Fechas en JavaScript

// En javascript hay un objeto llamado Date
// Las fechas son objetos
const diaHoy = new Date();
console.log( diaHoy ); // Wed Nov 16 2022 17:35:35 GMT-0800 (Pacific Standard Time)
console.log(typeof diaHoy) // Object

// En este momento
// Regresa el valor el milisengundos
// Date.now() no necesita instanciarse de new Date();
let valor = Date.now(); 
console.log( valor ); // Milisegundos que han transcurrido desde el 1/Enero/1970 hasta ahora
console.log(typeof valor) // Number

// Date es Mes, dia y año
let cumple = new Date('11-18-1985');
console.log( cumple ); // Mon Nov 18 1985 00:00:00 GMT-0800 (Pacific Standard Time)

// Otra forma de expresar la fecha
cumple = new Date('November 18 1985');
console.log( cumple ); // Mon Nov 18 1985 00:00:00 GMT-0800 (Pacific Standard Time)

// Convertir fecha a string
// .toString lo cambiaria de object a string

cumple.toString();
console.log( cumple ); // Mon Nov 18 1985 00:00:00 GMT-0800 (Pacific Standard Time)
console.log( typeof cumple.toString() ); // string

// Funciones con las fechas
valor = diaHoy.getMonth(); // Mes actual: 10 = Noviembre // 0 - Enero
console.log(valor);

valor = diaHoy.getDate();
valor = diaHoy.getDay();

valor = diaHoy.getFullYear(); // Año actual: 2022
console.log(valor);

valor = diaHoy.getMinutes(); // Minuto actual: 27 
console.log(valor);

valor = diaHoy.getHours(); // Hora actual en hrs: 17
console.log(valor);

valor = diaHoy.getTime(); // Milisegundos que han transcurrido desde el 1/Enero/1970 hasta ahora
console.log(valor);

// Set sirve para obtener el valor del objeto de fechas
// Get sirve para modificar el valor del objeto de fechas

diaHoy.setFullYear(2018); // Modifica el año actual
valor = diaHoy.getFullYear(); // Año actual: 2018
console.log(valor);

// Si se necesita crear un sitio web que tenga un limite de tiempo 
// para hacer algo es recomdable validar con el servidor porque
// cualquiera puede modificar la hora de su PC 
