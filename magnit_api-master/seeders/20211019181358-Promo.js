"use strict";
const uuid = require("uuid");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "promos",
      [
        {
          uuid: uuid.v4(),
          code: "kod1",
          percent: 45.2,
          dep_type: "both",
          child_type: "products",
          child_ids: [1, 2, 3],
          from: "2022-03-13 12:00:00+05",
          to: "2022-04-25 12:00:00+05",
          isActive: true,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "kod2",
          percent: 5,
          dep_type: "market",
          child_type: "category",
          child_ids: [5],
          use_max: 3,
          isActive: true,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "kod3",
          percent: 5,
          dep_type: "express",
          child_type: "all",
          from: "2022-03-13 12:00:00+05",
          to: "2022-04-25 12:00:00+05",
          isActive: true,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "kod4",
          percent: 5,
          dep_type: "both",
          child_type: "brand",
          child_ids: [2],
          from: "2022-03-13 12:00:00+05",
          to: "2022-04-25 12:00:00+05",
          isActive: true,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("promos", null, {});
  },
};
