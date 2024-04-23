import { defineConfig } from "@tok/generation";
import { getApartmentsList, getLoanOffer } from "./apiService";

export default async () => {
  const products = await getLoanOffer();

  return defineConfig({
    pages: [
      {
        slides: [
          // intro
          {
            media: {
              type: "sticker",
              src: import("./assets/stickers/bear.tgs"),
              size: 250,
            },
            shape: "square",
            pagination: "count",
            title: "Привет, маленький любитель ипотеки",
            description:
              "Хочешь купить себе квартиру, но нет денег?<br><br>Попробуй посчитать, может и твоих грошей хватит, чтобы заплатить за квартиру к 80 годам!",
            list: [
              "Быстро получишь расчет",
              "Без документов, верим на слово",
              "Больше 30 банков в системе",
            ],
            button: "Next",
          },

          // form
          {
            extends: "form", // note, it's important to extend from 'form' here
            media: {
              type: "sticker",
              src: import("./assets/stickers/duck_spy.tgs"),
              size: 150,
            },
            shape: "square",
            pagination: "count",
            title: "Твои данные",
            description: "Нужны только для расчета, ничего не будем сохранять. Точно-точно!",
            form: [
              {
                name: "loanPeriod",
                type: "number",
                placeholder: "На какой срок",
              },
              {
                id: "text_from_form",
                type: "number",
                placeholder: "Первый взнос",
              },
              {
                id: "number_from_form",
                type: "text",
                placeholder: "Зачем тебе ипотека",
              },
              {
                id: "family",
                placeholder: "Покупаю с семьей",
                type: "checkbox",
              },
              {
                id: "checkbox_from_form",
                placeholder: "Ебу гусей",
                type: "checkbox",
              },
            ],
            button: "Next",
          },

          // go to paywall slide
          {
            media: {
              type: "sticker",
              src: import("./assets/stickers/duck_knife.tgs"),
              size: 250,
            },
            shape: "square",
            pagination: "count",
            textAlign: "center",
            title: "Спрашиваем у банков...",
            description: "Помни, это предварительные данные, никакой оферты. Если что-то понравилось, ты сможешь дальше оформить сделку. Но тебе конечно с этим жить потом.",
            button: {
              content: "Посмотреть 98 предложений",
              to: "/paywall",
            },
          },
        ],
      },
      {
        slides: [
          // intro
          {
            extends: "paywall",
            path: "/paywall",
            media: {
              type: "sticker",
              src: import("./assets/stickers/duck_money.tgs"),
              size: 150,
            },
            shape: "square",
            title: "Смотри сколько предложений",
            description: "Я даже не ожидал, что кто-то тебе ответит, но ты посмотри! <br>",
            products: products,
            mainButtonText: "Выбрать {title}",
            popup: {
              // popup for payment methods choice
              type: "web",
            },
            links: [
              {
                text: "Privacy policy",
                href: "https://dvizh.io",
              },
              {
                text: "Terms of use",
                href: "https://dvizh.io",
              },
            ],
          },
        ],
      },
      // ... остальные страницы ...
    ],
  });
};
