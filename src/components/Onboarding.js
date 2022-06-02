import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// Consts

export default function Onboarding({ name, id, ...props }) {
  const [open, setOpen] = React.useState(true);
  {
    if (!open) {
      return "";
    }
  }
  // Functions (pass down to children if required)

  return <div></div>;
}
