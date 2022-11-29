// Proyecto REST API de Restaurante con Consumos y Propinas
// Este proyecto usa Bootstrap como framework CSS

// Variables
let cliente = {

    mesa: '',
    hora: '',
    pedido: []
    
};

const categorias = {

    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'

}

// Selectores
const btnGuardarCliente = document.querySelector ('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente );

// Funciones
function guardarCliente (  ) {
    
    // Selectores
    const mesa = document.querySelector ('#mesa').value;
    const hora = document.querySelector ('#hora').value;

    // Validar campos vacios
    // Creamos un arreglo al vuelo y accedemos al metodo de arreglos some
    const camposVacios = [ mesa, hora].some( campo => campo === '');

    if ( camposVacios ){

        // Verificar si hay alerta
        const existeAlerta = document.querySelector ('.invalid-feedback');

        // Si no existe la alerta, se muestra
        if ( !existeAlerta ) {

            // Scripting
            const alerta = document.createElement ('DIV');
            alerta.classList.add( 'invalid-feedback', 'd-block', 'text-center' );
            alerta.textContent = 'Todos los campos son obligatorios';

            // Se agrega al contenedor
            document.querySelector('.modal-body form').appendChild( alerta );

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    }

    // Toma una copia del objeto para que no se pierda la ultima propiedad 
    // y reescribe los valores de mesa y hora
    cliente = { ...cliente, mesa, hora }

    // Ocultar modal
    const modalFormulario = document.querySelector ('#formulario');
    // Obtiene el modal actual visible y lo pasa a una instancia
    const modalBootstrap = bootstrap.Modal.getInstance( modalFormulario );
    modalBootstrap.hide();

    // Mostrar las secciones
    mostrarSecciones();

    // Obtener platillos de la API de JSON-Server
    obtenerPlatillos();

}

// Despues de validar la entrada muestra los contents HTML
function mostrarSecciones () {

    // Selector
    const seccionesOcultas = document.querySelectorAll('.d-none');
    // Regresa un nodelist que es como un arreglo
    seccionesOcultas.forEach( seccion => seccion.classList.remove('d-none') );

}

// Funcion que obtiene los platillos de la API
function obtenerPlatillos () {

    const url = 'http://localhost:4000/platillos';

    // Peticion HTTP
    fetch( url )
        .then( respuesta => respuesta.json() ) // Retorna la respuesta como objetos de JS
        .then( resultado => mostrarPlatillos( resultado )) // Ejecuta la funcion con los datos recibidos
        .catch( error => console.log( error ) ) // Validacion de errores

}

// Funcion que crea el HTML para recibir los pedidos 
function mostrarPlatillos ( platillos ) {

    // Selector donde se mostrara la informacion
    const contenido = document.querySelector ('#platillos .contenido');

    // Se recoren los platillos
    platillos.forEach( platillo => {

        // Scripting
        const row = document.createElement ('DIV');
        row.classList.add( 'row', 'py-3', 'border-top' );

        const nombre = document.createElement ('DIV');
        nombre.classList.add( 'col-md-4' );
        nombre.textContent = platillo.nombre;

        const precio = document.createElement ('DIV');
        precio.classList.add( 'col-md-3', 'fw-bold' );
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement ('DIV');
        categoria.classList.add( 'col-md-3' );
        categoria.textContent = categorias[platillo.categoria]; // Obtenemos su equivalente

        const inputCantidad = document.createElement ('INPUT');
        inputCantidad.type = 'number'; // Tipo de entrada
        inputCantidad.min = 0; // Minima cantidad
        inputCantidad.id = `producto-${platillo.id}`; // Se asigna id
        inputCantidad.classList.add( 'form-control' );
        inputCantidad.value = 0; // Asigna el inicio del input

        // Funcion que detecta la cantidad y el platillo que se agrega
        // Se usa onchange porque el elemento es creado al vuelo
        // No se puede agregar un addEventListener a un elemento que no existe
        inputCantidad.onchange = function (){

            // Lee la cantidad del input y transforma a numero entero
            const cantidad = parseInt( inputCantidad.value );
            agregarPlatillo( {...platillo, cantidad} ); // Crea un nuevo objeto con platillo y cantidad

        };

        const agregar = document.createElement ('DIV');
        agregar.classList.add( 'col-md-2' );
        agregar.appendChild( inputCantidad );

        // Se agrega al contenedor HTML
        row.appendChild( nombre );
        row.appendChild( precio );
        row.appendChild( categoria );
        row.appendChild( agregar );
        contenido.appendChild( row );

    });

}

// Funcion que agrega o elimina pedidos
function agregarPlatillo ( producto ) {

    // Extrae el pedido actual
    let { pedido } = cliente;

    // Revisar que la cantidad sea mayor a cero
    if( producto.cantidad > 0 ){

        // Se verifica si existe un elemento en el arreglo
        if ( pedido.some( articulo => articulo.id === producto.id ) ){
         
            // Map regresa una copia del arreglo
            const pedidoActualizado = pedido.map( articulo => {

                // Cuando sea igual el id reemplaza la cantidad
                if( articulo.id === producto.id ){

                    articulo.cantidad = producto.cantidad;

                }
                // Cuando no sea igual solo regresa el articulo
                return articulo; // Retornamos el articulo
            });
            
            // Se asigna el nuevo arreglo al cliente
            cliente.pedido = [...pedidoActualizado];

        }else{
            
            // El articulo no existe, asi que se agrega
            cliente.pedido = [...pedido, producto];

        }
        
    }else{
        
        // Eliminar elementos cuando la cantidad sea 0
        const resultado = pedido.filter( articulo => articulo.id !== producto.id );
        cliente.pedido = [...resultado];

    }

    // Limpiar el codigo HTML previo
    limpiarHTML();

    if ( cliente.pedido.length ){

        // Actualizar resumen
        actualizarResumen();

    }else{

        mensajePedidoVacio();

    }

}

// Funcion que muestra el resumen de pedidos
function actualizarResumen () {

    // Selector
    const contenido = document.querySelector ('#resumen .contenido');
    
    // Scripting
    const resumen = document.createElement ('DIV');
    resumen.classList.add( 'col-md-6', 'card', 'py-2', 'px-3', 'shadow' );

    // Informacion de la mesa
    const mesa = document.createElement ('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add( 'fw-bold' );

    const mesaSpan = document.createElement ('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add( 'fw-normal' );

    // Informacion de la hora
    const hora = document.createElement ('P');
    hora.textContent = 'Hora: ';
    hora.classList.add( 'fw-bold' );

    const horaSpan = document.createElement ('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add( 'fw-normal' );

    // Se agregan a los Nodos Padre
    mesa.appendChild( mesaSpan );
    hora.appendChild( horaSpan );

    // Titulo de la seccion
    const heading = document.createElement ('H3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add( 'my-4', 'text-center' );

    // Iterar sobre el array de pedidos
    const grupo = document.createElement ('UL');
    grupo.classList.add( 'list-group' );

    // Extra el contenido de la propiedad pedido que es un arreglo
    const { pedido } = cliente;
    pedido.forEach( articulo => {

        const { nombre, cantidad, precio, id } = articulo;

        const lista = document.createElement ('LI');
        lista.classList.add( 'list-group-item' );

        const nombreEl = document.createElement ('H4');
        nombreEl.classList.add( 'my-4' );
        nombreEl.textContent = nombre;

        // Cantidad del articulo
        const cantidadEl = document.createElement ('P');
        cantidadEl.classList.add( 'fw-bold' );
        cantidadEl.textContent = `Cantidad: `;

        const cantidadValor = document.createElement ('SPAN');
        cantidadValor.classList.add( 'fw-normal' );
        cantidadValor.textContent = cantidad;

        // Precio del articulo
        const precioEl = document.createElement ('P');
        precioEl.classList.add( 'fw-bold' );
        precioEl.textContent = `Precio: `;

        const precioValor = document.createElement ('SPAN');
        precioValor.classList.add( 'fw-normal' );
        precioValor.textContent = `$${precio}`;        

        // Subtotal del articulo
        const subtotalEl = document.createElement ('P');
        subtotalEl.classList.add( 'fw-bold' );
        subtotalEl.textContent = `Subtotal: `;

        const subtotalValor = document.createElement ('SPAN');
        subtotalValor.classList.add( 'fw-normal' );
        subtotalValor.textContent = calcularSubtotal( precio, cantidad );

        // Boton para eliminar
        const btnEliminar = document.createElement ('BUTTON');
        btnEliminar.classList.add( 'btn', 'btn-danger' );
        btnEliminar.textContent = 'Eliminar del Pedido';

        // Funcion para eliminar un elemento
        btnEliminar.onclick = function(){

            eliminarProducto( id );

        }

        // Agregando valores a sus contenedores
        cantidadEl.appendChild( cantidadValor );
        precioEl.appendChild( precioValor );
        subtotalEl.appendChild( subtotalValor );

        // Agregando elementos al LI
        lista.appendChild( nombreEl );
        lista.appendChild( cantidadEl );
        lista.appendChild( precioEl );
        lista.appendChild( subtotalEl );
        lista.appendChild( btnEliminar );        

        // Agregando lista al grupo principal
        grupo.appendChild( lista);

    })

    // Se agrega al contenido
    resumen.appendChild( heading );    
    resumen.appendChild( mesa );
    resumen.appendChild( hora );
    resumen.appendChild( grupo );    

    contenido.appendChild( resumen );

    // Mostrar formulario de propinas
    formularioPropinas();

}

// Elimina los Nodos hijos limpiando el HTML
function limpiarHTML () {

    const contenido = document.querySelector ('#resumen .contenido');

    while( contenido.firstChild ){

        contenido.removeChild( contenido.firstChild );

    }

}

// Elimina elementos y actualiza el subtotal
function eliminarProducto ( id ) {

    const { pedido } = cliente;

    // Eliminar elementos cuando la cantidad sea 0
    const resultado = pedido.filter( articulo => articulo.id !== id );
    cliente.pedido = [...resultado];

    // Limpiar el codigo HTML previo
    limpiarHTML();

    if ( cliente.pedido.length ){

        // Actualizar resumen
        actualizarResumen();

    }else{

        mensajePedidoVacio();

    }

    // El producto se elimino y actualizamos el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector ( productoEliminado );
    inputEliminado.value = 0;

}

// Funcion que muestra un mensaje cuando no hay pedidos
function mensajePedidoVacio () {

    const contenido = document.querySelector ('#resumen .contenido');
    const texto = document.createElement ('P');
    texto.classList.add( 'text-center' );
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild( texto );

}

// Muestra un DIV para las propinas
function formularioPropinas () {

    const contenido = document.querySelector ('#resumen .contenido');

    const formulario = document.createElement ('DIV');
    formulario.classList.add( 'col-md-6', 'formulario' );

    const divFormulario = document.createElement ('DIV');
    divFormulario.classList.add( 'card', 'py-2', 'px-3', 'shadow' );

    const haeding = document.createElement ('H3');
    haeding.classList.add( 'my-4', 'text-center' );
    haeding.textContent = 'Propina';

    // Radio Buttons 10%
    const radio10 = document.createElement ('INPUT');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement ('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add( 'form-check-label' );

    const radio10Div = document.createElement ('DIV');
    radio10Div.classList.add( 'form-check' );
    
    radio10Div.appendChild( radio10 );
    radio10Div.appendChild( radio10Label );

    // Radio Buttons 25%
    const radio25 = document.createElement ('INPUT');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;
    
    const radio25Label = document.createElement ('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add( 'form-check-label' );

    const radio25Div = document.createElement ('DIV');
    radio25Div.classList.add( 'form-check' );
    
    radio25Div.appendChild( radio25 );
    radio25Div.appendChild( radio25Label );    

    // Radio Buttons 50%
    const radio50 = document.createElement ('INPUT');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement ('LABEL');
    radio50Label.textContent = '50%';
    radio50Label.classList.add( 'form-check-label' );

    const radio50Div = document.createElement ('DIV');
    radio50Div.classList.add( 'form-check' );
    
    radio50Div.appendChild( radio50 );
    radio50Div.appendChild( radio50Label );    
    
    // Agrega al DIV Principal
    divFormulario.appendChild( haeding );
    divFormulario.appendChild( radio10Div );
    divFormulario.appendChild( radio25Div );
    divFormulario.appendChild( radio50Div );

    // Se agrega el formulario
    formulario.appendChild( divFormulario );
    
    contenido.appendChild( formulario );

}

// Calcula el total a pagar
function calcularPropina () { 

    const { pedido } = cliente;
    let subtotal = 0;

    // Calcular el subtotal a pagar
    pedido.forEach( articulo => {

        subtotal += articulo.cantidad * articulo.precio;

    });

    // Obtiene el contenido del radio button seleccionado con la propina
    const propinaSeleccionada = document.querySelector ('[name="propina"]:checked').value;
    
    // Calcular propina
    const propina = ((subtotal * parseInt(propinaSeleccionada))/100);

    // Total a pagar
    const total = subtotal + propina;

    // Muestra el total en el HTML
    mostrarTotalHTML( subtotal, total, propina );

}

function mostrarTotalHTML ( subtotal, total, propina ) {

    // Scripting
    const divTotales = document.createElement ('DIV');
    divTotales.classList.add( 'total-pagar', 'my-5' );

    // Subtotal
    const subtotalParrafo = document.createElement ('P');
    subtotalParrafo.classList.add( 'fs-4', 'fw-bold', 'mt-2' );
    subtotalParrafo.textContent = 'Subtotal Consumo: ';

    const subtotalSpan = document.createElement ('SPAN');
    subtotalSpan.classList.add( 'fw-normal' );
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild( subtotalSpan );

    // Propina
    const propinaParrafo = document.createElement ('P');
    propinaParrafo.classList.add( 'fs-4', 'fw-bold', 'mt-2' );
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement ('SPAN');
    propinaSpan.classList.add( 'fw-normal' );
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild( propinaSpan );    

    // Total
    const totalParrafo = document.createElement ('P');
    totalParrafo.classList.add( 'fs-4', 'fw-bold', 'mt-2' );
    totalParrafo.textContent = 'Total: ';

    const totalSpan = document.createElement ('SPAN');
    totalSpan.classList.add( 'fw-normal' );
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild( totalSpan );
    
    // Eliminar el ultimo resultado
    const totalPagarDiv = document.querySelector ('.total-pagar');

    // Elimina el DIV con el resultado previo
    if( totalPagarDiv ){

        totalPagarDiv.remove();
    }    
    
    // Se agrega el DIV
    divTotales.appendChild( subtotalParrafo );
    divTotales.appendChild( propinaParrafo );
    divTotales.appendChild( totalParrafo );

    // Se agrega al contenedor
    const formulario = document.querySelector ('.formulario > div'); // Selecciona el 1er DIV
    formulario.appendChild( divTotales );

}

//Helpers
// Calcula el subtotal
const calcularSubtotal = (precio, cantidad) => `$ ${precio * cantidad }`;

