// En este video estaremos viendo lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

// function() se reemplaza por () =>
const aprendiendo = () =>  {
    console.log('Aprendiendo JavaScript');
}

// Una funcion con una linea no requiere llaves
const aprendiendo = () => console.log('Aprendiendo JavaScript');

// Una funcion con un sola linea tiene implicto el return del valor
const aprendiendo = () => 'Aprendiendo JavaScript';

console.log( aprendiendo() ); // Aprendiendo JavaScript

