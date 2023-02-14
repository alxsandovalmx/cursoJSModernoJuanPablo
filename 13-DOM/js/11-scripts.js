// No siempre estarás haciendo traversing a tu DOM, 

const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

// Funcion
function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        // btnFlotante.classList.remove('activo'); // Es lo mismo que abajo
        this.classList.remove('activo'); // this es para acceder a las propiedades del mismo metodo
        this.textContent = 'Idioma y Moneda'; // this hara referencia a lo que lo mando a llamar
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
