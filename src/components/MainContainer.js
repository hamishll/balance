import React, { useState } from "react";

import MyBalance from "./MyBalance";
import Dimensions from "./Dimensions";
import Coach from "./Coach";

export default function MainContainer(props) {
  switch (props.value) {
    case 0:
      return <MyBalance value={props.value} />;
      break;
    case 1:
      return <Dimensions value={props.value} appData={props.appData} />;
      break;
    case 2:
      return <Coach value={props.value} />;
      break;
  }
}
