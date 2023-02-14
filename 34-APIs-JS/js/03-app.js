// navigator.onLine - Para saber si tenemos o no conexion a internet

// Detectar si tenemos o no RED...
const enLinea = navigator.onLine;

console.log(enLinea);

// Activar o desactivar... NETWORK 
// Agregar un evento para offline y online

// Es muy común tener algo asi no? Uber cuando estas buscando tu transporte y 
// si pierdes tu conexión te dice que no estas conectado. en javascript también es posible capturar algo asi

window.addEventListener('online', updateNetState);
window.addEventListener('offline', updateNetState);

function updateNetState(e) {
    if(navigator.onLine ) {
        console.log('Si estas conectado');
    } else {
        console.log('Parece que has perdido tu conexión...');
    }
}

