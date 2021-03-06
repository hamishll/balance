import React from "react";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//007AFF 30B0C7 34C759 FFCD00 FF9500 FF3B30 AF52DE 5856D6
const Colors = {
  Sleep: "#30B0C7",
  "Health & Fitness": "#34C759",
  "Mental Health": "#FFCD00",
  Friends: "#FF9500",
  Love: "#FF3B30",
  "Personal Development": "#AF52DE",
  "Meaningful Work": "#5856D6",
  "Financial Freedom": "#007AFF",
  General: "#888888",
};

const goalStyles = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .MuiOutlinedInput-input": {
    paddingLeft: "0px",
    paddingRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    fontSize: "1.4em",
    fontWeight: "bold",
    lineHeight: "1.25em",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};
const taskStyles = {
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
  markTask,
  removeTask,
  handleTaskChange,
}) => {
  return (
    <div
      className={`rounded-xl flex flex-col grow basis-1/3 max-w-lg border-0 p-4 dark:bg-black dark:bg-opacity-20`}
      style={{
        backgroundColor: Colors[goal.category] + "15",
        borderColor: Colors[goal.category] + "",
      }}
    >
      <div
        className="text-sm uppercase font-bold flex flex-row"
        style={{ color: Colors[goal.category] }}
      >
        <div className="grow text-sm">
          <select
            onChange={(event) => {
              setCategory(event, index);
            }}
            className="appearance-none font-bold uppercase bg-transparent border-transparent focus:border-transparent focus:outline-none border-none focus:ring-0"
            value={goal.category}
          >
            {Object.keys(Colors).map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option + ""}
                </option>
              );
            })}
          </select>
        </div>
        <div className="text-gray-300">
          <CloseIcon onClick={() => removeGoal(index)} />
        </div>
      </div>
      <span className="">
        <TextField
          key={index}
          defaultValue={goal.text}
          sx={goalStyles}
          onChange={(event) => handleGoalChange(event, index)}
          multiline
        />

        {/* <ControlledCheckbox
          checked={goal.isDone ?? false}
          size="medium"
          onClick={() => markGoal(index)}
        /> */}
      </span>

      {/* <span className="text-gray-400 mb-2">Steps to achieve this goal:</span> */}
      <TransitionGroup>
        {goal.tasks.map((task, childIndex) => {
          return (
            <Collapse key={childIndex}>
              <EditableTask
                key={childIndex}
                task={task}
                index={childIndex}
                category={goal.category}
                parentIndex={index}
                markTask={markTask}
                removeTask={removeTask}
                handleTaskChange={handleTaskChange}
              />
            </Collapse>
          );
        })}
      </TransitionGroup>
      <span className="text-gray-300">
        <Button
          sx={{ color: "inherit", justifyContent: "left" }}
          onClick={() => addTask("Task name", index)}
        >
          Add Task +
        </Button>
      </span>
    </div>
  );
};

const EditableTask = ({
  task,
  index,
  parentIndex,
  category,
  // Task functions
  markTask,
  removeTask,
  handleTaskChange,
}) => {
  return (
    <div className="flex flex-row items-center">
      <ControlledCheckbox
        sx={{
          paddingLeft: "0px",
          color: Colors[category],
          "&.Mui-checked": {
            color: Colors[category],
          },
        }}
        checked={task.isDone ?? false}
        size="medium"
        onClick={() => markTask(index, parentIndex)}
      />
      <TextField
        className="grow"
        key={index}
        sx={taskStyles}
        defaultValue={task.text}
        onChange={(event) => handleTaskChange(event, index, parentIndex)}
        multiline
      />
      <span className="text-gray-300">
        <DeleteOutlineIcon onClick={() => removeTask(index, parentIndex)} />
      </span>
    </div>
  );
};

export default function EditableGoals2(props) {
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
        category: "General",
        tasks: [],
      },
    ];
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
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

  const addTask = (text, parentIndex) => {
    const newGoals = [...goals];
    const task = {
      text: "Write your task...",
      isDone: false,
    };
    newGoals[parentIndex].tasks.push(task);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const markTask = (index, parentIndex) => {
    const newGoals = [...goals];

    newGoals[parentIndex].tasks[index].isDone =
      !newGoals[parentIndex].tasks[index].isDone;
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const removeTask = (index, parentIndex) => {
    const newGoals = [...goals];
    newGoals[parentIndex].tasks.splice(index, 1);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const handleTaskChange = (event, index, parentIndex) => {
    goals[parentIndex].tasks[index].text = event.target.value;
    localStorage.setItem("goals", JSON.stringify(goals));
  };

  const collapseStyles = {
    maxWidth: "500px",
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* <TransitionGroup> */}
      {goals.map((goal, index) => {
        return (
          // <Collapse key={goal.key} sx={collapseStyles}>
          <EditableGoal
            key={goal.key}
            index={index}
            goal={goal}
            // Goal functions
            setCategory={setCategory}
            markGoal={markGoal}
            removeGoal={removeGoal}
            handleGoalChange={handleGoalChange}
            // Task functions
            addTask={addTask}
            markTask={markTask}
            removeTask={removeTask}
            handleTaskChange={handleTaskChange}
          />
          // </Collapse>
        );
      })}
      {/* </TransitionGroup> */}
      <Button
        sx={{ color: "#BBB", justifyContent: "left", width: "100%" }}
        onClick={(event) => {
          addGoal();
        }}
      >
        Add Goal +
      </Button>
    </div>
  );
}
