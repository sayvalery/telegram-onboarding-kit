import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/bear.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Привет, любитель ипотеки',
          description:
            "Хочешь купить себе квартиру, но нет денег?<br><br>It's <b>simple</b>, <b>fast</b>, highly <b>customizable</b> and <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>open-source</a>!",
          button: 'Next',
        },

        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/durov.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Onboarding supports many types of content',
          description:
            "Here you can see <b>Image</b>. But it's just the beginning...",
          button: 'Next',
        },

        // sticker
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_love.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Telegram stickers',
          description:
            'Just download any <b>.tgs</b> sticker from Telegram and use it in your onboardings',
          button: 'Next',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'User fills in the form – the bot receives the data',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'Text input',
              type: 'text',
            },
            {
              id: 'number_from_form',
              placeholder: 'Number input',
              type: 'number',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'Checkbox',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },

        // video
        {
          media: {
            type: 'video',
            src: import('./assets/videos/spongebob.mp4'),
            poster: import('./assets/img/spongebob_poster.webp'),
            style: 'aspect-ratio: 400/287', // here we manually set video aspect-ratio (default is 16:9)
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Videos',
          description:
            "Typically, video starts <b>automatically</b><br><br>However, on iOS, it will only autoplay upon any prior tap on the page ('Next' button doesn't count). If video doesn't autoplay, user will see preview and pretty animation, inviting them to tap to play the video",
          button: 'Next',
        },

        // list
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Lists',
          description:
            'Lists can be used to showcase <b>features</b> of your product. Items support customizable icons',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Some cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Some very cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Some extremely cool feature',
            },
          ],
          button: 'Next',
        },

        // "everything is customizable" slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Everything is customizable',
          description: '',
          textAlign: 'center',
          list: [
            '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
            'Button text and actions (look down)',
            'Use our carefully crafted <b>presets</b> or easily create your own',
          ],
          button: 'Super-Duper Next',
        },

        // slide with other features
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Some other features:',
          description: '',
          list: [
            'One-click 0$ <b>deploy</b> on GitHub Pages',
            'Language and currency localization',
            'Buttons with <b>haptic</b> feedback',
            'Content pre-loading for high speed',
            '<b>Low-code</b> approach to building onboardings',
            'Many examples/presets',
            "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
          ],
          button: 'Next',
        },

        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are not enough...',
          description: "Let's go to Paywall",
          button: {
            content: 'Go to Paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});


const operationName = "storefrontGetApartmentsList";
const variables = {
  companyUuid: "3818382c-c9a4-48f9-908f-f8a85a93648f",
  criteria: {
    state: []
  },
  limit: 30,
  offset: 0,
  sort: {
    field: "cost",
    order: "ASC"
  }
};

const operationName2 = "getLoanOffer";
const variables2 = {
  age: 30,
  loanPeriod: 30,
  agendaType: "primary_housing",
  isRfCitizen: true,
  housingComplexUuid: "ed2f5053-a52c-4398-9226-a57d05a34e9b",
  initialPayment: "15000000",
  cost: "30000000",
  mortgageType: "STANDARD"
};

const query = `query storefrontGetApartmentsList($companyUuid: UUID, $criteria: StorefrontApartmentCriteriaInput, $limit: Int, $offset: Int, $sort: Sort) {
  result: storefrontGetApartmentsList(
    companyUuid: $companyUuid
    criteria: $criteria
    limit: $limit
    offset: $offset
    sort: $sort
  ) {
    collection {
      ...StorefrontRealEstateList
      __typename
    }
    maxBuildDate
    maxCost
    maxFloor
    maxSquare
    minCost
    minFloor
    minSquare
    total
    __typename
  }
}

fragment StorefrontRealEstateList on StorefrontRealEstateList {
  apartment {
    ...StorefrontApartment
    __typename
  }
  bookingExpiresAt
  companyUuid
  cost
  externalId
  housingComplexUuid
  housingComplexName
  housingUuid
  layoutPhoto
  layoutUuid
  name
  number
  square
  state
  status
  costPerSquare
  housingBuildDate
  housingNumber
  type
  storeroom {
    ...StorefrontStoreroom
    __typename
  }
  parking {
    ...StorefrontParking
    __typename
  }
  uuid
  housingFloorsCount
  __typename
}

fragment StorefrontApartment on StorefrontApartment {
  balconiesCount
  combinedWcsCount
  finishCondition
  flatNumber
  floor
  isApartments
  isEuroFlat
  isPenthouse
  kitchenArea
  loggiasCount
  roomsCount
  separateWcsCount
  unitNumber
  windowsView
  __typename
}

fragment StorefrontStoreroom on StorefrontStoreroom {
  floor
  isCamera
  isHeating
  isSecurity
  __typename
}

fragment StorefrontParking on StorefrontParking {
  floor
  isCamera
  isElectricity
  isHeating
  isSecurity
  __typename
}`;

const query2 = `query getLoanOffer($age: Int, $loanPeriod: Int, $agendaType: LoanPurpose, $isRfCitizen: Boolean, $housingComplexUuid: UUID, $initialPayment: BigInt, $cost: BigInt!, $mortgageType: MortgageType) {
  getLoanOffer(age: $age, loanPeriod: $loanPeriod, agendaType: $agendaType, isRfCitizen: $isRfCitizen, housingComplexUuid: $housingComplexUuid, initialPayment: $initialPayment, cost: $cost, mortgageType: $mortgageType) {
    id,
    name,
    bankId,
    bankName,
    bankLogo,
    rate,
    recommendedIncomeCoeff,
    periods {
      period, 
      amount
    },
    minInitialPayment,
    maxCreditPeriod,
    maxCreditAmount,
    minOverallExp,
    minAge,
    minLastJobExp,
    maxAge,
    realtyCostIncreasePercent,
    periodParams{
      months,
      rate,
      monthlyPayment
    },
    strictlyMatchesLoanPeriod
  }
}`;

fetch('https://gql.dvizh.tech/gql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables,
  }),
})
.then(response => response.json())
.then(data => console.log(data));

fetch('https://gql.dvizh.tech/gql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    operationName: operationName2,
    query: query2,
    variables: variables2,
  }),
})
.then(response => response.json())
.then(data => console.log(data));