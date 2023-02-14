// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;

// Podemos crear un objeto que agrupe toda esta información en una sola variable 

// Esto se le conoce como object literal (objeto literal)...
const producto = {

}

// Estas llaves despues del signo = representan un objeto

const producto = {
    
    // Esto se le llama una propiedad o llave del objeto (key)
    nombre: 
}

const producto = {
    // Nota como en lugar del signo igual se utilizan ( : ), esta sintaxis es propia de los objetos y representa el valor que tendrá la propiedad o la llave del objeto (key), muchas veces se les dice llave valor (value)
    nombre: 'Monitor 20 pulgadas' 
}

// Si deseas agregar más propiedades puedes hacerlo de la siguiente forma

const producto = {
    // La ( , ) es importante, sin ella tendriamos un error
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    // el último elemento puede o no tener la ( , )
    disponible: true,
}

console.log( producto );
