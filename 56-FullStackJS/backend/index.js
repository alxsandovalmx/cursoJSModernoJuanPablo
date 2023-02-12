// Archivo de Arranque de la Aplicacion

// Import de Express
import express from "express";
// Import para el manejo de dependencias
import dotenv from 'dotenv';
// Import de Cors para el manejo de las peticiones en diversos dominios
import cors from 'cors';
// Import de la conexion a la BD
import conectarDB from './config/db.js';
// Import de Routes Veterinario
import veterinarioRoutes from './routes/veterinarioRoutes.js';
// Import de Routes Pacientes
import pacienteRoutes from './routes/pacienteRoutes.js';

// Llamada de uso de Express
const app = express();

// Habilitar la lectura de las Respuestas
app.use(express.json());

// Escaneamos el archivo de Variables de Entorno
dotenv.config();

// Conexion a la BD
conectarDB();

// Validacion de dominios
const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function( origin, callback ){

        if( dominiosPermitidos.indexOf( origin ) !== -1 ){
            // El Origen del Request esta permitido
            callback( null, true );
        } else {
            callback( new Error( 'No permitido por CORS' ));

        }
    }
};

// app.use( cors( corsOptions ));  
app.use( cors( { origin: '*' } ));

// Manejo del Routing
app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

// Variable de entorno para el puerto
const PORT = process.env.PORT || 4000 ;

// Registramos el Servidor Express en el puerto 4000 para escuchar las peticiones
app.listen( PORT, () => {
    console.log( `Servidor funcionando en el puerto ${PORT}` );
});

