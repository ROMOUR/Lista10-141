const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blazedemo.com',
    setupNodeEvents(on, config) {
      // implementa event listeners aqui, se necessário
    },
  },
})