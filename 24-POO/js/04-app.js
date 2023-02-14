// En este video estaremos viendo los modificadores de acceso, básicamente solamente hay private, es decir que se pueda acceder desde la clase...

// Ahora en JavaScript de nueva cuenta las clases son algo nuevo, funcionan sobre prototypes, pero con una forma más sencilla, previamente la forma de hacerlo private era con un guion bajo, eso le daba a entender al programador que esa propiedad o método era privado pero aún asi no era como un private real...

class Cliente { 
    #nombre = '';


    // Para acceder a la propiedad #nombre se usan el Set y Get
    setNombre ( nombre ){
        this.#nombre = nombre;
    }

    getNombre ( ){
        return this.#nombre;
    }

    constructor( nombre, saldo = 0) {
        // this._nombre = nombre;
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    nombreCliente() {
        return this.#nombre;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
}

const pedro = new Cliente('Pedro');
 console.log(pedro.nombreCliente() );

// console.log(pedro._nombre);

// Esto dara un error de acceso marcando Private Field
// console.log(pedro.#nombre);

// Solucion
pedro.setNombre('Alexis');
console.log( pedro.getNombre() );

