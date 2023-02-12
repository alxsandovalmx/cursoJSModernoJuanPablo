// Controller de Veterinario

// Import del Modelo
import Veterinario from '../models/Veterinario.js';
// Import de la funcion JWT
import generarJWT from '../helpers/generarJWT.js';
// Import del generador de token
import generarId from '../helpers/generarId.js';
// Import del Helper que envia el Email
import emailRegistro from '../helpers/emailRegistro.js';
import emailOlvidePassword from '../helpers/emailOlvidePassword.js';

// Funcion registrar
const registrar = async ( req, res )=>{
    
    const { email, nombre } = req.body;

    // Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({ email }); // {email: email}

    if ( existeUsuario) {
        // Se envia un mensaje de que existe el usuario
        const error = new Error("Usuario ya registrado");
        // Retornamos un mensaje de error
        return res.status( 400 ).json({ msg: error.message });
    }

    try {
        // Guarda un Nuevo Veterinario
        const veterinario = new Veterinario( req.body );
        const veterinarioGuardado = await veterinario.save();

        // Enviar el email
        emailRegistro({
            email,
            nombre,
            token: veterinarioGuardado.token
        });
        
        // Respuesta JSON
        res.json( veterinarioGuardado );

    } catch ( error ) {
        console.log( error );
    }


};

// Funcion perfil
const perfil = ( req, res ) => {

    const { veterinario } = req;
    res.json( veterinario );

};

// Funcion confirmar
const confirmar = async ( req, res ) => {
    // Uso del parametro dinamico
    // Para leer datos de la url es params
    const { token } = req.params;

    // Buscando usuario en la BD
    const usuarioConfirmar = await Veterinario.findOne( {token} );

    
    if ( !usuarioConfirmar ) {
        const error = new Error("Token no valido");
        // Retornamos una respuesta de error
        return res.status( 404 ).json({ msg: error.message });
    }
    
    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;

        // Se guardan los cambios en la BD
        await usuarioConfirmar.save();

        // Respuesta a la peticion
        res.json( {msg: "Usuario confirmado correctamente" });
        
    } catch (error) {
        console.log( error );
    }

};

// Funcion para autenticar
const autenticar = async ( req, res ) => {

    const { email, password } = req.body;

    // Confirmar si el usuario existe
    const usuario = await Veterinario.findOne( {email} );
    
    // Comprobar si existe el Usuario
    if ( !usuario ) {
        // Se envia un mensaje de que existe el usuario
        const error = new Error("El Usuario no existe");
        // Retornamos un mensaje de error
        return res.status( 404 ).json({ msg: error.message });
    }

    // Comprobar si el usuario esta confirmado o no
    if( !usuario.confirmado ){
        const error = new Error('La Cuenta no ha sido confirmada');
        return res.status( 403 ).json( {msg: error.message });
    }

    // Revisar el password
    if( await usuario.comprobarPassword( password ) ){

        // console.log( usuario );

        // Autenticar Usuario con JWT
        res.json( {
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT( usuario.id )
        });

    } else {
        const error = new Error('El Password es incorrecto');
        return res.status( 403 ).json( {msg: error.message });
    }

};

// Funcion para recuperar el Password y Validar el Email del Usuario
const olvidePassword = async  ( req, res ) => {

    const { email } = req.body; // Informacion de un formulario

    // Verificar si existe el usuario
    const existeVeterinario = await Veterinario.findOne( {email} );

    if( !existeVeterinario ){
        const error = new Error("El Usuario no existe ");
        return res.status( 400 ).json( { msg: error.message } );
    }

    // Generamos un token
    try {
        
        existeVeterinario.token = generarId();
        // Se guarda en la BD
        await existeVeterinario.save();

        // Enviar email con las instrucciones de recuperacion
        emailOlvidePassword( {
            email,
            nombre: existeVeterinario.nombre,
            token: existeVeterinario.token
        });

        res.json( { msg: 'Hemos enviado un email con las instrucciones' });

    } catch (error) {
        console.log( error );
    }

};

// Funcion para leer el token
const comprobarToken = async ( req, res ) => {
    
    const { token } = req.params; // Informacion de la URL

    // Busqueda del token
    const tokenValido = await Veterinario.findOne( {token} );

    // Validacion
    if( tokenValido ) {
        // Token valido, el usuario existe
        res.json( { msg: "Token valido y el usuario existe" });

    } else{
        const error = new Error('Token no valido');
        return res.status( 400 ).json( { msg: error.message });
    }

};

// Funcion para almacenar el nuevo Password
const nuevoPassword = async ( req, res ) => {

    const { token } = req.params; // Informacion de la URL
    const { password } = req.body // Informacion de los formularios

    const veterinario = await Veterinario.findOne( {token} );

    if( !veterinario ){
        const error = new Error("Hubo un error");
        return res.status( 400 ).json( { msg: error.message });
    }

    try {
        // Se reescriben las propiedades
        veterinario.token = null;
        veterinario.password = password;

        // Se guarda en la BD
        await veterinario.save();

        // Respuesta
        res.json( { msg: "Password modificado correctamente"});

    } catch (error) {
        console.log( error );
    }

};

const actualizarPerfil =  async ( req, res ) => {

    const veterinario = await Veterinario.findById( req.params.id );

    if( !veterinario ){

        const error = new Error('Hubo un error');
        return res.status( 400 ).json( { msg: error.message });

    }

    const { email } = req.body;

    if( veterinario.email !== req.body.email ){
        
        const existeEmail = await Veterinario.findOne( { email });

        if( existeEmail ){

            const error = new Error('Ese email ya esta en uso');
            return res.status( 400 ).json( { msg: error.message });

        }
    }

    try {
        
        veterinario.nombre = req.body.nombre;
        veterinario.email = req.body.email;
        veterinario.web = req.body.web;
        veterinario.telefono = req.body.telefono;

        const veterinarioActualizado = await veterinario.save();

        res.json( veterinarioActualizado );

    } catch (error) {
        console.log(  error );
    }

};

const actualizarPassword = async ( req, res ) => {

    // Leer datos
    const { id } = req.veterinario;
    const { pwd_actual, pwd_nuevo } = req.body;

    // Comprobar que el veterinario exista
    const veterinario = await Veterinario.findById( id );

    if( !veterinario ){

        const error = new Error('Hubo un error');
        return res.status( 400 ).json( { msg: error.message });

    }    

    // Comprobar su password
    if( await veterinario.comprobarPassword( pwd_actual ) ){

        // Almacenar el nuevo password
        veterinario.password = pwd_nuevo;
        await veterinario.save();

        res.json({ msg: "Password Almacenado Correctamente" });

    } else{
        const error = new Error('El Password Actual es Incorrecto');
        return res.status( 400 ).json( { msg: error.message });
    }
};

// Se exportan las funciones desarrolladas
export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
};