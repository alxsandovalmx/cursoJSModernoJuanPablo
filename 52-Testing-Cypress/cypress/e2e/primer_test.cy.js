/// <reference types="cypress"/>

// Pruebas con Cypress

// Grupo de pruebas
describe('Carga la pagina principal', ()=>{

    // Prueba 1
    it('Carga la pagina principal', ()=>{

        // Primero debe establecerse la url donde hara la prueba
        cy.visit('/index.html');

        // Validara que exista ese h1 con ese contenido
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // Valida que exista el h1
        // get sirve para obtener elementos del dom: botones, imagenes, etc.
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        // Verificar que exista el elemento y contenga un texto especifico
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text') // Se selecciona su texto
            .should('equal', 'Administrador de Pacientes de Veterinaria'); // Se compara

        // Verificar el texto de las citas
        cy.get('[data-cy=citas-heading]')
            .invoke('text') // Se selecciona su texto
            .should('equal', 'No hay Citas, comienza creando una'); // Se compara

        // Verificar el texto de las citas
        cy.get('[data-cy=citas-heading]')
            .invoke('text') // Se selecciona su texto
            .should('not.equal', 'Administra tus Citas'); // Se compara que no sea igual

    });

});