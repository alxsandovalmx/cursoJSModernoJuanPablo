// Snapshots: Son datos que se almacenan en un string
// Para actualizar el snapshot: npm t -- -u

const cliente = {

    nombre: 'Alexis 2',
    balance: 500,
    tipo: 'Premium'

};

// Grupo de pruebas
describe('Testing al cliente', ()=>{

    // Prueba 1
    test('Es Alexis', ()=>{

        expect( cliente ).toMatchSnapshot();

    });

});
