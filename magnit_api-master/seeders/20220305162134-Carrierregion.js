"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "carrierregions",
      [
        {
          uuid: uuid.v4(),
          regionId: 1,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          regionId: 2,
          carrierId: 2,
        },
        {
          uuid: uuid.v4(),
          regionId: 3,
          carrierId: 3,
        },
        {
          uuid: uuid.v4(),
          regionId: 4,
          carrierId: 4,
        },
        {
          uuid: uuid.v4(),
          regionId: 5,
          carrierId: 5,
        },
        {
          uuid: uuid.v4(),
          regionId: 6,
          carrierId: 6,
        },
        {
          uuid: uuid.v4(),
          regionId: 7,
          carrierId: 7,
        },
        {
          uuid: uuid.v4(),
          regionId: 3,
          carrierId: 8,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("carrierregions", null, {});
  },
};
