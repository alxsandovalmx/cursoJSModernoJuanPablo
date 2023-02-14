// Explicit binding

// Existe otra forma de hacer binding y es con EXPLICIT BINDING...

function persona(el1, el2) {
    console.log(`Mi Nombre es: ${this.name} y escucho: ${el1} & ${el2} `);
}
const informacion = {
    name: 'Juan',
    job: 'Developer'
}
const musicaFavorita = ['Heavy Metal', 'Rock'];

// Utilizaremos un método llamado .call, .call existe en todas las funciones de Javascript, y puedes pasarle digamos un objeto o arreglo 
// dentro de la función... MUY IMPORTANTE es que nota como el segundo argumento es un array, 
// en .call tienes que pasar cada elemento del array de forma individual, con su posición.
persona.call( informacion, musicaFavorita[0], musicaFavorita[1] );

// explicit binding with .apply, este es exactamente igual a .call, existe en todas las funciones pero toma un array completo.
persona.apply( informacion, musicaFavorita );

// finalmente .bind va a ser como .call en que le pasas cada argumento de forma individual, pero te crea una nueva función.
const nuevaFn = persona.bind( informacion, musicaFavorita[0], musicaFavorita[1] );
nuevaFn();

// Estos 3, .call, .apply y .bind ya son temas más avanzados, pero los he visto en entrevistas de Desarrolladores JavaScript así que es importante que conozcas las diferencias.
