"use strict";
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "admins",
      [
        {
          uuid: uuid.v4(),
          username: "operator",
          name: "plangeldi",
          phone: "+99361010203",
          email: "abc@gmail.com",
          password: await bcrypt.hash("admin", 12),
          role: "operator",
          isBlocked: false,
        },
        {
          uuid: uuid.v4(),
          username: "superadmin",
          name: "Adminmyrat",
          password: await bcrypt.hash("superadmin", 12),
          role: "superadmin",
          isBlocked: false,
        },
        {
          uuid: uuid.v4(),
          username: "superadmin2",
          name: "Admingeldi",
          password: await bcrypt.hash("superadmin2", 12),
          role: "superadmin",
          isBlocked: false,
        },
        {
          uuid: uuid.v4(),
          username: "admin",
          name: "planmyrat",
          phone: "+99361010203",
          email: "abc@gmail.com",
          password: await bcrypt.hash("admin", 12),
          role: "admin",
          isBlocked: false,
        },
        {
          uuid: uuid.v4(),
          username: "stock_operator",
          name: "plandurdy",
          phone: "+99361010203",
          email: "abc@gmail.com",
          password: await bcrypt.hash("admin", 12),
          role: "stock_operator",
          isBlocked: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
