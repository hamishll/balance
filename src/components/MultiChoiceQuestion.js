import React, { useState, useEffect } from "react";

import ControlledChip from "./ControlledChip";
import Box from "@mui/material/Box";

export default function MultiChoiceQuestion(props) {
  //   const [value, setValue] = React.useState(0);

  const [alignment, setAlignment] = React.useState("web");

  useEffect(() => {
    setAlignment("" + props.initValue);
  }, []);

  const handleChange = (event, newAlignment) => {
    setAlignment([newAlignment]);
    // console.log(uid);
    // Set local storage
    localStorage.setItem(props.k, newAlignment);
    // if (uid) {
    //   //updateValue(uid, props.k, newAlignment);
    // } else {
    //   console.log("User is not logged in, so can't update document");
    // }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {props.choices.map((q, index) => {
        return (
          <ControlledChip
            sx={{ margin: "6px 6px 0px 0px" }}
            label={q}
            k={props.k + "." + index}
            key={props.k + "." + index}
          />
        );
      })}
    </Box>
  );
}
