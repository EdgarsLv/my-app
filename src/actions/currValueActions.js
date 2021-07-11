import { SET_CURRENCY_VALUE } from "../types";

export const setCurrencyValue = (e) => (dispatch) => {
  const value = parseInt(e);

  dispatch({
    type: SET_CURRENCY_VALUE,
    payload: value,
  });
};
