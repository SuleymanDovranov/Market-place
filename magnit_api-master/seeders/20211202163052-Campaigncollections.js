"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "campaigncollections",
      [
        {
          uuid: uuid.v4(),
          collectionId: 1,
          campaignId: 1,
        },
        {
          uuid: uuid.v4(),
          collectionId: 2,
          campaignId: 1,
        },
        {
          uuid: uuid.v4(),
          collectionId: 1,
          campaignId: 2,
        },
        {
          uuid: uuid.v4(),
          collectionId: 2,
          campaignId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("campaigncollections", null, {});
  },
};
