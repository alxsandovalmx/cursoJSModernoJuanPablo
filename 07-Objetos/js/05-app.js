// Objetos dentro de objetos

const producto = { // objeto producto
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion: { // objeto informacion
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
};

console.log(producto); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto ( . )

// Regresa un objeto informacion con sus propiedades: medias{},fabricacion{}
console.log(producto.informacion);
// Regresa 'China' 
console.log(producto.informacion.fabricacion.pais);
// Regresa un objeto medidas con sus propiedades: peso, medida
console.log(producto.informacion.medidas);



