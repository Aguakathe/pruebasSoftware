const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.ginprosacol.com.co/preliminar/mockup/',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 8000,
    video: true,
    screenshotOnRunFailure: true
  }
});
