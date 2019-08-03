import * as types from "../actions/ActionTypes";

const initialState = {
  displayModal: false,
  modal: {
    title: "",
    originalMinutes: "",
    originalSeconds: ""
  }
};

const UIHandler = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        displayModal: true
      };
    case types.UPDATE_MODAL:
      return {
        ...state,
        modal: {
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
