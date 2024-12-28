"use strict";
const uuid = require("uuid");
const { generate } = require("./../utils/code_generator");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "supplierorders",
      [
        {
          uuid: uuid.v4(),
          code: "S" + generate(),
          delivery_time: DataTypes.fn("now"),
          status: "pending",
          supplierId: 4,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "S" + generate(),
          delivery_time: DataTypes.fn("now"),
          status: "pending",
          supplierId: 4,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("supplierorders", null, {});
  },
};
