import { FETCH_CLOTHES, FETCH_TECH } from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CLOTHES:
      return { items: action.payload };
    case FETCH_TECH:
      return { items: action.payload };
    default:
      return state;
  }
};
