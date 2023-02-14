// Mixins, es una forma de agregar funciones a una clase una vez que ha sido creada...

// Vamos a utilizar la clase que creamos previamente...
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Creamos otra clase para agregarle las mismas funciones
class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Se crea un objeto con funciones
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}` );
    }
}

// Mixin
// Añadir funcionesPersona a la clase...
Object.assign( Persona.prototype, funcionesPersona );
Object.assign( Cliente.prototype, funcionesPersona );

const cliente = new Persona('Juan', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('Cliente', 'cliente@cliente.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();
