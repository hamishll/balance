import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

const taskStyles = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .MuiOutlinedInput-input": {
    paddingLeft: "0px",
    paddingRight: "5px",
    paddingTop: "9px",
    paddingBottom: "9px",
    fontSize: "1em",
    fontWeight: "normal",
    lineHeight: "normal",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};

const EditableGoal = ({
  goal,
  index,
  // Goal functions
  setCategory,
  markGoal,
  removeGoal,
  handleGoalChange,
  // Task functions
  addTask,
}) => {
  return (
    <div className={"flex flex-col ml-6 py-2"}>
      <div className="text-sm uppercase font-bold flex flex-row items-center">
        <div className="grow text-sm">
          <TextField
            key={index}
            defaultValue={goal.text}
            sx={taskStyles}
            onChange={(event) => handleGoalChange(event, index)}
            multiline
          />
        </div>
        <div className="text-gray-300">
          <DeleteOutlineIcon onClick={() => removeGoal(index)} />
        </div>
      </div>
    </div>
  );
};

export default function EditableGoalsSimple(props) {
  const [goals, setGoals] = React.useState(
    JSON.parse(localStorage.getItem("goals")) ?? []
  );

  // These all need access to the state, so defining the functions here, and passing them down to children

  const setCategory = (event, index) => {
    const newGoals = [...goals];
    newGoals[index].category = event.target.value;
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const addGoal = () => {
    const newGoals = [
      ...goals,
      {
        key: Date.now(),
        text: "Give your goal a title...",
        isDone: false,
        category: "Uncategorised",
        tasks: [],
      },
    ];
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
    // console.log(newGoals);
  };

  const markGoal = (index) => {
    const newGoals = [...goals];
    newGoals[index].isDone = newGoals[index].isDone ? false : true;
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const removeGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
    localStorage.removeItem("goals_" + index);
  };

  const handleGoalChange = (event, index) => {
    goals[index].text = event.target.value;
    localStorage.setItem("goals", JSON.stringify(goals));
  };

  return (
    <div>
      <TransitionGroup>
        {goals.map((goal, index) => {
          return (
            <Collapse key={index}>
              <EditableGoal
                key={index}
                index={index}
                goal={goal}
                // Goal functions
                setCategory={setCategory}
                markGoal={markGoal}
                removeGoal={removeGoal}
                handleGoalChange={handleGoalChange}
              />
            </Collapse>
          );
        })}
      </TransitionGroup>
      <Button
        sx={{ color: "#BBB", justifyContent: "left" }}
        onClick={() => addGoal()}
      >
        Add Goal +
      </Button>
    </div>
  );
}
