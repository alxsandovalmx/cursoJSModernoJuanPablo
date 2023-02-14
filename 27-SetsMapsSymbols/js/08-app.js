// Veamos unas serie de iteradores que se pueden considerar nuevos en JavaScript, ya vimos algunos en videos anteriores y usualmente con un for un map estarás bien, pero hay otros que pueden facilitarte tu código.

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set( [123, 231, 131, 102] );
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');


// Entries Iterador: Retorna las entradas de cada elemento iterado en la forma llave:valor
// Entries a las ciudades
for( let entry of ciudades.entries() ){
    console.log(entry);
}

// Entries a las ordenes que es un Set, la llave-valor son iguales
for( let entry of ordenes.entries() ){
    console.log(entry);
}

// Entries a los datos que es un Map
for( let entry of datos.entries() ){
    console.log(entry);
}

// Values iterator: Retorna los valores de cada elemento iterado
// Values a las ciudades
for(let value of ciudades.values()) {
    console.log(value);
}

// values a las ordenes
for( let value of ordenes.values() ){
    console.log(value);
}

// values a los datos
for( let value of datos.values() ){
    console.log(value);
}

// Keys iterator: Retorna las llaves de cada elemento iterado
// keys a las ciudades
for(let keys of ciudades.keys() ) {
    console.log(keys);
}

// keyss a las ordenes
for( let keys of ordenes.keys()  ){
    console.log(keys);
}

// keyss a los datos
for( let keys of datos.keys()  ){
    console.log(keys);
}



// Default el iterador de un arreglo es como values
for(let ciudad of ciudades) {
    console.log(ciudad);
}

// Por Default el iterador de un Set es como un keys o values
for( let orden of ordenes){
    console.log(orden);
}

// Por Default el iterador de un map es igual que entries()
for( let dato of datos){
    console.log(dato);
}


// Iterar en un string
const mensaje = 'Aprendiendo JavaScript';

// Forma vieja
for( let i = 0; i < mensaje.length; i++ ) {
    console.log(mensaje[i]);
}

// Forma Nueva
for( let letra of mensaje) {
    console.log(letra);
}

// Iterar en un NODE LIST
const enlaces = document.getElementsByTagName('a');

// console.log( enlaces );

for (let enlace of enlaces) {
    console.log(enlace.href);
}

