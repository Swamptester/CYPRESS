const { defineConfig } = require('cypress')



module.exports = defineConfig({
  video: false,
  videosFolder: 'allure-results',
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  watchForFileChanges: true,
  chromeWebSecurity: false,
  env: {
    ENV: 'uat',
   allureAddVideoOnPass: false,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report/json',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://qa.hmg.tec.br/',
  },
 
})
