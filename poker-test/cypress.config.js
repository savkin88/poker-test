const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const nodePolyfills =
  require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
module.exports = {
  ...async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
    // To use esBuild for the bundler when preprocessing
    on(
      "file:preprocessor",
      createBundler({
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      })
    );
    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },
};

