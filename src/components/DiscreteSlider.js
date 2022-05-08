import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 1,
    label: "",
  },
  {
    value: 2,
    label: "",
  },
  {
    value: 3,
    label: "",
  },
  {
    value: 4,
    label: "",
  },
  {
    value: 5,
    label: "",
  },
];

function valuetext(value) {
  return value;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider(props) {
  const [value, setValue] = React.useState(props.initValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem(props.k, newValue);
  };

  return (
    // <Box sx={{ width: 340 }}>
    <Slider
      aria-label="Restricted values"
      defaultValue={props.initValue}
      valueLabelFormat={valueLabelFormat}
      getAriaValueText={valuetext}
      step={null}
      valueLabelDisplay="auto"
      marks={marks}
      onChange={handleChange}
      max={5}
      min={1}
    />
    // </Box>
  );
}
