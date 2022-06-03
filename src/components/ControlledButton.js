import * as React from "react";
import Button from "@mui/material/Button";

export default function ControlledButton(props) {
  //const [disabled, setDisabled] = React.useState(props.disabled);
  const [color, setColor] = React.useState("grey");
  const handleChange = () => {
    //setDisabled((previousState) => !previousState);
    setColor(props.correct ? "success" : "error");
  };

  return (
    <Button
      disableElevation
      sx={props.sx}
      variant={props.variant}
      color={color}
      // disabled={}
      onClick={handleChange}
    >
      {props.text}
    </Button>
  );
}
