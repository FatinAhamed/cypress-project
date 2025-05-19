const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://estore.rkpl.com.bd/", 

    specPattern: "cypress/e2e/ShellBD/*.cy.js",  

    supportFile: false,

    setupNodeEvents(on, config) {
      
    },

  },

  reporter: "mochawesome",

  reporterOptions: {
    
    reportDir: "mochawesome-report",
    overwrite: true,
    html: true,
    json: true,
    reportFilename: "test-report",

  },

});
