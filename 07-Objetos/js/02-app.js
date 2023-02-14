// Veamos como acceder a las propiedades de un objeto:

const producto = {
    // La ( , ) es importante, sin ella tendriamos un error
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    // el último elemento puede o no tener la ( , )
    disponible: true,
}

console.log(producto);

// Supongamos que deseamos acceder al nombre, en los objetos de javascript existe algo llamado la sintaxis de punto

// objeto.key
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma aunque no tan común es:
console.log(producto['nombre']); // objeto['key']



