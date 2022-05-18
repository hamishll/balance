import React, { useState } from "react";

import MyBalance from "./MyBalance";
import Dimensions from "./Dimensions";
import Today from "./Today";

export default function MainContainer(props) {
  switch (props.value) {
    case 0:
      return <MyBalance value={props.value} appData={props.appData} />;
      break;
    case 1:
      return <Dimensions value={props.value} appData={props.appData} />;
      break;
    case 2:
      return <Today value={props.value} />;
      break;
  }
}
