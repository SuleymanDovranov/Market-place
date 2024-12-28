"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("discounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.REAL,
      },
      required: {
        type: DataTypes.INTEGER,
      },
      bonus: {
        type: DataTypes.INTEGER,
      },
      from: {
        type: DataTypes.DATE,
      },
      to: {
        type: DataTypes.DATE,
      },
      dep_type: {
        type: DataTypes.STRING,
        defaultValue: "both",
      },
      collectionId: {
        type: DataTypes.INTEGER,
      },
      productId: {
        type: DataTypes.INTEGER,
      },
      campaignId: {
        type: DataTypes.INTEGER,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("discounts");
  },
};
