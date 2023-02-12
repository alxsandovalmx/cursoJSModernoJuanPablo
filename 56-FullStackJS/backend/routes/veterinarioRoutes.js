// Routing de Veterinario

// Import de express
import express from "express";
// Import del Controller de Veterinario
import { 
    registrar, 
    perfil, 
    confirmar, 
    autenticar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
} from "../controllers/veterinarioController.js";
// Import del Custom Middleware
import checkAuth from "../middleware/authMiddleware.js";

// Instancia del Router de Express
const router = express.Router();

// Area Publica
// Rutas relacionadas con Veterinario
router.post("/", registrar); // POST se usa cuando se envian datos
router.get("/confirmar/:token", confirmar); // Uso del parametro dinamico
router.post("/login", autenticar);

router.post("/olvide-password", olvidePassword); // Validar el Email del Usuario
// router.get("/olvide-password/:token", comprobarToken); // Leer el token
// router.post("/olvide-password/:token", nuevoPassword); // Almacenar el nuevo Password
router.route("/olvide-password/:token").get( comprobarToken ).post( nuevoPassword );

// Area Privada
// Creacion de Custom Middleware
router.get("/perfil", checkAuth, perfil); // Se Requiere autenticacion antes del perfil
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;
