const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'yeouad',
  e2e: {
    baseUrl: 'https://petgram-two-blue.vercel.app',
    chromeWebSecurity: false,
    viewportWith: 500,
    viewportHeight: 800,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  }
})
