// Modelo Viaje.js

// Imports
import Sequelize from "sequelize";
import db from "../config/db.js";

// Definimos nuestro 1er modelo
export const Viaje = db.define('viajes', {
    // Aqui va lo que se planeo para el proyecto
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }       
})

