/// <reference types="cypress"/>

// Pruebas validando un formulario

// Grupo de pruebas
describe('Valida el formulario', ()=>{

    // Prueba 1
    it('Submit al formulario y mostrar la alerta de error', ()=>{

        // Primero debe establecerse la url donde hara la prueba
        cy.visit('/index.html');
        
        // Obtenemos el formulario
        cy.get('[data-cy="formulario"]')
            .submit(); // Presionara en el boton de crear cita

        // Valida que tenga un texto
        cy.get('[data-cy=alert]')
            .invoke('text') // Se selecciona su texto
            .should('equal', 'Todos los campos son Obligatorios') // Se compara

        // Valida que tenga una clase
        cy.get('[data-cy=alert]')
            .should('have.class', 'alert-danger') // Se compara

    });


});