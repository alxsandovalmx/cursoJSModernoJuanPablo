/// <reference types="cypress"/>

// Pruebas editando en un formulario

// Grupo de pruebas
describe('Llena los campos para una nueva cita y la edita', ()=>{

    // Prueba 1
    it('Campos nueva cita', ()=>{    

        // Primero debe establecerse la url donde hara la prueba
        cy.visit('/index.html'); // Se establecio una url por defecto en la configuracion

        // Validacion de los campos del formulario
        cy.get('[data-cy="mascota-input"]')
            .type('Hook');

        cy.get('[data-cy="propietario-input"]')
            .type('Alexis Sandoval');            

        cy.get('[data-cy="telefono-input"]')
            .type('6644216048');

        cy.get('[data-cy="fecha-input"]')
            .type('2022-12-22');

        cy.get('[data-cy="hora-input"]')
            .type('13:36');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo duerme');

        cy.get('[data-cy="submit-cita"]')
            .click();

        // Verificar el texto de las citas
        cy.get('[data-cy=citas-heading]')
            .invoke('text') // Se selecciona su texto
            .should('equal', 'Administra tus Citas'); // Se compara

        // Verificar el texto de la alerta
        cy.get('[data-cy=alert]')
            .invoke('text') // Se selecciona su texto
            .should('equal', 'Se agregó correctamente'); // Se compara
            
        // Valida que la alerta tenga una clase
        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-success') // Se compara                        

    });

    // Prueba 2
    it('Edita la cita', ()=>{

        cy.get('[data-cy="btn-editar"]')
            .click();

        // Validacion de los campos del formulario
        cy.get('[data-cy="mascota-input"]')
            .clear() // Limpia el input
            .type('Nuevo Hook');
            
        cy.get('[data-cy="submit-cita"]')
            .click();

        // Verificar el texto de la alerta
        cy.get('[data-cy=alert]')
            .invoke('text') // Se selecciona su texto
            .should('equal', 'Guardado Correctamente'); // Se compara        

        // Valida que la alerta tenga una clase
        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-success') // Se compara      


    });

});