// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...

// y en cuanto a performance los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto.

// Se crean como los Sets()
let cliente = new Map();

// Agregando un elemento key:value
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

// Acceder a los valores
console.log( cliente.get('nombre') ); // Trae lo que este en el nombre
console.log( cliente.get('tipo') );
console.log( cliente.get('saldo') );

// Métodos al MAP

// Tamaño del MAP
console.log(cliente.size); // 3 - Regresa la cantidad de elementos

// Contiene un valor
console.log( cliente.has('tipo') ); // true - Consulta si existe ese elemento
console.log( cliente.get('tipo') );

// Borrar un elemento
cliente.delete('nombre');
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre')); // Cuando no existe un elemento lo marca como undefined
console.log( cliente.size) ;

// Borrar todos los elementos del map
cliente.clear();
console.log(cliente);

// También se puede inicializar un map con diferentes valores...
const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ] );

// Agrega un elemento despues de haberlo inicializado, si se pone la misma key lo reescribe
paciente.set('nombre', 'Antonio');
paciente.set('cuarto', 400);

console.log(paciente);

// Los Maps son iterables como los Sets
// Foreach a un map
// Los Maps si son elementos de clave:valor
cliente.forEach( (datos, index) => {
    console.log(datos);
    console.log(`${index}: ${datos}`);
});

