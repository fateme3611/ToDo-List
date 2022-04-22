import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import './App.css'
const todoData = [
  {
    id: 1,
    task: 'fix',
    completed: false,
  },
  {
    id: 2,
    task: 'unfix',
    completed: false,
  },
];


export default function App() {
  const [todos, setTodos] = useState(todoData);
  function changeTodo(newTodo) {
    let newTodos = [];
    for (let td of todos) {
      if (td.id == newTodo.id) {
        newTodos.push({ ...newTodo });
      } else {
        newTodos.push({ ...td });
      }
    }
    setTodos(newTodos);
  }
  function deleteTodo(id) {
    let newTodos = todos.filter((td) => td.id !== id);
    setTodos(newTodos);
  }
  function addNewTodo() {
    let newTodo = {
      id: Math.random(),
      task: '',
      completed: false,
    };
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }
  return (
    <div>
      <ToDoList
        onTodoChanged={changeTodo}
        todos={todos}
        onTodoDelete={deleteTodo}
        addNewTodo={addNewTodo}
      />
    </div>
  );
}