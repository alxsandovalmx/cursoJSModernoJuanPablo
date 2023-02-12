// Helpers

// Generador de ID
const generarId = () =>{
    
    // Generador de ID unico
    return Date.now().toString(32) + Math.random().toString(32).substring(2);

};

export default generarId;
