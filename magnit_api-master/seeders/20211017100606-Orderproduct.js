"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "orderproducts",
      [
        {
          uuid: uuid.v4(),
          price: 20.45,
          total_price: 1200.56,
          quantity: 8,
          productId: 1,
          orderId: 1,
        },
        {
          uuid: uuid.v4(),
          price: 245,
          total_price: 190.56,
          quantity: 8,
          productId: 3,
          orderId: 1,
        },
        {
          uuid: uuid.v4(),
          price: 200.45,
          total_price: 12000.56,
          quantity: 4,
          productId: 2,
          orderId: 2,
        },
        {
          uuid: uuid.v4(),
          price: 233.45,
          total_price: 200.56,
          quantity: 1,
          productId: 1,
          orderId: 2,
        },
        {
          uuid: uuid.v4(),
          price: 20.45,
          total_price: 1200.56,
          quantity: 8,
          productId: 2,
          orderId: 3,
        },
        {
          uuid: uuid.v4(),
          price: 245,
          total_price: 190.56,
          quantity: 8,
          productId: 3,
          orderId: 4,
        },
        {
          uuid: uuid.v4(),
          price: 200.45,
          total_price: 12000.56,
          quantity: 4,
          productId: 5,
          orderId: 4,
        },
        {
          uuid: uuid.v4(),
          price: 233.45,
          total_price: 200.56,
          quantity: 1,
          productId: 8,
          orderId: 5,
        },
        {
          uuid: uuid.v4(),
          price: 20.45,
          total_price: 1200.56,
          quantity: 8,
          productId: 7,
          orderId: 6,
        },
        {
          uuid: uuid.v4(),
          price: 245,
          total_price: 190.56,
          quantity: 8,
          productId: 3,
          orderId: 7,
        },
        {
          uuid: uuid.v4(),
          price: 200.45,
          total_price: 350.56,
          quantity: 4,
          productId: 2,
          orderId: 7,
        },
        {
          uuid: uuid.v4(),
          price: 233.45,
          total_price: 200.56,
          quantity: 1,
          productId: 1,
          orderId: 8,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("orderproducts", null, {});
  },
};
