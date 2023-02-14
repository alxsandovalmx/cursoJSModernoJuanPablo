// Symbol

// Los simbolos son nuevos en ES6, te permiten crear una propiedad única 

// Symbol es creado y se agrega a una propiedad del objeto.
// new Symbol enviaria un error.
// Las propiedades Symbol no son iterables

const sym = Symbol('symbol');
const sym2 = Symbol('symbol');

// Los symbolos siempre son diferentes

// console.log( Symbol() === Symbol() );

// Llaves de objetos únicos
let nombre = Symbol();
let apellido = Symbol();

// Crear un objeto vacio
let persona = {}

// Esto no va a servir
persona.datos;

// Debe tener corchetes
persona[nombre]     = 'Juan';
persona[apellido]   = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo       = 500;

console.log(persona);
console.log(persona[nombre]);

// Las propiedades Symbol no son iterables
// No se puede acceder al SYMBOL con un for
for( let i in persona ) {
    console.log(`${i} : ${persona[i]}`);
}

// También se puede crear UNA DESCRIPCION DEL SYMBOLO
let nombreCliente = Symbol('Nombre del cliente');
let cliente = {};

cliente[nombreCliente] = 'Pedro';

// Probar
console.log(cliente);

// Accediendo a un solo elemento
console.log(cliente[nombreCliente]);

// Trae la descripcion del symbol
console.log( nombreCliente );

