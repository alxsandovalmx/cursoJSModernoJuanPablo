// Aqui se coloca todo lo relacionado a la BD

// Importamos Sequelize
import Sequelize from 'sequelize';
// Import de la Variable de entorno
import dotenv from 'dotenv/config';

// dotenv.config();
// console.log( process.env.DB_HOST );

// Configuracion para conectar Sequelize a MySQL
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
