// Archivo JS con funciones

// Formateo de dinero usando la API de Intl
const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency', // Dinero
        currency: 'USD'
    });
    return formatter.format(valor)
};

const calcularTotalPagar = (cantidad, plazo) => {
    let total;
    
    // Mientras la cantidad es mayor, el interes es menor
    if( cantidad < 5000 ){
        total = cantidad * 1.5;
    } else if( cantidad >= 5000 && cantidad < 10000 ){
        total = cantidad * 1.4;
    } else if( cantidad >= 10000 && cantidad < 15000 ){
        total = cantidad * 1.3;
    } else{
        total = cantidad * 1.2;
    }

    // Plazo - Mas plazo, mayor interes
    if ( plazo === 6) {
        total *= 1.1;
    } else if ( plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }
    return total;

};

export {
    formatearDinero,
    calcularTotalPagar
}
