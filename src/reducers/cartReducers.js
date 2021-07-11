import {
  ADD_TO_CART,
  COUNT_DECREASE,
  COUNT_INCREASE,
  REMOVE_FROM_CART,
} from "../types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  // state = { cartItems: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case COUNT_INCREASE:
      return { cartItems: action.payload.cartItems };
    case COUNT_DECREASE:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
