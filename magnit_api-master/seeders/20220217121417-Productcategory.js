"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "productcategories",
      [
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 1,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 2,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 3,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 4,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 1,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 2,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 3,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 4,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 1,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 2,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 3,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 4,
        },
        {
          uuid: uuid.v4(),
          categoryId: 14,
          productId: 10,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          productId: 23,
        },
        {
          uuid: uuid.v4(),
          categoryId: 23,
          productId: 11,
        },
        {
          uuid: uuid.v4(),
          categoryId: 6,
          productId: 9,
        },
        {
          uuid: uuid.v4(),
          categoryId: 7,
          productId: 10,
        },
        {
          uuid: uuid.v4(),
          categoryId: 8,
          productId: 11,
        },
        {
          uuid: uuid.v4(),
          categoryId: 9,
          productId: 9,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          productId: 10,
        },
        {
          uuid: uuid.v4(),
          categoryId: 11,
          productId: 11,
        },
        {
          uuid: uuid.v4(),
          categoryId: 13,
          productId: 13,
        },
        {
          uuid: uuid.v4(),
          categoryId: 14,
          productId: 15,
        },
        {
          uuid: uuid.v4(),
          categoryId: 16,
          productId: 16,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          productId: 17,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          productId: 18,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          productId: 19,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          productId: 20,
        },
        {
          uuid: uuid.v4(),
          categoryId: 4,
          productId: 21,
        },
        {
          uuid: uuid.v4(),
          categoryId: 7,
          productId: 22,
        },
        {
          uuid: uuid.v4(),
          categoryId: 7,
          productId: 23,
        },
        {
          uuid: uuid.v4(),
          categoryId: 8,
          productId: 24,
        },
        {
          uuid: uuid.v4(),
          categoryId: 8,
          productId: 25,
        },
        {
          uuid: uuid.v4(),
          categoryId: 9,
          productId: 26,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 27,
        },
        {
          uuid: uuid.v4(),
          categoryId: 4,
          productId: 28,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 29,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 30,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 31,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 32,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 33,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 34,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 35,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 36,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 37,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 38,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 39,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 40,
        },
        {
          uuid: uuid.v4(),
          categoryId: 14,
          productId: 41,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          productId: 42,
        },
        {
          uuid: uuid.v4(),
          categoryId: 23,
          productId: 43,
        },
        {
          uuid: uuid.v4(),
          categoryId: 6,
          productId: 44,
        },
        {
          uuid: uuid.v4(),
          categoryId: 7,
          productId: 45,
        },
        {
          uuid: uuid.v4(),
          categoryId: 8,
          productId: 46,
        },
        {
          uuid: uuid.v4(),
          categoryId: 9,
          productId: 47,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          productId: 48,
        },
        {
          uuid: uuid.v4(),
          categoryId: 11,
          productId: 49,
        },
        {
          uuid: uuid.v4(),
          categoryId: 13,
          productId: 50,
        },
        {
          uuid: uuid.v4(),
          categoryId: 14,
          productId: 51,
        },
        {
          uuid: uuid.v4(),
          categoryId: 16,
          productId: 52,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          productId: 53,
        },
        {
          uuid: uuid.v4(),
          categoryId: 10,
          productId: 54,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          productId: 55,
        },
        {
          uuid: uuid.v4(),
          categoryId: 12,
          productId: 56,
        },
        {
          uuid: uuid.v4(),
          categoryId: 4,
          productId: 57,
        },
        {
          uuid: uuid.v4(),
          categoryId: 7,
          productId: 58,
        },
        {
          uuid: uuid.v4(),
          categoryId: 7,
          productId: 59,
        },
        {
          uuid: uuid.v4(),
          categoryId: 8,
          productId: 60,
        },
        {
          uuid: uuid.v4(),
          categoryId: 8,
          productId: 61,
        },
        {
          uuid: uuid.v4(),
          categoryId: 9,
          productId: 62,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 63,
        },
        {
          uuid: uuid.v4(),
          categoryId: 4,
          productId: 64,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 65,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 66,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 67,
        },
        {
          uuid: uuid.v4(),
          categoryId: 1,
          productId: 68,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 69,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 70,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 71,
        },
        {
          uuid: uuid.v4(),
          categoryId: 2,
          productId: 72,
        },
        {
          uuid: uuid.v4(),
          categoryId: 3,
          productId: 72,
        },
        {
          uuid: uuid.v4(),
          categoryId: 16,
          productId: 72,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("productcategories", null, {});
  },
};
