import React from "react";

import MyGoals from "./MyGoals";
import MyDimensions from "./MyDimensions";
import MyToday from "./MyToday";

export default function MainContainer(props) {
  switch (props.value) {
    case 0:
      return <MyGoals value={props.value} appData={props.appData} />;
    case 1:
      return <MyToday value={props.value} appData={props.appData} />;
    case 2:
      return <MyDimensions value={props.value} appData={props.appData} />;
    default:
      return "";
  }
}
