// En este video estaremos viendo la palabra this...
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento

// this es una palabra reservada que no puede ser usada
// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,

    // Sin el this daria un error porque no existe nombre ni precio
    mostrarInfo: function() {
        return `El Producto: ${nombre}  tiene un precio de ${precio}`;
    }

    // this ayuda a que el scope se mantenga en el mismo objeto
    // this hace que haga referencia al objeto mismo
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

const producto2 = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,

    // this ayuda a que el scope se mantenga en el mismo objeto
    // this hace que haga referencia al objeto mismo en el que fue declarado
    mostrarInfo: function() {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

// Aqui podemos ver mejor el uso del 'this'
console.log(producto.mostrarInfo() );
console.log(producto2.mostrarInfo() );
