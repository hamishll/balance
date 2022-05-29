import * as React from "react";
import EditableGoals from "./EditableGoals";
import ControlledCheckbox from "./ControlledCheckbox";

export default function Goal(props) {
  //const [disabled, setDisabled] = React.useState(props.disabled);
  const [selected, setselected] = React.useState(
    localStorage.getItem(props.k) == "1" ? "info" : "default"
  );
  const handleChange = () => {
    //setDisabled((previousState) => !previousState);
    setselected(selected == "default" ? "info" : "default");
    localStorage.setItem(props.k, selected == "default" ? "1" : "0");
  };
  const markTodo = (index) => {
    // placeholder for now
  };

  return (
    <div className="rounded-xl flex flex-col border-4 border-indigo-600 p-4">
      <span className="text-sm uppercase font-bold text-indigo-600">
        Creating
      </span>
      <span className="text-2xl font-bold">
        {props.title}
        <ControlledCheckbox size="medium" onClick={() => markTodo(1)} />
      </span>
      <span className="text-gray-300 my-2">Steps to achieve this goal:</span>
      <EditableGoals />
    </div>
  );
}
