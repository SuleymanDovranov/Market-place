"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "videobannerproducts",
      [
        {
          uuid: uuid.v4(),
          productId: 1,
          videobannerId: 3,
        },
        {
          uuid: uuid.v4(),
          productId: 3,
          videobannerId: 2,
        },
        {
          uuid: uuid.v4(),
          productId: 2,
          videobannerId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("videobannerproducts", null, {});
  },
};
