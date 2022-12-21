// Pruebas con funciones de otros archivos
// import no existe en NODE.JS, por eso, JEST no sabe como tratar el archivo
// Se puede usar la sintaxis de Common.JS o utilizar Babel

// Importa las funciones a probar
import { sumar } from '../js/funciones.js';

// Grupo de pruebas
describe('Suma de 2 numeros', ()=>{

    // Prueba 1
    test('sumar 10 y 20, debe ser 30', ()=>{

        expect( sumar( 10, 20) ).toBe(30); // Valida que el resultado de la suma sea 30

    });

});
