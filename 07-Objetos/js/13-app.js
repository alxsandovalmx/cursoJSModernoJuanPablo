// En este video estaremos viendo Object.keys, object.values y entries, estos son más conocidos como iteradores de objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Nos devolverá un arreglo con los keys del objeto
// Puede servir para saber si un objeto que consulto a la BD tiene o no informacion
// [0:"nombre", 1:"precio", 2:"disponible"]
console.log(Object.keys(producto));

// Nos devolverá un arreglo con los valores del objeto
// ["Monitor...", 300, true]
console.log(Object.values(producto));

// Entries nos va a retornar una matriz de llaves y valores
// [0:"nombre", 1:"Monitor..."], [0:"precio", 1:300], [...]
console.log(Object.entries(producto));

// Y con eso tenemos un buen conocimiento de Objectos en JavaScript, los estaremos retomando más adelante pero primero hay que conocer otros conceptos como Arreglos y Funciones para poderle sacar más provecho.

