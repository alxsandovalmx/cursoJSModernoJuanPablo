// De la misma forma que puedes heredar un constructor con Prototoypes y sus métodos, también puedes heredar una clase, es una de las caracteristica que hay en POO

class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
    }
    
    retiraSaldo(retiro) {
        this.saldo -= retiro;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const pedro = new Cliente('Pedro', 3000);
console.log(pedro);
console.log(pedro.imprimirSaldo() );

// NUEVO :
class Empresa extends Cliente {
    
    // Se reescribe el constructor porque tendra propiedades diferentes o nuevas
    constructor ( nombre, saldo, telefono, tipo ) {
        // Va hacia el constructor del padre
        super ( nombre, saldo );
        // Otros atributos se declaran fuera
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida(mensaje){ // Reescribir un método...
        return `Bienvenido al cajero para empresas`;
    }
}

// Heredando y creando una instancia de empresa
const empresa = new Empresa('Empresa1', 10000, 10290193, 'Construccion');

// Debido a que heredamos podemos acceder a imprimirSaldo
console.log(empresa.imprimirSaldo() );

// Acceder al statico sin instanciar de ambos
console.log( Empresa.bienvenida() );
console.log( Cliente.bienvenida() );
