import * as types from "../constants";

const initialState = {
  color: {
    red: 0,
    green: 0,
    blue: 0,
    color: "rgba(0, 0, 0)",
    active: true,
  },
  backgroundColor: {
    red: 255,
    green: 255,
    blue: 0,
    color: "rgba(255, 255, 0)",
    active: false,
  },
};

const colors = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SLIDER_COLOR:
      return {
        ...state,
        backgroundColor: { ...state.backgroundColor, active: false },
        color: { ...state.color, active: true },
      };

    case types.CHANGE_SLIDER_BACKGROUND_COLOR:
      return {
        ...state,
        color: { ...state.color, active: false },
        backgroundColor: { ...state.backgroundColor, active: true },
      };

    case types.SET_COLOR_RED:
      return {
        ...state,
        color: {
          ...state.color,
          red: action.value,
          color: `rgba(${action.value}, ${state.color.green}, ${state.color.blue})`,
        },
      };

    case types.SET_COLOR_GREEN:
      return {
        ...state,
        color: {
          ...state.color,
          green: action.value,
          color: `rgba(${state.color.red}, ${action.value}, ${state.color.blue})`,
        },
      };

    case types.SET_COLOR_BLUE:
      return {
        ...state,
        color: {
          ...state.color,
          blue: action.value,
          color: `rgba(${state.color.red}, ${state.color.green}, ${action.value})`,
        },
      };

    case types.SET_BACK_COLOR_RED:
      return {
        ...state,
        backgroundColor: {
          ...state.backgroundColor,
          red: action.value,
          color: `rgba(${action.value}, ${state.backgroundColor.green}, ${state.backgroundColor.blue})`,
        },
      };

    case types.SET_BACK_COLOR_GREEN:
      return {
        ...state,
        backgroundColor: {
          ...state.backgroundColor,
          green: action.value,
          color: `rgba(${state.backgroundColor.red}, ${action.value}, ${state.backgroundColor.blue})`,
        },
      };

    case types.SET_BACK_COLOR_BLUE:
      return {
        ...state,
        backgroundColor: {
          ...state.backgroundColor,
          blue: action.value,
          color: `rgba(${state.backgroundColor.red}, ${state.backgroundColor.green}, ${action.value})`,
        },
      };
    default:
      return state;
  }
};

export default colors;
