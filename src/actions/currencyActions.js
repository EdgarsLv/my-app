import { currencies } from "../graphql/Querys";
import { FETCH_CURRENCIES } from "../types";

export const fetchCurrencies = () => async (dispatch) => {
  const res = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(currencies),
  });
  const data = await res.json();

  dispatch({
    type: FETCH_CURRENCIES,
    payload: data,
  });
};
