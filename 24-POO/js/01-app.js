// Las Classes en JavaScript llegaron hasta hace pocos años, muchas personas no consideraban a javascript como un lenguaje serio ya que la programación orientada a objetos era el object constructor y los métodos eran los prototypes...

// Así que en 2015 llegaron las classes a javascript, que solo es una mejora en la sintaxis, al final sigue siendo un object constructor con sus prototypes..

// En realidad sigue siendo lo mismo, pero la facilidad de crear objetos y añadirle métodos si mejoro bastante gracias a las classes

// Las classes se crean con la palabra reservada class...
// El Nombre debe ser en mayusculas... Y esta forma se le conoce como // El Nombre debe ser en mayusculas... Y esta forma se le conoce como CLASS DECLARATION
class Cliente { 

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

//Si recuerdas previamente instanciabamos nuestro objecto con new... para pasar esos valores las classes introducieron lo que se conoce como constructores... en algunos lenguajes el constructor es el mismo nombre de la clase pero en javascript es constructor
const juan = new Cliente('Juan', 400);

console.log(juan);


// Existe una segunda forma de crear clases, se le conoce como CLASS EXPRESSION
const Cliente2 = class {
    
    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2);

