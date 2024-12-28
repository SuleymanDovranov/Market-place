"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "collectionproducts",
      [
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 5,
          collectionId: 1,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 2,
          collectionId: 1,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 3,
          collectionId: 2,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 1,
          collectionId: 2,
        },
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 7,
          collectionId: 3,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 29,
          collectionId: 3,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 31,
          collectionId: 4,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 11,
          collectionId: 4,
        },
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 10,
          collectionId: 5,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 31,
          collectionId: 5,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 30,
          collectionId: 6,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 17,
          collectionId: 6,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 24,
          collectionId: 7,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 20,
          collectionId: 8,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 18,
          collectionId: 9,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 19,
          collectionId: 10,
        },
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 22,
          collectionId: 11,
        },
        {
          uuid: uuid.v4(),
          quantity: 1,
          productId: 27,
          collectionId: 12,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 13,
          collectionId: 13,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 15,
          collectionId: 14,
        },
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 18,
          collectionId: 15,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 21,
          collectionId: 16,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 12,
          collectionId: 17,
        },
        {
          uuid: uuid.v4(),
          quantity: 5,
          productId: 11,
          collectionId: 18,
        }, //
        ///
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 10,
          collectionId: 19,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 31,
          collectionId: 19,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 30,
          collectionId: 20,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 17,
          collectionId: 20,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 24,
          collectionId: 20,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 20,
          collectionId: 21,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 18,
          collectionId: 21,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 19,
          collectionId: 22,
        },
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 22,
          collectionId: 23,
        },
        {
          uuid: uuid.v4(),
          quantity: 1,
          productId: 27,
          collectionId: 24,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 13,
          collectionId: 25,
        },
        {
          uuid: uuid.v4(),
          quantity: 4,
          productId: 15,
          collectionId: 26,
        },
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 18,
          collectionId: 27,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 21,
          collectionId: 28,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 12,
          collectionId: 29,
        },
        {
          uuid: uuid.v4(),
          quantity: 5,
          productId: 11,
          collectionId: 30,
        },
        {
          uuid: uuid.v4(),
          quantity: 6,
          productId: 18,
          collectionId: 31,
        },
        {
          uuid: uuid.v4(),
          quantity: 2,
          productId: 21,
          collectionId: 31,
        },
        {
          uuid: uuid.v4(),
          quantity: 3,
          productId: 12,
          collectionId: 32,
        },
        {
          uuid: uuid.v4(),
          quantity: 5,
          productId: 11,
          collectionId: 32,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("collectionproducts", null, {});
  },
};
