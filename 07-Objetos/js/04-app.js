// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}

// Algunas veces deseas asignar el valor de un objeto hacia una variable, esto lo hacemos accediento a la propiedad con la sintaxis de punto.

const nombre = producto.nombre;

console.log(nombre);

// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas

// Esto crea la variable y extrae la propiedad nombre del objeto producto en un solo paso
const { nombre } = producto;

console.log(nombre);

// si deseas extraer más variables;
const { precio } = producto;

console.log(precio)

// Tambien puedes hacerlo en un solo paso siempre que exitan las propiedades
const {nombre, precio, disponible, noExiste} = producto;

console.log(disponible)

// Si se extrae una propiedad que no existe dara un undefined
console.log(noExiste) // undefined


