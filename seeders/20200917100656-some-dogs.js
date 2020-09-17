"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("dogs", [
      {
        name: "doggy",
        userId: 1,
        breed: "labrador",
        imageUrl:
          "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.jpg?w=1900&h=1267",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bobby",
        userId: 2,
        breed: "doberman",
        imageUrl:
          "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.jpg?w=1900&h=1267",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Robby",
        userId: 1,
        breed: "labrador",
        imageUrl:
          "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-chocolate-lab-nationalgeographic_1154144.jpg?w=1900&h=1267",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("dogs", null, {});
  },
};
