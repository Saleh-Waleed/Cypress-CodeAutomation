const { defineConfig } = require("cypress");

// Cypress.config('viewportWidth', 1100)
chromeWebSecurity: false


module.exports = defineConfig({


  env:
{
  url: "https://testautomationpractice.blogspot.com/"
},
reporter: 'cypress-mochawesome-reporter',
  

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
  },
});
