import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = (props) => async (dispatch) => {
  const res = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query ($title: String!){
      category(input: {title: $title}) {
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
    `,
      variables: { title: props },
    }),
  });

  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
