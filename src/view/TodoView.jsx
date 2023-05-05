import React, { useState } from "react";
import TodoForm from "../components/Form/TodoForm";
import TodoTask from "../components/Task/TodoTask";
import styles from "./todo.module.css"


const generateId = (complex = 10) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  for (let i = 0; i < complex; i++) {
    const getRandomChar = chars[Math.floor(Math.random() * chars.length)];
    id += getRandomChar;
  }
  return id;
};

/* 
      task = {
        id: string; --------------> unico
        title: string;
        completed: boolean;
      }
*/

const TodoView = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "" });

  // TAREAS
  const createTask = (title) => {
    return {
      id: generateId(),
      title,
      completed: false,
    };
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    const newState = tasks.filter((task) => task.id !== id);
    setTasks(newState);
  };

  const toggleTask = (id) => {
    const draft = structuredClone(tasks);
    const task = draft.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(draft);
  };

  // FORMULARIO

  const resetForm = () => {
    setForm({ title: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = createTask(form.title);
    addTask(newTask);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerTodo}>
        <div>
          <h1>To do List</h1>
        </div>

        <div className={styles.tasks}>
          {tasks.map((task) => (
            <TodoTask
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleTask={toggleTask}
              
            />
          ))}
        </div>

        <TodoForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          className={styles.form}
        />
      </div>
    </div>
  );
};

export default TodoView;
