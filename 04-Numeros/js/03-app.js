// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.

let resultado; 

// Pi
resultado = Math.PI;

// redondeo tomando primeros 2 digitos arriba o abajo ( < 2.54... > 3)
resultado = Math.round(2.5);

// redondeo arriba ( ceil )
resultado = Math.ceil(2.2); // 3

// redondeo abajo ( floor )
resultado = Math.floor(2.8); // 2

// Raiz cuadrada
resultado = Math.sqrt(144); // 12

// Abssoluto
resultado = Math.abs(-300); // 300

// Potencia ( 8 a la potencia 3 )
resultado = Math.pow(8, 3);

// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);

// Max
resultado = Math.max(4,1,21,4,15,5,11,5);

// Aleatorio
resultado = Math.random();

// Aleatorio dentro de un rango:
// Obtiene numeros aleatorios del 0 al 30
resultado =  Math.floor( Math.random() * 30 );


console.log(resultado);