// Pruebas con Strings

const password = "123456";

// Grupo de Pruebas
describe('Valida que el password no este vacio y tenga una extension de 6 caracteres', ()=>{

    // Prueba 1
    test('Que el password tenga 6 caracteres', ()=>{

        expect( password ).toHaveLength( 6 ); // Valida la longitud de la variable

    });

    // Prueba 2
    test('Password no vacio', ()=>{

        expect( password ).not.toHaveLength( 0 ); // Valida que no tenga una longitud de 0

    });

});
