// Veamos como asignar variables hacia un objeto

const producto = {
    // La ( , ) es importante, sin ella tendriamos un error
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    // el último elemento puede o no tener la ( , )
    disponible: true,
}

// Añadir propiedades nuevas a un objeto fuera del objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto igual que acceder ( objeto.key )
producto.imagen = "image.jpg"; // Fuera lleva =

// Finalmente para eliminar una propiedad se utiliza delete
delete producto.nombre;

console.log(producto);

