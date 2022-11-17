// Variables

// La mayoria de selectores son const
const carrito           = document.querySelector('#carrito'); // Se usa # por el uso de id
const listaCursos       = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito  = document.querySelector('#vaciar-carrito');
let articulosCarrito    = [];


// Funcion para cargar todos los EventListener
cargarEventListener(); // Esto es para que no queden en la ventana global

function cargarEventListener (){

    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar carrito de compras
    // Si es poco codigo podemos poner el codigo en la funcion anonima
    btnVaciarCarrito.addEventListener('click', ( ) => {

        // Eliminamos elementos del carrito
        articulosCarrito = [];
        
        // Eliminamos todo el HTML
        limpiarHTML();            

    });

    // Funcion que se lanza despues de cargar todo el HTML
    document.addEventListener('DOMContentLoaded', ()=>{

    // Se carga el contenido del Local Storage en el carrito
    // Si no hay elementos en el Local Storage para que no sea un null que generaria errores se crea un arreglo vacio con [ ]
    articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
    
    // Ejecuta la funcion que muestra el HTML del carrito
    carritoHTML();

});    

};

// Funciones
// Funcion que agrega elementos al carrito
function agregarCurso (event) {

    event.preventDefault(); // Evitamos que se vaya a la ruta por defecto #

    if ( event.target.classList.contains('agregar-carrito') ) {

        const cursoSeleccionado = event.target.parentElement.parentElement;

        // Obtendra toda la informacion del curso agregado
        leerDatosCurso ( cursoSeleccionado );

    }
};

// Funcion que elimina un curso del carrito
function eliminarCurso (event) {

    if ( event.target.classList.contains('borrar-curso') ) {
        
        // Obtiene el id del curso a eliminar que esta en el atributo data-id
        const idCurso = event.target.getAttribute('data-id');
        
        // Con filter eliminamos del arreglo del carrito a elemento con el mismo id
        articulosCarrito = articulosCarrito.filter( curso => curso.idCurso !== idCurso );
        
        // Iteramos sobre los elementos del HTML y mostramos
        carritoHTML();

    }
};

// Lee el HTML del CARD seleccionado y extrae la informacion
function leerDatosCurso ( curso ){

        // console.log( curso );

        // Se crea un objeto con el contenido del curso seleccionado
        const infoCurso = {
            
            // Aunque hay 2 imagenes, querySelector regresa la 1ra img que encuentre
            imagen:     curso.querySelector('img').src, // Obtiene el URL de la imagen
            titulo:     curso.querySelector('h4').textContent, // Obtiene el texto de h4
            precio:     curso.querySelector('.precio span').textContent, // Seleccion con mayor especificidad
            idCurso:    curso.querySelector('a').getAttribute('data-id'), // Obtiene el atributo data-id de a
            cantidad:   1

        }

        // Revisa si un elemento ya existe en el carrito
        const existeCurso = articulosCarrito.some( curso => curso.idCurso === infoCurso.idCurso );

        if ( existeCurso ){
            // Se actualiza la cantidad
            const cursos = articulosCarrito.map( curso => {

                if( curso.idCurso === infoCurso.idCurso ) {
                    curso.cantidad++; // Aumenta la cantidad en 1
                    return curso; // Retorna el objeto duplicado
                }
                else{
                    return curso; // Retorna los objetos que no son duplicados
                }
            });
            
            articulosCarrito = [...cursos]; // Actualiza el carrito con el nuevo arreglo

        }else {
            // Se agrega el curso al carrito
            // Agrega curso al carrito
            articulosCarrito = [...articulosCarrito, infoCurso];
        }

        console.log( articulosCarrito );

        carritoHTML();

};

// Muestra el carrito de compras en el HTML
function carritoHTML ( ) {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y crea el HTML
    articulosCarrito.forEach( curso => {

        // Destructuracion de Objetos
        const { imagen, titulo, precio, cantidad, idCurso } = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${imagen}" width="100"> </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td> <a href="#" class="borrar-curso" data-id="${idCurso}"> X </a> </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild( row );
    
    } );

    // Guardando los articulos selecionados en el LocalStorage
    // Se escogio este lugar porque cuando se agregan o eliminan se debe actualizar el Local Storage
    sincronizarLocalStorage();

};

// Funcion para guardar la informacion en el Local Storage
function sincronizarLocalStorage(){

    // stringify convierte un arreglo de objetos en un String
    localStorage.setItem('carrito', JSON.stringify( articulosCarrito ));

};

// Elimina los cursos del tbody
function limpiarHTML (){

    // Forma lenta
    // Si no se limpia el HTML tiene la informacion previa agregada con el child
    // contenedorCarrito.innerHTML = '';

    // Forma optimizada
    while( contenedorCarrito.firstChild ){
        contenedorCarrito.removeChild( contenedorCarrito.firstChild );
    }
    /* El while revisa si tiene hijo y lo elimina hasta quedar vacio
        <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </div>
    */

};

