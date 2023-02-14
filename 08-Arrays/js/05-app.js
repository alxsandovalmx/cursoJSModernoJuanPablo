// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 800
}

// Para agregar elementos al arreglo al final
// Este es un arreglo llamado carrito que esta lleno de objetos tipo producto
carrito.push(producto);
carrito.push(producto2);

// Para añadir elementos al Inicio del carrito...
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.log(carrito);

// Los metodos push y unshift sirven para los metodos FIFO y LIFO
