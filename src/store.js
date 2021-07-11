import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { currencyReducer } from "./reducers/currencyReducers";
import { productsReducer } from "./reducers/productReducers";
import { currValueReducer } from "./reducers/currValueReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    currencies: currencyReducer,
    value: currValueReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
