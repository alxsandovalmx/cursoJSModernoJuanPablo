// En el video anterior vimos el operador && y vimos que en el se deben cumplir ambas condiciones...

// El operador OR revisa porque se cumpla al menos una o la otra, si colocas 2 o 3  condiciones y todas se cumplen se va a ejecutar el código porque revisa que se cumpla al menos 1.

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

if( efectivo > totalCarrito || credito > totalCarrito ) {

    console.log('Puedes pagar con efectivo o credito');

} else if( disponible >= totalCarrito ) {

    console.log('Paga con ambos');

} else {

    console.log('No puedes pagar');

}

// Puedes ver que se cumple una u otra condición, y con eso basta para que el código de la primera condición se cumpla...

