// Namespaces es un design pattern de organización de código, 
// ayuda a evitar colisiones con nombres en el scope global de javascript.
// La idea del namespace es crear un objeto global alrededor de tu aplicación y 
// agregar todas las funciones dentro, en lugar de crear múltiples funciones y 
// objetos que se puedan acceder de forma global.
// Se tiene un prefijo y luego se acceden a todas las funciones de forma global

// Siempre inicia como un objeto
const restaurApp = {};

// Agrega contenido
restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

// Agrega funciones
restaurApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro Menú:`)
        platillos.forEach((platillo, index) => {
            console.log(`${index})  ${platillo.platillo} $ ${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevoPlatillo= {
            platillo,
            precio
        }
        restaurApp.platillos.push( nuevoPlatillo );
    }    
}

// Se agregan platillos
restaurApp.funciones.agregarPlatillo('Pastel', 20);

// console.log(restaurApp );
const { platillos} = restaurApp;

// Este es el uso de Namespace
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(1);
