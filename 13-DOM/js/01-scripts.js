// Lo primero que haremos sera crear una carpeta llamada js / y en ella colocar el archivo scripts.js

let elemento;

elemento = document; // Obtiene todo el HTML
elemento = document.all; // Obtiene todo el HTML
elemento = document.all[0]; // Obtiene el arreglo[0] del html
elemento = document.head; // Obtiene el body
elemento = document.body; // Obtiene el body
elemento = document.domain; // Obtiene el dominio
elemento = document.URL; // Regresa el URL del archivo
elemento = document.characterSet; // Obtiene el characterSet (utf-8)
elemento = document.contentType; // Obtiene el contentType 'text/html'
elemento = document.forms; // Obtiene la informacion del formulario
elemento = document.forms[0]; // Puede aceder por el indice
elemento = document.forms[0].id; // Se puede acceder por el id
elemento = document.forms[0].method; // Se puede acceder al metodo
elemento = document.forms[0].classList; // Se puede acceder a las clases
elemento = document.forms[0].action; // Obtiene el accion del formularui

elemento = document.links; // Obtener todos los links
elemento = document.links[4].id; // Se puede acceder por el indice
elemento = document.links[4].className; // Se puede acceder al elemento por el nombre
elemento = document.forms[4].classList; // Se puede acceder a las clases
elemento = document.forms[4].classList[0]; // Se puede acceder a la 1era clase listadad

elemento = document.images; // Se accede a las imagenes

elemento = document.scripts; // Se seleccionan todos los scripts
elemento = document.scripts[2].getAttribute('src');

console.log(elemento);



