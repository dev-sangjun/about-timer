import * as types from "../actions/ActionTypes";

const initialState = {
  displayModal: false,
  modal: {
    id: undefined,
    title: "",
    originalMinutes: "",
    originalSeconds: ""
  }
};

const UIHandler = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      console.log("MODAL OPENED: ", state.modal);
      return {
        ...state,
        displayModal: true
      };
    case types.UPDATE_MODAL:
      return {
        ...state,
        modal: {
          id: action.id || undefined,
          ...action
        }
      };
    case types.CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default UIHandler;
