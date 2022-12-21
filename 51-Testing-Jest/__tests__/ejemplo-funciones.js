// Pruebas con funciones

function sumar ( a, b ) {

    return a + b ;

}

function restar ( a, b ) {

    return a - b ;

}

// Grupo de pruebas
describe('Testing a las funciones de sumar y restar', ()=>{

    // Prueba 1
    test('Suma de 20 y 30', ()=>{

        expect( sumar( 20, 30 ) ).toBe( 50 ); // Valida que el resultado sea 50

    });

    // Prueba 2
    test('Resta de 10 y 5', ()=>{

        expect( restar( 10, 5 ) ).toBe( 5 ); // Valida que el resultado sea 5

    });    

    // Prueba 3
    test('Que la suma de 10 y 10, no sea 10', ()=>{

        expect( sumar( 10, 10 ) ).not.toBe( 10 ); // Valida que el resultado no sea 10

    });

    // Prueba 4
    test('Que la resta de 10 y 5 no sea otro valor', ()=>{

        expect( restar( 10, 5 ) ).not.toBe( 2 ); // Valida que el resultado no sea 2

    });    

});
