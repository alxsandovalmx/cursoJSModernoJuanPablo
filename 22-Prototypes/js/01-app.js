// En este capitulo estaremos viendo que son los prototypes y como utilizarlos

// Los prototypes están muy relacionados con los objetos... de hecho el prototype esta disponible en todos los objetos

// Previamente habiamos visto 2 formas de crear objetos...

// Object literal, que es algo asi:
// Esta forma aunque es la más común, también es menos dinamica..
const cliente = {
    nombre: 'Alexis',
    saldo:  500
};

console.log( cliente );

// Si necesitas añadir o crear un objeto reutilizable o dinamico tienes que utilizar un constructor de función

// En JavaScript hoy en día tenemos classes, pero previamente la programación orientada a objetos era de la siguiente forma:
function Cliente( nombre, saldo ) {
    this.nombre = nombre;
    this.saldo  = saldo;
}

const alexis = new Cliente('Alexis', 400);

console.log( alexis ); // Puedes ver que si expandimos alexis en la consola tenemos algo llamado el Prototype...

