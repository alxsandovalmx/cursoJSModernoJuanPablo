// Hoisting - ( Elevación )

// Ademas de las muy notables diferencias en sintaxis, quiero mostrarte las diferencias entre ambas... si llamamos la función antes de declararla, el function expression va a funcionar bien, mientras que el otro nos va a marcar un error..

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}

// Eso pasa porque JavaScript se ejecuta digamos en 2 vueltas - Eso se le conoce como Hoisting, la primer vuelta registra todas las funciones y determina las variables, esta etapa se le llama de creación, 

// la segunda pasada es la que executa tu codigo, se llama de ejecución.

// Por lo tanto el primer código funciona porque function se registra primero y después se ejecuta el código.

// el segundo no funciona porque si bien es una función no es declarada como tal, lo ve más bien como una variable...

// Esto se le conoce como hosting que basicamente son esas 2 etapas (creación y ejecución)

// básicamente tu código se ejecuta asi:

// 1a etapa
const sumar2;
sumar2(); // a estas alturas es undefined...

// 2a etapa
sumar2 = function() {
    console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
}

// Y esta es pregunta para obtener un trabajo como JS Developer...
