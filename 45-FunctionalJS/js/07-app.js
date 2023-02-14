// Funciones que retornan una función

const obtenerCliente = () => () => console.log('Juan Pablo');

// Llama la 1ra parte de la funcion
const fn = obtenerCliente();

// Llama la ultima parte de la funcion
fn();
