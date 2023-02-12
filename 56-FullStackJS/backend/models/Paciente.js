// Modelo Paciente

// Import de Mongoose
import mongoose from "mongoose";

// Definicion del Schema de Pacientes
const pacientesSchema = mongoose.Schema({

    // Campos
    nombre: {
        type: String,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now()
    },
    sintomas: {
        type: String,
        required: true
    },
    // Campo relacionado
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario'
    }
},  
{
    // Crear las columnas de editado y creado
    timestamps: true
}
);

// Se registra en Mongoose el modelo
const Paciente = mongoose.model("Paciente", pacientesSchema);

// Se exporta el Modelo para usarlo en los controladores
export default Paciente;
