const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zdm7cr",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
