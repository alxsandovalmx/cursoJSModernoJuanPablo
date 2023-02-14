// En este video veamos como eliminar elementos del storage...

// Elimina el contenido y la llave llamada nombre
localStorage.removeItem('nombre'); // Si no existe no hace nada

// En cuanto a toda la funcionalidad de un CRUD, nos haria falta un update, no hay como tal un Update... lo que podrías hacer es...

// Obtiene la informacion de la llave meses y la transforma en un arreglo
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray)

// Agrega en el arreglo creado un nuevo mes
mesesArray.push('Nuevo Mes');
console.log(mesesArray);

// Reemplaza el contenido de la llave meses
localStorage.setItem('meses', JSON.stringify(mesesArray))

// Este seria el proceso para hacer un Update

// Para eliminar todo lo que existe en el LocalStorage
localStorage.clear();