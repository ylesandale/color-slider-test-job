import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import {
  sliderColorActive,
  sliderBackgroundColorActive,
} from "../redux/actions/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeColorSlider = useSelector(({ colors }) => colors.color.active);
  const activeBackColorSlider = useSelector(
    ({ colors }) => colors.backgroundColor.active
  );

  const setActiveSliderClr = () => {
    dispatch(sliderColorActive());
  };

  const setActiveSliderBckgrndClr = () => {
    dispatch(sliderBackgroundColorActive());
  };

  return (
    <div>
      <div>
        <Button
          onClick={setActiveSliderClr}
          variant={activeColorSlider ? "contained" : "outlined"}
          size="medium"
          color="primary"
          className={classes.margin}
        >
          color
        </Button>
        <Button
          onClick={setActiveSliderBckgrndClr}
          variant={activeBackColorSlider ? "contained" : "outlined"}
          size="medium"
          color="primary"
          className={classes.margin}
        >
          background
        </Button>
      </div>
    </div>
  );
}
