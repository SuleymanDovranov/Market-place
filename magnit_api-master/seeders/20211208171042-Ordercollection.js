"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "ordercollections",
      [
        {
          uuid: uuid.v4(),
          price: 20.45,
          total_price: 1200.56,
          quantity: 8,
          collectionId: 1,
          orderId: 1,
        },
        {
          uuid: uuid.v4(),
          price: 25,
          total_price: 420,
          quantity: 2,
          collectionId: 2,
          orderId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("ordercollections", null, {});
  },
};
