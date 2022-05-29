import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const EditableGoal = ({ todo, index, markTodo, removeTodo, handleChange }) => {
  return (
    <div>
      <ControlledCheckbox size="medium" onClick={() => markTodo(index)} />
      <TextField
        defaultValue={todo.text}
        variant="standard"
        sx={{ width: "75%" }}
        onChange={handleChange}
      />
      <span className="text-gray-300">
        <DeleteOutlineIcon onClick={() => removeTodo(index)} />
      </span>
    </div>
  );
};

export default function EditableGoals(props) {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("goals")) ?? [
      {
        text: "Write something",
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
    // console.table(newTodos);
    newTodos.splice(index, 1);
    // console.table(newTodos);
    setTodos(newTodos);
    localStorage.setItem("goals", JSON.stringify(newTodos));
  };

  // const [alignment, setAlignment] = React.useState(props.initValue ?? "");

  // useEffect(() => {
  //   setAlignment("" + alignment);
  // }, []);

  const handleChange = (event) => {
    console.log(event);
    // NOTE TO SELF => work out how to get
    // the index of an event for the line below
    todos[1].text = event.target.value;
    localStorage.setItem("goals", JSON.stringify(todos));
  };

  const [checked, setChecked] = React.useState(
    localStorage.getItem(props.id) === "1" ? true : false
  );

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
      <Button onClick={() => addTodo("Write something...")}>Add +</Button>
    </div>
  );
}
