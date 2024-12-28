"use strict";
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "wholesalers",
      [
        {
          uuid: uuid.v4(),
          code: "asjhdfabcvaftv22",
          username: "wholesaler",
          name: "Planjan",
          phone: "+99361111111",
          email: "abc@gmail.com",
          password: await bcrypt.hash("wholesaler", 12),
          device_token: "this is a fake device token",
          isCredited: true,
          isBlocked: false,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "asjhdfacvbcvaftv22",
          username: "wholeassaler",
          name: "Planjan",
          phone: "+99361111111",
          email: "abc@gmail.com",
          password: await bcrypt.hash("wholesaler", 12),
          device_token: "this is a fake device token",
          isCredited: false,
          isBlocked: false,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("wholesalers", null, {});
  },
};
