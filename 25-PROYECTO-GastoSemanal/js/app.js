// Proyecto de una Aplicacion de Gasto Semanal
// Usa Bootstrap como framework CSS

// Variables
const formulario   = document.querySelector ('#agregar-gasto');
const gastoListado = document.querySelector ('#gastos ul');
let   presupuesto; // Objeto de tipo presupuesto

// Eventos
eventListener();
function eventListener( ){

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);

};

// Clases 
// Clase encargada de gestionar todos los movimientos del presupuesto
class Presupuesto {

    // Propiedades de la clase

    // Constructor de la clase
    constructor ( presupuesto ){

        this.presupuesto = Number( presupuesto );
        this.restante    = Number( presupuesto );
        this.gastos      = [];

    }

    nuevoGasto ( gasto ){

        // Se agrega el nuevo gasto usando el Spread Operator
        this.gastos = [...this.gastos, gasto];
        console.log( this.gastos );

        // Se llama a la funcion que determina el restante
        this.calcularRestante( );
    }

    calcularRestante( ){

        // reduce (valorPrevio, valorActual) : Toma los datos, los une y da el resultado
        // reduce itera sobre todo el arreglo y nos entrega el valor sumado
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;

    }

    eliminarGasto( id ){

        // Regresa un arreglo que no incluya el elemento con ese id
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );

        // Se debe actualizar el restante
        // Se llama a la funcion que determina el restante
        this.calcularRestante( );
    }

};

// Clase encargada del HTML
class UI {

    // No tiene propiedades    
    // No requiere constructor

    // Metodo para mostrar el Presupuesto y el restante
    insertarPresupuesto( cantidad ) {

        // Desestructuracion de objetos
        const { presupuesto, restante } = cantidad;
        // Modifica el DIV directamente
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
        
    }

    // Metodo para mostar una alerta del ingreso de gasto
    imprimirAlerta ( mensaje, tipo ){

        // Se crea un DIV para mostrar el mensaje
        const divMensaje = document.createElement ('DIV');
        divMensaje.classList.add ('text-center', 'alert');        
        
        tipo === 'error' ? divMensaje.classList.add ('alert-danger') 
                         : divMensaje.classList.add ('alert-success');
   
        // Se agrega el mensaje al DIV
        divMensaje.textContent = mensaje;

        // Se inserta en el HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario );

        // Quitando el mensaje de alerta despues de 3 s
        setInterval(() => {
            
            // Eliminacion a traves del mismo elemento
            // document.querySelector('.primario .alert').remove();
            divMensaje.remove();

        }, 3000);
    } 

    // Metodo para mostrar los gastos, recibe un arreglo de gastos
    mostrarGastos ( gastos ){

        // Se manda a llamar el metodo interno
        this.limpiarHTML();

        const divGasto = document.createElement ('DIV');

        // Iterando sobre los gastos
        gastos.forEach( gasto => {

            const { cantidad, nombre, id } = gasto;
            
            // Crear un <li>
            const nuevoGasto = document.createElement ('li');
            // La diferencia entre .classlist y .className es que .classlist te reporta que clases hay y con .add o .remove, agregagas o quitas clases.
            // Mientras que .className solamente te reporta las clases que hay y si ponemos = se asigna un valor diferente
            // Se agregan las clases de bootstrap
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.textContent = nombre;
            // Esta es una buena forma de agregar el atributo id
            // nuevoGasto.setAttribute('data-id', id);
            // Sin embargo, en nuevas versiones de JS se recomienda asi
            nuevoGasto.dataset.id; // Hace lo mismo que lo anterior

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement ('button');
            // Uso de .classlist para agregar nuevas clases a las existentes
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times'; // Entidad HTML X
            // .onclick nos sirve para reaccionar al hacer click en el boton
            btnBorrar.onclick = () => {

                // presupuesto.eliminarGasto(id); // Es lo mismo pero agrega complejidad
                eliminarGasto( id );

            }
            nuevoGasto.appendChild( btnBorrar );

            // Agregar al HTML
            gastoListado.appendChild( nuevoGasto );

        });

    }

    // Metodo para determinar cuanto se ha gastado y mostrar colores
    comprobarPresupuesto( objetoPresupuesto ){

        const { presupuesto, restante } = objetoPresupuesto

        // Seleccionamos el div del restante
        const restanteDiv = document.querySelector ('.restante');

        // Comprobar el % de gasto
        if ( presupuesto/4 > restante ){ // Gasto del 75%

            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-danger');

        } else if ( presupuesto/2 > restante ){ // Gasto del 50%

            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');

        } else {

            // Elimina cualquiera de las 2 clases que encuentre
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');

        }

        // Si el total el 0 o menor
        if ( restante <= 0 ){

            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            // Accedemos al boton y lo desactivamos y no se pueden agregar mas gastos
            formulario.querySelector('button[type="submit"]').disabled = true;

        }

    }

    // Funcion Limpiar HTML
    limpiarHTML() {

        // Mientras haya hijos en gastoListado
        while( gastoListado.firstChild ){

            // Elimina el primer hijo que encuentre y se repite el ciclo
            gastoListado.removeChild( gastoListado.firstChild );

        }
    }

    // Metodo para actualizar el restante
    actualizarRestante( restante ) {

        // Modifica el DIV directamente
        document.querySelector('#restante').textContent = restante;

    }

}

// Instancias
const ui = new UI();

// Funciones
function preguntarPresupuesto (){

    // Convierte el String a un Numero Entero o Float
    const presupuestoUsuario = Number ( prompt('¿Cúal es tu presupuesto? ') );
    
    // Se valida que el presupuesto sea correcto
    if ( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ){

        // Esto sirve para recargar la pagina
        window.location.reload();
        return;

    }
    
    // Presupuesto Valido
    // Se crea una instancia valida de Presupuesto
    presupuesto = new Presupuesto ( presupuestoUsuario );

    // Se inserta el presupuesto y el restante llamando a la funcion y se muestra en el HTML
    ui.insertarPresupuesto ( presupuesto );

};

// Funcion para validar la asignacion de gastos
function agregarGasto( evento ){

    // Prevenimos la accion por defecto del submit del formulario
    evento.preventDefault();

    // Manejamos manualmente la accion del submit
    // Obtenemos directamente en un solo paso el valor de #gasto y #cantidad
    const nombre = document.querySelector ('#gasto').value;
    const cantidad = Number(document.querySelector ('#cantidad').value);

    // Validar los datos ingresados en el campo
    if ( nombre === '' || cantidad === ''){

        // Para que la funcion sea reutilizable
        ui.imprimirAlerta( 'Ambos campos son obligatorios', 'error' );
        return;

    } else if ( cantidad <= 0 || isNaN(cantidad) ) {

        // Para que la funcion sea reutilizable
        ui.imprimirAlerta( 'La cantidad no es valida', 'error' );
        return;

    }

    // Generando un objeto tipo Gasto
    // El contrario del Object Destructuring es el Object Literal Enhacement
    const gasto = { nombre, cantidad, id: Date.now() };

    // Agrega un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mostrar alerta de gasto agregado correctamente
    ui.imprimirAlerta('Se agrego el gasto con exito');

    // Extrae las propiedades del objeto presupuesto con el Object Destructuring
    const { gastos, restante } = presupuesto;

    // Mostrar los gastos en el HTML
    ui.mostrarGastos( gastos );

    // Actualizar y mostrar el restante
    ui.actualizarRestante( restante );

    // Funcion para mostrar por colores segun el restante
    ui.comprobarPresupuesto( presupuesto );

    // Reiniciamos el formulario
    formulario.reset();
    
};

function restante ( ){
    
    document.querySelector('#restante').textContent = restante;

};

// Funcion para eliminar un gasto
function eliminarGasto( id ){

    // Quita el gasto donde se hizo click en eliminar en el objeto
    presupuesto.eliminarGasto ( id );

    const { gastos, restante } = presupuesto;

    // Muestra en el HTML nuevamente la lista de los gastos
    ui.mostrarGastos(  gastos );

    // Actualizar y mostrar el restante
    ui.actualizarRestante( restante );

    // Funcion para mostrar por colores segun el restante
    ui.comprobarPresupuesto( presupuesto );

};

