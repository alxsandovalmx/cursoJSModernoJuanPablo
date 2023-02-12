// Modelo Veterinario

// Import de Mongoose
import mongoose from "mongoose";
// import de bcrypt
import bcrypt from "bcrypt";

// Import de GeneradorId de Helpers
import generarID from "../helpers/generarId.js"

// Definicion del Schema de Veterinario
const veterinarioSchema = mongoose.Schema({
    
    // Campos
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: generarID()
    },
    confirmado: {
        type: Boolean,
        default: false
    }

});

// Hasheo del password
veterinarioSchema.pre('save', async function ( next ) {
    
    // Prevenir que un password Hasheado no sea nuevamente Hasheado
    if ( !this.isModified('password')) {
        next();
    }

    // Con el uso de this usar function()
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

// Validar el password del Usuario
veterinarioSchema.methods.comprobarPassword = async function ( passwordFormulario ) {
  return await bcrypt.compare( passwordFormulario, this.password );  
};

// Se registra en Mongoose el modelo
const Veterinario = mongoose.model("Veterinario", veterinarioSchema);

export default Veterinario;
