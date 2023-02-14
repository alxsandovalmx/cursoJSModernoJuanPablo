// Si recuerdas una variable con const una vez que es definida no puede reasginarse su valor.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// Lo siguiente no es posible porque una constante no puede cambiar su valor y daria un error
const producto = "Monitor";
producto = 'Tablet';
console.log(producto);

// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

producto.disponible = false;

console.log(producto);

// En JS una variable aunque este declarada como constante al estar en un objeto sus propiedades se pueden reescribir o eliminar

delete producto.precio;

console.log(producto);

// Puedes ver que lo pudimos modificar, a pesar de ser const, veamos como prevenir esto en el próximo video

