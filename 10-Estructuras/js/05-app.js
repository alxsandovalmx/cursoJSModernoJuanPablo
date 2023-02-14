// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...

const metodoPago = 'efectivo';

switch(metodoPago) {

    case 'efectivo':
        pago( metodoPago );
        break;

    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;

    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;

    default:
        console.log('Aún no has pagado');
        break;

}


// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if

function pago( metodoPago ){

    console.log(`Pagaste con ${metodoPago}`);

}

