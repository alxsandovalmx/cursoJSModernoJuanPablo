// Weak Set - Variante del Set - Set debil

// En el WeakSet solo puedes pasar objetos
// En Set puedes pasar lo que sea
var weakSet = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 3000
};

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
};

const nombre = 'Pedro';

// Agregando objetos al WeakSet
weakSet.add( cliente ); 
weakSet.add( cliente2 );
// ws.add(nombre); // Error: Solo se pueden agregar objetos

console.log( weakSet );

// Revisando si existe esa linea
console.log( weakSet.has( cliente ) ); // Si no existe una variable sera undefined
console.log( weakSet.has( cliente2 ));  // true
console.log( weakSet.has( nombre ));  // false, Error: Solo se pueden tratar objetos

// console.log( ws.delete(window)); 
console.log( weakSet.delete(cliente) );
console.log( weakSet.has(cliente) ); 

// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.


