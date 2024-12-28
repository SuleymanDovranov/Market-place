"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "deliveries",
      [
        {
          uuid: uuid.v4(),
          title_tm: "abc",
          title_ru: "abc",
          title_en: "abc",
          type: "market",
          price: 20.5,
        },
        {
          uuid: uuid.v4(),
          title_tm: "abc",
          title_ru: "abc",
          title_en: "abc",
          type: "express",
          price: 45.2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("deliveries", null, {});
  },
};
