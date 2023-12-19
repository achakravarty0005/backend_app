'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createSchema('nodeJsProject');
  },

  down: async (queryInterface) => {
    await queryInterface.dropSchema('nodeJsProject');
  },
};
