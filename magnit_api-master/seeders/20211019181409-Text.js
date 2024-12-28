"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "texts",
      [
        {
          uuid: uuid.v4(),
          key: "about_us",
          value: "Ay Biza bir işsizler topary",
          value_ru: "rusca biz barada, o nas",
          value_en: "We are a group of finger pointers",
        },
        {
          uuid: uuid.v4(),
          key: "about_us",
          value: "Ay Biza bir işsizler topary",
          value_ru: "rusca biz barada, o nas",
          value_en: "We are a group of finger pointers",
        },
        {
          uuid: uuid.v4(),
          key: "about_us",
          value: "Ay Biza bir işsizler topary",
          value_ru: "rusca biz barada, o nas",
          value_en: "We are a group of finger pointers",
        },
        {
          uuid: uuid.v4(),
          key: "about_us",
          value: "Ay Biza bir işsizler topary",
          value_ru: "rusca biz barada, o nas",
          value_en: "We are a group of finger pointers",
        },
        {
          uuid: uuid.v4(),
          key: "about_us",
          value: "Ay Biza bir işsizler topary",
          value_ru: "rusca biz barada, o nas",
          value_en: "We are a group of finger pointers",
        },
        {
          uuid: uuid.v4(),
          key: "about_us",
          value: "Ay Biza bir işsizler topary",
          value_ru: "rusca biz barada, o nas",
          value_en: "We are a group of finger pointers",
        },
        {
          uuid: uuid.v4(),
          key: "about_us",
          value: "Ay Biza bir işsizler topary",
          value_ru: "rusca biz barada, o nas",
          value_en: "We are a group of finger pointers",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("texts", null, {});
  },
};
