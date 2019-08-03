import { formatTimeElement } from "../utilities";

const init = state => {
  const { timers } = state.TimerHandler;
  state.TimerHandler.timers = timers.map(timer => {
    return {
      ...timer,
      minutes: formatTimeElement(timer.originalMinutes),
      seconds: formatTimeElement(timer.originalSeconds),
      running: false,
      completed: false
    };
  });
  state.UIHandler.displayModal = false;
  state.UIHandler.modal = {
    title: "",
    originalMinutes: "",
    originalSeconds: ""
  };
};
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("about-timer-state");
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    init(state);
    return state;
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("about-timer-state", serializedState);
  } catch {
    alert("An error has occurred while saving your data.");
  }
};
