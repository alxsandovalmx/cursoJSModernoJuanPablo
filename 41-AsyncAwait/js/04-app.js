// 2 O mas Async await... usando promise.all()

//Es muy común tener 2 Async Await, es probable que quieras en una misma función descargar los últimos 100 clientes y también los últimos 50 pedidos..

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes....');
        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos....');
        setTimeout( () => {
            resolve('Los pedidos fueron descargados');           
        }, 5000);
    });
}

// Async await -- Esta forma es incorrecta porque ejecutala segunda promesa hasta terminar la primera aunque no estan relacionadas
/*
const app = async () => {
    try {
        const clientes = await descargarNuevosClientes(); // 5s que retraza al siguiente
        console.log(clientes);

        const pedidos = await descargarUltimosPedidos(); // 5s como no esta relacionado con el previo deberia ejecutarse al mismo tiempo
        console.log(pedidos);

    } catch (error) {
        console.log(error)
    }
}
*/

// La solución, Promise.all();
const app = async () => {
    try {

        const respuesta = await Promise.all( [ descargarNuevosClientes(), descargarUltimosPedidos() ] );
        console.log(respuesta);
        console.log(respuesta[0]); // Respuesta de la 1a promesa
        console.log(respuesta[1]); // Respuesta de la 2a promesa

    } catch (error) {

        console.log(error)

    }
}

app();
