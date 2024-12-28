"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "woproducts",
      [
        {
          uuid: uuid.v4(),
          price: 120.4,
          total_price: 1204.5,
          quantity: 100,
          productId: 1,
          worderId: 1,
        },
        {
          uuid: uuid.v4(),
          price: 120.4,
          total_price: 600.5,
          quantity: 10,
          productId: 2,
          worderId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("woproducts", null, {});
  },
};
