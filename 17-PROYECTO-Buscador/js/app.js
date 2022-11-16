// Proyecto: Buscador de automoviles

// Variables HTML
const marca = document.querySelector ('#marca');
const year = document.querySelector ('#year'); // No usar ñ
const minimo = document.querySelector ('#minimo');
const maximo = document.querySelector ('#maximo');
const puertas = document.querySelector ('#puertas');
const transmision = document.querySelector ('#transmision');
const color = document.querySelector ('#color');

// Contenedor para los resultados
const resultado = document.querySelector ('#resultado');

// Variables de control de resultados
const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {

    marca:          '',
    year:           '',
    minimo:         '',
    maximo:         '',
    puertas:        '',
    transmision:    '',
    color:          ''
};


// Evento para esperar la carga del HTML
document.addEventListener('DOMContentLoaded', ()=> {

    // Muestra los autos del archivo db.js al cargar
    mostrarAutos( autos );

    // Llena las opciones de años
    llenarSelect();

} );

// Eventos para los select de busqueda
marca.addEventListener('change', (e)=> { // Evento cuando algo cambia
    
    datosBusqueda.marca = e.target.value; // Asigna la marca al objeto de busqueda

    filtrarAuto ();

})
// Eventos para los select de busqueda
year.addEventListener('change', (e)=> {
    
    // El elemento de la BD es un Number por eso se convierte el String del año seleccionado
    datosBusqueda.year = parseInt(e.target.value); // Asigna el año al objeto de busqueda

    filtrarAuto ();

})
// Eventos para los select de busqueda
minimo.addEventListener('change', (e)=> {
    
    datosBusqueda.minimo = e.target.value; // Asigna el precio minimo al objeto de busqueda

    filtrarAuto ();

})
// Eventos para los select de busqueda
maximo.addEventListener('change', (e)=> {
    
    datosBusqueda.maximo = e.target.value; // Asigna el precio maximo al objeto de busqueda

    filtrarAuto ();

})
// Eventos para los select de busqueda
puertas.addEventListener('change', (e)=> {
    
    datosBusqueda.puertas = parseInt(e.target.value); // Asigna el # de puertas al objeto de busqueda

    filtrarAuto ();

})
// Eventos para los select de busqueda
transmision.addEventListener('change', (e)=> {
    
    datosBusqueda.transmision = e.target.value; // Asigna la transmision al objeto de busqueda

    filtrarAuto ();

})
// Eventos para los select de busqueda
color.addEventListener('change', (e)=> {
    
    datosBusqueda.color = e.target.value; // Asigna la transmision al objeto de busqueda

    // console.log(  datosBusqueda );

    filtrarAuto ();

})

// Funcion del HTML para mostrar los autos 
function mostrarAutos ( autos ){

    // Elimina el HTML previo
    limpiarHTML();

    // Recorre cada objeto auto de la db.js
    autos.forEach( auto => {
        
        // Desestructuracion de objetos
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;

        // Creacion del HTML
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - 
                                Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`;

        // Insertar el auto en el HTML
        resultado.appendChild(autoHTML);
        
    });

}

function noResultado (){

    // Elimina el HTML previo
    limpiarHTML();
    
    const noResultado = document.createElement ('div');
    noResultado.classList.add('alerta', 'error'); // Clases de CSS
    noResultado.textContent = 'No hay ningun vehiculo con esas caracteristicas';
    resultado.appendChild(noResultado);

}

// Limpiar HTML
function limpiarHTML(){

    // Forma rapida (recomendada)
    while ( resultado.firstChild ) {

        resultado.removeChild( resultado.firstChild );
        
    }

};

// Funcion para llenar el option de años
// EL rango fue una decision personal
function llenarSelect (){
    
    for (let i = max; i >= min; i--) {
        
        // Crea un elemento option 
        const opcion = document.createElement ('option');
        // Asigna el valor del año al atributo value del elemento option 
        opcion.value = i;
        // Asigna como texto al elemento option el año
        opcion.textContent = i;
        // Se agrega la opcion al HTML
        year.appendChild(opcion);       
    }

}

// Funcion de Alto nivel: Funcion que toma una funcion como parametro
// Funcion que busca en base a la busqueda
function filtrarAuto() {

    // Filter soporta el encadenamiento o chaining
    // Le envia la db.js con los objetos auto
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo )
                        .filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );

    // Si el resultado no esta vacio
    resultado.length ? mostrarAutos(resultado)  : noResultado() ; // Actualizamos el HTML 

}

// Funcion llamada por la funcion filtrarAuto
function filtrarMarca( auto ){

    // Desestructuracion de objetos
    const {marca} = datosBusqueda;

    // Si la marca del objeto busqueda no esta vacia
    if ( marca ){

        // Regresa los autos que tienen la misma marca seleccionada
        // auto.marca proviene de la db.js
        return auto.marca === marca;
    }
    // Si no selecciono nada regresa los autos
    return auto;

}

function filtrarYear( auto ) {
    // Desestructuracion de objetos
    const {year} = datosBusqueda;

    // Si el año del objeto busqueda no esta vacio
    if ( year ) {
        
        // Regresa los autos que tienen el mismo año
        // auto.year proviene de la db.js
        return auto.year === year;
    }
    // Si no selecciono nada regresa los autos
    return auto;
}

function filtrarMinimo( auto ) {

    // Desestructuracion de objetos
    const {minimo} = datosBusqueda;
    
    // Si el minimo del objeto busqueda no esta vacio
    if ( minimo ) {
    
        // Regresa los autos que tienen el precio mayor al minimo
        // auto.precio proviene de la db.js
        // No necesita un parseInt porque no tiene un operador estricto
        return auto.precio >= minimo;
    }
    // Si no selecciono nada regresa los autos
    return auto;

}


function filtrarMaximo( auto ) {

    // Desestructuracion de objetos
    const {maximo} = datosBusqueda;
    
    // Si el minimo del objeto busqueda no esta vacio
    if ( maximo ) {
    
        // Regresa los autos que tienen el precio mayor al minimo
        // auto.precio proviene de la db.js
        // No necesita un parseInt porque no tiene un operador estricto
        return auto.precio <= maximo;
    }
    // Si no selecciono nada regresa los autos
    return auto;

}

function filtrarPuertas( auto ) {

    // Desestructuracion de objetos
    const {puertas} = datosBusqueda;
    
    // Si el minimo del objeto busqueda no esta vacio
    if ( puertas ) {
    
        // Regresa los autos que tienen el precio mayor al minimo
        // auto.puertas proviene de la db.js
        return auto.puertas === puertas;
    }
    // Si no selecciono nada regresa los autos
    return auto;

}

function filtrarTransmision( auto ) {

    // Desestructuracion de objetos
    const {transmision} = datosBusqueda;
    
    // Si el minimo del objeto busqueda no esta vacio
    if ( transmision ) {
    
        // Regresa los autos que tienen el precio mayor al minimo
        // auto.transmision proviene de la db.js
        return auto.transmision === transmision;
    }
    // Si no selecciono nada regresa los autos
    return auto;

}

function filtrarColor( auto ) {

    // Desestructuracion de objetos
    const {color} = datosBusqueda;
    
    // Si el minimo del objeto busqueda no esta vacio
    if ( color ) {
    
        // Regresa los autos que tienen el precio mayor al minimo
        // auto.color proviene de la db.js
        return auto.color === color;
    }
    // Si no selecciono nada regresa los autos
    return auto;

}

