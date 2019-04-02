import { TOGGLE_PANEL } from "../actions/uiActions";

const INITIAL_STATE = {
  panelOpen: false,
};

export default function uiReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case TOGGLE_PANEL:
      return {
        ...state,
        panelOpen: !state.panelOpen,
      };

    default:
      return state;
  }
}
