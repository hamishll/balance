import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";

export default function EditableGoal(props) {
  const [alignment, setAlignment] = React.useState(props.initValue ?? "");

  useEffect(() => {
    setAlignment("" + alignment);
  }, []);

  const handleChange = (event) => {
    setAlignment(event.target.value);
    localStorage.setItem(props.k, event.target.value);
  };

  return (
    <div>
      <ControlledCheckbox />
      <TextField defaultValue={props.initValue} variant="standard" />
    </div>
  );
}
