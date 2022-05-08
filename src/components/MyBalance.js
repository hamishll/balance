import React, { useState } from "react";
import Heading1 from "./Heading1";
import BalanceWheel from "./BalanceWheel";
import ControlledCheckbox from "./ControlledCheckbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MyStatus from "./MyStatus";

export default function MyBalance(props) {
  // const [value, setValue] = React.useState(0);
  return (
    <div className="px-4">
      {/* <BalanceWheel score={75} /> */}
      <MyStatus dimensions={props.appData} />
      <h2>My Goals</h2>
      <FormGroup>
        <FormControlLabel
          control={<ControlledCheckbox />}
          label="Spend a few minutes messaging friends"
        />
        <FormControlLabel
          control={<ControlledCheckbox />}
          label="Prepare a monthly budget"
        />
        <FormControlLabel
          control={<ControlledCheckbox />}
          label="Drink a glass of water when I wake up"
        />
      </FormGroup>
    </div>
  );
}
