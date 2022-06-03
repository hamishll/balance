import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

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
      display: "none",
      height: 0,
      width: 0,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
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
      />
    </Box>
  );
}
