const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

// Agrega elemento al final
carrito.push(producto);
carrito.push(producto2);

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Agrega elemento al inicio
carrito.unshift(producto3);

// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// Eliminar el ultimo elemento...
carrito.pop();

// Eliminar el primer elemento...
carrito.shift();

// Ahora supongamos que deseas eliminar del centro...
carrito.splice(1,0); // el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..

// Eliminar 2 elementos a partir de la posicion 1
carrito.splice(1, 2);

console.log(carrito);
