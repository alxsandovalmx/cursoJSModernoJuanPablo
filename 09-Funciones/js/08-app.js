// Funciones que retornan valores

// Actualmente hemos tenido funciones que envian datos a la consola, ya cuando veamos la parte del DOM algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero también tendremos funciones que retornan valores para pasarlos hacia otras funciones o hacer algo más...

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(1,2);

console.log(resultado);

// Existe el paradigma funcional
// Ejemplo más avanzado....
let total = 0;

function agregarCarrito( precio ) {
    return total += precio;
}

function calcularImpuesto( total ) {
    return total * 1.16;
}

// Simulacion de 3 compras
total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log( total );

// Calculo del total a pagar incluyendo el impuesto
const totalPagar = calcularImpuesto( total );

console.log( `El total a pagar es de ${totalPagar}` );

