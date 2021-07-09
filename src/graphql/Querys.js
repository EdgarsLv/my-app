import { gql } from "@apollo/client";

export const PRODUCTS_TECH = gql`
  query {
    category(input: { title: "tech" }) {
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
  }
`;

export const PRODUCTS_CLOTHES = gql`
  query {
    category(input: { title: "clothes" }) {
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
  }
`;

export const CURRENCIES = gql`
  query {
    currencies
  }
`;
