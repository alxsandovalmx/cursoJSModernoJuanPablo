const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false, // Previene limpiar la prueba actual al pasar a la siguiente
    videoCompression: 0, // Va de 0 a 51, 0 es la mejor calidad
  },
});
