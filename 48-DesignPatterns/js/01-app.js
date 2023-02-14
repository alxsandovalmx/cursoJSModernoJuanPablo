// Class Pattern
// Este patron de diseño pertenece a la categoria de creación
// Consiste en crear el proyecto usando Clases

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');

console.log(persona);

