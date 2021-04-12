import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./addTodoForm.css";

function AddTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const addTodo = { id: uuidv4(), task: userInput.task, completed: false };
    createTodo(addTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="addTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">Add todo task</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="Add Todo Task"
      />
      <button disabled={!userInput.task}>Add Task</button>
    </form>
  );
}

export default AddTodoForm;
