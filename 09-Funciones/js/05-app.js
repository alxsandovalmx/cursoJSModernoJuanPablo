// Funciones que tienen parametros y reciben argumentos...

// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versatiles e inteligentes deberán declarar parametros y recibir argumentos

function saludar( nombre, apellido ) { // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido}` );
}

saludar( 'Juan', 'De la torre' ); // Pablo y De la torre son argumentos, son los valores reales...

saludar();

// Si no se pasa un argumento a una funcion que espera recibirlos entonces se establecera como 'undefined'
