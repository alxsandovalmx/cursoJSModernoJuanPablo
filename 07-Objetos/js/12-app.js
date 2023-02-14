// El Object Constructor

// Object Literal... esto es mas utilizado
const producto = {

    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,

};

// Object Constructor... esto es mas dinamico
// Esto era la POO en JS antes de aceptar clases
function Producto( nombre, precio ) {

    // this mantiene la referencia al objeto declarado y sus valores 
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
    
}

// Se esta llamando al Object Constructor que crea un objeto literal de tipo producto
const producto2 = new Producto ( 'Monitor', 500 );
const producto3 = new Producto ( 'Television', 100 );

// Esto muestra la informacion correcta
console.log( producto2 );
console.log( producto3 );

