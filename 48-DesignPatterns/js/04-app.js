// Factory es una forma de crear objetos basados en cierta condición...
// Algunos atributos se reutilizan y otros son diferentes
// Este patron de diseño pertenece a la categoria de creación

// Clase para crear diferentes inputs
class InputHTML {
    constructor( type, nombre ) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

// Clase que crea el elemento input segun la condicion
class HTMLFactory {
    crearElemento( tipo, nombre ) {
        switch(tipo) {
            case 'text':
                return new InputHTML('text', nombre);
            case 'tel':
                return new InputHTML('tel', nombre );
            case 'email':
                return new InputHTML('email', nombre);
            default:
                return;
        }
    }
}

// Crea un elemento input tipo Text
const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'nombre-cliente');
console.log( inputText.crearInput() );

// Crea un elemento input tipo Tel
const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento('tel', 'telefono-cliente');
console.log(inputText2.crearInput());

// Crea un elemento input tipo Email
const elemento3 = new HTMLFactory();
const inputText3 = elemento3.crearElemento('email', 'email-cliente');
console.log(inputText3.crearInput());
