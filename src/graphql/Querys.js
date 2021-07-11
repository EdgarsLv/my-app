export const currencies = {
  query: `
  {
    currencies
  }
  `,
};

export const techProducts = {
  query: `
  {
    category(input: {title: "tech"}) {
      name
      products {
        name
        inStock
        description
        category
        gallery
        prices {
          
          currency
          amount
        }
        attributes {
          name
          type
          id
          items {
            value
            id
          }
        }
      }
    }
  }`,
};
export const clothesProducts = {
  query: `
  {
    category(input: {title: "clothes"}) {
      name
      products {
        name
        inStock
        description
        category
        gallery
        prices {
          
          currency
          amount
        }
        attributes {
          name
          type
          id
          items {
            value
            id
          }
        }
      }
    }
  }`,
};
