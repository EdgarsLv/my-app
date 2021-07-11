import {
  ADD_TO_CART,
  COUNT_DECREASE,
  COUNT_INCREASE,
  REMOVE_FROM_CART,
} from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();

  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if (item.name === product.name) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let index = cartItems.indexOf(product);
  cartItems.splice(index, 1);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const countIncrease = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let index = cartItems.indexOf(product);
  cartItems[index].count++;

  dispatch({
    type: COUNT_INCREASE,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const countDecrease = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let index = cartItems.indexOf(product);
  if (cartItems[index].count > 1) {
    cartItems[index].count--;
  }

  dispatch({
    type: COUNT_DECREASE,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
