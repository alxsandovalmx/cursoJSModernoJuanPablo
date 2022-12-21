// Pruebas con Objetos

// Objeto cliente
const cliente = {

    nombre: 'Alexis',
    balance: 500

};

// Grupo de pruebas
describe('Testing al Cliente', ()=>{

    // Prueba 1
    test('El cliente es premium', ()=>{

        expect( cliente.balance ).toBeGreaterThan( 400 ); // Valida que sea mayor que 400

    });

    // Prueba 2
    test('Es Alexis', ()=>{

        expect( cliente.nombre ).toBe('Alexis'); // Valida que sea igual
        
    });

    // Prueba 3
    test('No es otro cliente', ()=>{

        expect( cliente.nombre ).not.toBe('Pedro'); // Valida que no sea otro cliente

    });

    // Prueba 4
    test('No tiene 500', ()=>{

        expect( cliente.balance ).not.toBe( 400 ); // Valida que no tiene balance de 400

    });
    
});
