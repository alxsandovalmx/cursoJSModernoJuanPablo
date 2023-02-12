// Custom Middleware

// Import de JWT
import jwt from 'jsonwebtoken';

// Import del modelo Veterinario
import Veterinario from '../models/Veterinario.js';

// Comprobar y Validar al usuario con JWT
const checkAuth = async ( req, res, next ) => {

    let token;

    if( req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
        console.log( "Si tiene el token con bearer" );
    }{
        try {
            token = req.headers.authorization.split(' ')[1]; // Retorna 1 elemento del arreglo

            // Obtenemos el Id del token
            const decoded = jwt.verify( token, process.env.JWT_SECRET );
            req.veterinario = await Veterinario.findById( decoded.id ).select("-password -token -confirmado");

            // Se ira al siguiente Middleware
            return next();

        } catch ( e ) {
            e.message = 'Token no valido o inexistente';
            return res.status(403).json({ msg: e.message });
        }
    }

    if( !token ){
        const error = new Error('Token no valido o inexistente')
        res.status(403).json({ msg: error.message });
    }

    // Se ira al siguiente Middleware
    next();
};

export default checkAuth;
