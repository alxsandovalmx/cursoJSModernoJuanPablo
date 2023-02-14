// Scope
// El Scope es el alcance de una variable, es decir, que funciones o bloques de código tendrán acceso o podrán conocer una variable una vez que es creada.

/** GLOBAL SCOPE */
const cliente = 'Juan'; // COLOCAR ESTE CLIENTE DENTRO DE ALGUNA DE LAS 2 FUNCIONES

function mostrarCliente() {
    console.log(cliente);
}

function obtenerCliente() {
    console.log(cliente);
}

mostrarCliente();
obtenerCliente();

/** Si tienes una función que tiene una variable que se llama igual, eso no es problema para JavaScript */
// /** Function Scope... */
const cliente = 'PABLO';

function mostrarCliente() {
    const cliente = 'Juan';
    console.log(cliente);
}

function obtenerCliente() {
    console.log(cliente);
}

mostrarCliente(); // Juan
obtenerCliente(); // PABLO

    
/** Scope por bloque... */

const login = true;

function clienteLogueado() {

    const cliente = "Juan";
    console.log(cliente); // Juan

    if(login) {
        const cliente = 'Admin';
        console.log(cliente); // Admin
    }

}
clienteLogueado();