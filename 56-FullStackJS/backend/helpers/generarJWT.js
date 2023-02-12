// Uso de JWT (JSON WebToken)

// Import de JWT
import jwt from 'jsonwebtoken';


const generarJWT = ( id ) => {

    return jwt.sign( { id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });

};

export default generarJWT;