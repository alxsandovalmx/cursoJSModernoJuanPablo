//Try Catch puede ser extraño, básicamente es intentar hacer algo, y si no se puede, obtener una excepción, 

// Un ejemplo sería, intentar descargar un listado de alumnos, intentaremos descargarlo, si hay un error podremos poner un error al usuario de que hubo un error al descargar...

// Si utilizamos una función que no exista puedes ver que tendremos un error
// hola();

// Si agregamos algo más de código, puedes ver que el error previo hace que este código no se ejecute
// console.log(2 + 2);

// Si lo rodeamos con un try catch, nuestra función puede intentar hacer algo, o fallar, pero evitará que el código no se ejecute
try {
    hola();
} catch (error) {
    console.log(error)
}

console.log(2 + 2 );

// Ahora, no todo se va a rodear con un try catch, solamente partes criticas, como una consulta a una API, autenticar a un usuario, acciones que nos permitan que en caso de fallar, nuestra aplicación continue funcionando pero también podamos obtener un mensaje de error...
