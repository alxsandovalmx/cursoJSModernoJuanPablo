// Veamos como añadir métodos a nuestras classes...

class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Cualquier método agregado a la clase será parte del prototype
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }

    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }


    // También existe algo llamado las propiedades staticas, estas no requieren ser instanciadas...

    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

// Javascript es constructor
const juan = new Cliente('Juan', 400);

console.log(juan);

console.log(juan.imprimirSaldo() );

juan.retiraSaldo(200);

console.log(juan.imprimirSaldo() );

// Ver propiedad estatica...

// juan.bienvenida(); // No va a funcionar
console.log( Cliente.bienvenida() ); // Esto si va a funcionar

