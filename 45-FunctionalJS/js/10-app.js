// Composition es escribir muchas funciones e ir utilizando en tus objetos lo que necesitaras
// Composition parece una alternativa a las clases

// Funciones
const obtenerNombre = info => ({
    mostrarNombre() { // Esta es la funcion que debe ser llamada
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail( email ) { // Esta es la funcion que debe ser llamada
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail() { // Esta es la funcion que debe ser llamada
        console.log(`Correo: ${info.email}`);
    }
});
const obtenerEmpresa = info => ({
    mostrarEmpresa() { // Esta es la funcion que debe ser llamada
        console.log(`Empresa: ${info.empresa}`);
    }
});
const obtenerPuesto = info => ({
    mostrarPuesto() { // Esta es la funcion que debe ser llamada
        console.log(`Puesto: ${info.puesto}`);
    }
});

////////////////////////////////////////////////////////////////////////////////
function Cliente( nombre, email, empresa ) {
    let info = {
        nombre, 
        email, 
        empresa
    }
    return Object.assign(
        info, 
        obtenerNombre(info), // Estos nombres solo son para hacer referencia
        guardarEmail(info),
        obtenerEmail(info), 
        obtenerEmpresa(info)
    )
}
function Empleado( nombre, email, puesto ) {
    let info = {
        nombre, 
        email, 
        puesto
    }
    return Object.assign(
        info, 
        obtenerNombre(info), // Estos nombres solo son para hacer referencia
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Udemy');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail()
cliente.mostrarEmpresa()

const empleado = Empleado('Pedro', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail()
empleado.mostrarPuesto()

