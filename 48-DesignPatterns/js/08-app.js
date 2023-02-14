// Un intermediario es un design pattern que se comunica con distintos objetos a la vez...
// el mediator define objetos ya localizados para objetivos especificos.

// Se comunicara con Comprador
function Vendedor ( nombre ) {
    this.nombre = nombre;
    this.sala = null; // Se llenaran cuando inicia la subasta
}
// Funciones exclusivas del Vendedor
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

// Se comunicara con Vendedor
function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null; // Se llenaran cuando inicia la subasta
}
// Funciones exclusivas del Comprador
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

// 
function Subasta( id ) {
    let compradores = {}; // Puede ser const

    return {
        registrar: usuario =>  {
            compradores[usuario.nombre] = usuario;
            usuario.sala = id;
        }
    }
}

/*
compradores = {
    "Juan": {

    }
}
*/

// Creacion de objetos
const juan = new Comprador('Juan');
const pablo = new Comprador('pablo');

const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta( Date.now() );

// Se registran los usuarios
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

// Muestra oferta
vendedor.oferta('Mustang 1966', 300);

// Ofertas de compradores
juan.oferta(300, juan);
pablo.oferta(400, pablo); // Comentar... y no se podrá ver la oferta porque no fue registrado...
juan.oferta(500, juan); // Comentar... y no se podrá ver la oferta porque no fue registrado...
vendedor.vendido('Pablo');

console.log( juan );
console.log( pablo );

