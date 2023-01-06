// Controlador

// Imports
import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

// Creacion de controlador que mostrara la diferentes paginas
const paginaInicio = async ( request, response )=>{ // req: Lo que enviamos, res: Lo que Express nos responde

    // Consultar 3 viajes del modelo Viaje
    const promiseDB = [];
    promiseDB.push( Viaje.findAll( {limit: 3} ) );
    promiseDB.push( Testimonial.findAll( {limit: 3} ) );

    try {
        // Se ejecutan ambas consultas al mismo tiempo
        const resultado = await Promise.all( promiseDB );

        response.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]

        });

    } catch (error) {
        console.log( error );
    }
};

const paginaNosotros = ( req, res )=>{ // req: Lo que enviamos, res: Lo que Express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async ( req, res )=>{ // req: Lo que enviamos, res: Lo que Express nos responde

    // Consulta a la BD
    const viajes = await Viaje.findAll();

    console.log( viajes );

    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes
    });
};

const paginaTestimoniales = async ( req, res )=>{ // req: Lo que enviamos, res: Lo que Express nos responde

    try{
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch(error){
        console.log( error );
    }

};

// Muestra un viaje por su slug: Identificador de la pagina
const paginaDetalleViaje = async (req, res) => {

    // console.log( req.params.viaje );
    const { slug } = req.params;

    try {

        const viaje = await Viaje.findOne({ where: { slug} });
        
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })

    } catch ( error ) {
        console.log( error );
    }

};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}

