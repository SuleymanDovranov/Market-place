"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "categoriesandbrands",
      [
        {
          uuid: uuid.v4(),
          categoryId: 1,
          brandId: 1,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          brandId: 2,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          brandId: 1,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          brandId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("categoriesandbrands", null, {});
  },
};
