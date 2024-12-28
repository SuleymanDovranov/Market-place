"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "regions",
      [
        {
          uuid: uuid.v4(),
          name_tm: "Mir 2",
          name_ru: "Mir 2",
          name_en: "Mir 2",
          isExpress: true,
          express_time: 15,
          cityId: 1,
        },
        {
          uuid: uuid.v4(),
          name_tm: "Olimpiya sahercesi",
          name_ru: "Olimpiski Gorodok",
          name_en: "Olympic Village",
          isExpress: false,
          express_time: 30,
          cityId: 1,
        },
        {
          uuid: uuid.v4(),
          name_tm: "Dosaf Rayon",
          name_ru: "Dosaf Rayon",
          name_en: "Dosaf Rayon",
          isExpress: false,
          cityId: 1,
        },
        {
          uuid: uuid.v4(),
          name_tm: "Mir 5",
          name_ru: "Mir 5",
          name_en: "Mir 5",
          isExpress: false,
          express_time: 20,
          cityId: 1,
        },
        {
          uuid: uuid.v4(),
          name_tm: "Kim rayon",
          name_ru: "Kim rayon",
          name_en: "Kim rayon",
          isExpress: false,
          express_time: 10,
          cityId: 1,
        },
        {
          uuid: uuid.v4(),
          name_tm: "Mir grazdan",
          name_ru: "Mir grazdan",
          name_en: "Mir grazdan",
          isExpress: false,
          cityId: 1,
        },
        {
          uuid: uuid.v4(),
          name_tm: "Mir 6",
          name_ru: "Mir 6",
          name_en: "Mir 6",
          isExpress: false,
          cityId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("regions", null, {});
  },
};
