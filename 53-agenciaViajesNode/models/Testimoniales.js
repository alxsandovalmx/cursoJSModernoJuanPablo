// Modelo Testimoniales.js

// Imports
import Sequelize from "sequelize";
import db from "../config/db.js";

// Definimos nuestro modelo
export const Testimonial = db.define('testimoniales', {
    // Aqui va lo que se planeo para el proyecto
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }   
})

