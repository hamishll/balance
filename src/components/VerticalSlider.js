import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "😣",
  },
  {
    value: 1,
    label: "😣",
  },
  {
    value: 2,
    label: "😞",
  },
  {
    value: 3,
    label: "😔",
  },
  {
    value: 4,
    label: "😐",
  },
  {
    value: 5,
    label: "😌",
  },
  {
    value: 6,
    label: "🙂",
  },
  {
    value: 7,
    label: "😊",
  },
  {
    value: 8,
    label: "😃",
  },
];

export default function VerticalSlider(props) {
  const styles = {
    color: props.color,
    height: "100%",
    "& .MuiSlider-track": {
      border: "none",
      width: 30,
      borderRadius: "8px",
    },
    "& .MuiSlider-rail": {
      border: "none",
      width: 30,
      borderRadius: "8px",
      opacity: 0.1,
    },
    "& .MuiSlider-thumb": {
      // display: "none",
      height: 0,
      width: 0,
      backgroundColor: "#fff",
      border: "0px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
    },
    "& .MuiSlider-valueLabel": {
      background: "unset",
      fontSize: 40,
    },
    '& input[type="range"]': {
      WebkitAppearance: "slider-vertical",
    },
  };

  const [value, setValue] = React.useState(props.initValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem(props.k, newValue);
  };

  function valueLabelFormat(value) {
    return marks[value].label;
  }

  return (
    <Box sx={{ height: "90%" }}>
      <Slider
        sx={styles}
        step={1}
        orientation="vertical"
        defaultValue={value}
        value={value}
        aria-label="Score"
        onChange={handleChange}
        max={8}
        // marks={marks}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
      />
    </Box>
  );
}
