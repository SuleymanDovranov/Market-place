"use strict";
const uuid = require("uuid");
const { generate } = require("./../utils/code_generator");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "worders",
      [
        {
          uuid: uuid.v4(),
          code: "W" + generate(),
          payment_type: "cart",
          total_price: 42000.5,
          delivery_time: "2022-02-06 19:00:00",
          address: "1may drzhykov",
          rating: 4.3,
          comment_by_wholesaler: "Agam bet hyzmatyndan razy, mosennik sen",
          status: "sent",
          carrierId: 1,
          wholesalerId: 1,
          isSynced: true,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "W" + generate(),
          payment_type: "cart",
          total_price: 420.5,
          delivery_time: "2022-02-06 19:00:00",
          address: "1may drzhykov",
          rating: 4.3,
          comment_by_wholesaler: "Agam bet hyzmatyndan razy, mosennik sen",
          status: "sent",
          carrierId: 2,
          wholesalerId: 2,
          isSynced: true,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("worders", null, {});
  },
};
