// requestFullscreen - Ejecutar el sitio web en pantalla completa...
// exitFullscreen - Cerrar la pantalla completa

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click',  pantallaCompleta);
salirBtn.addEventListener('click',  cerrarPantallaCompleta);

function pantallaCompleta() {

    document.documentElement.requestFullscreen();

}

function cerrarPantallaCompleta() {
    
    document.exitFullscreen();
    
}
