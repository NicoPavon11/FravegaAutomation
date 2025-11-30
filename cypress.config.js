const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl:'https://www.fravega.com/',
    // defaultCommandTimeout: 15000, // 15 segundos
    // pageLoadTimeout: 60000,       // 60 segundos
  },
});
