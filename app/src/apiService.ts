export async function getApartmentsList() {
  const operationName = "storefrontGetApartmentsList";
  const variables = {
    companyUuid: "3818382c-c9a4-48f9-908f-f8a85a93648f",
    criteria: {
      state: [],
    },
    limit: 30,
    offset: 0,
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

  const response = await fetch("https://gql.dvizh.tech/gql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  
  const aparts = data.data.result.collection.map((apart) => ({
    id: apart.externalId,
    title: apart.name,
    description: apart.square,
    price: apart.cost,
  }));

  console.log(aparts);
  return aparts;
}

export async function getLoanOffer() {
  const operationName2 = "getLoanOffer";
  const variables2 = {
    age: 30,
    loanPeriod: 30,
    agendaType: "primary_housing",
    isRfCitizen: true,
    housingComplexUuid: "ed2f5053-a52c-4398-9226-a57d05a34e9b",
    initialPayment: "5000000",
    cost: "15000000",
    mortgageType: "STANDARD",
  };

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

  const response2 = await fetch("https://gql.dvizh.tech/gql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: query2, variables: variables2 }),
  });

  const data2 = await response2.json();


  console.log(data2);

  const products = data2.data.getLoanOffer.map((offer) => ({
    id: offer.id.toString(),
    title: offer.bankName,
    description: 'от ' + offer.periods[0].amount + ' ₽',
    discount: offer.periods.length + ' программ',
    price: 'от ' + offer.periods[0].amount + ' ₽',
  }));

  console.log(products);
  return products;
}
