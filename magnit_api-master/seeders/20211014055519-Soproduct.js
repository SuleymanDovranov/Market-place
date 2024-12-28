"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "soproducts",
      [
        {
          uuid: uuid.v4(),
          quantity: 500,
          productId: 1,
          supplierorderId: 1,
        },
        {
          uuid: uuid.v4(),
          quantity: 90,
          productId: 2,
          supplierorderId: 1,
        },
        {
          uuid: uuid.v4(),
          quantity: 40,
          productId: 1,
          supplierorderId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("soproducts", null, {});
  },
};
