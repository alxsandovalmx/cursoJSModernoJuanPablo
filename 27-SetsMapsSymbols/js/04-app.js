// Weakmap - Maps debiles
// Estos son llave:valor
// Sirven para mantener una serie de datos como privados
// Solo aceptan objetos

let key     = { userId:1 };
let key2    = { userId:2 };

let weakmap = new WeakMap();

// Agregando un elemento
weakmap.set(key,"Alex");

// Revisando si existe un elemento
weakmap.has(key); //true

// Para obtener la informacion que hay en ese weakmap
console.log( weakmap.get(key) );
console.log( weakmap.size ); // Error, no se puede conocer la dimension

// Eliminar un elemento llave:valor
weakmap.delete(key); // true
weakmap.get(key); // undefined cuando no existe un elemento con esa llave

// Los weakmap no son iterables
weakmap.set(key2,"Vicky");
weakmap.size; //undefined
key2=undefined;

weakmap.get(key2); //undefined

