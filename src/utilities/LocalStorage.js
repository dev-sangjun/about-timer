const init = state => {
  const { timers } = state.TimerHandler;
  state.TimerHandler.timers = timers.map(timer => {
    return {
      ...timer,
      minutes: timer.originalMinutes,
      seconds: timer.originalSeconds,
      running: false,
      completed: false
    };
  });
};
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("about-time-state");
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
    localStorage.setItem("about-time-state", serializedState);
  } catch {
    alert("An error has occurred while saving your data.");
  }
};
