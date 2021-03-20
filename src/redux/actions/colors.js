import * as types from "../constants";

export const sliderColorActive = () => ({
  type: types.CHANGE_SLIDER_COLOR,
});

export const sliderBackgroundColorActive = () => ({
  type: types.CHANGE_SLIDER_BACKGROUND_COLOR,
});

export const changeColorRed = (value) => ({
  type: types.SET_COLOR_RED,
  value,
});

export const changeColorGreen = (value) => ({
  type: types.SET_COLOR_GREEN,
  value,
});

export const changeColorBlue = (value) => ({
  type: types.SET_COLOR_BLUE,
  value,
});

export const changeBackColorRed = (value) => ({
  type: types.SET_BACK_COLOR_RED,
  value,
});

export const changeBackColorGreen = (value) => ({
  type: types.SET_BACK_COLOR_GREEN,
  value,
});

export const changeBackColorBlue = (value) => ({
  type: types.SET_BACK_COLOR_BLUE,
  value,
});
