// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...

const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Esta es la forma declarativa
// Para añadir un elemento producto al arreglo simplemente agregamos...
let resultado = [...carrito, producto];
resultado = [...resultado, producto2];

// Donde se ponga el elemento es donde sera agregado
 // Para añadir al inicio...
 resultado = [producto3, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);

// Forma imperativa: es la forma de trabajar directamente con los datos
carrito.push(producto);
// Modifica el elemento

// Forma declarativa: explica la logica sin definir el flujo de control
let resultado = [...carrito, producto];
// No modifica el elemento porque crea una copia
