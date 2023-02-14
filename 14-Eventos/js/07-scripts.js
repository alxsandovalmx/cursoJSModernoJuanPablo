// Otra opción que a mi me gusta mucho es aplicar algo llamado delegation..

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('click titulo');
    }
    if(e.target.classList.contains('info')) {
        console.log('click info');
    }
});
