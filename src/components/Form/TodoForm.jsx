import React from "react";
import styleForm from "./todoForm.module.css";

const TodoForm = ({ form, handleSubmit, handleChange }) => {
  return (
    <form  onSubmit={handleSubmit}>
      <input
        className={styleForm.inputText}
        type="text"
        name="title"
        onChange={handleChange}
        value={form.title}
        required
        placeholder="Título de la tarea"
      />
      <button className={styleForm.addTaskButton}>Add task</button>
    </form>
  );
};

export default TodoForm;
