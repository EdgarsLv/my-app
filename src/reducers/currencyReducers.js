import { FETCH_CURRENCIES } from "../types";

export const currencyReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return { currencies: action.payload };
    default:
      return state;
  }
};
