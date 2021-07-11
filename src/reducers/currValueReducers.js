import { SET_CURRENCY_VALUE } from "../types";

export const currValueReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case SET_CURRENCY_VALUE:
      return { value: action.payload };
    default:
      return state;
  }
};
