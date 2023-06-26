const { defineConfig } = require("cypress");

// Cypress.config('viewportWidth', 1100)
chromeWebSecurity: false,


module.exports = defineConfig({

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
