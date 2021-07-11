import { FETCH_CLOTHES, FETCH_TECH } from "../types";
import { techProducts, clothesProducts } from "./../graphql/Querys";

export const fetchClothes = () => async (dispatch) => {
  const res = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clothesProducts),
  });
  const data = await res.json();

  dispatch({
    type: FETCH_CLOTHES,
    payload: data,
  });
};

export const fetchTech = () => async (dispatch) => {
  const res = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(techProducts),
  });
  const data = await res.json();
  dispatch({
    type: FETCH_TECH,
    payload: data,
  });
};
