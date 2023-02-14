// Parametros en un arrow Function...

// Parametros
const aprendiendo = ( tecnologia ) => console.log(`aprendiendo ${tecnologia}`);

aprendiendo('JavaScript'); // Argumento

// Si tiene solo un parametro no ocupamos el parentesis
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);

aprendiendo('JavaScript'); // Argumento

// Con multiples parametros si se requieren los parentesis
const aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);

aprendiendo('JS', 'Node JS'); // Argumentos

