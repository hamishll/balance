import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditableTasks from "./EditableTasks";
import Category from "./Category";

const EditableGoal = ({
  todo,
  index,
  markTodo,
  removeTodo,
  handleChange,
  checked,
}) => {
  return (
    <div className="rounded-xl flex flex-col border-4 mb-4 border-indigo-600 p-4">
      <span className="text-sm uppercase font-bold text-indigo-600">
        <Category
          category={"Health & Fitness"}
          options={["Health & Fitness", "Love", "Friends"]}
        />
      </span>
      <span className="text-2xl font-bold">
        <TextField
          key={index}
          defaultValue={todo.text}
          variant="standard"
          sx={{ width: "75%" }}
          onChange={(event) => handleChange(event, index)}
        />

        <ControlledCheckbox
          checked={checked}
          size="medium"
          onClick={() => markTodo(index)}
        />
      </span>
      <span className="text-gray-300">
        <DeleteOutlineIcon onClick={() => removeTodo(index)} />
      </span>
      <span className="text-gray-400 mb-2">Steps to achieve this goal:</span>
      <EditableTasks parentIndex={index} />
    </div>
  );
};

export default function EditableGoals(props) {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("goals")) ?? [
      {
        text: "Write something...",
        isDone: false,
      },
    ]
  );

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem("goals", JSON.stringify(newTodos));
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = newTodos[index].isDone ? false : true;
    setTodos(newTodos);
    localStorage.setItem("goals", JSON.stringify(newTodos));
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("goals", JSON.stringify(newTodos));
    localStorage.removeItem("goals_" + index);
  };

  const handleChange = (event, index) => {
    console.log("uh");
    todos[index].text = event.target.value;
    localStorage.setItem("goals", JSON.stringify(todos));
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <EditableGoal
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
            handleChange={handleChange}
            checked={todos[index].isDone ?? false}
          />
        );
      })}
      <Button onClick={() => addTodo("Goal Title")}>Add Goal +</Button>
    </div>
  );
}
