// Conexion a la BD usando el ORM Mongoose

import mongoose from "mongoose";

const conectarDB = async () => {

    // Conexion
    try {
        mongoose.set('strictQuery', true);
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${db.connection.host}:${db.connection.port}`;

        console.log( `MongoDB conectado en: ${url}` );

    } catch (error) {
        console.log( `Error: ${error.message}` );
        // Imprime un mensaje de error
        process.exit(1);
    }

};

// Export de la funcion de conexion
export default conectarDB;