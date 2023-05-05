import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styleCompletedTasks from "./completedTasks.module.css"

const CompletedTasks = () => {
  const { completedTasks } = useContext(TodoContext);

  return <h5 className={styleCompletedTasks.texto}>Tareas completadas: {completedTasks}</h5>;
};

export default CompletedTasks;
