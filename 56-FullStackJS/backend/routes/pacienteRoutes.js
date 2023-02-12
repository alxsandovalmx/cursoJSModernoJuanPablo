// Routing de Pacientes

// Import de express
import express from 'express';
// Import del Modelo Paciente
import { 
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from '../controllers/pacienteController.js';
// Import del Custom Middleware
import checkAuth from '../middleware/authMiddleware.js';

// Accedemos al router de Express
const router = express.Router();

// Definicion de las rutas
// Uso del chaining ( Encadenamiento )
// Se protege el acceso a agregar y obtener Pacientes con checkAuth
router.route('/').post( checkAuth, agregarPaciente ).get( checkAuth, obtenerPacientes );
// Rutas para un Paciente en especifico
router.route('/:id')
    .get( checkAuth, obtenerPaciente )
    .put( checkAuth, actualizarPaciente )
    .delete( checkAuth, eliminarPaciente );

// Exportamos el router
export default router;
