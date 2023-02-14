// Cuando visitamos un sitio o aplicación web, existen una gran cantidad de eventos que pasan...

// Cuando te gusta un tweet o das retweet.

// Cuando le das me gusta o compartir a una publicación de Facebook

// Cuando navegas entre los diferentes productos de amazon, todos estos son eventos que ocurren

// Al llenar un formulario de airbnb y ver la galería de fotos también son eventos..

// Todos los eventos utilizan el método en el document de addEventListener, este registra un evento en especifico, como puede ser un click en un enlace o imagen, submit a un formulario, o cuando el usuario escribe algo...

// Por lo tanto la sintaaxis es de las siguiente forma...

document.addEventListener( evento, funcion );

// Seguido del evento que estamos escuchando...

// Uno que es muy común y utilizaras en todos tus proyectos es uno llamado DOMContentLoaded

console.log(1)

document.addEventListener('DOMContentLoaded', () => {

    console.log(2);

}); // Nota todos los eventos que hay disponibles
    
console.log(3);

// En el siguiente video estaremos viendo eventos que ocurren con el mouse!
