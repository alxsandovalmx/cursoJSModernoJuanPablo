// En este video estaremos viendo eventos que suceden con el scroll del sitio web...

// Es muy común que muchos sitios agreguen funcionalidad de que al dar scroll y llegar a ver un elemento este tenga alguna animación, eso se hace con eventos en el mouse..

window.addEventListener('scroll', () => {
    // console.log('scrolling...');

    // Detectar el Scrolling vertical...

    const pxScroll = window.scrollY;
    console.log(pxScroll);

    // Detectar un elemento al dar scroll...

    const premium = document.querySelector('.premium');
    
    // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual..
    // Con la función .getBoundingClientRect() obtenemos del elemento la siguiente información.
    // A que distancia se se encuentra ese elemento, es decir, si estamos hasta arriba, 
    // nos dirá cuantos pixeles nos hace falta para llegar a ese elemento.  - La Altura, La Anchura y Sus coordenadas.
    const ubicacion = premium.getBoundingClientRect(); 
    
    console.log(ubicacion);

    if(ubicacion.top < 100) {
        console.log('Ya esta visible');
    } else {
        console.log('Aún no esta visible..')
    }


})

