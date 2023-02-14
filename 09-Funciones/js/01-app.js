// Las funciones en cualquier lenguaje son una serie de procedimientos o instrucciones, que realizan una acción, una ventaja de las funciones es que permiten tener un código más ordenado fácil de mantener..

// Otra ventaja de las funciones es que son reutilizables, puedes tener una función que valide un formulario y utilizarla en todos tus formularios, puedes tener también una función que envie datos al servidor y reutilizarla múltiples veces...

// Existen 2 formas de crear funciones en JavaScript

// Declaración de Función, la expresión de la función utiliza la palabra reservada function, seguida de un nombre y un parentesis, en este parentesis se colocan los argumentos, finalmente el cuerpo de la función se define por unas llaves...

function sumar() {
    console.log(2 + 2);
}

// Las funciones deben llamarse, de otra forma en realidad no hacen mucho:

sumar(); // se manda llamar por su nombre seguido del parentesis()


// Expresión de función - Este tipo de funciones se asigna como si fuera una variable ( Function Expression )
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2(); // se manda llamar de la misma forma

// Expresiones function: Las funciones también se pueden crear mediante una expresión function. ESTA FUNCION PUEDE SER ANONIMA, no tiene por qué tener un nombre. Sin embargo, puedes proporcionar un nombre con una expresión function que permite que la función se refiera a sí misma y también facilita la identificación de la función en el seguimiento de la pila de un depurador.

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };

console.log( factorial(3) );


// Existe una 3ra forma de crear funciones, que más bien son métodos, la veremos un poco más adelante...

