// El tipo de dato boolean solo puede tener 2 valores, true o false, veamos como crearlos

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1); // true
console.log(boolean2); // false

console.log(typeof boolean2); // boolean

// Una variable boolean no se puede tratar como un string
// No es lo mismo que los numeros y los strings
console.log( boolean1 == boolean3 ); // false

//También un Boolean se puede crear con la palabra new
const boolean4 = new Boolean(true);
console.log(boolean4); // Boolean {true}
console.log(typeof boolean4); // object

