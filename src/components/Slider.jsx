import React from "react";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import {
  changeColorRed,
  changeColorGreen,
  changeColorBlue,
  changeBackColorRed,
  changeBackColorGreen,
  changeBackColorBlue,
} from "../redux/actions/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSliderRed = withStyles({
  root: {
    color: "red",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const PrettoSliderGreen = withStyles({
  root: {
    color: "green",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const PrettoSliderBlue = withStyles({
  root: {
    color: "blue",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function CustomizedSlider() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const colorRed = useSelector(({ colors }) => colors.color.red);
  const colorGreen = useSelector(({ colors }) => colors.color.green);
  const colorBlue = useSelector(({ colors }) => colors.color.blue);
  const backgroundColorRed = useSelector(
    ({ colors }) => colors.backgroundColor.red
  );
  const backgroundColorGreen = useSelector(
    ({ colors }) => colors.backgroundColor.green
  );
  const backgroundColorBlue = useSelector(
    ({ colors }) => colors.backgroundColor.blue
  );
  const activeColorSlider = useSelector(({ colors }) => colors.color.active);
  const activeBackColorSlider = useSelector(
    ({ colors }) => colors.backgroundColor.active
  );

  const onChangeColorRed = (value) => {
    dispatch(changeColorRed(value));
  };

  const onChangeColorGreen = (value) => {
    dispatch(changeColorGreen(value));
  };

  const onChangeColorBlue = (value) => {
    dispatch(changeColorBlue(value));
  };

  const onChangeBackColorRed = (value) => {
    dispatch(changeBackColorRed(value));
    console.log(backgroundColorRed);
  };

  const onChangeBackColorGreen = (value) => {
    dispatch(changeBackColorGreen(value));
    console.log(backgroundColorGreen);
  };

  const onChangeBackColorBlue = (value) => {
    dispatch(changeBackColorBlue(value));
    console.log(backgroundColorBlue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      {activeColorSlider && (
        <>
          {" "}
          <Typography gutterBottom>Red</Typography>
          <PrettoSliderRed
            onChange={(e, value) => onChangeColorRed(value)}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={colorRed}
            value={colorRed}
            max={255}
          />
          <Typography gutterBottom>Green</Typography>
          <PrettoSliderGreen
            onChange={(e, value) => onChangeColorGreen(value)}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={colorGreen}
            max={255}
            value={colorGreen}
          />
          <Typography gutterBottom>Blue</Typography>
          <PrettoSliderBlue
            onChange={(e, value) => onChangeColorBlue(value)}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={colorBlue}
            max={255}
            value={colorBlue}
          />
        </>
      )}
      {activeBackColorSlider && (
        <>
          {" "}
          <Typography gutterBottom>Red</Typography>
          <PrettoSliderRed
            onChange={(e, value) => onChangeBackColorRed(value)}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={backgroundColorRed}
            max={255}
            value={backgroundColorRed}
          />
          <Typography gutterBottom>Green</Typography>
          <PrettoSliderGreen
            onChange={(e, value) => onChangeBackColorGreen(value)}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={backgroundColorGreen}
            max={255}
            value={backgroundColorGreen}
          />
          <Typography gutterBottom>Blue</Typography>
          <PrettoSliderBlue
            onChange={(e, value) => onChangeBackColorBlue(value)}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={backgroundColorBlue}
            max={255}
            value={backgroundColorBlue}
          />
        </>
      )}
      <div className={classes.margin} />
      <div className={classes.margin} />
    </div>
  );
}
