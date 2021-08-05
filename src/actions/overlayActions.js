import { SHOW_OVERLAY } from "../types";

export const showOverlay = () => (dispatch, getState) => {
  const show = !getState().show.show;

  dispatch({
    type: SHOW_OVERLAY,
    payload: show,
  });
};
