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

export default function EditableTasks({ parentIndex }) {
  // Should this state just be passed down instead?
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("goals")) ?? [
      {
        text: "Write something...",
        isDone: false,
        tasks: [
          {
            text: "Add a first task...",
            isDone: false,
          },
          {
            text: "Add a second task...",
            isDone: false,
          },
        ],
      },
    ]
  );

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos[parentIndex] = [...newTodos[parentIndex], { text }];
    setTodos(newTodos);
    localStorage.setItem("goals", JSON.stringify(newTodos));
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[parentIndex][index].isDone = !newTodos[parentIndex][index].isDone;
    setTodos(newTodos);
    localStorage.setItem("goals", JSON.stringify(newTodos));
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[parentIndex].splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("goals", JSON.stringify(newTodos));
  };

  const handleChange = (event, index) => {
    todos[parentIndex][index].text = event.target.value;
    localStorage.setItem("goals", JSON.stringify(todos));
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <EditableTask
            parentIndex={parentIndex}
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
      <Button onClick={() => addTodo("Write something...")}>Add Task +</Button>
    </div>
  );
}
