import React from "react";
import ControlledCheckbox from "./ControlledCheckbox";
import FormGroup from "@mui/material/FormGroup";
import MyStatus from "./MyStatus";
import FreeTextQuestion from "./FreeTextQuestion";
import Goal from "./Goal";
import ComponentTemplate from "./ComponentTemplate";
import EditableGoals from "./EditableGoals";

// Honestly it would make more sense to just get an example to-do react snippet

const addGoal = () => {};

export default function MyBalance(props) {
  const [[goals], setGoals] = React.useState(
    JSON.stringify(localStorage.getItem("goals"))
  );
  return (
    <div className="px-4 h-4/5 overflow-scroll">
      {/* <BalanceWheel score={75} /> */}
      <MyStatus dimensions={props.appData} />

      <h2>My Dream</h2>
      <FreeTextQuestion
        k={"dream"}
        rows={8}
        initValue={localStorage.getItem("dream")}
      />

      {/* <ComponentTemplate id={0} name="hi" /> */}

      <details>
        <summary>Here's a summary</summary>
        And here are some details
      </details>

      <h2>My Life Goals</h2>
      <EditableGoals />

      {/* {[{ title: "Get really good at piano", category: "Creating" }].map(
        (goal, index) => {
          return (
            <Goal key={index} title={goal.title} category={goal.category} />
          );
        }
      )} */}
    </div>
  );
}
