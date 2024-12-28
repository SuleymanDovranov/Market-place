"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "cities",
      [
        {
          uuid: uuid.v4(),
          name_tm: "Ashgabat",
          name_ru: "Ashgabat",
          name_en: "Ashgabat",
          code: "AG",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
