import * as types from "../actions/ActionTypes";

const initialState = {
  nextTimerId: 0,
  timers: []
};
const formatTimeElement = element => {
  if (element < 10) {
    return `0${element}`;
  } else {
    return `${element}`;
  }
};
const handleSubSecond = timer => {
  const { minutes, seconds } = timer;
  if (seconds > 0) {
    //IF THERE ARE REMAINING SECONDS:
    return {
      ...timer,
      seconds: formatTimeElement(seconds - 1)
    };
  } else {
    /*
      IF THERE IS NO REMAINING SECONDS:
        1. CHECK IF minutes > 0
        2. ELSE set completed to true
    */
    if (minutes > 0) {
      return {
        ...timer,
        minutes: formatTimeElement(minutes - 1),
        seconds: formatTimeElement(59)
      };
    } else {
      return {
        ...timer,
        minutes: formatTimeElement(0),
        seconds: formatTimeElement(0),
        running: false,
        completed: true
      };
    }
  }
};
const TimerHandler = (state = initialState, action) => {
  switch (action.type) {
    case types.SUB_SECOND:
      return {
        ...state,
        timers: state.timers.map(timer =>
          timer.id === action.id ? handleSubSecond(timer) : timer
        )
      };
    case types.CREATE_TIMER:
      return {
        nextTimerId: state.nextTimerId + 1,
        timers: [
          {
            ...action,
            id: state.nextTimerId,
            minutes: action.originalMinutes,
            seconds: action.originalSeconds
          },
          ...state.timers
        ]
      };
    case types.DELETE_TIMER:
      return {
        ...state,
        timers: state.timers.filter(timer => timer.id !== action.id)
      };
    case types.TOGGLE_TIMER:
      return {
        ...state,
        timers: state.timers.map(timer =>
          timer.id === action.id
            ? {
                ...timer,
                running: !timer.running
              }
            : timer
        )
      };
    case types.UPDATE_TIMER:
      return {
        ...state,
        timers: state.timers.map(timer =>
          timer.id === action.id
            ? {
                ...action,
                minutes: action.originalMinutes,
                seconds: action.originalSeconds,
                running: false,
                completed: false
              }
            : timer
        )
      };
    case types.RESET_TIMER:
      return {
        ...state,
        timers: state.timers.map(timer =>
          timer.id === action.id
            ? {
                ...timer,
                minutes: timer.originalMinutes,
                seconds: timer.originalSeconds,
                running: false,
                completed: false
              }
            : timer
        )
      };
    default:
      return state;
  }
};

export default TimerHandler;
