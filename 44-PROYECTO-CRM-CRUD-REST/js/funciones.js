// funciones.js contiene las funciones comunes del proyecto

// Muestra la alerta con HTML
export function mostrarAlerta( mensaje ) {

    // Se toma la clase como bandera de que la alerta existe
    const alerta = document.querySelector ('.bg-red-100');
    
    // Si la alerta no existe
    if( !alerta ){

        const alerta = document.createElement ('P');
        alerta.classList.add( 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 
                            'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center' );

        alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        
        // Se agrega al contenedor que es el formulario
        const formulario = document.querySelector ('#formulario');        
        formulario.appendChild(alerta);
    
        // Quitamos la alerta
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
    
};

// Funcion que valida cada propiedad del objeto cliente
export function validarInputsCliente ( objetoCliente ) {

    return !Object.values( objetoCliente ).every( propiedad => propiedad !== '' );

}

