// Controller de Pacientes

// Import del Modelo
import Paciente from "../models/Paciente.js";

// Definicion de las funciones

// Agregar Pacientes
const agregarPaciente = async ( req, res ) => {

    // console.log( req.body );

    // Creacion de una instancia de Paciente
    const paciente = new Paciente( req.body );

    paciente.veterinario = req.veterinario._id;

    // Codigo propenso a error
    try {

        // Se almacena la informacion del paciente en la BD
        const pacienteAlmacenado = await paciente.save();
        
        res.json( pacienteAlmacenado );
        // console.log( paciente );

    } catch ( error ) {
        console.log( error );    
    }

};

// Obtener los Pacientes
const obtenerPacientes = async ( req, res ) => {

    // Instancia de pacientes del veterinario que ha iniciado sesion
    const pacientes = await Paciente.find().where('veterinario').equals( req.veterinario );

    res.json( pacientes );

};

// Funcion para obtener un paciente especifico
const obtenerPaciente = async( req, res ) => {

    const { id } = req.params;

    const paciente = await Paciente.findById( id );

    if( !paciente ){
        return res.status( 404 ).json( { msg: "Paciente no encontrado" } );
    }

    // Validacion de las operacion permitida al veterinario
    // Como con Object_Id deben ser transformados para ser evaluados
    if( paciente.veterinario._id.toString() !== req.veterinario._id.toString() ){
        return res.json( { msg: "Accion no permitida" } );
    }

    res.json( paciente );

};

// Funcion para actualizar un paciente
const actualizarPaciente = async( req, res ) => {

    const { id } = req.params;

    // Metodo de Mongoose para buscar un solo elemento
    const paciente = await Paciente.findById( id );

    if( !paciente ){
        return res.status( 404 ).json( { msg: "Paciente no encontrado" } );
    }    

    // Validacion de las operacion permitida al veterinario
    // Como con Object_Id deben ser transformados para ser evaluados
    if( paciente.veterinario._id.toString() !== req.veterinario._id.toString() ){
        return res.json( { msg: "Accion no permitida" } );
    }

    // Actualizar paciente
    paciente.nombre         = req.body.nombre       || paciente.nombre;
    paciente.propietario    = req.body.propietario  || paciente.propietario;
    paciente.email          = req.body.email        || paciente.email;
    paciente.fecha          = req.body.fecha        || paciente.fecha;
    paciente.sintomas       = req.body.sintomas     || paciente.sintomas;

    try {

        // Metodo de Mongoose para guardar
        const pacienteActualizado = await paciente.save();
        res.json( pacienteActualizado );

    } catch ( error ) {
        console.log( error );
    }

};

// Funcion para eliminar un Paciente en especifico
const eliminarPaciente = async( req, res ) => {

    const { id } = req.params;

    // Metodo de Mongoose para buscar un solo elemento
    const paciente = await Paciente.findById( id );

    console.log( paciente );

    if( !paciente ){
        return res.status( 404 ).json( { msg: "Paciente no encontrado" } );
    }    

    // Validacion de las operacion permitida al veterinario
    // Como con Object_Id deben ser transformados para ser evaluados
    if( paciente.veterinario._id.toString() !== req.veterinario._id.toString() ){
        return res.json( { msg: "Accion no permitida" } );
    }
    
    try {
        // Metodo de Mongoose para eliminar
        await paciente.deleteOne();
        res.json( { msg: "Paciente eliminado" } );

    } catch ( error ) {
        console.log( error );
    }

};

// Se exportan las funciones desarrolladas
export {

    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente

};