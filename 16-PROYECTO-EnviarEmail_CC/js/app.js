// Proyecto: Simulador de envio de Email
// Pagina para obtener spinners: https://tobiasahlin.com/spinkit/

// Evento que se lanza cuando el HTML ha sido cargado
document.addEventListener('DOMContentLoaded', () => {

    // Objeto email con el cuerpo del formulario
    const email = {

        email:      '', 
        asunto:     '', 
        mensaje:    '',
        cc:         'vacio'
    };

    // Variables
    // Selecciona los elementos del fomurlario
    const inputEmail    = document.querySelector('#email'); // Seleccion por id (#)
    const inputAsunto   = document.querySelector('#asunto');
    const inputMensaje  = document.querySelector('#mensaje');
    const formulario    = document.querySelector('#formulario');
    const btnSubmit     = document.querySelector('#formulario button[type="submit"]'); // Selecciona el boton submit
    const btnReset      = document.querySelector('#formulario button[type="reset"]'); // Selecciona el boton reset
    const spinner       = document.querySelector('#spinner');
    const inputCc       = document.querySelector('#cc');

    // Asignacion de eventos a los inputs para validacion
    inputEmail.addEventListener('input', validar); // No se usan parentesis porque llamara una funcion
    inputAsunto.addEventListener('input', validar); // 'blur' que es cuando sale del campo
    inputMensaje.addEventListener('input', validar); // 'input' valida mientras se escribe
    inputCc.addEventListener('input', validar); // 'input' valida mientras se escribe

    // Evento cuando hace click en enviar el email
    formulario.addEventListener('submit', enviarEmail);

    // Evento para el boton Reset
    btnReset.addEventListener('click', function(evento) {

        // Prevenimos el comportamiento por default de reiniciar el formulario
        evento.preventDefault();
        // Reiniciamos los datos del formulario
        resetFormulario();

    });
    
    function enviarEmail(evento){

        evento.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {

            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();
            
            // Crear un alerta de exito de envio
            const alertaExito = document.createElement('P');

            /*
            'bg-green-500': Fondo verde de 500
            'text-white': Texto en color blanco
            'p-2': Padding de 2 en todas las direcciones
            'text-center': Texto centrado
            'rounded-lg':  Esquinas redondeadas
            'mt-10':  Margin top de 10 para separar con el elemento previo
            'font-bold': Texto en negritas
            'text-sm': Para hacer el texto mas pequeño que el default
            'uppercase: Para que todo sea en mayusculas
            */
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
    
            formulario.appendChild( alertaExito );

            setTimeout(() => {

                alertaExito.remove( );
                
            }, 2000);


        }, 3000);

    };

    // Funcion para escuchar el evento 
    function validar( evento ) {

        // Se valida si el input tiene o no contenido
        if ( evento.target.value.trim() === '' && evento.target.id !== 'cc' ){ // Con trim() quitamos los espacios vacios

              // Con evento.target.parentElement obtenemos el elemento Padre (DIV) del input donde se mostrara la alerta
              mostrarAlerta(`El campo ${evento.target.id} es obligatorio`, evento.target.parentElement);

              // Reiniciamos el objeto principal 
              email[ evento.target.id ] = '';
              
              // Para revisar que el email siempre es valido
              comprobarEmail();
  
              return; // Detiene la ejecucion del codigo si esta vacio

        }

        // Validamos que el input email tenga un contenido valido
        if ( ( evento.target.id === 'email' || evento.target.id === 'cc' ) && !validarEmail(evento.target.value) ) {

            mostrarAlerta ('El email no es valido', evento.target.parentElement);

            evento.target.id === 'cc' ?  email[ evento.target.id ] = 'error' :  email[ evento.target.id ] = '';

            // Para revisar que el email siempre es valido
            comprobarEmail();

            return;
        }

        // Cuando el input tiene contenido se llama a la funcion limpiarAlerta enviando el DIV correcto
        limpiarAlerta( evento.target.parentElement );

        // Asignar valores al objeto email
        if ( evento.target.id === 'cc' && evento.target.value.trim() === '' ){

            email.cc = 'vacio'

        }else{
            
            email[ evento.target.id ] = evento.target.value.trim().toLowerCase();

        }

        // Comprobamos el objeto email
        comprobarEmail();

    };

    // Funcion para quitar el alerta cuando el campo fue llenado
    function limpiarAlerta(referencia){

        // Comprueba si ya existe una alerta solo en el DIV recibido, la 1ra vez es null
        const alerta = referencia.querySelector('.bg-red-600');

        if ( alerta ){ // Si alerta no es null

            alerta.remove(); // Elimina la alerta
        }

    };

    // Funcion para mostrar un alerta
    function mostrarAlerta ( mensaje, referencia ){

        // Ejecuta la funcion para limpiar la alerta
        limpiarAlerta(referencia);

        // Creacion del HTML de la alerta
        const error = document.createElement('P'); // El elemento se recomienda en Mayusculas
        error.textContent = mensaje; // Agrega el texto el parrafo error // innerHTML no escapa los datos
        
        // Agregamos clases de Tailwind al mensaje de error
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        // Agrega el <p> al DIV recibido como un hijo
        referencia.appendChild( error );
        
    }

    function validarEmail( email ){
        
        if ( email.trim() !== '' ){

            // Expresion regular para validar un email
            const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

            const resultado = regex.test( email ); // Valida el email recibido

            return resultado;

        }

        return true;

    }

    function comprobarEmail(){
     
        let vacio = Object.values(email).includes('');
        let error = Object.values(email).includes('error');

        if ( vacio || error ){

            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            
            return; // Desactiva el boton enviar y termina la validacion
        }
    
        // En caso de que el objeto email este lleno se activa el boton enviar
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;

    }

    function resetFormulario (){

        // Reinicia el objeto email
        email.email     = ''; 
        email.asunto    = ''; 
        email.mensaje   = '';
        email.cc        = 'vacio';

        formulario.reset();
        comprobarEmail();
    }

});
