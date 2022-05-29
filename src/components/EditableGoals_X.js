import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ControlledCheckbox from "./ControlledCheckbox";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{" "}
        <Button variant="outline-danger">✕</Button>
        <ControlledCheckbox onClick={() => markTodo(index)} />
        <TextField defaultValue={todo} variant="standard" />
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <ControlledCheckbox />
      <TextField defaultValue={"x"} variant="standard" />
    </div>
    // <Form onSubmit={handleSubmit}>
    //   <FormGroup>
    //     <Form.Label>
    //       <b>Add Todo</b>
    //     </Form.Label>
    //     <Form.Control
    //       type="text"
    //       className="input"
    //       value={value}
    //       onChange={(e) => setValue(e.target.value)}
    //       placeholder="Add new todo"
    //     />
    //   </FormGroup>
    //   <Button variant="primary mb-3" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}

export default function EditableGoals(props) {
  //const [alignment, setAlignment] = React.useState(props.initValue ?? "");

  // Replace the default with localStorage.getItem(props.k) later
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem("replacewithprops", newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
    console.log(newTodos);
    localStorage.setItem("replacewithprops", newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("replacewithprops", newTodos);
  };

  // useEffect(() => {
  //   setAlignment("" + alignment);
  // }, []);

  // const handleChange = (event) => {
  //   setAlignment(event.target.value);
  //   localStorage.setItem(props.k, event.target.value);
  // };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        );
      })}
      // Add an element here that creates a new todo
    </div>
  );
}
