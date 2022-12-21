// Pruebas con Arrays

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

// Grupo de Pruebas
describe('Testing al carrito de compras', ()=>{

    // Prueba 1
    test('Probar que el array tenga 3 elementos', ()=>{

        expect( carrito ).toHaveLength( 3 ); // Valida que tenga una longitud de 3

    });

    // Prueba 2
    test('Verificar que el carrito no este vacio', ()=>{

        expect( carrito ).not.toHaveLength( 0 ); // Valida que su longitud no sea 0 (no este vacio)

    });

});
