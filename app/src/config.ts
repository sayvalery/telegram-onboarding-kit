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
            extends: "paywall",
            media: {
              type: "sticker",
              src: import("./assets/stickers/duck_money.tgs"),
              size: 150,
            },
            shape: "square",
            title: "Your beautiful Paywall",
            list: [
              "Adjustable product cards",
              "<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily",
              "Subscriptions or One-time payments",
            ],
            products: products, // products from the API
            mainButtonText: "Buy for {price}",
            popup: {
              // popup for payment methods choice
              type: "web",
            },
            links: [
              {
                text: "Privacy policy",
                href: "https://google.com",
              },
              {
                text: "Terms of use",
                href: "https://google.com",
              },
            ],
          },

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
              "Хочешь купить себе квартиру, но нет денег?<br><br>It's <b>simple</b>, <b>fast</b>, highly <b>customizable</b> and <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>open-source</a>!",
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
            title: "Forms",
            description: "User fills in the form – the bot receives the data",
            form: [
              {
                name: "loanPeriod",
                type: "number",
                label: "Срок кредита",
              },
              {
                id: "text_from_form",
                placeholder: "Text input",
                type: "text",
              },
              {
                id: "number_from_form",
                placeholder: "Number input",
                type: "number",
              },
              {
                id: "checkbox_from_form",
                placeholder: "Checkbox",
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
            title: "But onboarding slides are not enough...",
            description: "Let's go to Paywall",
            button: {
              content: "Go to Paywall",
              to: "/paywall",
            },
          },
        ],
      },
      // ... остальные страницы ...
    ],
  });
};
