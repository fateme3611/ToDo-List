import React, { useState, useEffect } from "react";

export default function ToDo({ todo, onTodoChanged, onTodoDelete }) {
  const [currentTodo, setCurrentTodo] = useState(todo);
  useEffect(() => {
    onTodoChanged(currentTodo);
  }, [currentTodo]);
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={(e) => {
          setCurrentTodo({ ...currentTodo, completed: e.target.checked });
        }}
        checked={currentTodo.completed}
      />
      <input
        type="text"
        onChange={(e) => {
          setCurrentTodo({ ...currentTodo, task: e.target.value });
        }}
        value={currentTodo.task}
      />
      <input
        type="button"
        onClick={() => onTodoDelete(currentTodo.id)}
        value="x"
      />
    </div>
  );
}
