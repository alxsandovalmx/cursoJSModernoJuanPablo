// Aqui se coloca todo lo relacionado a las rutas

// Importamos Express
import express from "express";
// Importamos del Controller
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje 
} from "../controllers/paginasController.js";
// Importamos el Controller de Testimonial
import { guardarTestimonial } from "../controllers/testimonialController.js";

// Utilizacion del Router
const router = express.Router();

// Peticiones utilizando el Controller
router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje); // Uso de un comodin, se asocia con el Controller, poner nonbre descriptivo
router.get('/testimoniales', paginaTestimoniales );
router.post('/testimoniales', guardarTestimonial);

// Exportamos las nuevas rutas
export default router;
