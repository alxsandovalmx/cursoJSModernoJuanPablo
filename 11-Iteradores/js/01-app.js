// algunas veces vas a desear ejecutar tu código hasta que una condición se cumpla o se deje de cumplir...

// los For Loops tienen esa caracteristica, se ejecutan hasta que el código deja de cumplir esa condición...
// For loop

// Inicializar el for
// condición
// Incremento

for(let i = 0; i <= 10; i += 2) {
    console.log(`Numero:  ${i} `);
}

// cambiar el <= < o el número hasta unos 20, también iniciarlizar o avanzar con i+= 2



// Podemos llevar este ejemplo más allá una pregunta sencilla para programadores JR es como identificas un numero par o impar en un for loop...
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
}
    


// Los for son útiles cuando tienes un arreglo, digamos un carrito de compras...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}

// en este caso nuestro for loop corre hasta que una condición se cumple, ahora como este arreglo el usuario se va a encargar de llenarlo, que el carrito tenga elementos, un for loop ejecutará el código hasta que lleguemos al final del carrito...