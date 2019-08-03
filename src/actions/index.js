import * as types from "./ActionTypes";

export const subSecond = id => {
  return {
    type: types.SUB_SECOND,
    id
  };
};

export const createTimer = (title, originalMinutes, originalSeconds) => {
  return {
    type: types.CREATE_TIMER,
    title,
    originalMinutes,
    originalSeconds
  };
};

export const deleteTimer = id => {
  return {
    type: types.DELETE_TIMER,
    id
  };
};

export const toggleTimer = id => {
  return {
    type: types.TOGGLE_TIMER,
    id
  };
};

export const updateTimer = (title, originalMinutes, originalSeconds) => {
  return {
    type: types.DELETE_TIMER,
    title,
    originalMinutes,
    originalSeconds
  };
};

export const resetTimer = id => {
  return {
    type: types.RESET_TIMER,
    id
  };
};

export const openModal = (
  title = "",
  originalMinutes = "",
  originalSeconds = ""
) => {
  return {
    type: types.OPEN_MODAL,
    title,
    originalMinutes,
    originalSeconds
  };
};

export const updateModal = (title, originalMinutes, originalSeconds) => {
  return {
    type: types.UPDATE_MODAL,
    title,
    originalMinutes,
    originalSeconds
  };
};
export const closeModal = () => {
  return {
    type: types.CLOSE_MODAL
  };
};
