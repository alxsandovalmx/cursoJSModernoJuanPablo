// Creando un Set
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto y mas cuando es una gran cantidad de datos...

// Los sets no son Clave:Valor sino solo Valor
// Set es Sensitive Case
// Los duplicados no se agregan
let carrito = new Set();

// .add nos permite agregar elementos al Set
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3'); // No lo inserta

// Metodo para saber cuantos elementos tiene
console.log( carrito.size );

// Comprobando que un valor existe en el set.
console.log( carrito.has('Camisa') ); // true
console.log( carrito.has('Guitarra') ); // false

// Eliminando un elemento del set
console.log( carrito.delete('Camisa') ); // true
console.log( carrito.has('Camisa') ); // false
console.log( carrito );

// Limpiar todos los elementos de un set (Elimina todo)
carrito.clear();
console.log(carrito);

// Los Sets son iterables

// Foreach a un set
// Aqui el indice es igual al valor
carrito.forEach( (producto, index, pertenece) =>  {
    console.log(producto);
    console.log(index);
    console.log(pertenece); // Pasa el Set completo
});

// Foreach a un set
carrito.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito); // nombre de la variable
})

// En un arreglo
// Elementos duplicados
const arregloNumeros = [ 1, 6, 2, 3, 4, 2, 4, 5, 3, 4];

let numeros = new Set ( arregloNumeros );
// Tambien se puede pasar el arreglo directamente
// let numeros = new Set( [1,2,3,4,5,6,7,3,3,3,3] );

// Muestra los elementos no duplicados, no los ordena
console.log( numeros );

// Convertir un set a un arreglo...
// Cada elemento del set es un elemento del arreglo
const arregloCarrito = [...carrito];
console.log( arregloCarrito );

