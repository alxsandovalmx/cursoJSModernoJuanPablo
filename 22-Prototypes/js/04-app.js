// Herencia de Prototypes

// Object Constructor (Objeto Constructor)
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function (){

    console.log( 'Desde mi nuevo Prototype' );

}; 

// Instancia
const pedro = new Cliente('Pedro', 6000);

console.log( pedro );

// Como los Prototypes estan atados a los objetos se utilizan sus funciones como si fueran metodos
pedro.tipoCliente();

// Ahora si vemos el prototype de empresa no vera las funciones que fueron definidas para Cliente
function Empresa( nombre, saldo, categoria ) {
    this.nombre     = nombre;
    this.saldo      = saldo;
    this.categoria  = categoria;
}

const ccj = new Empresa('Código Con Juan', 400, 'cursos en linea');
console.log(ccj);

// Definicion de Prototypes
// Obtener Tipo de Cliente
// Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
Cliente.prototype.tipoCliente = function()  { 

    let tipo;

    if( this.saldo > 10000 ) {

        tipo = 'Gold';

    } else if( this.saldo > 5000 ) {

        tipo = 'Platinum';

    } else {

        tipo  = 'Normal';

    }

    return tipo;

}

// Acceder a los prototypes
console.log ( pedro.tipoCliente() );

// Otro Prototipo para el nombre completo
// Debe escribirse el prototype con un nombre  diferente sino se estaria reescribiendo el anterior`
// Mantiene la referencia a las funciones y los datos del objeto
Cliente.prototype.nombreClienteSaldo = function()  {

    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;

}

// Un prototype que accede a otros prototypes
console.log ( pedro.nombreClienteSaldo() );

// Otro prototype para retirar saldo
Cliente.prototype.retiraSaldo = function( retiro )  {

    this.saldo -= retiro;

}

// Reescribir un valor
pedro.retiraSaldo( 2000 );

// Comprobar saldo
console.log ( pedro.nombreClienteSaldo() );


// NUEVO: Heredar Prototypes

// Cliente y Persona tienen atributos similares, podriamos heredar de cliene a persona y agregar solo los atributos de Persona
// Crear 2 objetos nuevos...
function Persona( nombre, saldo, telefono ) {
    // this.nombre   = nombre;
    // this.saldo    = saldo;
    // this.telefono = telefono;

    // Debe ser:
    // Asi heredamos de Cliente
    // Call manda a llamar una funcion
    // Asi se hereda el constructor de cliente
    Cliente.call( this, nombre, saldo );
    // Al hacer esto se hereda el constructor pero no se heredan las funciones y tiene que ser antes de que se crea una instancia
    this.telefono = telefono;
}

// Heredar la función ( Antes de Instanciarlo )
// Object.create es una funcion creada para copiar las funciones del Prototype y asignarlas a otra pero perdemos el contructor
Persona.prototype = Object.create( Cliente.prototype );

// Heredar el constructor
Persona.prototype.constructor = Cliente;

// Instanciarlo
const juan = new Persona('Juan', 6000, 1120192);
console.log(juan);

// Podemos en la intancia juan utilizar las funciones de Cliente
// Si no se hace la herencia antes de instanciar marcaria un error
console.log ( juan.nombreClienteSaldo() );

// Crear Prototype solo para Persona...
Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de este cliente es: ${this.telefono}`
}

console.log ( juan.mostrarTelefono() );

