// Callback hell to promise...

const paises = [];

// nuevoPais es una promesa
// Es igual a const nuevoPais = () => {  new Promise ... }
const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`) // Lo que va dentro del resolve es lo que recibira .then
    }, 3000);
});

// Llamada al Promise
nuevoPais('Alemania')
    .then( resultado => { // resultado viene de la respuesta del resolve
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
    })

