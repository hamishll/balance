import React, { useState } from "react";
import Heading1 from "./Heading1";
import BalanceWheel from "./BalanceWheel";
import Checkbox from "@mui/material/Checkbox";

export default function MyBalance(props) {
  // const [value, setValue] = React.useState(0);

  return (
    <div className="MyBalance">
      <BalanceWheel score={83} />
      <h2>Grateful for</h2>
      <ul>
        <li>Being physically healthy</li>
        <li>Family and friends</li>
        <li>Living in the modern world</li>
      </ul>
      <h2>Recommended for you</h2>
      <Checkbox />
      Spend a few minutes messaging your friends
      <br />
      <Checkbox />
      Prepare a monthly budget
      <br />
      <Checkbox />
      Drink a big glass of water when you wake up
      <br />
    </div>
  );
}
