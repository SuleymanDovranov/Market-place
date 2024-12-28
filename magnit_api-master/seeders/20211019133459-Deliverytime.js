"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "deliverytimes",
      [
        {
          uuid: uuid.v4(),
          starts: 9,
          ends: 11,
        },
        {
          uuid: uuid.v4(),
          starts: 12,
          ends: 14,
        },
        {
          uuid: uuid.v4(),
          starts: 14,
          ends: 18,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("deliverytimes", null, {});
  },
};
