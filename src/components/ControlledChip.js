import * as React from "react";
import Chip from "@mui/material/Chip";

export default function ControlledChip(props) {
  //const [disabled, setDisabled] = React.useState(props.disabled);
  const [selected, setselected] = React.useState(
    localStorage.getItem(props.k) == "1" ? "info" : "default"
  );
  const handleChange = () => {
    //setDisabled((previousState) => !previousState);
    setselected(selected == "default" ? "info" : "default");
    localStorage.setItem(props.k, selected == "default" ? "1" : "0");
  };

  return (
    <Chip
      label={props.label}
      k={props.k}
      sx={props.sx}
      variant={props.variant}
      color={selected}
      // disabled={}
      onClick={handleChange}
    />
  );
}
