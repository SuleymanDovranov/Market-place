"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "videobanners",
      [
        {
          uuid: "b00cf1d6-dfb2-4553-9ca2-6d2f8b073713",
          isAdd: true,
          title_tm: "Nadip Nahar Bisirmeli",
          title_en: "How to cook a lunch",
          title_ru: "ОФЫФВОЩЛ фвт фылт Kak to nahar bisirmek",
          description_tm:
            "Bu wideo arkaly size nahar bisirmani owretmek isleyas we in esasy zat oz harytlarymyzy satmak",
          description_en:
            "We want to teach you how to cook something delicious and unusal to you and your family",
          description_ru:
            "Лорем ипсум долор сит амет, бландит волуптатибус иус ут, хас омниум промпта те, меис тибияуе рецтеяуе ан пер. Сед ут мунере тритани дефинитионес, мел цу нострум ассуеверит. Про ид легимус легендос адолесценс, еу про ностер алиенум елояуентиам. Тота новум интеллегат еи еос, хас еу дицант оффициис, еам нихил аперири волуптатибус ин.",
          likes: [1, 2, 3],
          video: true,
          preview: true,
          image: false,
          brandId: 1,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: "31552ca5-d48f-48a9-8d7b-0bc0dc5829f3",
          isAdd: true,
          title_tm: "Guymenje ucin Wideo",
          title_en: "Video just to Entertain",
          title_ru: "Video dlya entertayyiin",
          description_tm:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
          description_ru:
            "Лорем ипсум долор сит амет, бландит волуптатибус иус ут, хас омниум промпта те, меис тибияуе рецтеяуе ан пер. Сед ут мунере тритани дефинитионес, мел цу нострум ассуеверит. Про ид легимус легендос адолесценс, еу про ностер алиенум елояуентиам. Тота новум интеллегат еи еос, хас еу дицант оффициис, еам нихил аперири волуптатибус ин.",
          description_en:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
          likes: [1, 2, 3],
          video: true,
          preview: true,
          image: false,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: "e7ad0c2f-8bf8-4eaf-9011-74ee3eda6b6d",
          isAdd: true,
          title_tm: "Widyobanner--222",
          title_ru: "Wideobanir-222",
          title_en: "just a Videobanner-2222",
          description_tm:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
          description_ru:
            "Лорем ипсум долор сит амет, бландит волуптатибус иус ут, хас омниум промпта те, меис тибияуе рецтеяуе ан пер. Сед ут мунере тритани дефинитионес, мел цу нострум ассуеверит. Про ид легимус легендос адолесценс, еу про ностер алиенум елояуентиам. Тота новум интеллегат еи еос, хас еу дицант оффициис, еам нихил аперири волуптатибус ин.",
          description_en:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
          likes: [1, 2, 3],
          video: false,
          preview: true,
          image: true,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
        {
          uuid: "f9a31948-8111-441b-88bb-2bc446e47d8a",
          isAdd: true,
          title_tm: "Widyobanner",
          title_ru: "Wideobanir",
          title_en: "just a Videobanner",
          description_tm:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
          description_ru:
            "Лорем ипсум долор сит амет, бландит волуптатибус иус ут, хас омниум промпта те, меис тибияуе рецтеяуе ан пер. Сед ут мунере тритани дефинитионес, мел цу нострум ассуеверит. Про ид легимус легендос адолесценс, еу про ностер алиенум елояуентиам. Тота новум интеллегат еи еос, хас еу дицант оффициис, еам нихил аперири волуптатибус ин.",
          description_en:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
          likes: [1, 2, 3],
          video: false,
          preview: true,
          image: true,
          collectionId: 2,
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("videobanners", null, {});
  },
};
