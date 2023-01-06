// Controlador

// Import del modelo
import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async ( req, res ) =>{

    // Validar los datos de entrada
    const { nombre, correo, mensaje } = req.body;

    // Manejo de Errores
    const errores = [];

    if( nombre.trim() === '' ){
        errores.push( {mensaje: 'El nombre esta vacio'} )
    }
    if( correo.trim() === '' ){
        errores.push( {mensaje: 'El correo esta vacio'} )
    }
    if( mensaje.trim() === '' ){
        errores.push( {mensaje: 'El mensaje esta vacio'} )
    }

    if( errores.length > 0 ){
        // Consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        // Render toma 2 parametros: Vista, Datos
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Almacenar en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log( error );
        }
    }

};

export {

    guardarTestimonial

};
