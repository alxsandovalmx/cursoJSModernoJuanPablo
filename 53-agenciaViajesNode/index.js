// Configuracion de Express

// const express = require('express'); <- Version de Common.JS
import express from 'express';
// Importamos el Router
import router from "./routes/index.js";
// Importamos la configuracion de la BD MySQL
import db from './config/db.js';

// Conexion a la BD
db.authenticate()
        .then( () => console.log( 'BD conectada') )
        .catch( error => console.log( error ) )  

// Debemos tener 1 sola instancia de la Aplicacion
const app = express();

// Definir puerto
// Variables de entorno: process.env.PORT
const port = process.env.PORT || 4000;

// Habilitamos PUG
app.set('view engine', 'pug');

// Creamos nuestra funcion middleware para obtener el año actual
app.use( (req, res, next)=>{

        // Obtiene un objeto Date
        const year = new Date();
        // Obtiene el año actual y lo asigna a la variable: actualYear
        res.locals.actualYear = year.getFullYear();
        res.locals.nombresitio = "Agencia de Viajes";
        next(); // Va a la siguiente linea del middleware - forzarlo return next();

});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded( { extended: true } ));

// Definimos la carpeta publica - public es el nombre estandar
app.use(express.static('public'));

// Agregamos el Router a la App
app.use('/', router); // Soporta Get, Delete, Put, Push

// Arranca el servidor
app.listen( port, ()=>{
        console.log( `El servidor esta funcionando en el puerto ${port}` );
});
