// Constructor Pattern
// Este patron de diseño pertenece a la categoria de creación
// Consiste en crear el proyecto utilizando una clase base y hacer que las demas hereden de ella
// En otros lenguajes se les conoce como clases Abstractas, en JS no hay soporte

// Clase Padre
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Clase Hija
class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Miguel', 'cliente@cliente.com', 'Código Con Juan');
console.log(cliente);

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);
