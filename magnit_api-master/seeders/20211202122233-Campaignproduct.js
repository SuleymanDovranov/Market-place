"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "campaignproducts",
      [
        {
          uuid: uuid.v4(),
          productId: 1,
          campaignId: 1,
        },
        {
          uuid: uuid.v4(),
          productId: 2,
          campaignId: 1,
        },
        {
          uuid: uuid.v4(),
          productId: 3,
          campaignId: 1,
        },
        {
          uuid: uuid.v4(),
          productId: 2,
          campaignId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("campaignproducts", null, {});
  },
};
