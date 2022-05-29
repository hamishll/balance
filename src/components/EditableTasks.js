import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const EditableTask = ({
  todo,
  index,
  markTodo,
  removeTodo,
  handleChange,
  checked,
}) => {
  return (
    <div>
      <ControlledCheckbox
        checked={checked}
        size="medium"
        onClick={() => markTodo(index)}
      />
      <TextField
        key={index}
        defaultValue={todo.text}
        variant="standard"
        sx={{ width: "75%" }}
        onChange={(event) => handleChange(event, index)}
      />
      <span className="text-gray-300">
        <DeleteOutlineIcon onClick={() => removeTodo(index)} />
      </span>
    </div>
  );
};

export default function EditableTasks({ goalIndex }) {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("goal_" + goalIndex)) ?? [
      {
        text: "Write something...",
        isDone: false,
      },
    ]
  );

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem("goal_" + goalIndex, JSON.stringify(newTodos));
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = newTodos[index].isDone ? false : true;
    setTodos(newTodos);
    localStorage.setItem("goal_" + goalIndex, JSON.stringify(newTodos));
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("goal_" + goalIndex, JSON.stringify(newTodos));
  };

  const handleChange = (event, index) => {
    todos[index].text = event.target.value;
    localStorage.setItem("goal_" + goalIndex, JSON.stringify(todos));
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <EditableTask
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
      <Button onClick={() => addTodo("Write something...")}>Add +</Button>
    </div>
  );
}
