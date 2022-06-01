import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const options = [
  "Health & Fitness",
  "Friends",
  "Family",
  "Love",
  "Fun",
  "Personal Development",
  "Work",
  "Finances",
  "Uncategorised",
];

const Colors = {
  "Health & Fitness": "#34C759",
  Friends: "#FFCD00",
  Family: "#FF9500",
  Love: "#FF3B30",
  Fun: "#AF52DE",
  "Personal Development": "#5856D6",
  Work: "#007AFF",
  Finances: "#30B0C7",
};
const goalTheme = createTheme({
  paddingLeft: "0px",
  paddingRight: "5px",
  paddingTop: "5px",
  paddingBottom: "5px",
  fontSize: "1.25em",
  fontWeight: "bold",
});
const taskTheme = createTheme({
  paddingLeft: "0px",
  paddingRight: "5px",
  paddingTop: "9px",
  paddingBottom: "9px",
  fontSize: "1em",
  fontWeight: "normal",
});
const ThemedTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .MuiOutlinedInput-input": {
    paddingLeft: theme.paddingLeft,
    paddingRight: theme.paddingRight,
    paddingTop: theme.paddingTop,
    paddingBottom: theme.paddingBottom,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
}));
const defaultGoal = {
  text: "Give your goal a title...",
  isDone: false,
  category: "Uncategorised",
  tasks: [],
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
      className={`rounded-xl flex flex-col border-4 mb-4 p-4`}
      style={{ borderColor: Colors[goal.category] }}
    >
      <span
        className="text-sm uppercase font-bold"
        style={{ color: Colors[goal.category] }}
      >
        <select
          onChange={(event) => {
            setCategory(event, index);
          }}
          className="appearance-none font-bold tracking-wider uppercase bg-transparent border-transparent focus:border-transparent focus:outline-none border-none focus:ring-0"
          value={goal.category}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </span>
      <span className="">
        <ThemeProvider theme={goalTheme}>
          <ThemedTextField
            key={index}
            defaultValue={goal.text}
            sx={{ width: "88%" }}
            onChange={(event) => handleGoalChange(event, index)}
            multiline
          />
        </ThemeProvider>

        {/* <ControlledCheckbox
          checked={goal.isDone ?? false}
          size="medium"
          onClick={() => markGoal(index)}
        /> */}
        <span className="text-gray-300">
          <DeleteOutlineIcon onClick={() => removeGoal(index)} />
        </span>
      </span>

      {/* <span className="text-gray-400 mb-2">Steps to achieve this goal:</span> */}
      {goal.tasks.map((task, childIndex) => {
        return (
          <EditableTask
            key={childIndex}
            task={task}
            index={childIndex}
            parentIndex={index}
            markTask={markTask}
            removeTask={removeTask}
            handleTaskChange={handleTaskChange}
          />
        );
      })}
      <Button
        sx={{ color: "#555" }}
        onClick={() => addTask("Task name", index)}
      >
        Add Task +
      </Button>
    </div>
  );
};

const EditableTask = ({
  task,
  index,
  parentIndex,
  // Task functions
  markTask,
  removeTask,
  handleTaskChange,
}) => {
  return (
    <div>
      <ControlledCheckbox
        checked={task.isDone ?? false}
        size="medium"
        onClick={() => markTask(index, parentIndex)}
      />
      <ThemeProvider theme={taskTheme}>
        <ThemedTextField
          key={index}
          defaultValue={task.text}
          sx={{ width: "75%" }}
          onChange={(event) => handleTaskChange(event, index, parentIndex)}
          multiline
        />
      </ThemeProvider>
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

  const addGoal = (goal) => {
    const newGoals = [...goals, goal];
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
    console.log(newGoals);
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

  return (
    <div>
      {goals.map((goal, index) => {
        return (
          <EditableGoal
            key={index}
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
        );
      })}
      <Button sx={{ color: "#555" }} onClick={() => addGoal(defaultGoal)}>
        Add Goal +
      </Button>
    </div>
  );
}
