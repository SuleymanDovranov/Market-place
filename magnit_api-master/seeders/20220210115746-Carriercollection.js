"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "carriercollections",
      [
        {
          uuid: uuid.v4(),
          stock_quantity: 10,
          collectionId: 2,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 52,
          collectionId: 1,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 96,
          collectionId: 3,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 10,
          collectionId: 5,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 52,
          collectionId: 6,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 49,
          collectionId: 7,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 52,
          collectionId: 10,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 49,
          collectionId: 11,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 96,
          collectionId: 12,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 10,
          collectionId: 13,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 52,
          collectionId: 14,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 49,
          collectionId: 15,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 96,
          collectionId: 17,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 10,
          collectionId: 18,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 52,
          collectionId: 19,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 49,
          collectionId: 20,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 96,
          collectionId: 21,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 10,
          collectionId: 22,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 52,
          collectionId: 23,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 49,
          collectionId: 26,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 96,
          collectionId: 27,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 10,
          collectionId: 28,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 52,
          collectionId: 29,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 49,
          collectionId: 30,
          carrierId: 1,
        },
        {
          uuid: uuid.v4(),
          stock_quantity: 96,
          collectionId: 31,
          carrierId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("carriercollections", null, {});
  },
};
