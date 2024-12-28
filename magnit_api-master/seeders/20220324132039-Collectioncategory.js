"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "collectioncategories",
      [
        {
          uuid: uuid.v4(),
          categoryId: 1,
          collectionId: 1,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          collectionId: 2,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          collectionId: 3,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          collectionId: 4,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          collectionId: 6,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          collectionId: 2,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          collectionId: 3,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          collectionId: 4,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          collectionId: 1,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          collectionId: 2,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          collectionId: 5,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          collectionId: 4,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          collectionId: 7,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          collectionId: 8,
        },
        {
          uuid: uuid.v4(),
          categoryId: 9,
          collectionId: 6,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          collectionId: 5,
        },
        {
          uuid: uuid.v4(),
          categoryId: 22,
          collectionId: 9,
        },
        {
          uuid: uuid.v4(),
          categoryId: 21,
          collectionId: 10,
        },
        {
          uuid: uuid.v4(),
          categoryId: 20,
          collectionId: 11,
        },
        {
          uuid: uuid.v4(),
          categoryId: 19,
          collectionId: 12,
        },
        {
          uuid: uuid.v4(),
          categoryId: 18,
          collectionId: 13,
        },
        {
          uuid: uuid.v4(),
          categoryId: 17,
          collectionId: 14,
        },
        {
          uuid: uuid.v4(),
          categoryId: 16,
          collectionId: 15,
        },
        {
          uuid: uuid.v4(),
          categoryId: 15,
          collectionId: 16,
        },
        {
          uuid: uuid.v4(),
          categoryId: 14,
          collectionId: 17,
        },
        {
          uuid: uuid.v4(),
          categoryId: 14,
          collectionId: 18,
        },
        {
          uuid: uuid.v4(),
          categoryId: 13,
          collectionId: 19,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          collectionId: 20,
        },
        {
          uuid: uuid.v4(),
          categoryId: 11,
          collectionId: 21,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          collectionId: 22,
        },
        {
          uuid: uuid.v4(),
          categoryId: 9,
          collectionId: 23,
        },
        {
          uuid: uuid.v4(),
          categoryId: 8,
          collectionId: 24,
        },
        {
          uuid: uuid.v4(),
          categoryId: 7,
          collectionId: 25,
        },
        {
          uuid: uuid.v4(),
          categoryId: 6,
          collectionId: 26,
        },
        {
          uuid: uuid.v4(),
          categoryId: 5,
          collectionId: 27,
        },
        {
          uuid: uuid.v4(),
          categoryId: 4,
          collectionId: 28,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          collectionId: 29,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          collectionId: 30,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          collectionId: 31,
        },
        {
          uuid: uuid.v4(),
          categoryId: 5,
          collectionId: 32,
        },
        {
          uuid: uuid.v4(),
          categoryId: 28,
          collectionId: 32,
        },
        {
          uuid: uuid.v4(),
          categoryId: 27,
          collectionId: 31,
        },
        {
          uuid: uuid.v4(),
          categoryId: 26,
          collectionId: 30,
        },
        {
          uuid: uuid.v4(),
          categoryId: 25,
          collectionId: 29,
        },
        {
          uuid: uuid.v4(),
          categoryId: 24,
          collectionId: 28,
        },
        {
          uuid: uuid.v4(),
          categoryId: 23,
          collectionId: 27,
        },
        {
          uuid: uuid.v4(),
          categoryId: 22,
          collectionId: 26,
        },
        {
          uuid: uuid.v4(),
          categoryId: 21,
          collectionId: 25,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("collectioncategories", null, {});
  },
};
