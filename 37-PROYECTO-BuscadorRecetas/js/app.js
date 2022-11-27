// Proyecto App de recetas con FETCH API y LocalStorage
// Este proyecto utiliza Bootstrap como framework CSS

// Funcion inicial que arranca el proyecto
function iniciarApp(){

    // Selector
    const selectCategorias  = document.querySelector ('#categorias');
    const resultado         = document.querySelector ('#resultado');
    const modal             = new bootstrap.Modal('#modal', {});
    let bandera;

    const favoritosDiv = document.querySelector ('.favoritos');
    if ( favoritosDiv ){

        obtenerFavoritos();
        bandera = true;

    }

    // Eventos
    if( selectCategorias ){

        bandera = false;

        // Al seleccionar una categoria en el HTML se lanza la funcion seleccionarCategoria en JS
        selectCategorias.addEventListener('change', seleccionarCategoria);

        // Llena el select con las opciones disponibles de categorias de la API
        obtenerCategorias();    

    }     
    
    // Funcion para obtener las categorias
    function obtenerCategorias(){

        // Se define la URL
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        // Se hace la peticion HTTP a la url, por defecto es tipo GET para consultar
        fetch( url )
            .then( respuesta => { return respuesta.json() }) // Se recibe la peticion HTTP de tipo JSON
            .then( resultado => mostrarCategorias ( resultado.categories ) ); // Se procesa la respuesta
    }

    // Funcion que itera sobre las categorias obtenidas en la peticion y las muestra en el select
    function mostrarCategorias ( categorias = [] ) {
    
        categorias.forEach( categoria => {

            // Destructuring Object
            const { strCategory } = categoria; // Obtenemos el nombre

            const option       = document.createElement ('OPTION'); // Debe asignar un value
            option.value       = strCategory; // Asignamos el nombre al value
            option.textContent = strCategory; // Asignamos el texto a la funcion
            selectCategorias.appendChild( option );

        });
    }

    // Hace la peticion de recetas con la categoria seleccionada
    function seleccionarCategoria ( e ) {
    
        // Para leer el contenido del evento
        const categoria = e.target.value;
        // Construimos la url del End Point
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        // Peticion HTTP
        fetch( url )
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarRecetas(resultado.meals) ); // La receta viene en meals 
    }

    // Funcion para mostrar las recetas de la categoria previamente seleccionada
    function mostrarRecetas ( recetas = [] ) {

        // LimpiarHTML
        limpiarHTML( resultado );        

        const heading = document.createElement ('H2');
        heading.classList.add( 'text-center', 'text-black', 'my-5' );
        // Evaluacion de recetas y asignacion del texto
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados';
        resultado.appendChild( heading );
    
        // Iteramos sobre las recetas
        recetas.forEach( receta => {

            // Destructuring Object de la receta
            const { idMeal, strMeal, strMealThumb } = receta;

            // Construccion del HTML
            // En Boostrap 1ro se crea el DIV para el ancho y luego otro DIV con el diseño
            const recetaContenedor = document.createElement ('DIV');
            recetaContenedor.classList.add( 'col-md-4' );

            const recetaCard = document.createElement ('DIV');
            recetaCard.classList.add( 'card', 'mb-4' );

            const recetaImagen = document.createElement ('IMG');
            recetaImagen.classList.add( 'card-img-top' );
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb ?? receta.img; // URL de la Imagen

            const recetaCardBody = document.createElement ('DIV');
            recetaCardBody.classList.add( 'card-body' );

            const recetaHeading = document.createElement ('H3');
            recetaHeading.classList.add( 'card-title', 'mb-3' );
            recetaHeading.textContent = strMeal ?? receta.titulo; // Nombre de la receta

            const recetaButton = document.createElement ('BUTTON');
            recetaButton.classList.add( 'btn', 'btn-danger', 'w-100' );
            recetaButton.textContent = 'Ver receta';

            // Asignamos un evento, lo conectamos con Bootstrap
            // recetaButton.dataset.bsTarget = "#modal";
            // recetaButton.dataset.bsToggle = "modal";
            // Podemos reaccionar usando .onclick que es un event handler con .addEventListener no funcionaria
            recetaButton.onclick = () => seleccionarReceta(idMeal ?? receta.id);
            
            // Inyectamos en el HTML, el orden en el que se agregan es el mismo en el HTML
            recetaCardBody.appendChild( recetaHeading );
            recetaCardBody.appendChild( recetaButton );

            /* Lo que se hizo
                .card
                    img
                    .card-body
                        h3
                        button

            */

           // Ahora agregamos el DIV con el heading y button al Card base
           recetaCard.appendChild( recetaImagen );
           recetaCard.appendChild( recetaCardBody );

           // Agregamos el Card base al contenedor HTML
           recetaContenedor.appendChild ( recetaCard );

           // Lo anterior fue hecho en memoria pero necesitamos un elemento del HTML real 
           // que esta disponible para inyectar ahi el codigo generado
           resultado.appendChild( recetaContenedor );
            
        });
    
    }

    // Funcion que obtiene la informacion de la receta seleccionada
    function seleccionarReceta ( id ) {
    
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        // Peticion HHTP
        fetch( url )
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarRecetaModal( resultado.meals[0] ) );

    }

    // Funcion que mostrara el modal de la receta
    function mostrarRecetaModal ( receta ) {
        
        // console.log( receta );

        // Destructugin de la respuesta
        const { idMeal, strInstructions, strMeal, strMealThumb } = receta;
        
        // Agregando contenido al modal
        const modalTitle = document.querySelector ('.modal .modal-title');
        const modalBoddy = document.querySelector ('.modal .modal-body');

        // Asignando el titulo
        modalTitle.textContent = strMeal;

        // innerHTML puede ser usado cuando sanitizaste las entradas pero nunca en un formulario
        modalBoddy.innerHTML = `
        
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades</h3>
            
        `;

        // Creacion de HTML
        const listGroup = document.createElement ('UL');
        listGroup.classList.add( 'list-group' );

        // Mostrar cantidad e ingredientes, la respuesta tiene 20 strIngredient
        for (let i = 0; i < 20; i++) {
            
            if( receta[`strIngredient${i}`] ){

                // La cantidad le pertenece a cantidad
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`]

                const ingredienteLi = document.createElement ('LI');
                ingredienteLi.classList.add( 'list-group-item' );
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;
                
                listGroup.appendChild( ingredienteLi );

            }            
        }

        // Se agrega el LI al modalBody
        modalBoddy.appendChild( listGroup );

        // Seleccionamos el elemento HTML donde ira el botton
        const modalFooter = document.querySelector ('.modal-footer');

        // Limpiar el HTML
        limpiarHTML( modalFooter );

        // Creacion de botones cerrar y favorito
        const existe = existeStorage(idMeal);

        const btnFavorito = document.createElement ('BUTTON');
        btnFavorito.classList.add( 'btn', 'col' );
        btnFavorito.textContent = existe ? 'Eliminar favorito' : 'Guardar Favorito';
        existe ? btnFavorito.classList.add( 'btn-danger' ) : btnFavorito.classList.add( 'btn-success' );

        // Se guarda en LocalStorage
        btnFavorito.onclick = () => { 
            
            // Si existe termina la ejecucion sino agrega a Favorito
            if ( existeStorage( idMeal ) ) {
            
                eliminarFavoritos( idMeal );
                
                // Despuesde haber eliminado se activa la opcion de volver a guardar
                btnFavorito.textContent = 'Guardar Favorito';
                btnFavorito.classList.remove('btn-danger');
                btnFavorito.classList.add('btn-success');

                // Mostrar mensaje Toast
                mostrarToast('Eliminado Correctamente');

                return;
            }

            agregarFavorito( 
            {
                id:     idMeal,
                titulo: strMeal,
                img:    strMealThumb
            });

            // Despues de agregarlo se da la opcion de eliminar
            btnFavorito.textContent = 'Eliminar Favorito';
            btnFavorito.classList.remove('btn-success');
            btnFavorito.classList.add('btn-danger');
            mostrarToast('Agregado Correctamente');

        }

        // Creacion de botones cerrar y favorito
        const btnCerrarModal = document.createElement ('BUTTON');
        btnCerrarModal.classList.add( 'btn', 'btn-secondary', 'col' );
        btnCerrarModal.textContent = 'Cerrar';
        // Como estamos creando el BUTTON .onclick que es un event handler es lo que servira
        btnCerrarModal.onclick = () =>{ 

            modal.hide();
        
            if ( bandera ) obtenerFavoritos();
        }

        // Se agregan los botones en el Modal
        modalFooter.appendChild( btnFavorito );
        modalFooter.appendChild( btnCerrarModal );

        // Muestra el modal
        modal.show();
            
    }

    // Funcion para agregar una receta al Localstorag
    function agregarFavorito ( receta ) {
    
        // Guardamos en LocalStorage y tranformamos un Objeto Literal en un String
        // Solo se pueden guardar String o JSON

        // Operador nullish coalescing '??'
        // El Operador nullish coalescing es un operador lógico que devuelve su operando del lado derecho 
        // cuando su operando del lado izquierdo es nulo o indefinido, y por lo demás devuelve su operando del lado izquierdo.

        // Transformamos el JSON perfecto en un arreglo
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        // Transformamos un objeto en un JSON y guardamos el localStorage
        localStorage.setItem('favoritos', JSON.stringify( [...favoritos, receta] ));
    
    }

    // Esta funcion elimina un elemento del localStorage
    function eliminarFavoritos ( id ) {
    
        // Transformamos el JSON perfecto en un arreglo
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        // Regresa true o false si existe un elemento del arreglo con ese id
        const nuevosFavoritos =  favoritos.filter( favorito => favorito.id !== id );

        // Transformamos un objeto en un JSON y guardamos el localStorage
        localStorage.setItem('favoritos', JSON.stringify( nuevosFavoritos ));        
    
    }

    // Funcion para comprobar si existe un elemento en el localstorage
    function existeStorage ( id ) {
    
        // Transformamos el JSON perfecto en un arreglo
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        // Regresa true o false si existe un elemento del arreglo con ese id
        return favoritos.some( favorito => favorito.id === id );
    
    }

    // Funcion para mostra en mensaje (Toast)
    function mostrarToast ( mensaje ) {
    
        const toastDiv  = document.querySelector ('#toast');
        const toastBody = document.querySelector ('.toast-body');
        const toast     = new bootstrap.Toast( toastDiv );

        toastBody.textContent = mensaje;
        toast.show();
    
    }

    // Funcion que obtiene los elementos de LocalStorage
    function obtenerFavoritos () {
    
        // Transformamos el JSON perfecto en un arreglo
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];     

        if ( favoritos.length ){

            mostrarRecetas( favoritos );

            return;
        }
    
        // Creamos el HTML cuando no hay favoritos
        const noFavoritos = document.createElement ('P');
        noFavoritos.textContent = 'No hay favoritos aún';
        noFavoritos.classList.add( 'fs-4', 'text-center', 'font-bold', 'mt-5' );
        resultado.appendChild( noFavoritos );

    }

    // Elimina los Nodos del contenedor resultado
    function limpiarHTML ( selector ) {
    
        while( selector.firstChild ){

            selector.removeChild( selector.firstChild );

        }
        
    }    

}

// Evento inicial al cargar la pagina
document.addEventListener("DOMContentLoaded", iniciarApp);


