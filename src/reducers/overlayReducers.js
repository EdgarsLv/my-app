import { SHOW_OVERLAY } from "../types";

export const overlayReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case SHOW_OVERLAY:
      return { show: action.payload };
    default:
      return state;
  }
};
