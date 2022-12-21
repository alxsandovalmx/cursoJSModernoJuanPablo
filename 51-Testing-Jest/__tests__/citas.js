// Pruebas al proyecto de citas
// Para actualizar el snapshot: npm t -- -u

import Citas from "../js/classes/Citas";

// Grupo de pruebas
describe('Probar la clase de citas', ()=>{

    const citas = new Citas();
    const id = Date.now();

    // Prueba 1
    test('Agregar una nueva cita', ()=>{

        const citaObj = {
            id,
            mascota:     'Hook',
            propietario: 'Alexis',
            telefono:    '6644216047',
            fecha:       '21-12-2022',
            hora:        '12:05',
            sintomas:    'Solo duerme'
        };

        citas.agregarCita( citaObj );

        expect( citas ).toMatchSnapshot();

    });
    
    // Prueba 2
    test('Actualizar cita', ()=>{

        const citaActualizada = {
            id,
            mascota:     'NuevoNombre',
            propietario: 'Alexis',
            telefono:    '6644216047',
            fecha:       '21-12-2022',
            hora:        '12:05',
            sintomas:    'Solo duerme'
        };

        citas.editarCita( citaActualizada );

        expect( citas ).toMatchSnapshot();

    });

    // Prueba 3
    test('Eliminar cita', ()=>{

        citas.eliminarCita( id );

        expect( citas ).toMatchSnapshot();

    });


});
