// Promesas

// Vamos a definir un promise
const aplicarDescuento = new Promise( (resolve, reject) => { // Es un arrow function...
    const descuento = true;

    // Comentar estas siguientes lineas para ver el Resolve...
    if(descuento) {
        resolve('Descuento Aplicado'); 
    } else {
        reject('No se pudo aplicar el descuento');
    }

});

// En los Promises hay 3 valores posibles, pendiente, no se ha cumplido o rechazado...
// Fullfilled - Se ha cumplido
// Rejected - Se ha rechazado o no se pudo cumplir
// Pending - Aun no se ha cumplido ni ha sido rechazado

// Uso de Promises
aplicarDescuento
    .then( resultado =>  {
        console.log(resultado);
    })
    .catch( error => {
        console.log(error);
    });

console.log( aplicarDescuento );

// Recuerda que gracias a las ventajas de los arrow functions puedes colocar todo en una sola linea...

aplicarDescuento
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) );

console.log( aplicarDescuento );

// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...

aplicarDescuento
    .then( resultado => descuento( resultado ) )
    .catch( error => console.log(error) );

function descuento( resultado ) {
    console.log('Aplicando el Descuento...', resultado);
}

