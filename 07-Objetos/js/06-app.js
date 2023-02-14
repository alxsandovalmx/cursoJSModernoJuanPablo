// Destructuring de objetos anidados

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

// Esto no crea la variable informacion, solo accede
const { nombre, informacion:{ fabricacion } } = producto;

console.log( nombre );
console.log( fabricacion );

// Si yo deseo crear la variable informacion
const { nombre, informacion, informacion:{ fabricacion } } = producto;

// Se crean las variables: nombre, informacion y pais
const { nombre, informacion, informacion:{ fabricacion: {pais} } } = producto;
console.log( pais ); // China

// Si deseo crear la variable fabricacion
const { nombre, informacion, informacion:{ fabricacion, fabricacion: { pais } } } = producto;
console.log( fabricacion ); // {pais: 'China'}

