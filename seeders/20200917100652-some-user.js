"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Matias",
        email: "matias@codaisseur.com",
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eszter",
        email: "eszter@codaisseur.com",
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rein",
        email: "rein@codaisseur.com",
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
