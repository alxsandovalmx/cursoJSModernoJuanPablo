// Intersection Observer API - Para detectar si un elemento esta visible
// Previamente vimos getclientRect, que nos permitia identificar cuando un elemento estaba visible, 
// existe otra API llamada Intersection Observer, veamos como utilizarla..

document.addEventListener('DOMContentLoaded', () => {

    // Habilitamos IntersectionObserver
    const observer = new IntersectionObserver( entries => {

        // Aqui se guardan todas las entradas al recorrer la pagina
        console.log(entries[0]);

        // Las llaves importantes son:
        // isIntersecting: false o true
        // isVisible: false o true
        if(entries[0].isIntersecting) {
            console.log('Ya esta visible...')
        }
    })

    // El Elemento a observar...
    observer.observe(document.querySelector('.premium'));
});

// IntersectionObserver es una manera mas facil que getBoundingClientRect
// Detectar un elemento al dar scroll...
const premium = document.querySelector('.premium');
const ubicacion = premium.getBoundingClientRect(); 

console.log(ubicacion);

if(ubicacion.top < 100) {
    console.log('Ya esta visible');
} else {
    console.log('Aún no esta visible..')
}
