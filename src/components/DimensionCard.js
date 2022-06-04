import * as React from "react";
import { useState } from "react";

import DimensionPage from "./DimensionPage";
import Rating from "@mui/material/Rating";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function DimensionCard(props) {
  DimensionCard.defaultProps = {
    MultiChoiceQuestions: [],
    goals: [],
  };

  //   const [value, setValue] = React.useState(0);
  // const getColor = (value) => {
  //     //value from 0 to 1
  //     var hue=(10 + (value)*100).toString(10);
  //     return ["hsl(",hue,",100%,43%)"].join("");
  //   }
  //var bgColor = {color: getColor(props.score/5)};
  //const [name, setName] = useState("name1");

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
    // console.log(selected);
  };

  return (
    <>
      <div
        className="overflow-hidden relative grow basis-[150px] max-w-lg p-2 rounded-xl cursor-pointer"
        style={{ backgroundColor: props.color }}
        onClick={handleClick}
      >
        <div className="CategoryCardIcon">{props.icon}</div>
        <div className="text-white text-[18px] font-semibold leading-tight">
          {props.name}
        </div>
        <div className="CategoryCardNum">
          <Rating
            name="read-only"
            // Value to be replaced by state at some point, instead of localstorage
            value={
              parseInt(localStorage.getItem(props.name + ".g1") ?? 0) +
              parseInt(localStorage.getItem(props.name + ".g2") ?? 0) +
              parseInt(localStorage.getItem(props.name + ".g3") ?? 0) +
              parseInt(localStorage.getItem(props.name + ".g4") ?? 0) +
              parseInt(localStorage.getItem(props.name + ".g5") ?? 0)
            }
            max={0 + (props.goals ? props.goals.length : 0)}
            icon={<CheckCircleIcon />}
            emptyIcon={<RadioButtonUncheckedIcon htmlColor="white" />}
            precision={1}
            style={{ color: "white", opacity: 1 }}
            readOnly
          />
          {/* <Rating
            name="read-only"
            // Value to be replaced by state at some point, instead of localstorage
            value={parseInt(localStorage.getItem(props.name + ".q0") ?? 0)}
            max={5}
            precision={1}
            style={{ color: "white", opacity: 1 }}
            readOnly
          /> */}
        </div>
      </div>
      <DimensionPage
        questions={props.questions}
        content={props.content}
        goals={props.goals}
        name={props.name}
        color={props.color}
        icon={props.icon}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}
