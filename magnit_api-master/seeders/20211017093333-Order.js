"use strict";
const uuid = require("uuid");
const { generate } = require("./../utils/code_generator");
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+99361010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          rating: 4.5,
          comment_by_user: "Ayy mosennik",
          status: "delivered",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          note: "bardym gapysyny acmady",
          carrierId: 1,
          userId: 1,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+993as61010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          rating: 4.5,
          status: "pending",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          userId: 2,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+99361010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          status: "accepted",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          note: "bardym gapysyny acmady",
          userId: 1,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+99361010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          status: "sent",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          note: "bardym gapysyny acmady",
          userId: 1,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+993as61010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          status: "not_delivered",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          carrierId: 2,
          userId: 2,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+993as61010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          rating: 4.5,
          comment_by_user: "Ayy mosennik",
          status: "sent",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          carrierId: 2,
          userId: 2,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+99361010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          status: "delivered",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          note: "bardym gapysyny acmady",
          userId: 1,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: uuid.v4(),
          code: "U" + generate(),
          payment_type: "cart",
          total_price: 600.55,
          user_name: "Playyew Plany",
          user_phone: "+993as61010203",
          address: "Mir 6, Dom 92 po ulitse aytakova",
          delivery_type: "market",
          delivery_cost: 20.0,
          delivery_time: "2022-03-24 17:35:23",
          rating: 4.5,
          comment_by_user: "Ayy mosennik bettt",
          status: "delivered",
          isSynced: true,
          actionAt: DataTypes.fn("now"),
          carrierId: 2,
          userId: 2,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
