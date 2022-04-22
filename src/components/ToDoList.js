import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({
  todos,
  onTodoChanged,
  onTodoDelete,
  addNewTodo,
}) {
  return (
    <div className="todo-list">
      <h3>ToDo List</h3>
      <button onClick={addNewTodo}>New ToDo</button>
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            onTodoChanged={onTodoChanged}
            onTodoDelete={onTodoDelete}
            todo={todo}
          />
        );
      })}
    </div>
  );
}
